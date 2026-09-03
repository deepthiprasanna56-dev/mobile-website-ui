# AURA3D — Mobile-First Website UI

A modern, clean, fully responsive mobile-first website UI built with **React 19**, **Vite**, **Tailwind CSS v4**, **Framer Motion**, and **React Icons**.

---

## 🌟 Key Highlights & Features

- **📱 100% Mobile-First Architecture**: Carefully optimized for screen viewports from compact smartphones (`320px`) up to ultra-wide desktop monitors (`4K`).
- **🌀 Skiper32 3D Scroll Engine**: Hardware-accelerated 3D image gallery inspired by `@skiper-ui/skiper32`. Images translate, rotate ($rotateX$, $rotateY$, $translateZ$), and scale based on scroll progress with custom timing.
- **✨ Glassmorphism Design System**: Modern dark-theme palette, ambient radial glows, backdrop blur filters, and micro-interactions.
- **🔒 Validated Contact Form**: Comprehensive client-side form validation with real-time error messages (email regex, required fields, name length check, submit confirmation).
- **📅 Interactive Booking Drawer**: Multi-step interactive scheduling modal for booking sessions and packages.
- **⚡ Production Optimized**: Zero console errors, fully linted with ESLint, and supercharged by Vite.

---

## 📐 Included Sections

1. **Header / Navbar**: Glassmorphic sticky header, active navigation anchor links, responsive mobile full-screen drawer menu with Framer Motion slide physics.
2. **Hero Section**: High-impact typography, animated status badge pills, CTA buttons, quick feature indicators.
3. **Skiper32 3D Showcase**: Scroll-triggered 3D image rotation gallery with unique timing and modal inspector.
4. **Features Section**: Reusable `FeatureCard` components with hover elevation, icon badges, and tap feedback.
5. **Products & Services Section**: Filterable service category tabs, pricing tags, duration badges, and interactive detail modals (`ServiceModal`).
6. **About Section**: Brand narrative, studio values list, and animated impact counters (99.8% performance, 320px+ support, 60 FPS 3D engine).
7. **Testimonials Section**: Review cards featuring 5-star ratings, user avatars, roles, and quotes.
8. **Contact Section**: Interactive form with state validation, real-time error hints, contact quick-access cards (Email, Phone, Hours, Location).
9. **Footer**: Brand mark, quick links, social media links, newsletter subscription with instant feedback, and smooth back-to-top scroll.

---

## 🛠️ Technology Stack

- **Framework**: React 19 + JavaScript (ES6+)
- **Build Tool**: Vite 8
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion
- **Icons**: React Icons (Feather `fi`)

---

## 🚀 Getting Started Locally

```bash
# 1. Clone the repository
git clone https://github.com/your-username/mobile-website-ui.git
cd mobile-website-ui

# 2. Install dependencies
npm install

# 3. Start development server
npm run dev

# 4. Build for production
npm run build

# 5. Run ESLint check
npm run lint
```

---

## 📦 GitHub Repository Setup

To push this project to GitHub:

```bash
git init
git add .
git commit -m "feat: complete mobile-first website UI with 3D scroll gallery"
git branch -M main
git remote add origin https://github.com/<YOUR_USERNAME>/mobile-website-ui.git
git push -u origin main
```

---

## 🌐 Deployment Instructions

### Deploy to Netlify
1. Connect your GitHub repository to [Netlify](https://app.netlify.com/).
2. Set **Build command**: `npm run build`
3. Set **Publish directory**: `dist`
4. Click **Deploy Site**.

### Deploy to Vercel
1. Import your project into [Vercel](https://vercel.com/new).
2. Framework Preset will automatically detect **Vite**.
3. Click **Deploy**.

---

## 📄 License

MIT © 2026 AURA3D Studio UI
