import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <main className="max-w-4xl mx-auto px-6 pt-24">
        <section id="hero" className="py-20 border-b border-gray-100">
          <p className="text-gray-400 text-sm">Hero — coming soon</p>
        </section>
        <section id="about" className="py-20 border-b border-gray-100">
          <p className="text-gray-400 text-sm">About — coming soon</p>
        </section>
        <section id="experience" className="py-20 border-b border-gray-100">
          <p className="text-gray-400 text-sm">Experience — coming soon</p>
        </section>
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
