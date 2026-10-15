const mongoose = require('mongoose');

let isConnected = false;

const connectDB = async () => {
  const uri = process.env.MONGODB_URI;

  if (!uri || uri.includes('YOUR_CLUSTER') || uri.includes('<password>')) {
    console.log('ℹ️  MongoDB URI not configured yet. Set MONGODB_URI in .env to persist inquiries to the database.');
    return;
  }

  try {
    const conn = await mongoose.connect(uri, {
      serverSelectionTimeoutMS: 5000, // Timeout after 5s instead of hanging
    });
    isConnected = true;
    console.log(`✅ MongoDB Connected: ${conn.connection.host}`);
  } catch (err) {
    isConnected = false;
    console.warn(`⚠️  MongoDB Connection Warning: ${err.message}`);
    console.warn('👉 Tip: Ensure you added "0.0.0.0/0" (Allow Access from Anywhere) in MongoDB Atlas Network Access.');
    console.log('ℹ️  Server continues running smoothly without database.');
  }
};

const getDbStatus = () => {
  return isConnected && mongoose.connection.readyState === 1;
};

module.exports = { connectDB, getDbStatus };
