import React from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Skills } from './components/Skills'
import { Projects } from './components/Projects'
import { Timeline } from './components/Timeline'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'

function App() {
  return (
    <main className="min-h-screen bg-canvas text-ink relative overflow-hidden">
      
      {/* Prismatic Mesh Gradients (Low Opacity) */}
      <div className="absolute top-0 left-0 -translate-x-1/4 -translate-y-1/4 w-[120vw] h-[120vh] pointer-events-none opacity-[0.15] blur-[120px] mix-blend-multiply bg-gradient-radial from-sky-300 via-rose-300 to-transparent -z-10" />
      <div className="absolute top-[40%] right-0 translate-x-1/4 w-[100vw] h-[100vh] pointer-events-none opacity-[0.15] blur-[100px] mix-blend-multiply bg-gradient-radial from-amber-200 via-teal-200 to-transparent -z-10" />

      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Timeline />
      <Contact />
      <Footer />
    </main>
  )
}

export default App
