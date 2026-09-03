import { motion } from 'framer-motion'

export default function FeatureCard({ icon: Icon, title, description, badge, delay = 0, onClick }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -6 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className="glass-card glass-card-hover p-6 sm:p-8 rounded-3xl relative overflow-hidden flex flex-col justify-between group cursor-pointer border border-slate-800 hover:border-orange-500/50"
    >
      {/* Top Accent Line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 via-amber-500 to-orange-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <div>
        <div className="flex items-center justify-between mb-5">
          <div className="w-12 h-12 rounded-2xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center group-hover:bg-orange-500 group-hover:border-orange-400 group-hover:shadow-lg group-hover:shadow-orange-500/30 transition-all duration-300">
            <Icon className="w-6 h-6 text-orange-400 group-hover:text-slate-950 transition-colors" />
          </div>

          {badge && (
            <span className="px-3 py-1 rounded-full text-[11px] font-mono font-bold bg-slate-900 text-orange-300 border border-orange-500/30">
              {badge}
            </span>
          )}
        </div>

        <h3 className="font-heading text-xl font-bold text-white group-hover:text-orange-300 transition-colors">
          {title}
        </h3>

        <p className="mt-3 text-sm text-slate-300 leading-relaxed font-normal">
          {description}
        </p>
      </div>

      <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs font-bold text-orange-400 group-hover:text-orange-300">
        <span>Click for Details</span>
        <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
      </div>
    </motion.article>
  )
}

