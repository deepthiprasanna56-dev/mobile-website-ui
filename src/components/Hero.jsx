import { motion } from 'framer-motion'
import { FiArrowRight, FiCompass, FiShield, FiZap, FiLayers } from 'react-icons/fi'
import Hero3DDevice from './Hero3DDevice'
import { Link } from 'react-router-dom'

export default function Hero({ onOpenBooking }) {
  return (
    <section
      id="hero"
      className="relative min-h-screen pt-28 pb-16 flex items-center justify-center overflow-hidden bg-slate-950"
    >
      {/* Background Gradients & Glows */}
      <div className="absolute inset-0 bg-radial-glow-rich opacity-80 pointer-events-none" />
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[650px] h-[350px] sm:h-[650px] bg-gradient-to-tr from-indigo-600/35 via-purple-600/25 to-pink-500/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-gradient-to-br from-cyan-600/25 via-teal-600/20 to-emerald-500/15 rounded-full blur-3xl pointer-events-none" />

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b20_1px,transparent_1px),linear-gradient(to_bottom,#1e293b20_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center text-center lg:text-left">
          {/* Left Column: Text & CTA */}
          <div className="lg:col-span-7 flex flex-col justify-center items-center lg:items-start">
            {/* Top Tag Pill */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/20 border border-indigo-500/40 text-indigo-300 text-xs sm:text-sm font-bold mb-6 backdrop-blur-md shadow-xl shadow-indigo-500/15"
            >
              <span className="flex h-2.5 w-2.5 rounded-full bg-indigo-400 animate-pulse" />
              <span className="font-mono uppercase tracking-wider text-[11px] sm:text-xs">
                Frontend Development Task &bull; Mobile Website UI
              </span>
              <FiZap className="w-4 h-4 text-amber-400 ml-0.5" />
            </motion.div>

            {/* Hero Title */}
            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-heading text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.08]"
            >
              Crafting Rich Mobile UI in{' '}
              <span className="bg-gradient-to-r from-indigo-400 via-purple-300 via-pink-400 to-amber-300 bg-clip-text text-transparent">
                Three Dimensions
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mt-6 text-base sm:text-xl text-slate-300 font-normal leading-relaxed max-w-xl"
            >
              A modern, clean, and fully responsive mobile-first website built with React 19, Vite & Tailwind CSS. 
              Touch-optimized 3D spatial cards, hidden scrollbars, zero horizontal side gaps, and separate React Router page views.
            </motion.p>

            {/* CTA Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 w-full sm:w-auto"
            >
              <button
                onClick={onOpenBooking}
                className="w-full sm:w-auto px-8 py-4 rounded-xl text-base font-bold text-white bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 hover:from-indigo-500 hover:to-pink-500 shadow-xl shadow-indigo-600/40 hover:shadow-indigo-500/60 hover:scale-[1.02] active:scale-95 transition-all duration-200 flex items-center justify-center gap-3 cursor-pointer"
              >
                <span>Book Interactive Session</span>
                <FiArrowRight className="w-5 h-5" />
              </button>

              <Link
                to="/experience"
                className="w-full sm:w-auto px-8 py-4 rounded-xl text-base font-bold text-slate-200 hover:text-white bg-slate-900/90 hover:bg-slate-800/90 border border-slate-700/80 hover:border-indigo-500/50 backdrop-blur-md active:scale-95 transition-all duration-200 flex items-center justify-center gap-3"
              >
                <FiCompass className="w-5 h-5 text-indigo-400" />
                <span>Open 3D Studio Page</span>
              </Link>
            </motion.div>

            {/* Quick Feature Badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-10 sm:mt-12 grid grid-cols-2 sm:grid-cols-4 gap-3 w-full"
            >
              {[
                { icon: FiLayers, label: '3D Scroll Physics', desc: 'Hardware 60 FPS' },
                { icon: FiZap, label: '320px Ready', desc: 'Zero Side Gaps' },
                { icon: FiShield, label: 'Hidden Scrollbar', desc: 'Smooth Flush' },
                { icon: FiCompass, label: 'Separate Pages', desc: 'React Router v7' },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="glass-card p-3 rounded-2xl flex flex-col items-center lg:items-start text-center lg:text-left border border-slate-800 hover:border-indigo-500/50 transition-all"
                >
                  <div className="w-8 h-8 rounded-lg bg-indigo-500/15 border border-indigo-500/30 flex items-center justify-center mb-2">
                    <item.icon className="w-4 h-4 text-indigo-400" />
                  </div>
                  <h3 className="text-xs font-bold text-white">{item.label}</h3>
                  <p className="text-[10px] text-slate-400 mt-0.5">{item.desc}</p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right Column: Dedicated 3D Device Animation Canvas */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 flex items-center justify-center relative"
          >
            <Hero3DDevice />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
