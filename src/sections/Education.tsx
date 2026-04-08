import { educationData } from "../data/education";

const Education = () => {
  return (
    <section id="education" className="pb-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-baseline gap-6 mb-14">
          <h2 className="text-4xl font-bold tracking-tight">Education</h2>
          <div className="flex-1 h-px bg-[var(--border)]" />
        </div>

        <div className="flex flex-col sm:flex-row gap-6 sm:gap-12 py-4">
          <div className="sm:w-48 shrink-0">
            <p className="text-xs font-mono text-[var(--text-muted)]">
              {educationData.duration}
            </p>
            <p className="text-xs text-[var(--text-muted)] mt-1">
              {educationData.location}
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold">{educationData.degree}</h3>
            <p className="text-sm text-[var(--text-muted)] mt-1">
              {educationData.institution}
            </p>
            {educationData.cgpa && (
              <p className="mt-3 text-sm">
                <span className="text-[var(--text-muted)]">CGPA </span>
                <span className="font-semibold text-[var(--accent)]">
                  {educationData.cgpa}
                </span>
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
