# 🇵🇰 Pakistan Independence Day 14 August - Premium Website

A stunning, cinematic, fully responsive **Pakistan Independence Day celebration website** built with **React.js**, **Vite**, **Tailwind CSS**, and **Framer Motion**.

## 🌟 Features

- ✨ **Premium Cinematic Design** - Award-winning landing page aesthetic
- 🎬 **Smooth Animations** - Powered by Framer Motion
- 📱 **Fully Responsive** - Mobile, tablet, desktop optimized
- 🏆 **Performance Optimized** - Fast load times, smooth 60fps animations
- ♿ **Accessibility First** - WCAG compliant, keyboard navigation, reduced motion support
- 🎨 **Modern Color Palette** - Pakistani green (#01411C, #00A651) with elegant gradients
- 🔍 **SEO Friendly** - Meta tags, proper semantic HTML, structured data
- ⚡ **Vite + React** - Lightning-fast development server

## 📋 Sections

1. **Hero Section** - Full-screen cinematic hero with animated particles and crescent
2. **Countdown Timer** - Live countdown to next August 14
3. **History Timeline** - Interactive timeline (1857-1947)
4. **Quaid-e-Azam** - Biography of Pakistan's founder
5. **Pakistan Regions** - 6 provinces showcased with hover animations
6. **Landmarks Gallery** - 7 iconic Pakistani landmarks with lightbox
7. **National Pride** - "Faith, Unity, Discipline" with anthem player
8. **Celebration** - Interactive confetti celebration effect
9. **Photo Gallery** - Pakistan photography showcase
10. **Final CTA** - Powerful call-to-action
11. **Navigation** - Sticky navbar with mobile menu
12. **Footer** - Complete with links and copyright

## 🚀 Quick Start

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

### Development Server
The website runs on `http://localhost:5174/` (or next available port).

## 📁 Project Structure

```
src/
├── components/
│   ├── Navbar.jsx           # Navigation bar
│   ├── Hero.jsx             # Hero section
│   ├── Countdown.jsx        # Countdown timer
│   ├── History.jsx          # Timeline
│   ├── QuaidSection.jsx     # Quaid-e-Azam section
│   ├── PakistanRegions.jsx  # Provinces cards
│   ├── Landmarks.jsx        # Landmarks gallery
│   ├── NationalPride.jsx    # Pride section
│   ├── Celebration.jsx      # Interactive celebration
│   ├── Gallery.jsx          # Photo gallery
│   ├── FinalCTA.jsx         # Final CTA
│   └── Footer.jsx           # Footer
├── App.jsx                  # Main app component
├── App.css                  # App styles
├── main.jsx                 # Entry point
└── index.css               # Global styles with Tailwind

public/
├── index.html              # HTML template
└── ...

vite.config.js              # Vite configuration
tailwind.config.js          # Tailwind configuration
package.json                # Dependencies
```

## 🛠️ Technology Stack

- **React 19.2.8** - UI library
- **Vite 8.2.0** - Build tool and dev server
- **Tailwind CSS 4.3.3** - Utility-first CSS
- **Framer Motion 11.x** - Animation library
- **Lucide React** - Icon library
- **canvas-confetti** - Celebration effects

## 🎨 Design System

### Colors
- **Pakistan Green**: `#01411C` (Primary)
- **Emerald**: `#00A651` (Accent)
- **White**: `#FFFFFF` (Text/Light)
- **Dark**: `#020B06` (Background)

### Typography
- **Font**: System UI (Apple System, Segoe UI, Roboto)
- **Weights**: Regular (400), Semibold (600), Bold (700), Black (900)
- **Sizing**: Responsive with Tailwind scale

### Components
- Glassmorphism cards
- Gradient overlays
- Glowing effects
- Smooth transitions

## 🎬 Animations

All animations are:
- **Performance optimized** - Using CSS transforms and opacity
- **Accessible** - Respecting `prefers-reduced-motion`
- **Smooth** - 60fps on modern devices
- **Professional** - Subtle and elegant

### Animation Types
- Fade-in and slide-up on scroll
- Parallax scrolling effects
- Hover interactions
- Floating particles
- Confetti celebration
- Text reveal animations

## 📱 Responsive Design

Optimized for:
- **Mobile** (320px+) - Full touch optimization
- **Tablet** (768px+) - Enhanced layouts
- **Desktop** (1024px+) - Full features
- **Large Screens** (1440px+) - Premium spacing

## ♿ Accessibility

- WCAG 2.1 Level AA compliant
- Semantic HTML structure
- Proper heading hierarchy
- Keyboard navigation
- Focus indicators
- Color contrast ratios
- Reduced motion support
- Screen reader friendly

## 🔍 SEO

- Optimized page title
- Meta descriptions
- Open Graph tags
- Twitter Card support
- Semantic HTML
- Fast page load times
- Mobile-friendly design

## 📊 Performance

- Lazy loading images
- Code splitting
- Optimized animations
- Efficient re-renders
- Minified assets
- Production build ready

## 🚀 Production Build

```bash
npm run build
```

Creates optimized production files in `/dist/` directory.

## 📝 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## ✨ Customization

### Updating Colors
Edit `tailwind.config.js` to change color scheme:
```js
colors: {
  'pakistan-green': '#01411C',
  'pakistan-emerald': '#00A651',
}
```

### Modifying Content
Update component files in `src/components/` to change text, images, or structure.

### Adding Sections
Create new components and import them in `App.jsx`.

## 🤝 Contributing

This is a portfolio project. For improvements, create a branch and submit changes.

## 📄 License

Open source - feel free to use for your own projects.

## 💚 Made With Love for Pakistan 🇵🇰

**Pakistan Zindabad!**

---

### Developed with ❤️ for Pakistan's Independence Day celebrations

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
