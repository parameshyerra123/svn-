const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');
require('dotenv').config();

// Input sanitizer helper
function sanitize(str) {
  if (typeof str !== 'string') return '';
  return str.replace(/[<>\"'&]/g, '').trim().substring(0, 1000);
}

// POST /api/contact
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
      message: sanitize(message)
    };

    // Create transporter (use Gmail or any SMTP)
    // Configure in .env file: EMAIL_USER, EMAIL_PASS, CONTACT_EMAIL
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER || 'your-email@gmail.com',
        pass: process.env.EMAIL_PASS || 'your-app-password'
      }
    });

    // Email to SVN Solutions team
    const teamMailOptions = {
      from: `"SVN Solutions Website" <${process.env.EMAIL_USER || 'noreply@svnsolutions.com'}>`,
      to: process.env.CONTACT_EMAIL || 'contact@svnsolutions.com',
      subject: `🚀 New Project Inquiry from ${cleanData.name}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head><meta charset="UTF-8"></head>
        <body style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #0a0a0a; color: #fff; padding: 20px;">
          <div style="background: linear-gradient(135deg, #ff6b00, #ffca00); padding: 2px; border-radius: 12px;">
            <div style="background: #111; border-radius: 10px; padding: 30px;">
              <h1 style="color: #ff6b00; margin: 0 0 20px;">🚀 New Inquiry - SVN Solutions</h1>
              <table style="width: 100%; border-collapse: collapse;">
                <tr><td style="padding: 10px 0; border-bottom: 1px solid #222; color: #aaa; width: 40%;">👤 Name</td><td style="padding: 10px 0; border-bottom: 1px solid #222; font-weight: bold;">${cleanData.name}</td></tr>
                <tr><td style="padding: 10px 0; border-bottom: 1px solid #222; color: #aaa;">📧 Email</td><td style="padding: 10px 0; border-bottom: 1px solid #222;"><a href="mailto:${cleanData.email}" style="color: #ff6b00;">${cleanData.email}</a></td></tr>
                <tr><td style="padding: 10px 0; border-bottom: 1px solid #222; color: #aaa;">📱 Phone</td><td style="padding: 10px 0; border-bottom: 1px solid #222;">${cleanData.phone}</td></tr>
                <tr><td style="padding: 10px 0; border-bottom: 1px solid #222; color: #aaa;">🛠️ Service</td><td style="padding: 10px 0; border-bottom: 1px solid #222; color: #ffca00;">${cleanData.service}</td></tr>
                <tr><td style="padding: 10px 0; border-bottom: 1px solid #222; color: #aaa;">💰 Budget</td><td style="padding: 10px 0; border-bottom: 1px solid #222;">${cleanData.budget}</td></tr>
              </table>
              <div style="margin-top: 20px; padding: 15px; background: #1a1a1a; border-left: 3px solid #ff6b00; border-radius: 4px;">
                <p style="color: #aaa; margin: 0 0 8px;">📝 Message:</p>
                <p style="margin: 0; line-height: 1.6;">${cleanData.message}</p>
              </div>
              <p style="color: #555; font-size: 12px; margin-top: 20px;">Received: ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })} IST</p>
            </div>
          </div>
        </body>
        </html>
      `
    };

    // Auto-reply to the client
    const clientMailOptions = {
      from: `"SVN Solutions" <${process.env.EMAIL_USER || 'noreply@svnsolutions.com'}>`,
      to: cleanData.email,
      subject: '✅ We received your message - SVN Solutions',
      html: `
        <!DOCTYPE html>
        <html>
        <body style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #0a0a0a; color: #fff; padding: 20px;">
          <div style="background: linear-gradient(135deg, #ff6b00, #ffca00); padding: 2px; border-radius: 12px;">
            <div style="background: #111; border-radius: 10px; padding: 30px; text-align: center;">
              <h1 style="color: #ff6b00; font-size: 28px;">SVN Solutions</h1>
              <p style="font-size: 18px; color: #ffca00;">Thank you, ${cleanData.name}! 🎉</p>
              <p style="color: #ccc; line-height: 1.8;">We've received your inquiry and our team will get back to you within <strong style="color: #ff6b00;">24-48 hours</strong>.</p>
              <div style="margin: 25px 0; padding: 20px; background: #1a1a1a; border-radius: 8px;">
                <p style="margin: 0; color: #aaa;">Your Service Request: <strong style="color: #ffca00;">${cleanData.service}</strong></p>
              </div>
              <a href="https://svnsolutions.com" style="display: inline-block; background: linear-gradient(135deg, #ff6b00, #ffca00); color: #000; padding: 12px 30px; border-radius: 25px; text-decoration: none; font-weight: bold; margin-top: 15px;">Visit Our Website</a>
              <p style="color: #555; font-size: 12px; margin-top: 30px;">© 2024 SVN Solutions. All rights reserved.</p>
            </div>
          </div>
        </body>
        </html>
      `
    };

    // Try to send emails (won't fail the request if email not configured)
    try {
      await transporter.sendMail(teamMailOptions);
      await transporter.sendMail(clientMailOptions);
    } catch (emailErr) {
      console.log('Email service not configured yet. Form data captured:', cleanData);
    }

    // Log the inquiry to console (you can add DB here later)
    console.log(`\n[${new Date().toISOString()}] New Inquiry Received:`);
    console.log(`  Name: ${cleanData.name}`);
    console.log(`  Email: ${cleanData.email}`);
    console.log(`  Service: ${cleanData.service}`);
    console.log(`  Message: ${cleanData.message.substring(0, 100)}...`);

    res.status(200).json({
      success: true,
      message: `Thank you ${cleanData.name}! We'll contact you within 24-48 hours.`
    });

  } catch (error) {
    console.error('Contact form error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error. Please try again or email us directly.'
    });
  }
});

// GET /api/contact - Check if endpoint is live
router.get('/', (req, res) => {
  res.json({ 
    status: 'Contact API is live',
    company: 'SVN Solutions'
  });
});

module.exports = router;
