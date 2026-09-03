import { motion } from 'framer-motion'
import { FiCheckCircle, FiCompass, FiAward, FiUsers, FiGlobe, FiLayers } from 'react-icons/fi'

const stats = [
  { value: '99.8%', label: 'Mobile Performance Rating', icon: FiAward },
  { value: '320px+', label: 'Universal Screen Support', icon: FiGlobe },
  { value: '50k+', label: 'Mobile Interactions Served', icon: FiUsers },
  { value: '60 FPS', label: 'Hardware 3D Frame Rate', icon: FiLayers },
]

export default function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden bg-slate-900/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Visual Card Showcase */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 relative"
          >
            <div className="relative rounded-3xl overflow-hidden glass-panel border border-slate-700/60 p-4 sm:p-6 shadow-2xl">
              {/* Main Image Banner */}
              <div className="relative h-72 sm:h-80 rounded-2xl overflow-hidden bg-slate-950">
                <img
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1000&q=80"
                  alt="Mobile Development Team"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent opacity-80" />
                
                {/* Floating Badge on Image */}
                <div className="absolute bottom-4 left-4 right-4 glass-card p-4 rounded-xl border border-slate-700/60 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-indigo-600 flex items-center justify-center text-white">
                      <FiCompass className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white font-heading">
                        Mobile-First Perfection
                      </h4>
                      <p className="text-xs text-slate-300">
                        Built for all modern mobile browsers
                      </p>
                    </div>
                  </div>
                  <span className="text-xs font-mono text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/20">
                    Active 2026
                  </span>
                </div>
              </div>

              {/* Supporting Note */}
              <div className="mt-4 p-4 rounded-2xl bg-slate-950/60 border border-slate-800 text-xs sm:text-sm text-slate-300 flex items-center justify-between">
                <span>Designed with responsive fluid layout math</span>
                <span className="font-mono text-indigo-400 font-semibold">Vite + React 19</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Narrative Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 flex flex-col justify-center"
          >
            <span className="text-xs font-mono uppercase tracking-widest text-indigo-400 bg-indigo-500/10 px-3 py-1 rounded-full border border-indigo-500/20 w-fit">
              Our Story & Mission
            </span>

            <h2 className="mt-4 font-heading text-3xl sm:text-5xl font-bold text-white tracking-tight leading-tight">
              Rethinking Web UI for the{' '}
              <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                Mobile-First Generation
              </span>
            </h2>

            <p className="mt-6 text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
              AURA3D was founded on a straightforward principle: mobile websites shouldn't feel like cramped desktop sites. They should be tactile, responsive, and visually exhilarating.
            </p>

            <p className="mt-4 text-sm sm:text-base text-slate-400 leading-relaxed">
              We combine strict structural design guidelines with bleeding-edge 3D GPU acceleration. Whether browsing on a 320px compact smartphone or a 4K desktop monitor, every layout adjusts gracefully with zero horizontal scroll clutter.
            </p>

            {/* Core Values / Bullet Points */}
            <div className="mt-8 space-y-3">
              {[
                'Pixel-perfect layout recalculations on orientation change',
                'Touch-first gesture mapping with Framer Motion spring physics',
                'Fully accessible WCAG color contrast & ARIA menu roles',
              ].map((point, idx) => (
                <div key={idx} className="flex items-center gap-3 text-sm text-slate-200">
                  <FiCheckCircle className="w-5 h-5 text-indigo-400 shrink-0" />
                  <span>{point}</span>
                </div>
              ))}
            </div>

            {/* Impact Counters Grid */}
            <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4 border-t border-slate-800 pt-8">
              {stats.map((stat, idx) => (
                <div key={idx} className="text-center sm:text-left">
                  <span className="font-heading text-2xl sm:text-3xl font-extrabold text-white block">
                    {stat.value}
                  </span>
                  <span className="text-[11px] sm:text-xs text-slate-400 mt-1 block">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
