import { useRef, useState } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { FiBox, FiMaximize2, FiActivity } from 'react-icons/fi'

const skiper76Cards = [
  {
    id: 1,
    title: 'Spatial Canvas V76',
    tag: '3D Mesh Engine',
    desc: 'Interactive 3D card tilt driven by cursor coordinates and touch physics velocity.',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80',
    color: 'from-indigo-500 to-purple-600',
    stats: { fps: '60 FPS', latency: '4ms', depth: '120px' },
  },
  {
    id: 2,
    title: 'Voxel Hologram Matrix',
    tag: 'Holographic UI',
    desc: 'Real-time ray-traced lighting simulation with dynamic glass specular reflection.',
    image: 'https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?auto=format&fit=crop&w=800&q=80',
    color: 'from-purple-500 to-pink-600',
    stats: { fps: '120 FPS', latency: '2ms', depth: '180px' },
  },
  {
    id: 3,
    title: 'Quantum Fluid Surface',
    tag: 'Shader Physics',
    desc: 'GPU particle displacement mapping tuned for mobile OLED touch displays.',
    image: 'https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?auto=format&fit=crop&w=800&q=80',
    color: 'from-blue-500 to-indigo-600',
    stats: { fps: '90 FPS', latency: '3ms', depth: '150px' },
  },
]

function Skiper76PhysicsCard({ card, onInspect }) {
  const cardRef = useRef(null)
  
  // Motion values for 3D cursor tilt tracking
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const mouseXSpring = useSpring(x, { stiffness: 250, damping: 25 })
  const mouseYSpring = useSpring(y, { stiffness: 250, damping: 25 })

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], [15, -15])
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], [-15, 15])
  const glowX = useTransform(mouseXSpring, [-0.5, 0.5], ['0%', '100%'])
  const glowY = useTransform(mouseYSpring, [-0.5, 0.5], ['0%', '100%'])

  const handleMouseMove = (e) => {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    const width = rect.width
    const height = rect.height

    const mouseX = e.clientX - rect.left
    const mouseY = e.clientY - rect.top

    const xPct = mouseX / width - 0.5
    const yPct = mouseY / height - 0.5

    x.set(xPct)
    y.set(yPct)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
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
      }}
      className="relative rounded-3xl overflow-hidden glass-panel border border-slate-700/60 p-6 shadow-2xl cursor-pointer group transition-all duration-300 hover:border-indigo-500/60 hover:shadow-indigo-500/25 perspective-1000"
      onClick={() => onInspect(card)}
    >
      {/* Dynamic Specular Light Glow Overlay */}
      <motion.div
        style={{
          background: `radial-gradient(circle at ${glowX} ${glowY}, rgba(129, 140, 248, 0.25), transparent 70%)`,
        }}
        className="absolute inset-0 pointer-events-none z-10 transition-opacity duration-300 opacity-0 group-hover:opacity-100"
      />

      {/* Card Badge Header */}
      <div className="relative z-20 flex items-center justify-between mb-4">
        <span className="px-3 py-1 rounded-full bg-slate-950/80 backdrop-blur-md border border-slate-700 text-xs font-mono text-indigo-300 flex items-center gap-1.5">
          <FiBox className="w-3.5 h-3.5" />
          <span>{card.tag}</span>
        </span>
        <div className="p-2 rounded-full bg-slate-950/80 border border-slate-700 text-slate-300 group-hover:text-white group-hover:bg-indigo-600 transition-all">
          <FiMaximize2 className="w-4 h-4" />
        </div>
      </div>

      {/* 3D Elevated Image Layer */}
      <div
        style={{ transform: 'translateZ(30px)' }}
        className="relative h-56 rounded-2xl overflow-hidden mb-5 bg-slate-950 border border-slate-800"
      >
        <img
          src={card.image}
          alt={card.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
      </div>

      {/* 3D Elevated Content Layer */}
      <div style={{ transform: 'translateZ(40px)' }} className="relative z-20">
        <h3 className="font-heading text-xl font-bold text-white group-hover:text-indigo-300 transition-colors">
          {card.title}
        </h3>
        <p className="mt-2 text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
          {card.desc}
        </p>

        {/* Physics Specs Grid */}
        <div className="mt-5 grid grid-cols-3 gap-2 pt-4 border-t border-slate-800 text-center">
          <div className="bg-slate-950/60 p-2 rounded-xl border border-slate-800">
            <span className="text-[10px] text-slate-400 block font-mono">FRAME RATE</span>
            <span className="text-xs font-bold text-emerald-400 font-mono">{card.stats.fps}</span>
          </div>
          <div className="bg-slate-950/60 p-2 rounded-xl border border-slate-800">
            <span className="text-[10px] text-slate-400 block font-mono">LATENCY</span>
            <span className="text-xs font-bold text-indigo-400 font-mono">{card.stats.latency}</span>
          </div>
          <div className="bg-slate-950/60 p-2 rounded-xl border border-slate-800">
            <span className="text-[10px] text-slate-400 block font-mono">3D DEPTH</span>
            <span className="text-xs font-bold text-purple-400 font-mono">{card.stats.depth}</span>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default function Skiper76() {
  const [selected, setSelected] = useState(null)

  return (
    <section id="skiper76" className="py-24 relative overflow-hidden bg-slate-950 border-t border-slate-800/80">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 text-xs font-mono uppercase tracking-wider mb-4">
            <FiActivity className="w-4 h-4 text-indigo-400" />
            <span>Skiper UI @skiper-ui/skiper76 Component</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-5xl font-bold text-white tracking-tight">
            Interactive 3D Tilt &{' '}
            <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Physics Engine
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300">
            Move your cursor or touch over the cards to experience real-time 3D spring physics rotation ($rotateX$, $rotateY$, $translateZ$).
          </p>
        </div>

        {/* 3D Physics Cards Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {skiper76Cards.map((card) => (
            <Skiper76PhysicsCard
              key={card.id}
              card={card}
              onInspect={(c) => setSelected(c)}
            />
          ))}
        </div>

        {/* Modal Inspector */}
        {selected && (
          <div
            className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4"
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="bg-slate-900 border border-slate-700 rounded-3xl p-6 sm:p-8 max-w-md w-full shadow-2xl relative"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                <span className="text-xs font-mono text-indigo-400 uppercase">
                  {selected.tag}
                </span>
                <span className="text-xs font-mono text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/20">
                  {selected.stats.fps}
                </span>
              </div>

              <h3 className="mt-4 font-heading text-2xl font-bold text-white">
                {selected.title}
              </h3>
              <p className="mt-2 text-sm text-slate-300 leading-relaxed">
                {selected.desc}
              </p>

              <div className="mt-6 h-48 rounded-2xl overflow-hidden">
                <img src={selected.image} alt={selected.title} className="w-full h-full object-cover" />
              </div>

              <button
                onClick={() => setSelected(null)}
                className="mt-6 w-full py-3 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold rounded-xl text-sm transition-colors"
              >
                Close Component Inspection
              </button>
            </motion.div>
          </div>
        )}
      </div>
    </section>
  )
}
