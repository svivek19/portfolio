import { skillsData } from "../data/skills";

const Skills = () => {
  return (
    <section id="skills" className="pb-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-end justify-between mb-12">
          <div>
            <p className="text-xs font-semibold text-[var(--accent)] tracking-widest uppercase mb-2">
              Tech Stack
            </p>
            <h2 className="text-3xl font-bold tracking-tight">Skills</h2>
          </div>
          <p className="hidden sm:block text-sm text-[var(--text-muted)] max-w-xs text-right">
            Tools and technologies I use to build products
          </p>
        </div>

        <div className="space-y-4">
          {skillsData.map((category) => {
            const Icon = category.icon;
            return (
              <div
                key={category.title}
                className="group flex flex-col sm:flex-row sm:items-center gap-4 p-5 rounded-2xl border border-[var(--border)] bg-[var(--card)] hover:border-[var(--accent)]/40 transition-all"
              >
                <div className="flex items-center gap-4 sm:w-52 shrink-0">
                  <div className="w-9 h-9 rounded-xl bg-[var(--accent)]/10 flex items-center justify-center shrink-0">
                    <Icon size={16} className="text-[var(--accent)]" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold leading-tight">
                      {category.title}
                    </p>
                    <p className="text-xs text-[var(--text-muted)] mt-0.5 leading-snug hidden sm:block">
                      {category.description}
                    </p>
                  </div>
                </div>

                <div className="sm:border-l border-[var(--border)] sm:pl-6 flex flex-wrap gap-2 flex-1">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 rounded-full text-xs font-medium border border-[var(--border)] text-[var(--text-muted)] hover:border-[var(--accent)] hover:text-[var(--accent)] transition cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
