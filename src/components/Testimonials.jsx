import { motion } from 'framer-motion'
import { FiStar } from 'react-icons/fi'

const testimonials = [
  {
    id: 1,
    name: 'Elena Rostova',
    role: 'Product Lead @ TechFlow',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80',
    rating: 5,
    quote:
      'The 3D scroll animations in Skiper32 completely elevated our product launch. Our mobile conversion rates shot up by 42% within the first week of deployment!',
    tag: 'Mobile Conversion',
  },
  {
    id: 2,
    name: 'Marcus Chen',
    role: 'Senior Frontend Architect',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80',
    rating: 5,
    quote:
      'Clean, organized, and remarkably smooth even on low-end budget smartphones. The responsive drawer and form validation work flawlessly.',
    tag: 'Code Quality',
  },
  {
    id: 3,
    name: 'Sarah Jenkins',
    role: 'Creative Director @ Studio Nine',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=300&q=80',
    rating: 5,
    quote:
      'The mobile-first design approach is evident in every single pixel. From 320px screen width up to full desktop, the UI feels custom built.',
    tag: 'Design System',
  },
  {
    id: 4,
    name: 'David Thorne',
    role: 'Founder @ Voxel Dynamics',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80',
    rating: 5,
    quote:
      'Implementing 3D transforms without causing scroll jank on mobile web browsers is extremely tough. AURA3D achieved 60 FPS smoothly.',
    tag: '3D Performance',
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 relative overflow-hidden bg-slate-950">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-xs font-mono uppercase tracking-widest text-indigo-400 bg-indigo-500/10 px-3 py-1 rounded-full border border-indigo-500/20">
            Community Feedback
          </span>
          <h2 className="mt-4 font-heading text-3xl sm:text-5xl font-bold text-white tracking-tight">
            Loved by Developers &{' '}
            <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Design Leaders
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-400">
            Read what digital creators say about our responsive mobile UI components and interactive 3D scroll experiences.
          </p>
        </div>

        {/* Testimonial Cards Grid for Desktop + Interactive Slider for Mobile */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {testimonials.map((item, idx) => (
            <motion.article
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass-card glass-card-hover p-6 sm:p-8 rounded-3xl relative flex flex-col justify-between border border-slate-800"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  {/* Star Rating */}
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(item.rating)].map((_, i) => (
                      <FiStar key={i} className="fill-amber-400 w-4 h-4" />
                    ))}
                  </div>

                  <span className="px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-300 border border-indigo-500/20 text-xs font-mono">
                    {item.tag}
                  </span>
                </div>

                {/* Quote */}
                <blockquote className="text-base sm:text-lg text-slate-200 leading-relaxed italic font-normal">
                  "{item.quote}"
                </blockquote>
              </div>

              {/* Author Profile */}
              <div className="mt-8 pt-6 border-t border-slate-800/80 flex items-center gap-4">
                <img
                  src={item.avatar}
                  alt={item.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-indigo-500/40"
                />
                <div>
                  <h4 className="font-heading font-bold text-white text-base">
                    {item.name}
                  </h4>
                  <p className="text-xs text-slate-400 mt-0.5">{item.role}</p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
