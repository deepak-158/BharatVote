# 🚀 BharatVote Frontend Deployment Guide

Simple deployment guide for the BharatVote frontend application.

## ⚠️ Important Note
**This is a frontend-only deployment.** The application UI is complete, but backend integration is required for full functionality.

## 🌐 Live Application
**Production URL**: [https://bharat-vote.vercel.app/](https://bharat-vote.vercel.app/)

## 📋 Prerequisites
- GitHub account
- Vercel account (free tier available)
- Node.js 18+ for local development

## 🚀 Quick Deploy

### Option 1: One-Click Deploy
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/deepak-158/BharatVote)

### Option 2: Manual Deploy
1. Go to [vercel.com](https://vercel.com)
2. Click "New Project"
3. Import your GitHub repository
4. Vercel auto-detects Next.js settings
5. Click "Deploy"

## 🔧 Local Development

```bash
# Clone repository
git clone https://github.com/deepak-158/BharatVote.git
cd BharatVote

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## ⚙️ Environment Variables

Create `.env.local` for local development:
```env
NEXT_PUBLIC_API_URL=your_backend_api_url
NEXT_PUBLIC_APP_URL=https://bharat-vote.vercel.app
```

For Vercel deployment, add these in Project Settings → Environment Variables.

## 🏗️ Build Configuration

The project uses these build settings:
```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "out", 
  "framework": "nextjs"
}
```

## 🔌 Backend Integration Requirements

To make this application fully functional, you need to implement these backend APIs:

### Authentication Endpoints
```
POST /api/auth/register
POST /api/auth/login  
POST /api/auth/logout
POST /api/auth/verify-otp
```

### Core Voting APIs
```
GET  /api/elections
POST /api/vote
GET  /api/vote/verify
GET  /api/results
```

### Admin Panel APIs  
```
GET  /api/admin/dashboard
POST /api/admin/elections
GET  /api/admin/candidates
GET  /api/admin/voters
```

### Content APIs
```
GET  /api/news
GET  /api/candidates
GET  /api/elections/history
```

## 🔒 Security Features

The application includes production-ready security features:
- Content Security Policy (CSP) headers
- Anti-inspection protection  
- DevTools detection and blocking
- Copy protection
- Screenshot prevention

**Note**: Security features are only active in production builds.

## 🛠️ Development vs Production

### Development Mode
- All security features disabled for debugging
- Full access to developer tools
- Hot reloading enabled
- Development notice displayed

### Production Mode  
- Complete security suite activated
- Developer tools blocked
- Optimized performance
- Static site generation

## � Performance Optimizations

- **Global CDN**: Worldwide content distribution
- **Edge Caching**: Ultra-fast page loads  
- **Image Optimization**: Automatic image optimization
- **Code Splitting**: Optimized bundle loading
- **Compression**: Brotli/Gzip compression

## 🚨 Troubleshooting

### Build Issues
```bash
# Clear cache and rebuild
npm run build

# Check TypeScript errors  
npm run type-check

# Run linting
npm run lint
```

### Common Problems
- **Security features not working**: Only active in production
- **Environment variables**: Check they're set in Vercel dashboard
- **Build failures**: Ensure Node.js 18+ is configured

## � Support

- **Repository**: [GitHub Issues](https://github.com/deepak-158/BharatVote/issues)
- **Vercel Docs**: [vercel.com/docs](https://vercel.com/docs)

---

**🎯 Status**: Frontend deployment complete, backend integration pending
