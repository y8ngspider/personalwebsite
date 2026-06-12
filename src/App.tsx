import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Hero from './components/sections/Hero'
import About from './components/sections/About'
import Experience from './components/sections/Experience'
import Projects from './components/sections/Projects'
import Skills from './components/sections/Skills'
import Blog from './components/sections/Blog'

export default function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <main className="max-w-4xl mx-auto px-6 pt-14">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Blog />
      </main>
      <Footer />
    </div>
  )
}
