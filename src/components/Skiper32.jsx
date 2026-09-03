import { useState, useRef, useEffect } from 'react'
import { createPortal } from 'react-dom'
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from 'framer-motion'
import { FiLayers, FiMaximize2, FiCpu, FiRotateCw, FiGrid, FiX, FiCheck } from 'react-icons/fi'

const galleryImages = [
  {
    id: 1,
    title: 'Cybernetic Horizon UI',
    category: 'Spatial Mobile UI',
    src: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80',
    depth: '01',
    timing: 'Fast Tilt (0.3s spring)',
    rotX: [10, -6],
    rotY: [-8, 8],
    transZ: [-15, 10],
    desc: 'Scroll-driven spatial card tilt engine rendering 60 FPS 3D perspective transforms on mobile screens.',
  },
  {
    id: 2,
    title: 'Neomorphic Mobile Glass',
    category: 'Touch Canvas',
    src: 'https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?auto=format&fit=crop&w=800&q=80',
    depth: '02',
    timing: 'Mid Float (0.5s spring)',
    rotX: [-8, 6],
    rotY: [10, -6],
    transZ: [-10, 15],
    desc: 'Deep backdrop blur filters combined with specular lighting reflections and OLED contrast palettes.',
  },
  {
    id: 3,
    title: 'Prismatic 3D Mesh Engine',
    category: '3D Component System',
    src: 'https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?auto=format&fit=crop&w=800&q=80',
    depth: '03',
    timing: 'Deep Pitch (0.7s spring)',
    rotX: [12, -10],
    rotY: [-6, 10],
    transZ: [-15, 10],
    desc: 'Hardware GPU accelerated 3D card grid built with React 19, Framer Motion, and Tailwind CSS v4.',
  },
  {
    id: 4,
    title: 'Quantum Voxel Resonance',
    category: 'Touch Gesture UI',
    src: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=800&q=80',
    depth: '04',
    timing: 'Orbit Spin (0.4s spring)',
    rotX: [-6, 8],
    rotY: [-12, 6],
    transZ: [-10, 15],
    desc: 'Mobile touch gesture tracking with spring physics, swipe curtain drawers, and hidden scrollbars.',
  },
]

function Skiper32ScrollCard({ item, progress, index, onSelectImage }) {
  const rotateXRaw = useTransform(progress, [0, 0.5, 1], [item.rotX[0], 0, item.rotX[1]])
  const rotateYRaw = useTransform(progress, [0, 0.5, 1], [item.rotY[0], 0, item.rotY[1]])
  const translateZRaw = useTransform(progress, [0, 0.5, 1], [item.transZ[0], 0, item.transZ[1]])
  const scaleRaw = useTransform(progress, [0, 0.5, 1], [0.95 + index * 0.01, 1, 0.98])
  const opacityRaw = useTransform(progress, [0, 0.2, 0.8, 1], [0.7, 1, 1, 0.8])

  const rotateX = useSpring(rotateXRaw, { stiffness: 160, damping: 26 })
  const rotateY = useSpring(rotateYRaw, { stiffness: 160, damping: 26 })
  const translateZ = useSpring(translateZRaw, { stiffness: 160, damping: 26 })
  const scale = useSpring(scaleRaw, { stiffness: 160, damping: 26 })

  return (
    <motion.div
      style={{ rotateX, rotateY, translateZ, scale, opacity: opacityRaw }}
      className="preserve-3d relative group cursor-pointer"
      onClick={() => onSelectImage(item)}
    >
      <div className="relative rounded-3xl overflow-hidden glass-panel border border-slate-700/60 shadow-xl transition-all duration-300 group-hover:border-orange-500/60 group-hover:shadow-orange-500/25">
        <div className="absolute top-4 left-4 z-20 flex items-center gap-2 px-3 py-1 rounded-full bg-slate-950/80 backdrop-blur-md border border-slate-700/60 text-xs font-mono font-semibold text-slate-200">
          <span className="w-2 h-2 rounded-full bg-orange-400 animate-pulse" />
          <span>{item.category}</span>
          <span className="text-orange-400 font-bold">#{item.depth}</span>
        </div>
        <div className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-slate-950/80 backdrop-blur-md text-white opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all">
          <FiMaximize2 className="w-4 h-4 text-orange-400" />
        </div>
        <div className="relative h-56 sm:h-60 w-full overflow-hidden bg-slate-950">
          <img src={item.src} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out opacity-90 group-hover:opacity-100" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent opacity-80" />
        </div>
        <div className="p-5 relative z-10 bg-slate-900/90 backdrop-blur-sm border-t border-slate-800">
          <h4 className="font-heading text-lg font-extrabold text-white group-hover:text-orange-300 transition-colors">{item.title}</h4>
          <div className="mt-2 flex items-center justify-between text-xs text-slate-400">
            <span className="flex items-center gap-1.5 font-mono text-[11px] text-orange-300 font-bold">
              <FiRotateCw className="w-3.5 h-3.5" />
              {item.timing}
            </span>
            <span className="text-orange-400 font-bold group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
              Click to Open &rarr;
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

function Skiper32InteractiveGridCard({ item, onSelectImage }) {
  const [tilt, setTilt] = useState({ x: 0, y: 0 })
  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 30
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * -30
    setTilt({ x, y })
  }
  const handleMouseLeave = () => setTilt({ x: 0, y: 0 })

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ rotateX: tilt.y, rotateY: tilt.x }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      onClick={() => onSelectImage(item)}
      className="glass-card rounded-3xl overflow-hidden p-4 border border-slate-800 hover:border-amber-500/50 transition-all cursor-pointer group shadow-xl relative"
    >
      <div className="relative h-48 rounded-2xl overflow-hidden bg-slate-950">
        <img src={item.src} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
        <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-slate-950/80 backdrop-blur-md border border-slate-700 text-xs font-mono text-amber-300 font-extrabold">
          Interactive Tilt
        </div>
      </div>
      <div className="mt-4">
        <h3 className="font-heading font-extrabold text-lg text-white group-hover:text-amber-300 transition-colors">{item.title}</h3>
        <p className="mt-1 text-xs font-mono text-amber-400 font-bold">Tilt Cursor Active</p>
        <p className="mt-2 text-xs text-slate-300 line-clamp-2 leading-relaxed">{item.desc}</p>
      </div>
      <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs font-extrabold text-amber-400 group-hover:text-amber-300">
        <span>Inspect Tilt Math</span>
        <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
      </div>
    </motion.div>
  )
}

export default function Skiper32() {
  const containerRef = useRef(null)
  const [activeTab, setActiveTab] = useState('framer')
  const [selectedImage, setSelectedImage] = useState(null)
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ['start end', 'end start'] })

  useEffect(() => {
    document.body.style.overflow = selectedImage ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [selectedImage])

  return (
    <section id="experience" ref={containerRef} className="py-24 relative overflow-hidden bg-slate-950">
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-600/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-amber-600/15 rounded-full blur-3xl pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-500/15 border border-orange-500/30 text-orange-300 text-xs font-mono uppercase tracking-wider mb-4 font-bold shadow-md">
            <FiCpu className="w-4 h-4 text-orange-400" />
            <span>Skiper32 Spatial Engine</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Scroll to Trigger <span className="bg-gradient-to-r from-orange-400 via-amber-300 to-orange-500 bg-clip-text text-transparent">3D Image Animations</span>
          </h2>
          <div className="mt-8 inline-flex p-1.5 rounded-2xl bg-slate-900 border border-slate-800 shadow-xl">
            <button onClick={() => setActiveTab('framer')} className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${activeTab === 'framer' ? 'bg-gradient-to-r from-orange-500 to-amber-500 text-slate-950 shadow-lg scale-[1.02]' : 'text-slate-400'}`}>
              <FiLayers className="w-4 h-4" /> <span>With Framer Motion</span>
            </button>
            <button onClick={() => setActiveTab('gsap')} className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${activeTab === 'gsap' ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-slate-950 shadow-lg scale-[1.02]' : 'text-slate-400'}`}>
              <FiGrid className="w-4 h-4" /> <span>Interactive 3D Grid</span>
            </button>
          </div>
        </div>
        <div className="mt-14 perspective-1000 overflow-hidden py-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {galleryImages.map((item, index) => activeTab === 'framer' ? (
              <Skiper32ScrollCard key={item.id} item={item} progress={scrollYProgress} index={index} onSelectImage={setSelectedImage} />
            ) : (
              <Skiper32InteractiveGridCard key={item.id} item={item} onSelectImage={setSelectedImage} />
            ))}
          </div>
        </div>
        {createPortal(
          <AnimatePresence>
            {selectedImage && (
              <div className="fixed inset-0 z-[9999] bg-slate-950/90 backdrop-blur-xl flex items-center justify-center p-4" onClick={() => setSelectedImage(null)}>
                <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }} className="bg-slate-900 border border-orange-500/50 rounded-3xl p-6 max-w-lg w-full" onClick={(e) => e.stopPropagation()}>
                  <button onClick={() => setSelectedImage(null)} className="absolute top-5 right-5 p-2 rounded-xl bg-slate-800 text-white"><FiX /></button>
                  <img src={selectedImage.src} className="w-full h-64 object-cover rounded-2xl mb-4" />
                  <h3 className="text-2xl font-bold text-white">{selectedImage.title}</h3>
                  <p className="text-sm text-slate-300 mt-2">{selectedImage.desc}</p>
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
