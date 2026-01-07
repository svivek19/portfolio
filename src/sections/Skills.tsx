import { skillsData } from "../data/skills";

const Skills = () => {
  return (
    <section id="skills" className="pb-24">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-semibold tracking-tight">Skills</h2>
        <p className="mt-2 text-[--text-muted]">
          Tools and technologies I use to build products
        </p>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-8">
          {skillsData.map((category) => {
            const Icon = category.icon;

            return (
              <div
                key={category.title}
                className="
                  rounded-2xl
                  border border-[var(--border)]
                  bg-[var(--card)]
                  p-6
                  flex flex-col
                "
              >
                <div className="flex items-start gap-3">
                  <div className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[var(--accent)]/12">
                    <Icon size={18} className="text-[var(--accent)]" />
                  </div>

                  <div>
                    <h3 className="text-base font-semibold leading-tight">
                      {category.title}
                    </h3>
                    <p className="mt-1 text-sm text-[var(--text-muted)] leading-snug">
                      {category.description}
                    </p>
                  </div>
                </div>

                <div className="mt-4 flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="
                        inline-flex items-center
                        rounded-full
                        px-3 py-1
                        text-xs
                        font-medium
                        bg-[var(--card)]
                        text-[var(--text)]
                        border border-[var(--border)]
                        transition
                        hover:border-[var(--accent)]
                        hover:text-[var(--accent)]"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                <div className="flex-1" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
