# MetricFlow

A modern, production-quality SaaS dashboard for startup founders to track metrics, monitor growth, and make data-driven decisions.

![MetricFlow Dashboard](https://img.shields.io/badge/Next.js-15-black?style=flat-square&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.3-blue?style=flat-square&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38bdf8?style=flat-square&logo=tailwind-css)

## Features

### 📊 Comprehensive Dashboard
- Real-time metrics tracking (Users, Revenue, Conversion Rate, Active Sessions)
- Interactive charts with smooth animations
- Activity feed with recent user actions
- Trend indicators for all key metrics

### 📈 Advanced Analytics
- Multi-timeframe analysis (Weekly, Monthly, Yearly)
- Traffic overview with pageviews and sessions
- Bounce rate tracking and trends
- Top pages ranking with performance comparison

### ⚙️ Settings & Customization
- User profile management
- Notification preferences (Push, Email, Weekly Reports)
- Dark mode support with smooth transitions
- Security settings

### 🎨 Design Excellence
- Modern, clean UI with thoughtful spacing
- Professional color palette optimized for readability
- Responsive design for desktop and mobile
- Smooth animations and micro-interactions
- Dark mode with carefully crafted theme

## Tech Stack

- **Framework:** Next.js 15 with App Router
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Charts:** Recharts
- **Icons:** Lucide React

## Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/yourusername/founder-dashboard.git
cd founder-dashboard
```

2. Install dependencies
```bash
npm install
```

3. Run the development server
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Building for Production

```bash
npm run build
npm start
```

## Project Structure

```
├── app/
│   ├── dashboard/          # Main dashboard page
│   ├── analytics/          # Analytics page with filters
│   ├── settings/           # Settings and preferences
│   ├── page.tsx            # Login page
│   ├── layout.tsx          # Root layout
│   └── globals.css         # Global styles
├── components/
│   ├── ui/                 # Reusable UI components
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── Input.tsx
│   │   ├── Avatar.tsx
│   │   └── MetricCard.tsx
│   ├── layout/             # Layout components
│   │   └── Sidebar.tsx
│   └── charts/             # Chart components
│       └── Chart.tsx
├── tailwind.config.ts      # Tailwind configuration
├── tsconfig.json           # TypeScript configuration
└── package.json            # Dependencies
```

## Features Overview

### Authentication
- Clean login interface with validation
- Email and password inputs with error states
- Smooth transitions and loading states

### Dashboard
- 4 key metric cards with trend indicators
- Revenue and user growth chart (area chart)
- Weekly activity breakdown (bar chart)
- Real-time activity feed with icons and timestamps

### Analytics
- Time period filters (Weekly/Monthly/Yearly)
- Traffic overview with dual metrics
- Bounce rate trend analysis
- Top pages ranking with performance metrics

### Settings
- Profile information management
- Avatar customization
- Notification preferences with toggle switches
- Security options

## Deployment

This project is ready to deploy on:

- **Vercel** (Recommended)
- **Netlify**
- **Any Node.js hosting platform**

### Deploy on Vercel

```bash
npm install -g vercel
vercel
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance

- Optimized bundle size
- Code splitting by route
- Lazy loading for charts
- Smooth 60fps animations

## Created by Noro

This project was built with attention to detail and modern best practices.

## License

MIT License - feel free to use this project for learning purposes.

---

Built with ❤️ by Noro
