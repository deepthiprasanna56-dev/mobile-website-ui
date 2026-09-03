import { motion } from 'framer-motion'
import { FiArrowRight, FiCompass, FiShield, FiZap, FiLayers } from 'react-icons/fi'
import Hero3DDevice from './Hero3DDevice'
import { Link } from 'react-router-dom'

const proofPoints = [
  { icon: FiLayers, value: '3D-first', label: 'spatial components' },
  { icon: FiZap, value: '60 FPS', label: 'hardware motion' },
  { icon: FiShield, value: '320px+', label: 'responsive range' },
]

export default function Hero({ onOpenBooking }) {
  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-slate-950 pt-32 pb-16 sm:pt-40 sm:pb-24 section-rule"
    >
      <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(to_right,rgba(249,87,56,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(249,87,56,0.08)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:linear-gradient(to_bottom,black,transparent_82%)]" />
      <div className="absolute -top-40 left-1/2 h-[34rem] w-[34rem] -translate-x-1/2 rounded-full bg-orange-600/20 blur-[120px] pointer-events-none" />
      <div className="absolute top-[42rem] right-[-10rem] h-[28rem] w-[28rem] rounded-full bg-amber-500/15 blur-[110px] pointer-events-none" />

      <div className="site-container relative z-10">
        <div className="mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mx-auto inline-flex items-center gap-2 rounded-full border border-orange-500/30 bg-orange-500/10 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.18em] text-orange-300"
          >
            <span className="h-2 w-2 rounded-full bg-orange-400 shadow-[0_0_14px_rgba(249,87,56,0.9)]" />
            The spatial mobile interface system
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.08 }}
            className="mt-7 font-heading text-5xl font-extrabold leading-[0.98] tracking-[-0.03em] text-white sm:text-7xl lg:text-[6.5rem]"
          >
            Digital spaces made to{' '}
            <span className="rich-heading">move with you.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.16 }}
            className="mx-auto mt-7 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg"
          >
            AURA3D turns mobile-first interfaces into tactile experiences: responsive by default, spatial when it matters, and polished down to the smallest screen.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.24 }}
            className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row"
          >
            <button
              onClick={onOpenBooking}
              className="flex w-full items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 px-7 py-4 text-sm font-extrabold text-slate-950 shadow-xl shadow-orange-500/25 transition-all hover:from-orange-400 hover:to-amber-400 hover:shadow-orange-500/40 active:scale-95 sm:w-auto"
            >
              Start a spatial session
              <FiArrowRight className="h-4 w-4" />
            </button>
            <Link
              to="/experience"
              className="flex w-full items-center justify-center gap-3 rounded-xl border border-slate-700 bg-slate-900/70 px-7 py-4 text-sm font-bold text-slate-100 transition-all hover:border-orange-400/50 hover:bg-slate-800 sm:w-auto"
            >
              <FiCompass className="h-4 w-4 text-orange-400" />
              Explore the 3D studio
            </Link>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.32 }}
          className="relative mx-auto mt-16 max-w-5xl sm:mt-20"
        >
          <div className="absolute inset-x-[12%] top-1/2 h-56 -translate-y-1/2 rounded-full bg-orange-600/20 blur-[90px] pointer-events-none" />
          <div className="rich-surface relative min-h-[38rem] overflow-hidden rounded-[2rem] p-4 sm:min-h-[42rem] sm:p-8">
            <div className="absolute inset-x-0 top-0 flex items-center justify-between border-b border-orange-500/15 px-5 py-4 text-[10px] font-mono uppercase tracking-[0.16em] text-slate-400 sm:px-7">
              <span>AURA / Spatial canvas</span>
              <span className="text-emerald-400 font-bold">System ready</span>
            </div>
            <div className="relative flex min-h-[35rem] items-center justify-center pt-10 sm:min-h-[39rem]">
              <div className="absolute left-2 top-16 hidden w-36 space-y-3 text-left sm:block">
                <span className="block text-[10px] font-mono uppercase tracking-widest text-slate-400 font-bold">Built for touch</span>
                <div className="h-px w-full bg-gradient-to-r from-orange-500/60 to-transparent" />
                <p className="text-xs leading-5 text-slate-300">Fluid gestures, careful spacing, and zero sideways drift.</p>
              </div>
              <Hero3DDevice />
              <div className="absolute right-2 bottom-16 hidden w-36 space-y-3 text-left sm:block">
                <span className="block text-[10px] font-mono uppercase tracking-widest text-slate-400 font-bold">Built for depth</span>
                <div className="h-px w-full bg-gradient-to-r from-amber-400/60 to-transparent" />
                <p className="text-xs leading-5 text-slate-300">Motion that gives information a place to live.</p>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="mx-auto mt-10 grid max-w-3xl grid-cols-1 divide-y divide-slate-800/80 border-y border-slate-800/80 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
          {proofPoints.map(({ icon: Icon, value, label }) => (
            <div key={value} className="flex items-center justify-center gap-3 px-4 py-5 sm:flex-col sm:gap-1">
              <Icon className="h-4 w-4 text-orange-400" />
              <span className="font-heading text-lg font-bold text-white">{value}</span>
              <span className="text-xs text-slate-400 font-medium">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

