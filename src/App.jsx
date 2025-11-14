import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'

function App() {
  return (
    <div className="bg-white text-slate-900">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <footer className="py-10">
        <div className="mx-auto max-w-7xl px-4 text-sm text-slate-500">
          © {new Date().getFullYear()} Your Name. All rights reserved.
        </div>
      </footer>
    </div>
  )
}

export default App
