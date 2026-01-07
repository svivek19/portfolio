import { experienceData } from "../data/experience";

const Experience = () => {
  return (
    <section id="experience" className="pb-24">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-semibold tracking-tight">Experience</h2>
        <p className="mt-2 text-[var(--text-muted)]">
          Professional experience and responsibilities
        </p>

        <div className="mt-12 space-y-14">
          {experienceData.map((exp) => (
            <div key={exp.role} className="relative pl-6">
              <span className="absolute left-0 top-2 h-2.5 w-2.5 rounded-full bg-[var(--accent)]" />

              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                <h3 className="text-lg font-semibold">{exp.role}</h3>
                <span className="text-sm text-[var(--text-muted)]">
                  {exp.duration}
                </span>
              </div>

              <p className="mt-1 text-sm font-medium">
                {exp.company}
                {exp.location && (
                  <span className="text-[var(--text-muted)]">
                    {" "}
                    • {exp.location}
                  </span>
                )}
              </p>

              <ul className="mt-4 space-y-2 text-sm text-[var(--text-muted)] leading-relaxed">
                {exp.points.map((point) => (
                  <li key={point}>• {point}</li>
                ))}
              </ul>

              {exp.tech && (
                <div className="mt-4 flex flex-wrap gap-2">
                  {exp.tech.map((item) => (
                    <span
                      key={item}
                      className="
                        px-3 py-1
                        text-xs font-medium
                        text-[var(--text-muted)]
                        border border-[var(--border)]
                        rounded-md
                        transition
                        hover:border-[var(--accent)]
                        hover:text-[var(--accent)]
                      "
                    >
                      {item}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
