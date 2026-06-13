import { experiences } from '../../data/experience'
import ExperienceItem from '../ui/ExperienceItem'

export default function Experience() {
  return (
    <section id="experience" className="py-20 border-b border-gray-100">
      <h2 className="text-xs font-semibold text-gray-400 tracking-widest uppercase mb-8">
        Experience
      </h2>
      <div className="relative border-l border-gray-200 ml-1">
        {experiences.map((exp) => (
          <ExperienceItem key={exp.id} experience={exp} />
        ))}
      </div>
    </section>
  )
}
