import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Hero from './components/sections/Hero'
import About from './components/sections/About'
import Experience from './components/sections/Experience'

export default function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <main className="max-w-4xl mx-auto px-6 pt-14">
        <Hero />
        <About />
        <Experience />
        <section id="projects" className="py-20 border-b border-gray-100">
          <p className="text-gray-400 text-sm">Projects — coming soon</p>
        </section>
        <section id="skills" className="py-20 border-b border-gray-100">
          <p className="text-gray-400 text-sm">Skills — coming soon</p>
        </section>
        <section id="blog" className="py-20">
          <p className="text-gray-400 text-sm">Blog — coming soon</p>
        </section>
      </main>
      <Footer />
    </div>
  )
}
