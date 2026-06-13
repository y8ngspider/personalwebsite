import { skillGroups } from '../../data/skills'

export default function Skills() {
  return (
    <section id="skills" className="border border-stone-200 bg-white/50 rounded-xl p-8 sm:p-10">
      <h2 className="text-xs font-semibold text-clay tracking-widest uppercase mb-8">
        Skills
      </h2>
      <div className="grid sm:grid-cols-2 gap-8">
        {skillGroups.map((group) => (
          <div key={group.category}>
            <h3 className="text-base font-semibold text-ink mb-3">
              {group.category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <span
                  key={skill}
                  className="text-sm text-stone-600 bg-stone-100 rounded-md px-3 py-1"
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
