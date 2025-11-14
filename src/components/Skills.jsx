import { motion } from 'framer-motion'
import Section from './Section'

const skills = [
  { name: 'React', level: 95 },
  { name: 'TypeScript', level: 85 },
  { name: 'Node.js', level: 88 },
  { name: 'Tailwind CSS', level: 92 },
  { name: 'Framer Motion', level: 90 },
  { name: 'Three.js', level: 70 },
]

export default function Skills() {
  return (
    <Section id="skills" eyebrow="Skills" title="What I work with">
      <div className="grid md:grid-cols-2 gap-8">
        {skills.map((s, i) => (
          <motion.div
            key={s.name}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.05 * i }}
            className="p-5 rounded-xl bg-white shadow-sm border border-slate-100"
          >
            <div className="flex items-center justify-between mb-2">
              <p className="font-medium text-slate-800">{s.name}</p>
              <p className="text-slate-500 text-sm">{s.level}%</p>
            </div>
            <div className="h-2 rounded-full bg-slate-100 overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${s.level}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1.1, ease: 'easeOut' }}
                className="h-full rounded-full bg-gradient-to-r from-blue-600 to-purple-600"
              />
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  )
}
