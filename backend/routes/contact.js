const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');
const Contact = require('../models/Contact');
const { getDbStatus } = require('../config/db');
require('dotenv').config();

// Input sanitizer helper
function sanitize(str) {
  if (typeof str !== 'string') return '';
  return str.replace(/[<>\"'&]/g, '').trim().substring(0, 2000);
}

// POST /api/contact - Submit inquiry
router.post('/', async (req, res) => {
  try {
    const { name, email, phone, service, budget, message } = req.body;

    // Validation
    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        message: 'Name, email, and message are required.'
      });
    }

    // Email regex validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        message: 'Please enter a valid email address.'
      });
    }

    const cleanData = {
      name: sanitize(name),
      email: sanitize(email),
      phone: sanitize(phone || 'Not provided'),
      service: sanitize(service || 'General Inquiry'),
      budget: sanitize(budget || 'Not specified'),
      message: sanitize(message),
      ipAddress: req.ip || req.headers['x-forwarded-for'] || req.socket.remoteAddress
    };

    // 1. Save to MongoDB Database (if DB is connected)
    let savedInquiry = null;
    if (getDbStatus()) {
      try {
        savedInquiry = await Contact.create(cleanData);
        console.log(`📦 Saved inquiry to MongoDB (ID: ${savedInquiry._id})`);
      } catch (dbErr) {
        console.warn('⚠️  Could not save to MongoDB:', dbErr.message);
      }
    } else {
      console.log('ℹ️  MongoDB not connected, logging inquiry to console:');
    }

    // Always log inquiry to console
    console.log(`\n📬 [${new Date().toLocaleString()}] New Inquiry Received:`);
    console.log(`  👤 Name:    ${cleanData.name}`);
    console.log(`  📧 Email:   ${cleanData.email}`);
    console.log(`  📱 Phone:   ${cleanData.phone}`);
    console.log(`  🛠️ Service: ${cleanData.service}`);
    console.log(`  💰 Budget:  ${cleanData.budget}`);
    console.log(`  📝 Message: ${cleanData.message}\n`);

    // 2. Send email notification (if SMTP is configured)
    const emailUser = process.env.EMAIL_USER;
    const emailPass = process.env.EMAIL_PASS;
    const contactEmail = process.env.CONTACT_EMAIL || emailUser;

    if (emailUser && emailPass && !emailPass.includes('your-app-password')) {
      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: emailUser,
          pass: emailPass
        }
      });

      const teamMailOptions = {
        from: `"SVN Solutions" <${emailUser}>`,
        to: contactEmail,
        subject: `🚀 New Project Inquiry from ${cleanData.name} - ${cleanData.service}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #0a0a0a; color: #fff; padding: 20px; border-radius: 12px; border: 1px solid #ff6b00;">
            <h1 style="color: #ff6b00; margin: 0 0 16px;">🚀 New SVN Solutions Inquiry</h1>
            <table style="width: 100%; border-collapse: collapse; color: #eee;">
              <tr><td style="padding: 8px 0; color: #888;">Name:</td><td><strong>${cleanData.name}</strong></td></tr>
              <tr><td style="padding: 8px 0; color: #888;">Email:</td><td><a href="mailto:${cleanData.email}" style="color: #ff6b00;">${cleanData.email}</a></td></tr>
              <tr><td style="padding: 8px 0; color: #888;">Phone:</td><td>${cleanData.phone}</td></tr>
              <tr><td style="padding: 8px 0; color: #888;">Service:</td><td><strong style="color: #ffca00;">${cleanData.service}</strong></td></tr>
              <tr><td style="padding: 8px 0; color: #888;">Budget:</td><td>${cleanData.budget}</td></tr>
            </table>
            <div style="margin-top: 16px; padding: 12px; background: #161616; border-left: 3px solid #ff6b00; border-radius: 4px;">
              <p style="margin: 0 0 6px; color: #888; font-size: 13px;">Message:</p>
              <p style="margin: 0; line-height: 1.6;">${cleanData.message}</p>
            </div>
            <p style="color: #555; font-size: 12px; margin-top: 16px;">Submitted at: ${new Date().toISOString()}</p>
          </div>
        `
      };

      const clientMailOptions = {
        from: `"SVN Solutions" <${emailUser}>`,
        to: cleanData.email,
        subject: 'Thank you for reaching out to SVN Solutions!',
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #0a0a0a; color: #fff; padding: 30px; text-align: center; border-radius: 12px;">
            <h1 style="color: #ff6b00; margin-bottom: 8px;">SVN Solutions</h1>
            <h2 style="color: #ffca00; font-weight: normal; margin-top: 0;">Thank you, ${cleanData.name}! 🎉</h2>
            <p style="color: #ccc; line-height: 1.8;">We have received your project inquiry for <strong>${cleanData.service}</strong>. Our expert team will review it and get back to you within 24 hours.</p>
            <p style="color: #888; font-size: 13px; margin-top: 30px;">© SVN Solutions - Turning Visions into High-Performance Digital Realities</p>
          </div>
        `
      };

      try {
        await transporter.sendMail(teamMailOptions);
        await transporter.sendMail(clientMailOptions);
        console.log('📧 Notification emails sent successfully');
      } catch (mailErr) {
        console.warn('⚠️  Email delivery skipped or failed:', mailErr.message);
      }
    }

    res.status(200).json({
      success: true,
      message: `Thank you ${cleanData.name}! We've received your request and will contact you shortly.`,
      savedToDb: !!savedInquiry
    });

  } catch (error) {
    console.error('Contact route error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error. Please try again or contact us directly at +91 63002 40474.'
    });
  }
});

// GET /api/contact/all - List inquiries (MongoDB)
router.get('/all', async (req, res) => {
  try {
    if (!getDbStatus()) {
      return res.status(503).json({
        success: false,
        message: 'MongoDB is not currently connected. Set MONGODB_URI to view stored inquiries.'
      });
    }

    const inquiries = await Contact.find().sort({ createdAt: -1 }).limit(50);
    res.json({
      success: true,
      count: inquiries.length,
      data: inquiries
    });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

// GET /api/contact - Endpoint status
router.get('/', (req, res) => {
  res.json({
    status: 'Contact API is live',
    database: getDbStatus() ? 'Connected (MongoDB Atlas)' : 'Not connected',
    company: 'SVN Solutions'
  });
});

module.exports = router;
