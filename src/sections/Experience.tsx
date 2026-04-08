import { experienceData } from "../data/experience";

const Experience = () => {
  return (
    <section id="experience" className="pb-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-baseline gap-6 mb-14">
          <h2 className="text-4xl font-bold tracking-tight">Experience</h2>
          <div className="flex-1 h-px bg-[var(--border)]" />
        </div>

        <div className="divide-y divide-[var(--border)]">
          {experienceData.map((exp) => {
            const isCurrent = exp.duration.includes("Present");
            return (
              <div
                key={exp.role}
                className="py-10 flex flex-col sm:flex-row gap-6 sm:gap-12"
              >
                <div className="sm:w-48 shrink-0">
                  <p className="text-xs font-mono text-[var(--text-muted)] leading-relaxed">
                    {exp.duration.replace(" – ", "\n–\n")}
                  </p>
                  {isCurrent && (
                    <div className="mt-2 flex items-center gap-1.5">
                      <span className="h-1.5 w-1.5 rounded-full bg-green-500 animate-pulse" />
                      <span className="text-xs text-green-500 font-medium">
                        Current
                      </span>
                    </div>
                  )}
                </div>

                <div className="flex-1">
                  <h3 className="text-lg font-semibold">{exp.role}</h3>
                  <p className="text-sm text-[var(--text-muted)] mt-1">
                    {exp.company}
                    {exp.location && <span> · {exp.location}</span>}
                  </p>

                  <ul className="mt-5 space-y-3">
                    {exp.points.map((point) => (
                      <li
                        key={point}
                        className="flex gap-4 text-sm text-[var(--text-muted)] leading-relaxed"
                      >
                        <span className="mt-[7px] h-px w-4 bg-[var(--accent)] shrink-0" />
                        {point}
                      </li>
                    ))}
                  </ul>

                  {exp.tech && (
                    <div className="mt-6 flex flex-wrap gap-x-4 gap-y-1">
                      {exp.tech.map((item) => (
                        <span
                          key={item}
                          className="text-xs font-mono text-[var(--text-muted)]"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Experience;
