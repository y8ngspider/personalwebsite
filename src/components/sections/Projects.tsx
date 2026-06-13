import { useState } from 'react'
import { projects } from '../../data/projects'
import ProjectCard from '../ui/ProjectCard'

const categories = ['All', 'SWE', 'Finance'] as const

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState<string>('All')

  const filteredProjects =
    activeCategory === 'All'
      ? projects
      : projects.filter((project) => project.category === activeCategory)

  return (
    <section id="projects" className="py-20 border-b border-stone-200">
      <h2 className="text-xs font-semibold text-clay tracking-widest uppercase mb-8">
        Projects
      </h2>

      <div className="flex gap-2 mb-8">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={
              activeCategory === category
                ? 'px-3 py-1.5 text-sm rounded-md bg-clay text-cream'
                : 'px-3 py-1.5 text-sm rounded-md border border-stone-300 text-stone-600 hover:border-clay hover:text-clay transition-colors'
            }
          >
            {category}
          </button>
        ))}
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  )
}
