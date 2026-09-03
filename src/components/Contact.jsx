import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiClock,
  FiSend,
  FiCheckCircle,
  FiAlertCircle,
  FiZap,
} from 'react-icons/fi'

export default function Contact({ preselectedService }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: preselectedService ? preselectedService.title : '',
    message: '',
  })

  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  // Validate form fields
  const validate = () => {
    const errs = {}
    if (!formData.name.trim()) {
      errs.name = 'Full name is required'
    } else if (formData.name.trim().length < 2) {
      errs.name = 'Name must be at least 2 characters'
    }

    if (!formData.email.trim()) {
      errs.email = 'Email address is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errs.email = 'Please enter a valid email address (e.g. name@domain.com)'
    }

    if (formData.phone && !/^[+]*[(]?[0-9]{1,4}[)]?[-\s./0-9]*$/.test(formData.phone)) {
      errs.phone = 'Please enter a valid phone number'
    }

    if (!formData.message.trim()) {
      errs.message = 'Please provide a message or inquiry'
    } else if (formData.message.trim().length < 10) {
      errs.message = 'Message must be at least 10 characters long'
    }

    setErrors(errs)
    return Object.keys(errs).length === 0
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }))
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (validate()) {
      setIsSubmitting(true)
      setTimeout(() => {
        setIsSubmitting(false)
        setSubmitted(true)
        setFormData({
          name: '',
          email: '',
          phone: '',
          service: '',
          message: '',
        })
        setErrors({})
      }, 1000)
    }
  }

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-slate-900/80">
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-orange-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-xs font-mono uppercase tracking-widest text-orange-400 bg-orange-500/10 px-3 py-1 rounded-full border border-orange-500/20 font-bold">
            Get In Touch
          </span>
          <h2 className="mt-4 font-heading text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Start Your Next Mobile{' '}
            <span className="bg-gradient-to-r from-orange-400 via-amber-300 to-orange-500 bg-clip-text text-transparent">
              UI Project
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300">
            Have a question or curious about our 3D interactive design system? Drop us a message below and we will get back to you within 24 hours.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left Side: Contact Quick Info Cards */}
          <div className="lg:col-span-5 space-y-4">
            <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-slate-800 space-y-6">
              <h3 className="font-heading text-xl font-extrabold text-white flex items-center gap-2">
                <FiZap className="text-orange-400" />
                <span>Contact Channels</span>
              </h3>

              <div className="space-y-4">
                <a
                  href="mailto:hello@aura3d.studio"
                  className="flex items-start gap-4 p-4 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-orange-500/40 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center shrink-0 group-hover:bg-orange-500 group-hover:text-slate-950 transition-colors">
                    <FiMail className="w-5 h-5 text-orange-400 group-hover:text-slate-950" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 block font-mono">Email Us</span>
                    <span className="text-sm font-semibold text-white group-hover:text-orange-300 transition-colors">
                      hello@aura3d.studio
                    </span>
                  </div>
                </a>

                <a
                  href="tel:+18005550199"
                  className="flex items-start gap-4 p-4 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-orange-500/40 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center shrink-0 group-hover:bg-orange-500 group-hover:text-slate-950 transition-colors">
                    <FiPhone className="w-5 h-5 text-orange-400 group-hover:text-slate-950" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 block font-mono">Call / WhatsApp</span>
                    <span className="text-sm font-semibold text-white group-hover:text-orange-300 transition-colors">
                      +1 (800) 555-0199
                    </span>
                  </div>
                </a>

                <div className="flex items-start gap-4 p-4 rounded-2xl bg-slate-900/60 border border-slate-800">
                  <div className="w-10 h-10 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center shrink-0">
                    <FiClock className="w-5 h-5 text-orange-400" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 block font-mono">Working Hours</span>
                    <span className="text-sm font-semibold text-white">
                      Mon–Fri: 08:00 – 20:00 EST
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-2xl bg-slate-900/60 border border-slate-800">
                  <div className="w-10 h-10 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center shrink-0">
                    <FiMapPin className="w-5 h-5 text-orange-400" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 block font-mono">HQ Location</span>
                    <span className="text-sm font-semibold text-white">
                      Tech District, Suite 402, SF, CA
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Validated Contact Form */}
          <div className="lg:col-span-7">
            <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-slate-800 relative">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12 px-4"
                >
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto mb-4">
                    <FiCheckCircle className="w-8 h-8" />
                  </div>
                  <h3 className="font-heading text-2xl font-bold text-white">
                    Thank You! Message Received
                  </h3>
                  <p className="mt-2 text-sm text-slate-300 max-w-md mx-auto">
                    We have successfully logged your inquiry. Our frontend design team will get back to you within 24 hours.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-6 px-6 py-3 rounded-xl bg-orange-500 text-slate-950 font-extrabold text-sm hover:bg-orange-400 transition-colors shadow-lg shadow-orange-500/25"
                  >
                    Send Another Note
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  <h3 className="font-heading text-xl font-bold text-white mb-4">
                    Send Us a Message
                  </h3>

                  {/* Name Input */}
                  <div>
                    <label className="block text-xs font-mono text-slate-300 uppercase tracking-wider mb-2 font-bold">
                      Full Name <span className="text-rose-400">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Alex Morgan"
                      className={`w-full px-4 py-3.5 rounded-xl bg-slate-950/80 border text-slate-100 text-sm focus:outline-none focus:ring-2 transition-all ${
                        errors.name
                          ? 'border-rose-500 focus:ring-rose-500/30'
                          : 'border-slate-800 focus:border-orange-500 focus:ring-orange-500/30'
                      }`}
                    />
                    {errors.name && (
                      <p className="mt-1.5 text-xs text-rose-400 flex items-center gap-1 font-medium">
                        <FiAlertCircle className="shrink-0" />
                        <span>{errors.name}</span>
                      </p>
                    )}
                  </div>

                  {/* Email & Phone Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Email */}
                    <div>
                      <label className="block text-xs font-mono text-slate-300 uppercase tracking-wider mb-2 font-bold">
                        Email Address <span className="text-rose-400">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="alex@company.com"
                        className={`w-full px-4 py-3.5 rounded-xl bg-slate-950/80 border text-slate-100 text-sm focus:outline-none focus:ring-2 transition-all ${
                          errors.email
                            ? 'border-rose-500 focus:ring-rose-500/30'
                            : 'border-slate-800 focus:border-orange-500 focus:ring-orange-500/30'
                        }`}
                      />
                      {errors.email && (
                        <p className="mt-1.5 text-xs text-rose-400 flex items-center gap-1 font-medium">
                          <FiAlertCircle className="shrink-0" />
                          <span>{errors.email}</span>
                        </p>
                      )}
                    </div>

                    {/* Phone */}
                    <div>
                      <label className="block text-xs font-mono text-slate-300 uppercase tracking-wider mb-2 font-bold">
                        Phone Number <span className="text-slate-500 font-normal lowercase">(optional)</span>
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+1 (555) 000-0000"
                        className={`w-full px-4 py-3.5 rounded-xl bg-slate-950/80 border text-slate-100 text-sm focus:outline-none focus:ring-2 transition-all ${
                          errors.phone
                            ? 'border-rose-500 focus:ring-rose-500/30'
                            : 'border-slate-800 focus:border-orange-500 focus:ring-orange-500/30'
                        }`}
                      />
                      {errors.phone && (
                        <p className="mt-1.5 text-xs text-rose-400 flex items-center gap-1 font-medium">
                          <FiAlertCircle className="shrink-0" />
                          <span>{errors.phone}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Selected Package Selector */}
                  <div>
                    <label className="block text-xs font-mono text-slate-300 uppercase tracking-wider mb-2 font-bold">
                      Interested Service / Package
                    </label>
                    <input
                      type="text"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      placeholder="e.g. Skiper32 Spatial Engine or Custom Work"
                      className="w-full px-4 py-3.5 rounded-xl bg-slate-950/80 border border-slate-800 text-slate-100 text-sm focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/30"
                    />
                  </div>

                  {/* Message Input */}
                  <div>
                    <label className="block text-xs font-mono text-slate-300 uppercase tracking-wider mb-2 font-bold">
                      Message <span className="text-rose-400">*</span>
                    </label>
                    <textarea
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your project requirements, target timeline, or inquiry..."
                      className={`w-full px-4 py-3.5 rounded-xl bg-slate-950/80 border text-slate-100 text-sm focus:outline-none focus:ring-2 transition-all ${
                        errors.message
                          ? 'border-rose-500 focus:ring-rose-500/30'
                          : 'border-slate-800 focus:border-orange-500 focus:ring-orange-500/30'
                      }`}
                    />
                    {errors.message && (
                      <p className="mt-1.5 text-xs text-rose-400 flex items-center gap-1 font-medium">
                        <FiAlertCircle className="shrink-0" />
                        <span>{errors.message}</span>
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 px-6 rounded-xl bg-gradient-to-r from-orange-500 via-amber-500 to-orange-400 hover:from-orange-400 hover:to-amber-400 text-slate-950 font-extrabold text-base shadow-xl shadow-orange-500/25 flex items-center justify-center gap-2 cursor-pointer transition-all active:scale-[0.99] disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span>Validating & Sending...</span>
                    ) : (
                      <>
                        <span>Submit Inquiry</span>
                        <FiSend className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

