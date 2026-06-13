import type { Experience } from '../../types'

interface Props {
  experience: Experience
}

export default function ExperienceItem({ experience }: Props) {
  return (
    <div className="relative pl-8 pb-8 last:pb-0">
      {/* timeline dot, centered on the parent's left border */}
      <span className="absolute left-0 top-2 -translate-x-1/2 w-2.5 h-2.5 rounded-full bg-gray-400 ring-4 ring-white" />

      <div className="border border-gray-200 rounded-lg p-4 hover:border-gray-400 transition-colors">
        <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-1">
          <h3 className="font-semibold text-gray-900">
            {experience.role}{' '}
            <span className="font-normal text-gray-500">· {experience.company}</span>
          </h3>
          <span className="text-sm text-gray-400 whitespace-nowrap">
            {experience.startDate} – {experience.endDate}
          </span>
        </div>

        <p className="text-sm text-gray-600 leading-relaxed mb-3">{experience.summary}</p>

        <div className="flex flex-wrap gap-1.5">
          {experience.tags.map((tag) => (
            <span key={tag} className="text-xs text-gray-500 bg-gray-100 rounded px-2 py-0.5">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
