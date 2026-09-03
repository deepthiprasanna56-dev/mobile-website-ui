import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link, useLocation } from 'react-router-dom'
import { FiMenu, FiX, FiArrowUpRight, FiZap } from 'react-icons/fi'

const navItems = [
  { name: 'Home', path: '/' },
  { name: '3D Studio', path: '/experience' },
  { name: 'Features', path: '/features' },
  { name: 'Services', path: '/services' },
  { name: 'About', path: '/about' },
  { name: 'Testimonials', path: '/testimonials' },
  { name: 'Contact', path: '/contact' },
]

export default function Header({ onOpenBooking }) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Prevent background scroll when mobile drawer is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
  }, [mobileMenuOpen])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'glass-panel py-3 shadow-xl shadow-black/40 border-b border-slate-800/80'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <Link
          to="/"
          className="flex items-center gap-2.5 group focus:outline-none focus:ring-2 focus:ring-indigo-500 rounded-xl p-1"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 via-purple-500 to-pink-500 p-0.5 shadow-lg shadow-indigo-500/25 group-hover:scale-105 transition-transform duration-300">
            <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center">
              <FiZap className="w-5 h-5 text-indigo-400 group-hover:rotate-12 transition-transform duration-300" />
            </div>
          </div>
          <div className="flex flex-col">
            <span className="font-heading font-extrabold text-xl text-white tracking-tight flex items-center gap-1">
              AURA<span className="text-indigo-400">3D</span>
            </span>
            <span className="text-[10px] tracking-widest text-slate-400 font-mono uppercase -mt-1 font-bold">
              Mobile Studio UI
            </span>
          </div>
        </Link>

        {/* Desktop Nav Links (Navigates to dedicated separate pages!) */}
        <nav className="hidden md:flex items-center gap-1 lg:gap-1.5 bg-slate-900/60 p-1.5 rounded-2xl border border-slate-800/80 backdrop-blur-md">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path
            return (
              <Link
                key={item.name}
                to={item.path}
                className={`px-3.5 py-2 text-xs sm:text-sm font-semibold rounded-xl transition-all ${
                  isActive
                    ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-md shadow-indigo-600/30'
                    : 'text-slate-300 hover:text-white hover:bg-slate-800/70'
                }`}
              >
                {item.name}
              </Link>
            )
          })}
        </nav>

        {/* Desktop Action CTA */}
        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={onOpenBooking}
            className="flex items-center gap-2 px-4.5 py-2.5 text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 hover:from-indigo-500 hover:to-pink-500 rounded-xl shadow-lg shadow-indigo-500/30 hover:shadow-indigo-500/50 active:scale-95 transition-all duration-200 cursor-pointer"
          >
            <span>Book Session</span>
            <FiArrowUpRight className="w-4 h-4" />
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2.5 rounded-xl bg-slate-800/90 text-slate-200 hover:text-white hover:bg-slate-700/90 border border-slate-700/80 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-colors"
          aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
        >
          {mobileMenuOpen ? <FiX className="w-6 h-6" /> : <FiMenu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 bg-slate-950/85 backdrop-blur-lg z-40 md:hidden"
            />

            {/* Menu Slide Drawer */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-[85%] max-w-sm bg-slate-900 border-l border-slate-800 z-50 p-6 flex flex-col justify-between shadow-2xl md:hidden overflow-y-auto"
            >
              <div>
                <div className="flex items-center justify-between pb-6 border-b border-slate-800">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-indigo-500 to-purple-500 p-0.5">
                      <div className="w-full h-full bg-slate-950 rounded-[7px] flex items-center justify-center">
                        <FiZap className="w-4 h-4 text-indigo-400" />
                      </div>
                    </div>
                    <span className="font-heading font-bold text-lg text-white">
                      AURA<span className="text-indigo-400">3D</span>
                    </span>
                  </div>
                  <button
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800"
                  >
                    <FiX className="w-6 h-6" />
                  </button>
                </div>

                <nav className="flex flex-col gap-2 mt-6">
                  {navItems.map((item, idx) => {
                    const isActive = location.pathname === item.path
                    return (
                      <motion.div
                        key={item.name}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.04 }}
                      >
                        <Link
                          to={item.path}
                          onClick={() => setMobileMenuOpen(false)}
                          className={`flex items-center justify-between p-3.5 rounded-xl text-base font-semibold transition-all ${
                            isActive
                              ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg shadow-indigo-600/30'
                              : 'text-slate-200 hover:text-white hover:bg-indigo-600/10'
                          }`}
                        >
                          <span>{item.name}</span>
                          <FiArrowUpRight className="w-4 h-4 text-slate-400" />
                        </Link>
                      </motion.div>
                    )
                  })}
                </nav>
              </div>

              <div className="pt-6 border-t border-slate-800 flex flex-col gap-3">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false)
                    onOpenBooking()
                  }}
                  className="w-full flex items-center justify-center gap-2 py-3.5 px-4 text-base font-bold text-white bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-xl shadow-lg shadow-indigo-500/25"
                >
                  <span>Book Interactive Session</span>
                  <FiArrowUpRight className="w-5 h-5" />
                </button>
                <p className="text-xs text-center text-slate-500 font-mono">
                  © 2026 AURA3D Studio UI &bull; Mobile-First
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  )
}
