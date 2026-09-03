import { useRef, useState } from 'react'
import { motion, useScroll, useTransform, useSpring } from 'framer-motion'
import { FiLayers, FiMaximize2, FiCpu, FiRotateCw, FiGrid } from 'react-icons/fi'

const galleryImages = [
  {
    id: 1,
    title: 'Cybernetic Horizon',
    category: 'Spatial UI',
    src: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80',
    depth: '01',
    timing: 'Fast Tilt (0.3s delay)',
    rotX: [25, -15],
    rotY: [-20, 20],
    transZ: [-100, 50],
  },
  {
    id: 2,
    title: 'Neomorphic Glass',
    category: 'Mobile Canvas',
    src: 'https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?auto=format&fit=crop&w=800&q=80',
    depth: '02',
    timing: 'Mid Float (0.5s delay)',
    rotX: [-20, 15],
    rotY: [25, -10],
    transZ: [-50, 100],
  },
  {
    id: 3,
    title: 'Prismatic Prism',
    category: '3D Mesh',
    src: 'https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?auto=format&fit=crop&w=800&q=80',
    depth: '03',
    timing: 'Deep Pitch (0.7s delay)',
    rotX: [30, -25],
    rotY: [-15, 30],
    transZ: [-150, 80],
  },
  {
    id: 4,
    title: 'Quantum Resonance',
    category: 'Voxel Engine',
    src: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=800&q=80',
    depth: '04',
    timing: 'Orbit Spin (0.4s delay)',
    rotX: [-15, 20],
    rotY: [-30, 15],
    transZ: [-80, 120],
  },
];

// Single 3D Image Card using Framer Motion Scroll transforms
function Skiper32Card({ item, progress, index, onSelectImage }) {
  // Unique animation mapping for each card based on scroll progress
  const rotateXRaw = useTransform(progress, [0, 0.5, 1], [item.rotX[0], 0, item.rotX[1]])
  const rotateYRaw = useTransform(progress, [0, 0.5, 1], [item.rotY[0], 0, item.rotY[1]])
  const translateZRaw = useTransform(progress, [0, 0.5, 1], [item.transZ[0], 0, item.transZ[1]])
  const scaleRaw = useTransform(progress, [0, 0.5, 1], [0.85 + index * 0.03, 1, 0.95])
  const opacityRaw = useTransform(progress, [0, 0.2, 0.8, 1], [0.4, 1, 1, 0.6])

  // Smooth springs for fluid touch & mouse movement
  const rotateX = useSpring(rotateXRaw, { stiffness: 100, damping: 20 })
  const rotateY = useSpring(rotateYRaw, { stiffness: 100, damping: 20 })
  const translateZ = useSpring(translateZRaw, { stiffness: 100, damping: 20 })
  const scale = useSpring(scaleRaw, { stiffness: 100, damping: 20 })

  return (
    <motion.div
      style={{
        rotateX,
        rotateY,
        translateZ,
        scale,
        opacity: opacityRaw,
      }}
      className="preserve-3d relative group cursor-pointer"
      onClick={() => onSelectImage(item)}
    >
      <div className="relative rounded-3xl overflow-hidden glass-panel border border-slate-700/60 shadow-2xl transition-all duration-300 group-hover:border-indigo-500/60 group-hover:shadow-indigo-500/20">
        {/* Card Header Badge */}
        <div className="absolute top-4 left-4 z-20 flex items-center gap-2 px-3 py-1 rounded-full bg-slate-950/75 backdrop-blur-md border border-slate-700/60 text-xs font-medium text-slate-200">
          <span className="w-2 h-2 rounded-full bg-indigo-400" />
          <span>{item.category}</span>
          <span className="text-slate-500 font-mono">#{item.depth}</span>
        </div>

        {/* Action Icon on Hover */}
        <div className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-slate-950/75 backdrop-blur-md text-white opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all">
          <FiMaximize2 className="w-4 h-4 text-indigo-400" />
        </div>

        {/* Image Container */}
        <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-slate-950">
          <img
            src={item.src}
            alt={item.title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out opacity-90 group-hover:opacity-100"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent opacity-80" />
        </div>

        {/* Card Footer Info */}
        <div className="p-5 relative z-10 bg-slate-900/90 backdrop-blur-sm border-t border-slate-800">
          <h4 className="font-heading text-lg font-bold text-white group-hover:text-indigo-300 transition-colors">
            {item.title}
          </h4>
          <div className="mt-2 flex items-center justify-between text-xs text-slate-400">
            <span className="flex items-center gap-1.5 font-mono text-[11px]">
              <FiRotateCw className="w-3.5 h-3.5 text-indigo-400" />
              {item.timing}
            </span>
            <span className="text-indigo-400 font-medium group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
              Inspect 3D &rarr;
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default function Skiper32() {
  const containerRef = useRef(null)
  const [selectedImage, setSelectedImage] = useState(null)
  const [activeTab, setActiveTab] = useState('framer')

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  })

  return (
    <section
      id="skiper32"
      ref={containerRef}
      className="py-24 relative overflow-hidden bg-slate-950 border-y border-slate-800/60"
    >
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300 text-xs font-mono uppercase tracking-wider mb-4">
            <FiCpu className="w-3.5 h-3.5" />
            <span>Skiper32 Engine</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-5xl font-bold text-white tracking-tight">
            Scroll to Trigger{' '}
            <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              3D Image Animations
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-400">
            Images rotate and translate in 3D space as you scroll through the viewport.
            Each component has unique animation timing and perspective depth.
          </p>

          {/* Mode Switcher Tabs */}
          <div className="mt-8 inline-flex p-1.5 rounded-2xl bg-slate-900 border border-slate-800">
            <button
              onClick={() => setActiveTab('framer')}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                activeTab === 'framer'
                  ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/30'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <FiLayers className="w-4 h-4" />
              <span>With Framer Motion</span>
            </button>
            <button
              onClick={() => setActiveTab('gsap')}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                activeTab === 'gsap'
                  ? 'bg-purple-600 text-white shadow-lg shadow-purple-600/30'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <FiGrid className="w-4 h-4" />
              <span>Interactive 3D Grid</span>
            </button>
          </div>
        </div>

        {/* 3D Grid Container */}
        <div className="mt-16 perspective-1500">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {galleryImages.map((item, index) => (
              <Skiper32Card
                key={item.id}
                item={item}
                progress={scrollYProgress}
                index={index}
                onSelectImage={(img) => setSelectedImage(img)}
              />
            ))}
          </div>
        </div>

        {/* Interactive Modal preview for clicked card */}
        {selectedImage && (
          <div
            className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="bg-slate-900 border border-slate-700/80 rounded-3xl p-6 max-w-lg w-full overflow-hidden shadow-2xl relative"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative h-64 rounded-2xl overflow-hidden mb-4">
                <img
                  src={selectedImage.src}
                  alt={selectedImage.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-white font-heading">
                {selectedImage.title}
              </h3>
              <p className="text-sm text-indigo-400 mt-1 font-mono">
                Category: {selectedImage.category}
              </p>
              <p className="text-sm text-slate-300 mt-3">
                Experience high-performance 3D transforms rendering smooth 60 FPS transitions
                optimized for mobile touch screens and high-DPI displays.
              </p>
              <button
                onClick={() => setSelectedImage(null)}
                className="mt-6 w-full py-3 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold rounded-xl transition-colors"
              >
                Close Preview
              </button>
            </motion.div>
          </div>
        )}
      </div>
    </section>
  )
}
