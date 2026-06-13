import type { Experience } from '../../types'

interface Props {
  experience: Experience
}

export default function ExperienceItem({ experience }: Props) {
  return (
    <div className="relative pl-8 pb-8 last:pb-0">
      {/* timeline dot, centered on the parent's left border */}
      <span className="absolute left-0 top-2 -translate-x-1/2 w-2.5 h-2.5 rounded-full bg-clay ring-4 ring-cream" />

      <div className="border border-stone-200 rounded-lg p-4 bg-white/40 hover:border-clay/50 transition-colors">
        <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-1">
          <h3 className="font-semibold text-ink">
            {experience.role}{' '}
            <span className="font-normal text-stone-500">· {experience.company}</span>
          </h3>
          <span className="text-sm text-stone-400 whitespace-nowrap">
            {experience.startDate} – {experience.endDate}
          </span>
        </div>

        <p className="text-sm text-stone-600 leading-relaxed mb-3">{experience.summary}</p>

        <div className="flex flex-wrap gap-1.5">
          {experience.tags.map((tag) => (
            <span key={tag} className="text-xs text-stone-500 bg-stone-100 rounded px-2 py-0.5">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
