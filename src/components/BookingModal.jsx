import { useState, useEffect } from 'react'
import { createPortal } from 'react-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { FiX, FiCheckCircle, FiArrowRight } from 'react-icons/fi'

export default function BookingModal({ isOpen, onClose, selectedService }) {
  const [step, setStep] = useState(1)
  const [date, setDate] = useState('')
  const [time, setTime] = useState('10:00 AM')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  if (!isOpen) return null

  const handleConfirm = (e) => {
    e.preventDefault()
    if (name && email && date) {
      setStep(2)
    }
  }

  const handleReset = () => {
    setStep(1)
    setDate('')
    setName('')
    setEmail('')
    onClose()
  }

  if (typeof document === 'undefined') return null

  return createPortal(
    <AnimatePresence>
      <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-slate-950/90 backdrop-blur-xl"
        />

        <motion.div
          initial={{ scale: 0.9, opacity: 0, y: 15 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0, y: 15 }}
          transition={{ type: 'spring', damping: 25, stiffness: 250 }}
          className="relative w-full max-w-lg bg-slate-900 border border-orange-500/50 rounded-3xl p-6 sm:p-8 shadow-2xl z-10 my-auto max-h-[85vh] overflow-y-auto"
        >
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2.5 text-slate-400 hover:text-white rounded-xl bg-slate-800 hover:bg-slate-700 transition-colors shadow-md z-20 cursor-pointer"
            aria-label="Close"
          >
            <FiX className="w-5 h-5" />
          </button>

          {step === 1 ? (
            <form onSubmit={handleConfirm} className="space-y-5">
              <div className="border-b border-slate-800 pb-4">
                <span className="text-xs font-mono text-orange-400 uppercase tracking-wider font-bold">
                  Interactive Scheduler
                </span>
                <h3 className="font-heading text-2xl font-extrabold text-white mt-1">
                  Book a Session
                </h3>
                <p className="text-xs text-slate-400 mt-1">
                  {selectedService
                    ? `Package: ${selectedService.title} (${selectedService.price})`
                    : 'Reserve a 1-on-1 consultation or 3D web UI session'}
                </p>
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-300 uppercase tracking-wider mb-2 font-bold">
                  Select Date
                </label>
                <input
                  type="date"
                  required
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-sm text-slate-100 focus:outline-none focus:border-orange-500"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-300 uppercase tracking-wider mb-2 font-bold">
                  Preferred Time Slot
                </label>
                <select
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-sm text-slate-100 focus:outline-none focus:border-orange-500"
                >
                  <option>09:00 AM EST</option>
                  <option>10:30 AM EST</option>
                  <option>02:00 PM EST</option>
                  <option>04:30 PM EST</option>
                </select>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono text-slate-300 uppercase tracking-wider mb-1.5 font-bold">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Alex Morgan"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-3.5 py-3 rounded-xl bg-slate-950 border border-slate-800 text-sm text-slate-100 focus:outline-none focus:border-orange-500"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono text-slate-300 uppercase tracking-wider mb-1.5 font-bold">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="alex@domain.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-3.5 py-3 rounded-xl bg-slate-950 border border-slate-800 text-sm text-slate-100 focus:outline-none focus:border-orange-500"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-xl bg-gradient-to-r from-orange-500 via-amber-500 to-orange-400 hover:from-orange-400 hover:to-amber-400 text-slate-950 font-extrabold text-sm shadow-xl shadow-orange-500/30 flex items-center justify-center gap-2 cursor-pointer mt-4 transition-all"
              >
                <span>Confirm Reservation</span>
                <FiArrowRight />
              </button>
            </form>
          ) : (
            <div className="text-center py-6">
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto mb-4 border border-emerald-500/40">
                <FiCheckCircle className="w-8 h-8" />
              </div>
              <h3 className="font-heading text-2xl font-bold text-white">
                Booking Confirmed!
              </h3>
              <p className="text-sm text-slate-300 mt-2">
                We've reserved your session for <strong className="text-orange-400">{date}</strong> at <strong className="text-orange-400">{time}</strong>. A confirmation email has been sent to {email}.
              </p>
              <button
                onClick={handleReset}
                className="mt-6 px-6 py-3 bg-orange-500 hover:bg-orange-400 text-slate-950 font-extrabold rounded-xl text-sm shadow-lg shadow-orange-500/25 cursor-pointer"
              >
                Done
              </button>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>,
    document.body
  )
}


