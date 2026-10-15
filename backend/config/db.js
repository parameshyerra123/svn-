const mongoose = require('mongoose');

let isConnected = false;

const connectDB = async () => {
  const uri = process.env.MONGODB_URI;

  if (!uri || uri.includes('YOUR_CLUSTER') || uri.includes('<password>')) {
    console.log('ℹ️  MongoDB URI not configured. Set MONGODB_URI in .env to persist inquiries.');
    return false;
  }

  try {
    const conn = await mongoose.connect(uri, {
      serverSelectionTimeoutMS: 8000,
    });
    isConnected = true;
    console.log('\n╔═════════════════════════════════════════════════════════╗');
    console.log('║       ✅ MONGODB ATLAS CONNECTED SUCCESSFULLY!          ║');
    console.log(`║  Cluster:  ${conn.connection.host.padEnd(43)}║`);
    console.log(`║  Database: ${(conn.connection.name || 'svn_solutions').padEnd(43)}║`);
    console.log('║  Inquiries will now be stored in MongoDB Atlas!         ║');
    console.log('╚═════════════════════════════════════════════════════════╝\n');
    return true;
  } catch (err) {
    isConnected = false;
    console.warn(`\n⚠️  MongoDB Connection Warning: ${err.message}`);
    console.warn('👉 Tip: Ensure you added "0.0.0.0/0" (Allow Access from Anywhere) in MongoDB Atlas Network Access.');
    console.log('ℹ️  Server continues running smoothly.\n');
    return false;
  }
};

const getDbStatus = () => {
  return isConnected && mongoose.connection.readyState === 1;
};

module.exports = { connectDB, getDbStatus };
