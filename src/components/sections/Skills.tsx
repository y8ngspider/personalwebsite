import { skillGroups } from '../../data/skills'

export default function Skills() {
  return (
    <section id="skills" className="py-20 border-b border-gray-100">
      <h2 className="text-xs font-semibold text-gray-400 tracking-widest uppercase mb-8">
        Skills
      </h2>
      <div className="grid sm:grid-cols-2 gap-8">
        {skillGroups.map((group) => (
          <div key={group.category}>
            <h3 className="text-sm font-semibold text-gray-900 mb-3">
              {group.category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <span
                  key={skill}
                  className="text-sm text-gray-600 bg-gray-100 rounded-md px-3 py-1"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
