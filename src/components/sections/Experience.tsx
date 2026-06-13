import { experiences } from '../../data/experience'
import ExperienceItem from '../ui/ExperienceItem'

export default function Experience() {
  return (
    <section
      id="experience"
      className="border border-stone-200 bg-white/50 rounded-xl p-8 sm:p-10 scroll-mt-24"
    >
      <div className="grid gap-6 sm:grid-cols-[140px_1fr] sm:gap-10">
        <h2 className="text-xs font-semibold text-clay tracking-widest uppercase sm:pt-1">
          Experience
        </h2>
        <div className="relative border-l border-stone-200 ml-1">
          {experiences.map((exp) => (
            <ExperienceItem key={exp.id} experience={exp} />
          ))}
        </div>
      </div>
    </section>
  )
}
