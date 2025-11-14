import { motion } from 'framer-motion'

export default function Section({ id, eyebrow, title, children }) {
  return (
    <section id={id} className="relative py-24">
      <div className="mx-auto max-w-7xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <p className="text-sm uppercase tracking-widest text-blue-600 font-semibold">{eyebrow}</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mt-2">{title}</h2>
        </motion.div>
        {children}
      </div>
    </section>
  )
}
