import { motion } from 'framer-motion'
import { FiArrowUpRight, FiCheckCircle, FiClock, FiStar } from 'react-icons/fi'
import { Link } from 'react-router-dom'

export default function ServiceCard({ service }) {
  const { id, title, category, description, price, duration, image, rating, popular, features } = service

  return (
    <motion.article
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.4 }}
      className="glass-card rounded-3xl overflow-hidden border border-slate-800 flex flex-col justify-between group hover:border-orange-500/50 hover:shadow-2xl hover:shadow-orange-500/20 transition-all duration-300 relative"
    >
      {/* Popular Badge */}
      {popular && (
        <div className="absolute top-4 right-4 z-20 px-3 py-1 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 text-slate-950 font-extrabold text-xs shadow-lg shadow-orange-500/20 uppercase tracking-wider">
          ★ Popular Choice
        </div>
      )}

      <Link to={`/service/${id}`} className="block">
        {/* Card Image */}
        <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-slate-950">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
          
          <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between z-10">
            <span className="px-3 py-1 rounded-full bg-slate-900/85 backdrop-blur-md border border-slate-700 text-xs font-mono text-orange-300 font-semibold">
              {category}
            </span>
            <div className="flex items-center gap-1 text-amber-400 bg-slate-900/85 backdrop-blur-md px-2.5 py-1 rounded-full text-xs font-semibold border border-slate-700">
              <FiStar className="fill-amber-400 w-3.5 h-3.5" />
              <span>{rating}</span>
            </div>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6">
          <div className="flex items-baseline justify-between gap-2">
            <h3 className="font-heading text-xl font-bold text-white group-hover:text-orange-300 transition-colors">
              {title}
            </h3>
          </div>

          <div className="mt-2 flex items-center gap-2 text-slate-400 text-xs font-medium">
            <FiClock className="w-3.5 h-3.5 text-orange-400" />
            <span>{duration}</span>
          </div>

          <p className="mt-3 text-sm text-slate-300 line-clamp-2 font-normal leading-relaxed">
            {description}
          </p>

          <ul className="mt-4 space-y-2 border-t border-slate-800/80 pt-4">
            {features.slice(0, 3).map((feat, idx) => (
              <li key={idx} className="flex items-center gap-2 text-xs text-slate-300">
                <FiCheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>{feat}</span>
              </li>
            ))}
          </ul>
        </div>
      </Link>

      {/* Footer & CTA */}
      <div className="px-6 pb-6 pt-2 flex items-center justify-between border-t border-slate-800/50 mt-2">
        <div>
          <span className="text-xs text-slate-400 block font-mono">Starting at</span>
          <span className="text-2xl font-bold text-white font-heading">{price}</span>
        </div>

        <Link
          to={`/service/${id}`}
          className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-400 hover:to-amber-400 text-slate-950 font-extrabold text-xs sm:text-sm shadow-md shadow-orange-500/25 active:scale-95 transition-all cursor-pointer"
        >
          <span>View Separate Page</span>
          <FiArrowUpRight className="w-4 h-4" />
        </Link>
      </div>
    </motion.article>
  )
}

