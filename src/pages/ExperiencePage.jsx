import { motion } from 'framer-motion'
import Skiper32 from '../components/Skiper32'
import Skiper76 from '../components/Skiper76'
import { Link } from 'react-router-dom'
import { FiArrowLeft, FiCompass } from 'react-icons/fi'

export default function ExperiencePage() {
  return (
    <div className="pt-28 pb-16 min-h-screen">
      {/* Page Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="flex items-center gap-2 text-xs font-mono text-slate-400 mb-4">
          <Link to="/" className="hover:text-indigo-400 flex items-center gap-1 transition-colors">
            <FiArrowLeft className="w-3.5 h-3.5" /> Home
          </Link>
          <span>/</span>
          <span className="text-indigo-400">3D Experience</span>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass-panel p-8 sm:p-12 rounded-3xl border border-slate-800 text-center relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-indigo-500/20 to-purple-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 text-xs font-mono uppercase mb-4">
            <FiCompass className="w-4 h-4" />
            <span>Dedicated Spatial UI Showcase</span>
          </div>

          <h1 className="font-heading text-4xl sm:text-6xl font-extrabold text-white tracking-tight">
            Interactive 3D Web{' '}
            <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Experience
            </span>
          </h1>

          <p className="mt-4 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto">
            Experience both Skiper32 scroll-triggered 3D image rotation and Skiper76 real-time cursor physics tilt components on this dedicated standalone page.
          </p>
        </motion.div>
      </div>

      {/* 3D Components */}
      <Skiper32 />
      <Skiper76 />
    </div>
  )
}
