import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  FiZap,
  FiArrowUp,
  FiGithub,
  FiTwitter,
  FiInstagram,
  FiLinkedin,
  FiSend,
  FiCheck,
} from 'react-icons/fi'

export default function Footer() {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleSubscribe = (e) => {
    e.preventDefault()
    if (email && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setSubscribed(true)
      setEmail('')
      setTimeout(() => setSubscribed(false), 4000)
    }
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-slate-950 border-t border-slate-800 text-slate-400 pt-16 pb-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-800/80">
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <Link to="/" className="flex items-center gap-2.5 group">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-orange-500 via-amber-500 to-orange-600 p-0.5 shadow-md shadow-orange-500/20">
                <div className="w-full h-full bg-slate-950 rounded-[9px] flex items-center justify-center">
                  <FiZap className="w-4 h-4 text-orange-400" />
                </div>
              </div>
              <span className="font-heading font-extrabold text-xl text-white tracking-tight">
                AURA<span className="text-orange-500">3D</span> Studio
              </span>
            </Link>

            <p className="text-sm text-slate-400 max-w-sm font-normal leading-relaxed">
              A modern mobile-first web interface featuring 3D scroll animations, responsive component kits, hidden scrollbars, and accessible design system aesthetics.
            </p>

            {/* Social Media Links */}
            <div className="flex items-center gap-3 pt-2">
              {[
                { icon: FiGithub, href: 'https://github.com', label: 'GitHub' },
                { icon: FiTwitter, href: 'https://twitter.com', label: 'Twitter' },
                { icon: FiInstagram, href: 'https://instagram.com', label: 'Instagram' },
                { icon: FiLinkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
              ].map((s, idx) => (
                <a
                  key={idx}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={s.label}
                  className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-orange-400 hover:border-orange-500/40 hover:bg-slate-800 transition-colors"
                >
                  <s.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Navigation Links (Separate Pages) */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-widest text-slate-200 font-bold">
              Separate Pages
            </h4>
            <ul className="space-y-2 text-sm font-medium">
              <li>
                <Link to="/" className="hover:text-orange-400 transition-colors">
                  Home Overview
                </Link>
              </li>
              <li>
                <Link to="/experience" className="hover:text-orange-400 transition-colors">
                  3D Studio Page
                </Link>
              </li>
              <li>
                <Link to="/features" className="hover:text-orange-400 transition-colors">
                  System Features
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-orange-400 transition-colors">
                  Services Catalog
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-orange-400 transition-colors">
                  About & Mission
                </Link>
              </li>
              <li>
                <Link to="/testimonials" className="hover:text-orange-400 transition-colors">
                  Testimonials
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-orange-400 transition-colors">
                  Contact Form
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter Subscription */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-widest text-slate-200 font-bold">
              Newsletter Update
            </h4>
            <p className="text-sm text-slate-400">
              Subscribe for early access to new 3D motion components and UI releases.
            </p>

            <form onSubmit={handleSubscribe} className="space-y-2">
              <div className="relative">
                <input
                  type="email"
                  required
                  placeholder="enter your email..."
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-orange-500"
                />
                <button
                  type="submit"
                  className="absolute right-1.5 top-1.5 bottom-1.5 px-3.5 bg-orange-500 hover:bg-orange-400 text-slate-950 font-extrabold rounded-lg flex items-center justify-center transition-colors cursor-pointer"
                  aria-label="Subscribe"
                >
                  <FiSend className="w-4 h-4" />
                </button>
              </div>
              {subscribed && (
                <p className="text-xs text-emerald-400 flex items-center gap-1 font-semibold">
                  <FiCheck /> Subscribed! Welcome to AURA3D newsletter.
                </p>
              )}
            </form>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p>© {new Date().getFullYear()} AURA3D Studio UI. Built with React & Tailwind CSS.</p>

          <div className="flex items-center gap-4">
            <span className="text-slate-500 font-mono">Mobile-First 320px–4K</span>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-slate-700 transition-colors cursor-pointer font-bold"
            >
              <span>Back to Top</span>
              <FiArrowUp className="w-3.5 h-3.5 text-orange-400" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}

