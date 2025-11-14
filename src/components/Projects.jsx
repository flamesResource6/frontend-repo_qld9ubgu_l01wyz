import { motion } from 'framer-motion'
import Section from './Section'

const projects = [
  {
    title: 'E-commerce UI',
    desc: 'High-performance storefront with animations and cart.',
    tags: ['React', 'Stripe', 'Framer Motion'],
    link: '#'
  },
  {
    title: '3D Landing',
    desc: 'Three.js powered hero with interactive elements.',
    tags: ['Three.js', 'GLTF', 'React'],
    link: '#'
  },
  {
    title: 'Dashboard',
    desc: 'SaaS dashboard with real-time charts and theming.',
    tags: ['Next.js', 'Tailwind', 'Charts'],
    link: '#'
  },
]

export default function Projects() {
  return (
    <Section id="projects" eyebrow="Work" title="Selected projects">
      <div className="grid md:grid-cols-3 gap-6">
        {projects.map((p, i) => (
          <motion.a
            key={p.title}
            href={p.link}
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.05 * i }}
            className="group relative rounded-2xl border border-slate-200 bg-white p-5 shadow-sm overflow-hidden"
          >
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-br from-blue-50 to-purple-50"/>
            <h3 className="relative z-10 text-xl font-semibold text-slate-900">{p.title}</h3>
            <p className="relative z-10 mt-2 text-slate-600">{p.desc}</p>
            <div className="relative z-10 mt-4 flex flex-wrap gap-2">
              {p.tags.map((t) => (
                <span key={t} className="text-xs px-2 py-1 rounded-md bg-slate-100 text-slate-700">{t}</span>
              ))}
            </div>
            <motion.div
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.03 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              className="relative z-10 mt-6 h-36 rounded-lg bg-gradient-to-br from-slate-100 to-slate-200"
            />
          </motion.a>
        ))}
      </div>
    </Section>
  )
}
