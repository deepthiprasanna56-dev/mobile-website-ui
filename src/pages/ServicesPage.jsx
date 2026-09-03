import { motion } from 'framer-motion'
import Services from '../components/Services'
import { Link } from 'react-router-dom'
import { FiArrowLeft, FiBox } from 'react-icons/fi'

export default function ServicesPage({ onOpenBooking }) {
  return (
    <div className="pt-28 pb-16 min-h-screen bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="flex items-center gap-2 text-xs font-mono text-slate-400 mb-4 font-bold">
          <Link to="/" className="hover:text-orange-400 flex items-center gap-1 transition-colors">
            <FiArrowLeft className="w-3.5 h-3.5" /> Home
          </Link>
          <span>/</span>
          <span className="text-orange-400 font-bold">Services Catalog</span>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass-panel p-8 sm:p-12 rounded-3xl border border-orange-500/20 text-center relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-orange-500/20 to-amber-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-300 text-xs font-mono uppercase mb-4 font-bold">
            <FiBox className="w-4 h-4 text-orange-400" />
            <span>Dedicated Services Page View</span>
          </div>

          <h1 className="font-heading text-4xl sm:text-6xl font-extrabold text-white tracking-tight">
            Mobile UI Packages &{' '}
            <span className="bg-gradient-to-r from-orange-400 via-amber-300 to-orange-500 bg-clip-text text-transparent">
              3D Component Products
            </span>
          </h1>

          <p className="mt-4 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto">
            Browse our complete catalog of mobile-first component kits, spatial 3D card engines, and full stack web solutions. Click any card to open its separate detail page!
          </p>
        </motion.div>
      </div>

      <Services onSelectServiceForBooking={onOpenBooking} />
    </div>
  )
}

