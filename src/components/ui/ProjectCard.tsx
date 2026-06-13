import type { Project } from '../../types'

interface Props {
  project: Project
}

export default function ProjectCard({ project }: Props) {
  return (
    <div className="border border-stone-200 rounded-lg p-5 flex flex-col bg-white/40 hover:border-clay/50 transition-colors">
      <div className="flex items-start justify-between gap-2 mb-2">
        <h3 className="font-semibold text-ink">{project.title}</h3>
        <span className="text-xs text-clay border border-clay/30 rounded px-2 py-0.5 whitespace-nowrap">
          {project.category}
        </span>
      </div>
      <p className="text-sm text-stone-600 leading-relaxed mb-4 flex-1">
        {project.description}
      </p>
      <div className="flex flex-wrap gap-1.5 mb-4">
        {project.techStack.map((tech) => (
          <span
            key={tech}
            className="text-xs text-stone-500 bg-stone-100 rounded px-2 py-0.5"
          >
            {tech}
          </span>
        ))}
      </div>
      <div className="flex gap-4 text-sm">
        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="text-stone-700 hover:text-clay transition-colors"
          >
            GitHub →
          </a>
        )}
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noreferrer"
            className="text-stone-700 hover:text-clay transition-colors"
          >
            Live →
          </a>
        )}
      </div>
    </div>
  )
}
