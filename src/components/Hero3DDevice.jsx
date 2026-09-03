import { useRef } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { FiZap, FiCheck, FiCpu, FiLayers, FiShield, FiStar } from 'react-icons/fi'

export default function Hero3DDevice() {
  const containerRef = useRef(null)

  // Motion values for 3D cursor & touch tilt tracking
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const mouseXSpring = useSpring(x, { stiffness: 200, damping: 20 })
  const mouseYSpring = useSpring(y, { stiffness: 200, damping: 20 })

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], [18, -18])
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], [-18, 18])
  const glowX = useTransform(mouseXSpring, [-0.5, 0.5], ['10%', '90%'])
  const glowY = useTransform(mouseYSpring, [-0.5, 0.5], ['10%', '90%'])

  const handleMouseMove = (e) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    const xPct = (e.clientX - rect.left) / rect.width - 0.5
    const yPct = (e.clientY - rect.top) / rect.height - 0.5
    x.set(xPct)
    y.set(yPct)
  }

  const handleTouchMove = (e) => {
    if (!containerRef.current || !e.touches[0]) return
    const rect = containerRef.current.getBoundingClientRect()
    const touch = e.touches[0]
    const xPct = (touch.clientX - rect.left) / rect.width - 0.5
    const yPct = (touch.clientY - rect.top) / rect.height - 0.5
    x.set(xPct)
    y.set(yPct)
  }

  const handleReset = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onTouchMove={handleTouchMove}
      onMouseLeave={handleReset}
      onTouchEnd={handleReset}
      className="relative w-full max-w-sm sm:max-w-md mx-auto perspective-1000 py-6 select-none"
    >
      {/* Background Spatial Aura Rings */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 sm:w-96 h-72 sm:h-96 bg-gradient-to-tr from-indigo-500/30 via-purple-500/25 to-pink-500/20 rounded-full blur-2xl pointer-events-none animate-pulse" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 sm:w-80 h-64 sm:h-80 border border-indigo-500/20 rounded-full pointer-events-none animate-spin-slow" />

      {/* 3D Device Container */}
      <motion.div
        style={{
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d',
        }}
        className="relative mx-auto w-[270px] sm:w-[310px] h-[520px] sm:h-[580px] rounded-[48px] p-3.5 bg-gradient-to-b from-slate-800 via-slate-900 to-slate-950 border-2 border-indigo-500/40 shadow-[0_25px_60px_-15px_rgba(99,102,241,0.4)] group transition-all duration-300"
      >
        {/* Specular Lighting Glow Layer */}
        <motion.div
          style={{
            background: `radial-gradient(circle at ${glowX} ${glowY}, rgba(168, 85, 247, 0.35), transparent 60%)`,
          }}
          className="absolute inset-0 rounded-[48px] pointer-events-none z-30 opacity-75"
        />

        {/* Outer Frame Edge Accents */}
        <div className="absolute top-16 -left-1 w-1 h-10 bg-indigo-500/40 rounded-l-md" />
        <div className="absolute top-30 -left-1 w-1 h-14 bg-indigo-500/40 rounded-l-md" />
        <div className="absolute top-24 -right-1 w-1 h-16 bg-purple-500/40 rounded-r-md" />

        {/* Screen Bezel */}
        <div className="relative w-full h-full rounded-[40px] bg-slate-950 overflow-hidden border border-slate-800/80 flex flex-col justify-between p-4 shadow-inner">
          {/* Dynamic Island / Speaker Notch */}
          <div className="absolute top-3 left-1/2 -translate-x-1/2 w-28 h-5 bg-slate-900 rounded-full border border-slate-800 flex items-center justify-center gap-2 z-40">
            <span className="w-2.5 h-2.5 rounded-full bg-slate-950 border border-slate-800 flex items-center justify-center">
              <span className="w-1 h-1 rounded-full bg-indigo-500 animate-ping" />
            </span>
            <span className="w-8 h-1 rounded-full bg-slate-800" />
          </div>

          {/* Screen Content UI */}
          <div className="pt-7 space-y-3.5 relative z-20">
            {/* Top App Status Header */}
            <div className="flex items-center justify-between bg-slate-900/80 p-2.5 rounded-2xl border border-slate-800 backdrop-blur-md">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-lg bg-gradient-to-tr from-indigo-500 to-purple-500 p-0.5">
                  <div className="w-full h-full bg-slate-950 rounded-[5px] flex items-center justify-center">
                    <FiZap className="w-3.5 h-3.5 text-indigo-400" />
                  </div>
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white font-heading">AURA3D Mobile</h4>
                  <p className="text-[9px] text-slate-400 font-mono">v4.0 OLED Active</p>
                </div>
              </div>
              <span className="px-2 py-0.5 rounded-full text-[9px] font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 flex items-center gap-1">
                <FiCheck className="w-2.5 h-2.5" /> 60 FPS
              </span>
            </div>

            {/* Simulated 3D Card Screen Element */}
            <div className="relative rounded-2xl overflow-hidden bg-gradient-to-tr from-indigo-950/80 via-slate-900 to-purple-950/80 border border-indigo-500/30 p-3.5 text-left shadow-lg">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] font-mono uppercase tracking-wider text-indigo-300 bg-indigo-500/20 px-2 py-0.5 rounded-md border border-indigo-500/30">
                  Spatial Engine
                </span>
                <FiStar className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
              </div>

              <h5 className="text-xs font-extrabold text-white font-heading">
                Mobile Web Component UI
              </h5>
              <p className="text-[10px] text-slate-300 mt-1 leading-snug">
                Touch-first responsive layouts rendering 3D spring tilt physics without scrollbars.
              </p>

              {/* Progress visual bar */}
              <div className="mt-3 space-y-1">
                <div className="flex justify-between text-[9px] text-slate-400 font-mono">
                  <span>GPU Acceleration</span>
                  <span className="text-indigo-400">99.8%</span>
                </div>
                <div className="w-full h-1.5 rounded-full bg-slate-900 overflow-hidden border border-slate-800">
                  <div className="h-full w-[94%] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full animate-pulse" />
                </div>
              </div>
            </div>

            {/* Quick Component Feature Badges */}
            <div className="grid grid-cols-2 gap-2">
              <div className="p-2.5 rounded-xl bg-slate-900/90 border border-slate-800 flex items-center gap-2">
                <div className="w-6 h-6 rounded-lg bg-indigo-500/10 flex items-center justify-center shrink-0">
                  <FiCpu className="w-3.5 h-3.5 text-indigo-400" />
                </div>
                <div>
                  <span className="text-[10px] font-bold text-white block">React 19</span>
                  <span className="text-[8px] text-slate-400 font-mono">Fast Core</span>
                </div>
              </div>

              <div className="p-2.5 rounded-xl bg-slate-900/90 border border-slate-800 flex items-center gap-2">
                <div className="w-6 h-6 rounded-lg bg-purple-500/10 flex items-center justify-center shrink-0">
                  <FiLayers className="w-3.5 h-3.5 text-purple-400" />
                </div>
                <div>
                  <span className="text-[10px] font-bold text-white block">Tailwind v4</span>
                  <span className="text-[8px] text-slate-400 font-mono">Rich CSS</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Screen Navigation Bar */}
          <div className="pt-2 pb-1 flex items-center justify-around bg-slate-900/90 rounded-2xl border border-slate-800 text-[10px] font-mono text-slate-400 z-20">
            <span className="text-indigo-400 font-bold">320px</span>
            <span>&bull;</span>
            <span className="text-purple-400 font-bold">Responsive</span>
            <span>&bull;</span>
            <span className="text-pink-400 font-bold">Smooth</span>
          </div>

          {/* Bottom Home Indicator Bar */}
          <div className="w-24 h-1 bg-slate-700 rounded-full mx-auto mt-2 shrink-0 z-40" />
        </div>

        {/* Floating 3D Badge 1 (Pops out in 3D perspective space) */}
        <div
          style={{ transform: 'translateZ(50px)' }}
          className="absolute -top-3 -right-4 sm:-right-6 bg-slate-900/90 border border-indigo-500/40 p-3 rounded-2xl shadow-xl backdrop-blur-md z-40 flex items-center gap-2.5"
        >
          <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-indigo-600 to-purple-600 flex items-center justify-center text-white font-bold text-xs shadow-md">
            3D
          </div>
          <div>
            <span className="text-xs font-bold text-white block">Spatial Canvas</span>
            <span className="text-[10px] text-indigo-400 font-mono">Interactive Tilt</span>
          </div>
        </div>

        {/* Floating 3D Badge 2 */}
        <div
          style={{ transform: 'translateZ(60px)' }}
          className="absolute -bottom-4 -left-4 sm:-left-6 bg-slate-900/90 border border-purple-500/40 p-3 rounded-2xl shadow-xl backdrop-blur-md z-40 flex items-center gap-2.5"
        >
          <div className="w-8 h-8 rounded-xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400">
            <FiShield className="w-4 h-4" />
          </div>
          <div>
            <span className="text-xs font-bold text-white block">No Scrollbars</span>
            <span className="text-[10px] text-emerald-400 font-mono">Smooth & Flush</span>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
