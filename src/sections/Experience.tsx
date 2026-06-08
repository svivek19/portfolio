import { experienceData } from "../data/experience";
import { ArrowRight } from "lucide-react";

const Experience = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="experience" className="py-20 md:py-24 border-b border-[#f1f5f9]">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 mb-16 items-start">
        {/* Left Headline & Call to Action */}
        <div className="md:col-span-5">
          <h2 className="text-[#0f172a] text-3xl font-light tracking-tight leading-tight mb-4">
            Experiences with <span className="serif-font font-normal text-[#475569]">Passion, Precision,</span> and Purpose
          </h2>
          <p className="text-[#64748b] text-sm leading-relaxed mb-8 max-w-[400px]">
            Where every line of code tells a story: crafting tailored systems with expertise in MERN stack architecture, database performance, and instant synchronizations to elevate your digital products.
          </p>
          <button
            onClick={() => scrollTo("contact")}
            className="btn-pill btn-pill-primary text-sm font-medium flex items-center gap-2"
          >
            Let's Talk <ArrowRight size={14} />
          </button>
        </div>

        {/* Right Work Timeline list */}
        <div className="md:col-span-7 flex flex-col gap-2">
          {experienceData.map((exp, idx) => (
            <div key={idx} className="exp-row">
              {/* Left Meta */}
              <div>
                <span className="text-[11px] font-semibold tracking-wider text-[#0066ff] uppercase block mb-1">
                  {exp.duration}
                </span>
                <h4 className="text-base font-semibold text-[#0f172a] mb-1">
                  {exp.company}
                </h4>
                <p className="text-xs text-[#64748b] font-medium">
                  {exp.location}
                </p>
              </div>

              {/* Right Descriptions */}
              <div>
                <h3 className="text-[15px] font-semibold text-[#0f172a] mb-3">
                  {exp.role}
                </h3>
                <ul className="flex flex-col gap-2.5 padding-0 list-none m-0 mb-4">
                  {exp.points.map((p, pIdx) => (
                    <li key={pIdx} className="text-[13px] text-[#475569] leading-relaxed flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#0066ff] mt-2 flex-shrink-0"></span>
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-1">
                  {exp.tech?.map((t) => (
                    <span key={t} className="text-[10px] font-medium px-2 py-0.5 rounded bg-[#f8fafc] border border-[#f1f5f9] text-[#64748b]">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>


    </section>
  );
};

export default Experience;
