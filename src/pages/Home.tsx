import Hero from '../components/sections/Hero'
import Experience from '../components/sections/Experience'
import Projects from '../components/sections/Projects'
import Skills from '../components/sections/Skills'

export default function Home() {
  return (
    <main className="max-w-4xl mx-auto px-6 pt-14">
      <Hero />
      <Experience />
      <Projects />
      <Skills />
    </main>
  )
}
