import { useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from 'framer-motion'
import { FiBox, FiMaximize2, FiActivity, FiX } from 'react-icons/fi'

const skiper76Cards = [
  {
    id: 1,
    title: 'Spatial Canvas V76',
    tag: '3D Mesh Engine',
    desc: 'Interactive 3D card tilt driven by cursor coordinates and touch physics velocity.',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80',
    color: 'from-orange-500 to-amber-600',
    stats: { fps: '60 FPS', latency: '4ms', depth: '120px' },
  },
  {
    id: 2,
    title: 'Voxel Hologram Matrix',
    tag: 'Holographic UI',
    desc: 'Real-time ray-traced lighting simulation with dynamic glass specular reflection.',
    image: 'https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?auto=format&fit=crop&w=800&q=80',
    color: 'from-amber-500 to-orange-600',
    stats: { fps: '120 FPS', latency: '2ms', depth: '180px' },
  },
  {
    id: 3,
    title: 'Quantum Fluid Surface',
    tag: 'Shader Physics',
    desc: 'GPU particle displacement mapping tuned for mobile OLED touch displays.',
    image: 'https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?auto=format&fit=crop&w=800&q=80',
    color: 'from-orange-600 to-amber-500',
    stats: { fps: '60 FPS', latency: '3ms', depth: '150px' },
  },
]

function Skiper76TiltCard({ card, onSelect }) {
  const cardRef = useRef(null)

  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const springConfig = { damping: 20, stiffness: 200 }
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [18, -18]), springConfig)
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-18, 18]), springConfig)
  const brightness = useSpring(useTransform(mouseY, [-0.5, 0.5], [1.15, 0.85]), springConfig)

  const handleMouseMove = (e) => {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    const width = rect.width
    const height = rect.height

    const mouseXPos = e.clientX - rect.left
    const mouseYPos = e.clientY - rect.top

    const xPct = mouseXPos / width - 0.5
    const yPct = mouseYPos / height - 0.5

    mouseX.set(xPct)
    mouseY.set(yPct)
  }

  const handleMouseLeave = () => {
    mouseX.set(0)
    mouseY.set(0)
  }

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d',
        filter: `brightness(${brightness})`,
      }}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      onClick={() => onSelect(card)}
      className="glass-card rounded-3xl p-6 border border-slate-800 hover:border-orange-500/50 transition-all cursor-pointer group shadow-2xl relative overflow-hidden"
    >
      {/* Specular Light Glow Overlay */}
      <motion.div
        className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl"
        style={{
          background: 'radial-gradient(circle at 50% 0%, rgba(249, 87, 56, 0.25), transparent 70%)',
        }}
      />

      <div style={{ transform: 'translateZ(30px)' }} className="relative z-10">
        <div className="flex items-center justify-between mb-4">
          <span className="px-3 py-1 rounded-full bg-orange-500/10 text-orange-300 border border-orange-500/30 text-xs font-mono font-bold">
            {card.tag}
          </span>
          <div className="w-8 h-8 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 group-hover:text-orange-400 transition-colors">
            <FiMaximize2 className="w-4 h-4" />
          </div>
        </div>

        <div className="relative h-48 sm:h-52 rounded-2xl overflow-hidden mb-5 bg-slate-950 border border-slate-800">
          <img
            src={card.image}
            alt={card.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
        </div>

        <h3 className="font-heading text-xl font-extrabold text-white group-hover:text-orange-300 transition-colors">
          {card.title}
        </h3>
        <p className="mt-2 text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
          {card.desc}
        </p>

        {/* Physics Specs Grid */}
        <div className="mt-5 grid grid-cols-3 gap-2 pt-4 border-t border-slate-800 text-center">
          <div className="bg-slate-950/60 p-2 rounded-xl border border-slate-800">
            <span className="text-[10px] text-slate-400 block font-mono font-bold">FRAME RATE</span>
            <span className="text-xs font-extrabold text-emerald-400 font-mono">{card.stats.fps}</span>
          </div>
          <div className="bg-slate-950/60 p-2 rounded-xl border border-slate-800">
            <span className="text-[10px] text-slate-400 block font-mono font-bold">LATENCY</span>
            <span className="text-xs font-extrabold text-orange-400 font-mono">{card.stats.latency}</span>
          </div>
          <div className="bg-slate-950/60 p-2 rounded-xl border border-slate-800">
            <span className="text-[10px] text-slate-400 block font-mono font-bold">3D DEPTH</span>
            <span className="text-xs font-extrabold text-amber-400 font-mono">{card.stats.depth}</span>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default function Skiper76() {
  const [selected, setSelected] = useState(null)

  useEffect(() => {
    if (selected) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [selected])

  return (
    <section id="skiper76" className="py-20 sm:py-24 relative overflow-hidden bg-slate-950 border-t border-slate-800/80 isolate">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-orange-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-500/15 border border-orange-500/30 text-orange-300 text-xs font-mono uppercase tracking-wider mb-4 font-bold">
            <FiActivity className="w-4 h-4 text-orange-400" />
            <span>Skiper UI @skiper-ui/skiper76 Component</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Interactive 3D Tilt &{' '}
            <span className="bg-gradient-to-r from-orange-400 via-amber-300 to-orange-500 bg-clip-text text-transparent">
              Physics Engine
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300">
            Move your cursor or touch over the cards to experience real-time 3D spring physics rotation (rotateX, rotateY, translateZ).
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 perspective-1000">
          {skiper76Cards.map((card) => (
            <Skiper76TiltCard key={card.id} card={card} onSelect={setSelected} />
          ))}
        </div>

        {/* Modal Inspector Portal */}
        {typeof document !== 'undefined' &&
          createPortal(
            <AnimatePresence>
              {selected && (
                <div
                  className="fixed inset-0 z-[9999] bg-slate-950/90 backdrop-blur-xl flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
                  onClick={() => setSelected(null)}
                >
                  <motion.div
                    initial={{ scale: 0.9, opacity: 0, y: 15 }}
                    animate={{ scale: 1, opacity: 1, y: 0 }}
                    exit={{ scale: 0.9, opacity: 0, y: 15 }}
                    transition={{ type: 'spring', damping: 25, stiffness: 250 }}
                    className="bg-slate-900 border border-orange-500/50 rounded-3xl p-6 sm:p-8 max-w-md w-full shadow-2xl relative my-auto max-h-[85vh] overflow-y-auto z-10"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <button
                      onClick={() => setSelected(null)}
                      className="absolute top-5 right-5 z-20 p-2.5 rounded-xl bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors shadow-md cursor-pointer"
                      aria-label="Close"
                    >
                      <FiX className="w-5 h-5" />
                    </button>

                    <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                      <span className="text-xs font-mono text-orange-400 font-bold uppercase">
                        {selected.tag}
                      </span>
                      <span className="text-xs font-mono font-bold text-emerald-400 bg-emerald-500/15 px-2.5 py-1 rounded-full border border-emerald-500/30">
                        {selected.stats.fps}
                      </span>
                    </div>

                    <h3 className="mt-4 font-heading text-2xl font-extrabold text-white">
                      {selected.title}
                    </h3>
                    <p className="mt-2 text-sm text-slate-300 leading-relaxed font-normal">
                      {selected.desc}
                    </p>

                    <div className="mt-6 h-48 rounded-2xl overflow-hidden bg-slate-950 border border-slate-800">
                      <img src={selected.image} alt={selected.title} className="w-full h-full object-cover" />
                    </div>

                    <button
                      onClick={() => setSelected(null)}
                      className="mt-6 w-full py-3.5 bg-gradient-to-r from-orange-500 to-amber-500 text-slate-950 font-extrabold text-sm rounded-xl shadow-lg shadow-orange-500/30 hover:from-orange-400 hover:to-amber-400 transition-all cursor-pointer"
                    >
                      Close Component Inspection
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
