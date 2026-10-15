const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Name is required'],
      trim: true,
      maxlength: [100, 'Name cannot exceed 100 characters']
    },
    email: {
      type: String,
      required: [true, 'Email is required'],
      trim: true,
      lowercase: true,
      match: [/^[^\s@]+@[^\s@]+\.[^\s@]+$/, 'Please enter a valid email address']
    },
    phone: {
      type: String,
      trim: true,
      default: 'Not provided'
    },
    service: {
      type: String,
      trim: true,
      default: 'General Inquiry'
    },
    budget: {
      type: String,
      trim: true,
      default: 'Not specified'
    },
    message: {
      type: String,
      required: [true, 'Message is required'],
      trim: true,
      maxlength: [2000, 'Message cannot exceed 2000 characters']
    },
    status: {
      type: String,
      enum: ['new', 'contacted', 'in_progress', 'completed', 'closed'],
      default: 'new'
    },
    ipAddress: {
      type: String
    }
  },
  {
    timestamps: true // Automatically creates createdAt and updatedAt
  }
);

// Index for quick queries
contactSchema.index({ createdAt: -1 });

module.exports = mongoose.model('Contact', contactSchema);
