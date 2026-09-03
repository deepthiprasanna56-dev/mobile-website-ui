import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import ServiceCard from './ServiceCard'
import { servicesData } from '../data/servicesData'

const categories = ['All', '3D Interactive', 'Mobile Kits', 'Full Stack']

export default function Services() {
  const [selectedCategory, setSelectedCategory] = useState('All')

  const filteredServices =
    selectedCategory === 'All'
      ? servicesData
      : servicesData.filter((s) => s.category === selectedCategory)

  return (
    <section id="services" className="py-24 relative overflow-hidden bg-slate-950">
      {/* Background glow */}
      <div className="absolute top-1/2 right-10 w-96 h-96 bg-orange-600/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-amber-600/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-xs font-mono uppercase tracking-widest text-orange-400 bg-orange-500/10 px-3 py-1 rounded-full border border-orange-500/20 font-bold">
            Products & Services
          </span>
          <h2 className="mt-4 font-heading text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            High-Impact Solutions for{' '}
            <span className="bg-gradient-to-r from-orange-400 via-amber-300 to-orange-500 bg-clip-text text-transparent">
              Mobile Platforms
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300">
            Explore our mobile UI components and packages. Click on any card to open its dedicated separate detail page!
          </p>

          {/* Category Filter Tabs */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-gradient-to-r from-orange-500 to-amber-500 text-slate-950 shadow-lg shadow-orange-500/30'
                    : 'bg-slate-900/80 text-slate-400 hover:text-white border border-slate-800'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Services Grid */}
        <motion.div
          layout
          className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          <AnimatePresence>
            {filteredServices.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}

