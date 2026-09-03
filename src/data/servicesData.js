export const servicesData = [
  {
    id: 1,
    title: 'Skiper32 Spatial Engine',
    category: '3D Interactive',
    price: '$249',
    duration: '2 Days Setup',
    rating: '5.0',
    popular: true,
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80',
    description:
      'A scroll-driven 3D image grid that translates and rotates imagery in 3D perspective space with custom spring physics and zero scrollbar clutter.',
    longDescription:
      'Skiper32 is our signature spatial UI component engine designed specifically for mobile touch devices. By tracking viewport scroll progress with Framer Motion spring physics, it transforms standard flat images into tactile 3D cards that pitch, roll, and translate along the Z-axis. It includes full hardware acceleration, custom specular shaders, and edge-to-edge mobile container math.',
    features: [
      'Scroll-triggered 3D perspective rotation ($rotateX$, $rotateY$, $translateZ$)',
      'Framer Motion & GSAP dual renderer backend',
      'Touch gesture velocity physics for smooth mobile scrolling',
      'Zero layout shift architecture (100% Mobile-first)',
      'High DPI display optimization',
    ],
    specs: {
      fps: '60 FPS',
      tech: 'React 19 + Framer Motion',
      viewport: '320px to 4K Ultra-Wide',
      accessibility: 'WCAG AAA Compliant',
    },
  },
  {
    id: 2,
    title: 'Mobile Micro-UI Component Kit',
    category: 'Mobile Kits',
    price: '$129',
    duration: 'Instant Access',
    rating: '4.9',
    popular: false,
    image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1200&q=80',
    description:
      'Over 40+ responsive React components crafted specifically for mobile viewports starting from 320px without awkward side gaps.',
    longDescription:
      'The Mobile Micro-UI Component Kit contains over 40 production-ready React components styled with Tailwind CSS v4. Every button, modal, drawer, and input field is engineered with touch target sizing (minimum 44x44px), custom focus outlines, and smooth hidden-scrollbar drawer sheets.',
    features: [
      '40+ Mobile-first React components',
      'Tailwind CSS v4 systematic color tokens',
      'Accessible ARIA keyboard support & focus trap',
      'Figma design system & UI tokens included',
      'Zero side gap layout recalculations',
    ],
    specs: {
      fps: '60 FPS',
      tech: 'React 19 + Tailwind v4',
      viewport: '320px Ready',
      accessibility: 'ARIA Roles Built-in',
    },
  },
  {
    id: 3,
    title: 'Glassmorphism Motion Dashboard',
    category: '3D Interactive',
    price: '$349',
    duration: '3 Days Setup',
    rating: '4.9',
    popular: true,
    image: 'https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?auto=format&fit=crop&w=1200&q=80',
    description:
      'Dark ambient glass design with backdrop blur filters, vibrant glowing status cards, and real-time state management.',
    longDescription:
      'Experience hyper-rich visual analytics with our Glassmorphism Motion Dashboard. Built with multi-layered specular highlights, deep dark slate tones, and neon accent glows, it presents complex mobile web data in a clean, uncluttered visual hierarchy.',
    features: [
      'Ultra-dense touch data visualization',
      'Smooth dark/light glass theme toggling',
      'Real-time contact & form validation state',
      'OLED contrast color palette for solar outdoor readability',
      'Sub-50ms response state latency',
    ],
    specs: {
      fps: '60 FPS',
      tech: 'React 19 + CSS Backdrop Blur',
      viewport: 'Mobile to Desktop',
      accessibility: 'High Contrast Mode',
    },
  },
  {
    id: 4,
    title: 'Full Stack Mobile Web App',
    category: 'Full Stack',
    price: '$899',
    duration: '1 Week Delivery',
    rating: '5.0',
    popular: false,
    image: 'https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?auto=format&fit=crop&w=1200&q=80',
    description:
      'End-to-end responsive web application built with React 19, Vite, state validation, and Netlify/Vercel deployment pipeline.',
    longDescription:
      'Our complete full-stack mobile web solution takes your project from concept to live deployment on Vercel or Netlify. It features strict form validation, interactive modals, separate page routing, and clean, modular component architecture.',
    features: [
      'React 19 + Vite supercharged production build',
      'Contact form validation & notification engine',
      'SEO & OpenGraph social card optimization',
      'Automated GitHub Actions CI/CD pipeline',
      'Separate React Router v7 page navigation',
    ],
    specs: {
      fps: '60 FPS',
      tech: 'React 19 + Vite + Vercel',
      viewport: 'Universal 320px–4K',
      accessibility: 'Full Standard Audit',
    },
  },
  {
    id: 5,
    title: 'Touch Gestures & Haptic Drawer',
    category: 'Mobile Kits',
    price: '$99',
    duration: 'Instant Access',
    rating: '4.8',
    popular: false,
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&q=80',
    description:
      'Swipeable curtain drawer, mobile bottom sheets, and drag-to-dismiss modal interactions with spring physics.',
    longDescription:
      'Bring native iOS and Android gesture feel to your web applications. Includes swipe-to-dismiss, elastic rubber-banding, velocity-driven snap points, and touch curtain overlays.',
    features: [
      'Touch drag & spring velocity physics',
      'Swipe-down to close bottom sheet',
      'iOS & Android native feel',
      'Zero dependency footprint',
      'Hidden scrollbar smooth container',
    ],
    specs: {
      fps: '60 FPS',
      tech: 'Framer Motion Touch Gestures',
      viewport: 'Mobile Only',
      accessibility: 'Keyboard Accessible',
    },
  },
  {
    id: 6,
    title: 'Custom Brand UI & 3D Web Experience',
    category: 'Full Stack',
    price: '$1,299',
    duration: '2 Weeks Custom',
    rating: '5.0',
    popular: true,
    image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1200&q=80',
    description:
      'Bespoke digital product tailored for mobile devices. Includes 3D product showcase, interactive forms, and deployment.',
    longDescription:
      'A complete custom frontend development engagement. We work closely with you to design bespoke 3D assets, custom color themes, edge-to-edge mobile responsive layouts, and seamless router transitions.',
    features: [
      '100% custom 3D web experience',
      'Dedicated UX designer & frontend engineer',
      'Comprehensive performance audit (95+ Lighthouse score)',
      '1 Year maintenance & hosting support',
      'Full GitHub repository & Vercel live link setup',
    ],
    specs: {
      fps: '60 FPS Hardware',
      tech: 'Bespoke React 19 + 3D Engine',
      viewport: 'All Screen Sizes',
      accessibility: 'Full Compliance',
    },
  },
]
