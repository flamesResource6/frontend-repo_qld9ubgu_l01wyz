import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 pt-28 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-slate-900">
            Building modern web experiences.
          </h1>
          <p className="mt-4 text-lg text-slate-600">
            I craft delightful, performant interfaces powered by clean code and thoughtful design. Explore my work, skills, and get in touch.
          </p>
          <div className="mt-8 flex items-center gap-3">
            <a href="#projects" className="px-5 py-3 rounded-lg bg-slate-900 text-white font-medium hover:bg-slate-800 transition-colors">View Projects</a>
            <a href="#contact" className="px-5 py-3 rounded-lg bg-white text-slate-900 font-medium shadow hover:shadow-md transition-shadow">Contact Me</a>
          </div>
        </motion.div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  )
}
