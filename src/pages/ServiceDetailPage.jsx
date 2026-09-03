import { useParams, Link, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  FiArrowLeft,
  FiStar,
  FiClock,
  FiCheckCircle,
  FiShield,
  FiZap,
  FiArrowUpRight,
} from 'react-icons/fi'
import { servicesData } from '../data/servicesData'

export default function ServiceDetailPage({ onOpenBooking }) {
  const { id } = useParams()
  const navigate = useNavigate()

  const service = servicesData.find((s) => s.id === Number(id)) || servicesData[0]

  const relatedServices = servicesData.filter((s) => s.id !== service.id).slice(0, 3)

  return (
    <div className="pt-28 pb-20 min-h-screen bg-slate-950 text-slate-100">
      {/* Background glow */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-gradient-to-tr from-indigo-600/20 via-purple-600/15 to-pink-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Breadcrumb Navigation */}
        <div className="flex items-center gap-2 text-xs font-mono text-slate-400 mb-8">
          <Link to="/" className="hover:text-indigo-400 flex items-center gap-1 transition-colors">
            <FiArrowLeft className="w-3.5 h-3.5" /> Home
          </Link>
          <span>/</span>
          <Link to="/services" className="hover:text-indigo-400 transition-colors">
            Services
          </Link>
          <span>/</span>
          <span className="text-indigo-400 font-semibold">{service.title}</span>
        </div>

        {/* Dedicated Separate Page Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Image Banner & 3D Specs */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="relative rounded-3xl overflow-hidden glass-panel border border-slate-700/80 p-3 shadow-2xl">
              <div className="relative h-72 sm:h-96 rounded-2xl overflow-hidden bg-slate-950">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />

                <div className="absolute top-4 left-4 flex items-center gap-2">
                  <span className="px-3.5 py-1.5 rounded-full bg-slate-950/80 backdrop-blur-md border border-slate-700 text-xs font-mono text-indigo-300 font-semibold">
                    {service.category}
                  </span>
                  {service.popular && (
                    <span className="px-3.5 py-1.5 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 text-slate-950 text-xs font-bold font-mono">
                      ★ Popular
                    </span>
                  )}
                </div>

                <div className="absolute bottom-4 right-4 flex items-center gap-1 text-amber-400 bg-slate-950/80 backdrop-blur-md px-3 py-1.5 rounded-full text-sm font-bold border border-slate-700">
                  <FiStar className="fill-amber-400 w-4 h-4" />
                  <span>{service.rating} / 5.0</span>
                </div>
              </div>
            </div>

            {/* Performance Specifications Grid */}
            <div className="glass-panel p-6 rounded-3xl border border-slate-800 space-y-4">
              <h4 className="text-sm font-mono uppercase tracking-wider text-indigo-400 font-bold flex items-center gap-2">
                <FiZap /> Technical Specifications
              </h4>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
                <div className="p-3 bg-slate-900/80 rounded-2xl border border-slate-800">
                  <span className="text-[10px] text-slate-400 block font-mono">FRAME RATE</span>
                  <span className="text-sm font-extrabold text-emerald-400 font-mono">
                    {service.specs?.fps || '60 FPS'}
                  </span>
                </div>
                <div className="p-3 bg-slate-900/80 rounded-2xl border border-slate-800">
                  <span className="text-[10px] text-slate-400 block font-mono">CORE TECH</span>
                  <span className="text-xs font-bold text-indigo-400 font-mono">
                    {service.specs?.tech || 'React 19'}
                  </span>
                </div>
                <div className="p-3 bg-slate-900/80 rounded-2xl border border-slate-800">
                  <span className="text-[10px] text-slate-400 block font-mono">VIEWPORT</span>
                  <span className="text-xs font-bold text-purple-400 font-mono">
                    {service.specs?.viewport || '320px Ready'}
                  </span>
                </div>
                <div className="p-3 bg-slate-900/80 rounded-2xl border border-slate-800">
                  <span className="text-[10px] text-slate-400 block font-mono">STANDARDS</span>
                  <span className="text-xs font-bold text-pink-400 font-mono">
                    {service.specs?.accessibility || 'WCAG AAA'}
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Pricing & Booking Action */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-slate-800 space-y-6">
              <div>
                <span className="text-xs font-mono text-indigo-400 uppercase tracking-widest block mb-2">
                  Dedicated Separate Page View
                </span>
                <h1 className="font-heading text-3xl sm:text-4xl font-extrabold text-white">
                  {service.title}
                </h1>
                <div className="mt-3 flex items-center gap-4 text-xs font-medium text-slate-400">
                  <span className="flex items-center gap-1.5">
                    <FiClock className="text-indigo-400" /> {service.duration}
                  </span>
                  <span>&bull;</span>
                  <span className="flex items-center gap-1.5 text-emerald-400">
                    <FiShield /> Guaranteed Delivery
                  </span>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-gradient-to-r from-indigo-950/60 to-purple-950/60 border border-indigo-500/30 flex items-center justify-between">
                <div>
                  <span className="text-xs text-slate-400 block font-mono">Package Investment</span>
                  <span className="text-3xl font-extrabold text-white font-heading">
                    {service.price}
                  </span>
                </div>
                <button
                  onClick={() => onOpenBooking(service)}
                  className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-indigo-600 via-indigo-500 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-bold text-sm shadow-lg shadow-indigo-600/30 active:scale-95 transition-all cursor-pointer flex items-center gap-2"
                >
                  <span>Book Package Now</span>
                  <FiArrowUpRight />
                </button>
              </div>

              <div className="space-y-3">
                <h4 className="text-sm font-bold text-white font-heading">Overview & Purpose</h4>
                <p className="text-sm text-slate-300 leading-relaxed font-normal">
                  {service.longDescription || service.description}
                </p>
              </div>

              <div className="space-y-3 pt-4 border-t border-slate-800">
                <h4 className="text-sm font-bold text-white font-heading">Included Features</h4>
                <ul className="space-y-2.5">
                  {service.features.map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-200">
                      <FiCheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button
                onClick={() => onOpenBooking(service)}
                className="w-full py-4 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-base shadow-xl shadow-indigo-600/30 flex items-center justify-center gap-2 cursor-pointer transition-all active:scale-[0.99]"
              >
                <span>Book This Service Session</span>
                <FiArrowUpRight className="w-5 h-5" />
              </button>
            </div>
          </motion.div>
        </div>

        {/* Related Services Showcase */}
        <div className="mt-20 border-t border-slate-800 pt-16">
          <div className="flex items-center justify-between mb-8">
            <h3 className="font-heading text-2xl font-bold text-white">Explore Other Mobile Services</h3>
            <Link to="/services" className="text-xs font-mono text-indigo-400 hover:underline">
              View All Services &rarr;
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedServices.map((rel) => (
              <div
                key={rel.id}
                onClick={() => navigate(`/service/${rel.id}`)}
                className="glass-card p-5 rounded-3xl border border-slate-800 hover:border-indigo-500/50 cursor-pointer group transition-all"
              >
                <div className="h-40 rounded-2xl overflow-hidden mb-4 bg-slate-950">
                  <img src={rel.image} alt={rel.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
                </div>
                <span className="text-[10px] font-mono text-indigo-400 uppercase">{rel.category}</span>
                <h4 className="font-heading text-base font-bold text-white group-hover:text-indigo-300 transition-colors mt-1">
                  {rel.title}
                </h4>
                <div className="mt-3 flex items-center justify-between text-xs pt-3 border-t border-slate-800/60">
                  <span className="font-bold text-white">{rel.price}</span>
                  <span className="text-indigo-400 font-semibold flex items-center gap-1">
                    Open Separate Page &rarr;
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
