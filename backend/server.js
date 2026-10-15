const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const bodyParser = require('body-parser');
const path = require('path');
const fs = require('fs');
require('dotenv').config({ path: path.join(__dirname, '.env') });
require('dotenv').config(); // Also check root .env if present

const { connectDB, getDbStatus } = require('./config/db');
const contactRoute = require('./routes/contact');

const app = express();

// Connect to MongoDB Database
connectDB();

// Security middleware
app.use(helmet({
  contentSecurityPolicy: false, // Allows custom inline styles and scripts
}));

// CORS - Allow frontend to talk to backend
app.use(cors({
  origin: '*',
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

// Rate limiting - prevent spam
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 200,
  message: { success: false, message: 'Too many requests. Please try again later.' }
});
app.use('/api/', limiter);

// Body parsing
app.use(bodyParser.json({ limit: '10mb' }));
app.use(bodyParser.urlencoded({ extended: true, limit: '10mb' }));

// Determine correct frontend path regardless of where the server is executed
const possibleFrontendPaths = [
  path.join(__dirname, '../frontend'),
  path.join(__dirname, 'frontend'),
  path.join(process.cwd(), 'frontend')
];

let frontendPath = possibleFrontendPaths.find(p => fs.existsSync(p)) || path.join(__dirname, '../frontend');
console.log(`📁 Serving frontend static files from: ${frontendPath}`);
app.use(express.static(frontendPath));

// API Routes
app.use('/api/contact', contactRoute);

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({
    status: 'OK',
    company: 'SVN Solutions',
    database: getDbStatus() ? 'MongoDB Connected' : 'Disconnected (In-Memory/Fallback)',
    port: req.socket.localPort,
    timestamp: new Date().toISOString(),
    version: '1.0.0'
  });
});

// Universal SPA fallback route (works reliably across Express v4 and v5)
app.use((req, res, next) => {
  if (req.method === 'GET' && !req.path.startsWith('/api')) {
    const indexPath = path.join(frontendPath, 'index.html');
    if (fs.existsSync(indexPath)) {
      return res.sendFile(indexPath);
    }
  }
  next();
});

// Global error handler
app.use((err, req, res, next) => {
  console.error('Server Error:', err.stack);
  res.status(500).json({ 
    success: false, 
    message: 'Something went wrong on our server. Please try again.' 
  });
});

// Dynamic Port Allocation:
// If 3000 is busy, automatically try 3001, 3002, etc.!
const INITIAL_PORT = parseInt(process.env.PORT, 10) || 3000;

function startServer(port) {
  const server = app.listen(port, '0.0.0.0', () => {
    console.log('\n╔═════════════════════════════════════════════════════════╗');
    console.log('║               🚀 SVN SOLUTIONS IS LIVE!                 ║');
    console.log(`║  🌐 Website:    http://localhost:${port}                   ║`);
    const dbStatus = getDbStatus() ? 'MongoDB Atlas CONNECTED' : 'Connecting to MongoDB Atlas...';
    console.log(`║  🗄️  Database:   ${dbStatus.padEnd(30)}║`);
    console.log('╚═════════════════════════════════════════════════════════╝\n');
  });

  server.on('error', (err) => {
    if (err.code === 'EADDRINUSE') {
      console.warn(`⚠️  Port ${port} is already in use by another process.`);
      console.log(`🔄  Automatically switching to port ${port + 1}...`);
      startServer(port + 1);
    } else {
      console.error('❌ Server failed to start:', err.message);
    }
  });
}

startServer(INITIAL_PORT);

module.exports = app;
