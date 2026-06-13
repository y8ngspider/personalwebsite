import Hero from '../components/sections/Hero'
import About from '../components/sections/About'
import Experience from '../components/sections/Experience'
import Projects from '../components/sections/Projects'
import Skills from '../components/sections/Skills'
import Blog from '../components/sections/Blog'

export default function Home() {
  return (
    <main className="max-w-4xl mx-auto px-6 pt-14">
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Blog />
    </main>
  )
}
