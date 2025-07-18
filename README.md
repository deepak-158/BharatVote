# BharatVote - Digital Electoral Platform (Frontend)

A modern, responsive frontend for India's secure digital voting platform. Built with React, Next.js, TypeScript, and Tailwind CSS.

🔗 **Live Demo**: [https://bharat-vote.vercel.app/](https://bharat-vote.vercel.app/)  
📱 **Repository**: [https://github.com/deepak-158/BharatVote](https://github.com/deepak-158/BharatVote)

## ⚠️ Project Status
**Frontend Complete** - This repository contains the complete frontend implementation. Backend API integration is required for full functionality.

## 🚀 Quick Start

### Deploy to Vercel
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/deepak-158/BharatVote)

### Local Development
```bash
npm install
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🛠 Tech Stack
- **Framework**: Next.js 14 (React 18)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React, Heroicons
- **Forms**: React Hook Form + Zod validation
- **State Management**: React Context API

## 🎨 Features Implemented
- ✅ Responsive design for all devices
- ✅ Multi-language support (ready for backend integration)
- ✅ Interactive animations and transitions
- ✅ Complete UI for voting, registration, and admin panels
- ✅ Security features (production environment)
- ✅ Progressive Web App (PWA) capabilities

## 🔌 Backend Integration Required

This frontend is ready for backend integration. The following API endpoints need to be implemented:

### Authentication APIs
```javascript
POST /api/auth/register        // User registration
POST /api/auth/login          // User login
POST /api/auth/logout         // User logout
POST /api/auth/verify-otp     // OTP verification
```

### Voting APIs
```javascript
GET  /api/elections           // Get active elections
POST /api/vote                // Cast vote
GET  /api/vote/verify         // Verify vote receipt
```

### Admin APIs
```javascript
GET  /api/admin/dashboard     // Admin dashboard data
POST /api/admin/elections     // Create election
GET  /api/admin/candidates    // Manage candidates
GET  /api/admin/voters        // Voter management
```

### Data APIs
```javascript
GET  /api/news                // Verified news articles
GET  /api/results             // Election results
GET  /api/candidates          // Candidate profiles
GET  /api/elections/history   // Historical election data
```

## 📂 Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── admin/             # Admin panel pages
│   ├── auth/              # Authentication pages
│   └── ...               # Public pages
├── components/            # Reusable components
│   ├── common/           # Common components
│   ├── layout/           # Layout components
│   └── sections/         # Page sections
├── contexts/             # React contexts
├── styles/              # Global styles
└── utils/               # Utility functions
```

## 🛠 Development

### Available Scripts
```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run type-check   # TypeScript type checking
```

### Environment Variables
Create a `.env.local` file:
```env
NEXT_PUBLIC_API_URL=your_backend_api_url
NEXT_PUBLIC_APP_URL=https://bharat-vote.vercel.app
```

## 🚀 Deployment

The application is deployed at: [https://bharat-vote.vercel.app/](https://bharat-vote.vercel.app/)

### Deploy Your Own
1. Fork this repository
2. Connect to Vercel
3. Deploy automatically

## � License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📞 Support

- **Issues**: [GitHub Issues](https://github.com/deepak-158/BharatVote/issues)
- **Documentation**: [See DEPLOYMENT.md](./DEPLOYMENT.md)

---

**Frontend Status**: ✅ Complete  
**Backend Status**: ⏳ Integration Required
