import { motion } from 'framer-motion'
import Section from './Section'

export default function About() {
  return (
    <Section id="about" eyebrow="About" title="A bit about me">
      <div className="grid md:grid-cols-2 gap-10 items-center">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-slate-600 text-lg leading-relaxed"
        >
          I'm a web developer focused on building sleek, accessible, and high-performing products. I love blending motion, 3D, and delightful micro-interactions to tell stories and improve UX. When I'm not coding, I'm learning new tools and sharing knowledge.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl bg-gradient-to-br from-blue-50 to-purple-50 p-1"
        >
          <div className="rounded-2xl p-6 bg-white shadow-sm">
            <ul className="grid grid-cols-2 gap-3 text-slate-700">
              {['React', 'Next.js', 'TypeScript', 'Node.js', 'Tailwind', 'Three.js'].map((s) => (
                <li key={s} className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-blue-600"></span>
                  {s}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </Section>
  )
}
