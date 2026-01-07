import { educationData } from "../data/education";

const Education = () => {
  return (
    <section id="education" className="pb-24">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-semibold tracking-tight">Education</h2>

        <div className="mt-10 max-w-3xl">
          <p className="text-lg font-medium">{educationData.degree}</p>

          <p className="mt-1 text-sm text-[var(--text-muted)]">
            {educationData.institution}
          </p>

          <div className="mt-2 flex flex-wrap gap-4 text-sm text-[var(--text-muted)]">
            <span>{educationData.duration}</span>
            <span>•</span>
            <span>{educationData.location}</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
