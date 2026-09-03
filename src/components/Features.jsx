import { useState, useEffect } from 'react'
import { createPortal } from 'react-dom'
import { motion, AnimatePresence } from 'framer-motion'
import {
  FiSmartphone,
  FiBox,
  FiZap,
  FiSliders,
  FiShield,
  FiMoon,
  FiX,
  FiCheckCircle,
} from 'react-icons/fi'
import FeatureCard from './FeatureCard'

const featureItems = [
  {
    icon: FiSmartphone,
    title: 'Mobile-First Architecture',
    description:
      'Engineered specifically for touch interfaces, small viewports down to 320px, and fluid gestures without awkward overflow.',
    badge: '320px Ready',
    details:
      'Our mobile-first layout engine uses fluid viewport mathematics to adjust padding, font sizing, and container widths dynamically. Tested across all budget smartphones up to ultra-wide devices with zero horizontal scrolling.',
  },
  {
    icon: FiBox,
    title: '3D Spatial Components',
    description:
      'Hardware-accelerated 3D scroll cards that tilt, rotate, and scale based on viewport scroll progress and user touch.',
    badge: 'Hardware 60 FPS',
    details:
      'Built with Framer Motion spring physics and CSS 3D perspective transforms (rotateX, rotateY, translateZ). Leverages GPU layer composition to maintain silk-smooth 60 FPS without scroll jank.',
  },
  {
    icon: FiZap,
    title: 'Instant Fluid State',
    description:
      'Built with React 19 and Vite for instant load times, zero layout shifts, and silk-smooth transitions.',
    badge: '< 50ms Response',
    details:
      'Powered by Vite build bundling and React 19 concurrent state batching. Pages render instantly with sub-50ms interaction latencies.',
  },
  {
    icon: FiSliders,
    title: 'Tailwind CSS V4 Tokens',
    description:
      'Systematic spacing, typography hierarchy, and glassmorphism themes designed for modern mobile displays.',
    badge: 'Utility First',
    details:
      'Systematic color variables and custom glassmorphism utilities enable high-contrast dark themes alongside crisp light mode themes.',
  },
  {
    icon: FiShield,
    title: 'Strict Form Validation',
    description:
      'Client-side error checking, email regex checks, required field notices, and interactive toast feedback.',
    badge: 'Zero Errors',
    details:
      'Built-in real-time validation checks for name, email format, phone numbers, and message lengths with immediate inline visual feedback.',
  },
  {
    icon: FiMoon,
    title: 'Adaptive Light & Dark Themes',
    description:
      'Instant toggle between vibrant high-contrast OLED dark themes and clean light modes with comfortable typography.',
    badge: 'Dual Theme',
    details:
      'Supports one-click global light and dark mode switching with root CSS context updates and persistent theme preferences.',
  },
]

export default function Features() {
  const [selectedFeature, setSelectedFeature] = useState(null)

  useEffect(() => {
    if (selectedFeature) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [selectedFeature])

  return (
    <section id="features" className="py-24 relative overflow-hidden bg-slate-900/60">
      {/* Glow background */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-orange-600/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-amber-600/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-xs font-mono uppercase tracking-widest text-orange-400 bg-orange-500/10 px-3.5 py-1 rounded-full border border-orange-500/30 font-bold">
            Core Capabilities & Specifications
          </span>
          <h2 className="mt-4 font-heading text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Designed for Speed, Comfort, and{' '}
            <span className="bg-gradient-to-r from-orange-400 via-amber-300 to-orange-500 bg-clip-text text-transparent">
              Visual Delight
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300">
            Click on any feature card below to open its detailed specification breakdown and technical benchmarks.
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
              onClick={() => setSelectedFeature(item)}
            />
          ))}
        </div>

        {/* Feature Detail Modal Portal */}
        {typeof document !== 'undefined' &&
          createPortal(
            <AnimatePresence>
              {selectedFeature && (
                <div
                  className="fixed inset-0 z-[9999] bg-slate-950/90 backdrop-blur-xl flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
                  onClick={() => setSelectedFeature(null)}
                >
                  <motion.div
                    initial={{ scale: 0.9, opacity: 0, y: 15 }}
                    animate={{ scale: 1, opacity: 1, y: 0 }}
                    exit={{ scale: 0.9, opacity: 0, y: 15 }}
                    transition={{ type: 'spring', damping: 25, stiffness: 250 }}
                    className="bg-slate-900 border border-orange-500/50 rounded-3xl p-6 sm:p-8 max-w-lg w-full overflow-hidden shadow-2xl relative my-auto max-h-[85vh] overflow-y-auto z-10"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <button
                      onClick={() => setSelectedFeature(null)}
                      className="absolute top-5 right-5 p-2 rounded-xl bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors shadow-md z-20 cursor-pointer"
                      aria-label="Close"
                    >
                      <FiX className="w-5 h-5" />
                    </button>

                    <div className="w-14 h-14 rounded-2xl bg-orange-500/20 border border-orange-500/40 flex items-center justify-center mb-5 text-orange-400">
                      <selectedFeature.icon className="w-7 h-7" />
                    </div>

                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-300 text-xs font-mono font-bold mb-2">
                      {selectedFeature.badge}
                    </div>

                    <h3 className="text-2xl font-extrabold text-white font-heading">
                      {selectedFeature.title}
                    </h3>

                    <p className="mt-3 text-sm text-slate-300 leading-relaxed font-normal">
                      {selectedFeature.details}
                    </p>

                    <div className="mt-6 p-4 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-2 text-xs text-slate-300">
                      <div className="flex items-center gap-2">
                        <FiCheckCircle className="text-emerald-400 shrink-0" />
                        <span>Tested for mobile responsiveness down to 320px viewport width</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <FiCheckCircle className="text-orange-400 shrink-0" />
                        <span>Clean modular React 19 component structure</span>
                      </div>
                    </div>

                    <button
                      onClick={() => setSelectedFeature(null)}
                      className="mt-6 w-full py-3.5 bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-400 hover:to-amber-400 text-slate-950 font-extrabold text-sm rounded-xl shadow-lg shadow-orange-500/30 transition-all cursor-pointer"
                    >
                      Close Specification Modal
                    </button>
                  </motion.div>
                </div>
              )}
            </AnimatePresence>,
            document.body
          )}
      </div>
    </section>
  )
}


