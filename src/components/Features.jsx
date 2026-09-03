import {
  FiSmartphone,
  FiBox,
  FiZap,
  FiSliders,
  FiShield,
  FiMoon,
} from 'react-icons/fi'
import FeatureCard from './FeatureCard'

const featureItems = [
  {
    icon: FiSmartphone,
    title: 'Mobile-First Architecture',
    description:
      'Engineered specifically for touch interfaces, small viewports down to 320px, and fluid gestures without awkward overflow.',
    badge: '320px Ready',
  },
  {
    icon: FiBox,
    title: '3D Spatial Components',
    description:
      'Hardware-accelerated 3D scroll cards that tilt, rotate, and scale based on viewport scroll progress and user touch.',
    badge: 'Hardware Accelerated',
  },
  {
    icon: FiZap,
    title: 'Instant Fluid State',
    description:
      'Built with React 19 and Vite for instant load times, zero layout shifts, and silk-smooth 60 FPS transitions.',
    badge: '< 50ms Response',
  },
  {
    icon: FiSliders,
    title: 'Tailwind CSS V4 Tokens',
    description:
      'Systematic spacing, typography hierarchy, and glassmorphism themes designed for modern mobile displays.',
    badge: 'Utility First',
  },
  {
    icon: FiShield,
    title: 'Strict Form Validation',
    description:
      'Client-side error checking, email regex checks, required field notices, and interactive toast feedback.',
    badge: 'Zero Errors',
  },
  {
    icon: FiMoon,
    title: 'Adaptive Dark Aesthetic',
    description:
      'High contrast ratios for outdoor sunlight readability paired with comfortable dark tones for night viewing.',
    badge: 'OLED Optimized',
  },
]

export default function Features() {
  return (
    <section id="features" className="py-24 relative overflow-hidden bg-slate-900/60">
      {/* Glow background */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-xs font-mono uppercase tracking-widest text-indigo-400 bg-indigo-500/10 px-3 py-1 rounded-full border border-indigo-500/20">
            Core Capabilities
          </span>
          <h2 className="mt-4 font-heading text-3xl sm:text-5xl font-bold text-white tracking-tight">
            Designed for Speed, Comfort, and{' '}
            <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
              Visual Delight
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300">
            Every component is crafted with reusable patterns, robust responsiveness, and high attention to micro-interactions.
          </p>
        </div>

        {/* Reusable Grid Layout */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {featureItems.map((item, idx) => (
            <FeatureCard
              key={item.title}
              icon={item.icon}
              title={item.title}
              description={item.description}
              badge={item.badge}
              delay={idx * 0.08}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
