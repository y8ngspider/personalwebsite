import type { Experience } from '../../types'

interface Props {
  experience: Experience
}

export default function ExperienceItem({ experience }: Props) {
  return (
    <div className="py-6 border-b border-gray-100 last:border-0">
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-3">
        <div>
          <h3 className="font-semibold text-gray-900">{experience.role}</h3>
          <p className="text-gray-500 text-sm">{experience.company} · {experience.location}</p>
        </div>
        <span className="text-sm text-gray-400 whitespace-nowrap">
          {experience.startDate} – {experience.endDate}
        </span>
      </div>
      <ul className="space-y-1.5">
        {experience.bullets.map((bullet, index) => (
          <li key={index} className="text-sm text-gray-600 leading-relaxed flex gap-2">
            <span className="text-gray-300 mt-1 shrink-0">–</span>
            <span>{bullet}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
