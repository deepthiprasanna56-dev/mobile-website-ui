import { motion } from 'framer-motion'
import { FiArrowRight, FiCompass, FiShield, FiZap, FiLayers, FiCheckCircle } from 'react-icons/fi'
import Hero3DDevice from './Hero3DDevice'
import { Link } from 'react-router-dom'

const proofPoints = [
  { icon: FiLayers, value: '3D-first', label: 'spatial components' },
  { icon: FiZap, value: '60 FPS', label: 'hardware GPU motion' },
  { icon: FiShield, value: '320px–4K', label: 'universal responsive range' },
]

export default function Hero({ onOpenBooking }) {
  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-slate-950 pt-28 pb-16 sm:pt-36 sm:pb-24 lg:pt-40 lg:pb-32 section-rule"
    >
      {/* Ambient background grid pattern and radial light orbs */}
      <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(to_right,rgba(249,87,56,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(249,87,56,0.08)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:linear-gradient(to_bottom,black_60%,transparent_95%)]" />
      <div className="absolute -top-40 left-1/2 h-[38rem] w-[38rem] -translate-x-1/2 rounded-full bg-orange-600/20 blur-[130px] pointer-events-none" />
      <div className="absolute top-[42rem] right-[-10rem] h-[32rem] w-[32rem] rounded-full bg-amber-500/15 blur-[120px] pointer-events-none" />

      <div className="site-container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mx-auto inline-flex items-center gap-2.5 rounded-full border border-orange-500/30 bg-orange-500/10 px-4 py-2 text-[11px] sm:text-xs font-extrabold uppercase tracking-[0.18em] text-orange-300 shadow-md"
          >
            <span className="h-2 w-2 rounded-full bg-orange-400 shadow-[0_0_14px_rgba(249,87,56,0.9)]" />
            The Spatial Mobile Interface System
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.08 }}
            className="mt-7 font-heading text-4xl sm:text-6xl lg:text-7xl xl:text-[5.5rem] font-extrabold leading-[1.02] tracking-[-0.03em] text-white max-w-5xl mx-auto"
          >
            Digital spaces made to{' '}
            <span className="rich-heading">move with you.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.16 }}
            className="mx-auto mt-7 max-w-2xl text-base sm:text-lg lg:text-xl leading-relaxed text-slate-300 font-normal"
          >
            AURA3D turns mobile-first interfaces into tactile experiences: responsive by default, spatial when it matters, and polished down to the smallest viewport.
          </motion.p>

          {/* Action CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.24 }}
            className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <button
              onClick={onOpenBooking}
              className="flex w-full items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-orange-500 via-amber-500 to-orange-400 px-8 py-4 text-sm sm:text-base font-extrabold text-slate-950 shadow-xl shadow-orange-500/25 transition-all hover:from-orange-400 hover:to-amber-400 hover:shadow-orange-500/40 active:scale-95 sm:w-auto cursor-pointer"
            >
              <span>Start a Spatial Session</span>
              <FiArrowRight className="h-5 w-5" />
            </button>
            <Link
              to="/experience"
              className="flex w-full items-center justify-center gap-3 rounded-xl border border-slate-700 bg-slate-900/80 px-8 py-4 text-sm sm:text-base font-extrabold text-slate-100 transition-all hover:border-orange-400/50 hover:bg-slate-800 sm:w-auto"
            >
              <FiCompass className="h-5 w-5 text-orange-400" />
              <span>Explore 3D Studio</span>
            </Link>
          </motion.div>
        </div>

        {/* Desktop-Optimized 3D Showcase Container */}
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.32 }}
          className="relative mx-auto mt-14 max-w-6xl sm:mt-20"
        >
          <div className="absolute inset-x-[12%] top-1/2 h-64 -translate-y-1/2 rounded-full bg-orange-600/20 blur-[100px] pointer-events-none" />
          
          <div className="rich-surface relative min-h-[38rem] overflow-hidden rounded-[2.5rem] p-4 sm:min-h-[44rem] sm:p-8 lg:p-10 border border-slate-800 shadow-2xl">
            {/* Window Header Bar */}
            <div className="absolute inset-x-0 top-0 flex items-center justify-between border-b border-orange-500/15 px-6 py-4 text-xs font-mono uppercase tracking-[0.16em] text-slate-400 bg-slate-950/60 backdrop-blur-md z-30">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
                <span className="ml-2 font-bold text-slate-300">AURA3D / Spatial Engine Canvas</span>
              </div>
              <span className="text-emerald-400 font-extrabold flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                System Ready (60 FPS)
              </span>
            </div>

            {/* Canvas Area with Left & Right Desktop Callout Cards */}
            <div className="relative flex min-h-[35rem] items-center justify-center pt-12 sm:min-h-[40rem]">
              {/* Desktop Left Feature Callout Card */}
              <div className="absolute left-4 lg:left-8 top-20 hidden lg:block w-56 xl:w-64 space-y-3.5 text-left z-20">
                <div className="p-4 rounded-2xl bg-slate-900/90 border border-orange-500/30 backdrop-blur-md shadow-xl">
                  <span className="block text-[11px] font-mono uppercase tracking-widest text-orange-400 font-extrabold">
                    Touch Architecture
                  </span>
                  <div className="h-0.5 w-full bg-gradient-to-r from-orange-500 to-transparent my-2" />
                  <p className="text-xs leading-relaxed text-slate-300 font-medium">
                    Fluid gesture mapping, touch-target optimization down to 320px viewports.
                  </p>
                  <div className="mt-3 flex items-center gap-1.5 text-[10px] text-emerald-400 font-mono font-bold">
                    <FiCheckCircle /> Zero Horizontal Overflow
                  </div>
                </div>
              </div>

              {/* Center 3D Smartphone Canvas */}
              <Hero3DDevice />

              {/* Desktop Right Feature Callout Card */}
              <div className="absolute right-4 lg:right-8 bottom-20 hidden lg:block w-56 xl:w-64 space-y-3.5 text-left z-20">
                <div className="p-4 rounded-2xl bg-slate-900/90 border border-amber-500/30 backdrop-blur-md shadow-xl">
                  <span className="block text-[11px] font-mono uppercase tracking-widest text-amber-400 font-extrabold">
                    Hardware GPU Depth
                  </span>
                  <div className="h-0.5 w-full bg-gradient-to-r from-amber-500 to-transparent my-2" />
                  <p className="text-xs leading-relaxed text-slate-300 font-medium">
                    Sub-50ms render response latencies using 3D perspective spring transforms.
                  </p>
                  <div className="mt-3 flex items-center gap-1.5 text-[10px] text-orange-400 font-mono font-bold">
                    <FiZap /> 60 FPS Smooth GPU Layer
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Desktop Metric Proof Points */}
        <div className="mx-auto mt-12 grid max-w-4xl grid-cols-1 divide-y divide-slate-800/80 border-y border-slate-800/80 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
          {proofPoints.map(({ icon: Icon, value, label }) => (
            <div key={value} className="flex items-center justify-center gap-3 px-6 py-6 sm:flex-col sm:gap-1 text-center">
              <Icon className="h-5 w-5 text-orange-400" />
              <span className="font-heading text-xl sm:text-2xl font-extrabold text-white">{value}</span>
              <span className="text-xs text-slate-400 font-medium">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}


