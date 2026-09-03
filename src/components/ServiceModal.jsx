import { motion, AnimatePresence } from 'framer-motion'
import { FiX, FiCheckCircle, FiClock, FiStar, FiShield, FiArrowRight } from 'react-icons/fi'

export default function ServiceModal({ service, onClose, onBookNow }) {
  if (!service) return null

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-slate-950/80 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 250 }}
          className="relative w-full max-w-2xl bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden shadow-2xl z-10 my-8"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-slate-950/80 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-700/60 transition-colors"
          >
            <FiX className="w-5 h-5" />
          </button>

          {/* Modal Header Image */}
          <div className="relative h-64 sm:h-72 w-full bg-slate-950">
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />

            <div className="absolute bottom-4 left-6 right-6 flex items-center justify-between">
              <span className="px-3.5 py-1.5 rounded-full bg-indigo-600/90 text-white text-xs font-semibold shadow-md">
                {service.category}
              </span>
              <div className="flex items-center gap-1.5 bg-slate-900/90 px-3 py-1.5 rounded-full border border-slate-700 text-amber-400 text-xs font-bold">
                <FiStar className="fill-amber-400 w-4 h-4" />
                <span>{service.rating} / 5.0 Rating</span>
              </div>
            </div>
          </div>

          {/* Body Content */}
          <div className="p-6 sm:p-8">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-6">
              <div>
                <h3 className="font-heading text-2xl sm:text-3xl font-bold text-white">
                  {service.title}
                </h3>
                <div className="mt-2 flex items-center gap-3 text-slate-400 text-xs sm:text-sm">
                  <span className="flex items-center gap-1">
                    <FiClock className="text-indigo-400" />
                    {service.duration}
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <FiShield className="text-emerald-400" />
                    Guaranteed Delivery
                  </span>
                </div>
              </div>

              <div className="bg-slate-800/80 border border-slate-700/60 p-3.5 rounded-2xl text-center sm:text-right shrink-0">
                <span className="text-xs text-slate-400 block font-mono">Investment</span>
                <span className="text-3xl font-extrabold text-white font-heading">{service.price}</span>
              </div>
            </div>

            <div className="mt-6">
              <h4 className="text-sm font-semibold text-slate-300 uppercase tracking-wider font-mono">
                Overview & Description
              </h4>
              <p className="mt-2 text-sm sm:text-base text-slate-300 leading-relaxed">
                {service.description}
              </p>
            </div>

            <div className="mt-6">
              <h4 className="text-sm font-semibold text-slate-300 uppercase tracking-wider font-mono">
                What's Included
              </h4>
              <ul className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-3">
                {service.features.map((feature, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200 bg-slate-800/50 p-3 rounded-xl border border-slate-800"
                  >
                    <FiCheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Modal Actions */}
            <div className="mt-8 pt-6 border-t border-slate-800 flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => {
                  onClose()
                  onBookNow(service)
                }}
                className="w-full py-4 px-6 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-bold text-base shadow-xl shadow-indigo-600/30 flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Book This Package Now</span>
                <FiArrowRight className="w-5 h-5" />
              </button>
              <button
                onClick={onClose}
                className="w-full sm:w-auto py-4 px-6 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 font-semibold text-base transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  )
}
