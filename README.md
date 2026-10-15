# 🚀 SVN Solutions — Official Website

**A premium, full-stack company website for SVN Solutions.**

![SVN Solutions](https://img.shields.io/badge/SVN-Solutions-orange?style=for-the-badge)
![Node.js](https://img.shields.io/badge/Node.js-v18+-green?style=for-the-badge&logo=nodedotjs)
![Express](https://img.shields.io/badge/Express-v5-black?style=for-the-badge&logo=express)

---

## 📁 Project Structure

```
svn/
├── frontend/               # All frontend files
│   ├── index.html          # Main landing page
│   ├── css/
│   │   ├── style.css       # Main stylesheet (dark theme, animations)
│   │   └── pages.css       # Additional page styles
│   ├── js/
│   │   └── main.js         # All JavaScript logic
│   ├── images/             # Images & assets
│   └── pages/              # Additional HTML pages
│
├── backend/                # Node.js/Express server
│   ├── server.js           # Main server entry point
│   ├── routes/
│   │   └── contact.js      # Contact form API endpoint
│   ├── models/             # Database models (future)
│   ├── config/             # Configuration files
│   ├── .env                # Environment variables (PRIVATE)
│   ├── .env.example        # Template for .env
│   └── package.json
│
├── package.json            # Root package.json
├── .gitignore
└── README.md
```

---

## 🚀 Running Locally

### Step 1: Install Dependencies
```bash
cd backend
npm install
```

### Step 2: Configure Environment
```bash
# Edit backend/.env with your email credentials
# See backend/.env.example for all available options
```

### Step 3: Start Server
```bash
node backend/server.js
```

### Step 4: Open Browser
Visit: **http://localhost:3000**

---

## 📧 Setting Up Email (Contact Form)

1. Go to your **Google Account → Security → 2-Step Verification → App Passwords**
2. Create a new App Password for "Mail"
3. Copy the 16-character password
4. Edit `backend/.env`:
   ```
   EMAIL_USER=your-gmail@gmail.com
   EMAIL_PASS=your-16-char-app-password
   CONTACT_EMAIL=where-to-receive@gmail.com
   ```

---

## 🌐 Deploying to Live Server

### Option 1: Railway (Easiest — Free tier available)
1. Go to [railway.app](https://railway.app)
2. Sign up with GitHub
3. Click **"New Project" → "Deploy from GitHub repo"**
4. Upload your code to GitHub first, connect it
5. Set environment variables in Railway dashboard
6. Railway auto-detects Node.js and deploys!
7. You get a free `.railway.app` URL

### Option 2: Render (Free Tier)
1. Go to [render.com](https://render.com)
2. Click "New Web Service"
3. Connect GitHub repo
4. Set **Build Command**: `cd backend && npm install`
5. Set **Start Command**: `node backend/server.js`
6. Add environment variables
7. Deploy!

### Option 3: VPS (DigitalOcean / Hostinger)
```bash
# SSH into your server
ssh user@your-server-ip

# Clone your project
git clone <your-repo-url> /var/www/svnsolutions

# Install Node.js if needed
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs

# Install PM2 (keeps server running)
npm install -g pm2

# Install dependencies
cd /var/www/svnsolutions/backend && npm install

# Start with PM2
pm2 start server.js --name svn-solutions

# Auto-restart on reboot
pm2 startup
pm2 save
```

### Option 4: Custom Domain
1. Buy a domain (e.g., `svnsolutions.in` or `svnsolutions.com`) from GoDaddy/Namecheap
2. Point your domain's DNS to your server/hosting IP
3. Set up Nginx reverse proxy to forward port 80/443 → port 3000
4. Install SSL certificate with Let's Encrypt (free): `sudo certbot --nginx`

---

## ✨ Features

| Feature | Status |
|---------|--------|
| 🎨 Premium Dark Theme | ✅ |
| 📱 Fully Responsive | ✅ |
| ⚡ Smooth Animations | ✅ |
| 🖱️ Custom Cursor | ✅ |
| ⌨️ Typed Text Effect | ✅ |
| 📊 Counter Animation | ✅ |
| 🎛️ Portfolio Filter | ✅ |
| 💬 Testimonials Slider | ✅ |
| 📬 Contact Form + API | ✅ |
| 📧 Email Notifications | ✅ |
| 🔒 Security (Helmet, Rate Limit) | ✅ |
| 📈 SEO Optimized | ✅ |
| 🚀 Back to Top Button | ✅ |

---

## 🎨 Design Theme

- **Primary**: Black (`#050505`)
- **Accent**: Neon Orange (`#ff6b00`)
- **Secondary**: Yellow (`#ffca00`)
- **Typography**: Outfit + Space Grotesk (Google Fonts)

---

## 📞 Contact

SVN Solutions  
📧 contact@svnsolutions.com  
📱 +91 98765 43210

---

*© 2024 SVN Solutions. All rights reserved.*
