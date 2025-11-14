import { motion } from 'framer-motion'
import Section from './Section'

export default function Contact() {
  return (
    <Section id="contact" eyebrow="Contact" title="Let's work together">
      <div className="grid md:grid-cols-2 gap-8">
        <motion.form
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          onSubmit={(e) => e.preventDefault()}
          className="p-6 rounded-2xl bg-white shadow-sm border border-slate-100"
        >
          <div className="grid gap-4">
            <input className="w-full rounded-md border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600" placeholder="Your name" />
            <input className="w-full rounded-md border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600" placeholder="Email address" />
            <textarea className="w-full rounded-md border border-slate-300 px-3 py-2 h-32 focus:outline-none focus:ring-2 focus:ring-blue-600" placeholder="Project details" />
          </div>
          <button className="mt-5 px-5 py-3 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors">Send message</button>
        </motion.form>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl p-6 bg-gradient-to-br from-blue-50 to-purple-50"
        >
          <p className="text-slate-700 text-lg">Want something unique? I can blend motion, 3D, and delightful UX to bring your product to life. Reach out and let's discuss your idea.</p>
        </motion.div>
      </div>
    </Section>
  )
}
