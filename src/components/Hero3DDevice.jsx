import { useRef } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { FiZap, FiCheck, FiCpu, FiLayers, FiShield, FiStar } from 'react-icons/fi'

export default function Hero3DDevice() {
  const containerRef = useRef(null)

  // Motion values for 3D cursor & touch tilt tracking
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const mouseXSpring = useSpring(x, { stiffness: 220, damping: 22 })
  const mouseYSpring = useSpring(y, { stiffness: 220, damping: 22 })

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], [20, -20])
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], [-20, 20])
  const glowX = useTransform(mouseXSpring, [-0.5, 0.5], ['5%', '95%'])
  const glowY = useTransform(mouseYSpring, [-0.5, 0.5], ['5%', '95%'])

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
      {/* Background Multi-Tone Spatial Aura Orbs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 sm:w-96 h-80 sm:h-96 bg-gradient-to-tr from-orange-600/35 via-amber-500/30 to-orange-500/25 rounded-full blur-3xl pointer-events-none animate-pulse" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 sm:w-84 h-72 sm:h-84 border-2 border-orange-500/30 rounded-full pointer-events-none animate-spin-slow" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-60 sm:w-72 h-60 sm:h-72 border border-amber-500/20 rounded-full pointer-events-none" />

      {/* 3D Device Container */}
      <motion.div
        style={{
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d',
        }}
        className="relative mx-auto w-[275px] sm:w-[315px] h-[530px] sm:h-[590px] rounded-[50px] p-3.5 bg-gradient-to-b from-slate-800 via-slate-900 to-slate-950 border-2 border-orange-500/60 shadow-[0_30px_70px_-15px_rgba(249,87,56,0.45)] group transition-all duration-300"
      >
        {/* Specular Lighting Glow Layer */}
        <motion.div
          style={{
            background: `radial-gradient(circle at ${glowX} ${glowY}, rgba(249, 87, 56, 0.45), transparent 60%)`,
          }}
          className="absolute inset-0 rounded-[50px] pointer-events-none z-30 opacity-80"
        />

        {/* Outer Frame Metallic Hardware Buttons */}
        <div className="absolute top-16 -left-1 w-1 h-10 bg-orange-500/60 rounded-l-md" />
        <div className="absolute top-30 -left-1 w-1 h-14 bg-orange-500/60 rounded-l-md" />
        <div className="absolute top-24 -right-1 w-1 h-16 bg-amber-500/60 rounded-r-md" />

        {/* Screen Bezel */}
        <div className="relative w-full h-full rounded-[42px] bg-slate-950 overflow-hidden border border-slate-800 flex flex-col justify-between p-4 shadow-inner">
          {/* Dynamic Island Notch */}
          <div className="absolute top-3 left-1/2 -translate-x-1/2 w-28 h-5.5 bg-slate-900 rounded-full border border-slate-800/80 flex items-center justify-between px-3 z-40 shadow-md">
            <span className="w-2.5 h-2.5 rounded-full bg-slate-950 border border-slate-800 flex items-center justify-center">
              <span className="w-1 h-1 rounded-full bg-emerald-400 animate-ping" />
            </span>
            <span className="w-8 h-1 rounded-full bg-orange-500/60" />
            <span className="w-2 h-2 rounded-full bg-amber-500/80" />
          </div>

          {/* Screen Content UI */}
          <div className="pt-7 space-y-3.5 relative z-20">
            {/* Top Status Header */}
            <div className="flex items-center justify-between bg-slate-900/90 p-2.5 rounded-2xl border border-orange-500/30 backdrop-blur-md shadow-md">
              <div className="flex items-center gap-2">
                <div className="w-7.5 h-7.5 rounded-xl bg-gradient-to-tr from-orange-500 via-amber-500 to-orange-600 p-0.5 shadow-md">
                  <div className="w-full h-full bg-slate-950 rounded-[9px] flex items-center justify-center">
                    <FiZap className="w-4 h-4 text-orange-400" />
                  </div>
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white font-heading tracking-tight">AURA3D Mobile UI</h4>
                  <p className="text-[9px] text-orange-300 font-mono">React 19 &bull; OLED Active</p>
                </div>
              </div>
              <span className="px-2 py-0.5 rounded-full text-[9px] font-mono bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 flex items-center gap-1 font-bold">
                <FiCheck className="w-2.5 h-2.5" /> 60 FPS
              </span>
            </div>

            {/* Simulated 3D Mobile UI Card */}
            <div className="relative rounded-2xl overflow-hidden bg-gradient-to-tr from-orange-950/80 via-slate-900 to-amber-950/70 border border-orange-500/40 p-3.5 text-left shadow-xl">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] font-mono uppercase tracking-wider text-orange-300 bg-orange-500/25 px-2.5 py-0.5 rounded-md border border-orange-500/40 font-bold">
                  Mobile Spatial Canvas
                </span>
                <FiStar className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
              </div>

              <h5 className="text-xs font-extrabold text-white font-heading">
                Mobile-First UI Design System
              </h5>
              <p className="text-[10px] text-slate-300 mt-1 leading-snug">
                Touch gesture motion physics, hidden scrollbars, and sub-50ms render response.
              </p>

              {/* Progress Bar */}
              <div className="mt-3.5 space-y-1">
                <div className="flex justify-between text-[9px] font-mono">
                  <span className="text-slate-300">GPU Acceleration</span>
                  <span className="text-emerald-400 font-bold">99.8% Perfect</span>
                </div>
                <div className="w-full h-1.5 rounded-full bg-slate-900 overflow-hidden border border-slate-800">
                  <div className="h-full w-[96%] bg-gradient-to-r from-orange-500 via-amber-400 to-orange-400 rounded-full animate-pulse" />
                </div>
              </div>
            </div>

            {/* Quick Component Feature Badges */}
            <div className="grid grid-cols-2 gap-2">
              <div className="p-2.5 rounded-xl bg-slate-900/95 border border-orange-500/30 flex items-center gap-2">
                <div className="w-6.5 h-6.5 rounded-lg bg-orange-500/20 border border-orange-500/30 flex items-center justify-center shrink-0">
                  <FiCpu className="w-3.5 h-3.5 text-orange-400" />
                </div>
                <div>
                  <span className="text-[10px] font-bold text-white block">React 19</span>
                  <span className="text-[8px] text-orange-300 font-mono">Supercharged</span>
                </div>
              </div>

              <div className="p-2.5 rounded-xl bg-slate-900/95 border border-amber-500/30 flex items-center gap-2">
                <div className="w-6.5 h-6.5 rounded-lg bg-amber-500/20 border border-amber-500/30 flex items-center justify-center shrink-0">
                  <FiLayers className="w-3.5 h-3.5 text-amber-400" />
                </div>
                <div>
                  <span className="text-[10px] font-bold text-white block">Tailwind v4</span>
                  <span className="text-[8px] text-amber-300 font-mono">Rich Styling</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Screen Navigation Bar */}
          <div className="pt-2 pb-1 flex items-center justify-around bg-slate-900/95 rounded-2xl border border-slate-800 text-[10px] font-mono text-slate-300 z-20 shadow-md">
            <span className="text-orange-400 font-bold">320px Ready</span>
            <span className="text-slate-600">&bull;</span>
            <span className="text-amber-400 font-bold">Zero Gaps</span>
            <span className="text-slate-600">&bull;</span>
            <span className="text-orange-300 font-bold">Hidden Scroll</span>
          </div>

          {/* Bottom Home Indicator Bar */}
          <div className="w-24 h-1 bg-orange-500/60 rounded-full mx-auto mt-2 shrink-0 z-40" />
        </div>

        {/* Floating 3D Badge 1 */}
        <div
          style={{ transform: 'translateZ(55px)' }}
          className="absolute -top-3 -right-4 sm:-right-6 bg-slate-900/95 border border-orange-500/50 p-3 rounded-2xl shadow-2xl backdrop-blur-md z-40 flex items-center gap-2.5"
        >
          <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-orange-500 to-amber-500 flex items-center justify-center text-slate-950 font-extrabold text-xs shadow-lg shadow-orange-500/30">
            3D
          </div>
          <div>
            <span className="text-xs font-extrabold text-white block">3D Interactive Tilt</span>
            <span className="text-[10px] text-orange-300 font-mono">Touch & Cursor</span>
          </div>
        </div>

        {/* Floating 3D Badge 2 */}
        <div
          style={{ transform: 'translateZ(65px)' }}
          className="absolute -bottom-4 -left-4 sm:-left-6 bg-slate-900/95 border border-emerald-500/50 p-3 rounded-2xl shadow-2xl backdrop-blur-md z-40 flex items-center gap-2.5"
        >
          <div className="w-8 h-8 rounded-xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 font-bold">
            <FiShield className="w-4.5 h-4.5" />
          </div>
          <div>
            <span className="text-xs font-extrabold text-white block">Hidden Scrollbar</span>
            <span className="text-[10px] text-emerald-300 font-mono">Smooth & Flush</span>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

