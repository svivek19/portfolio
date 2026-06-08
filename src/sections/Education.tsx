import { educationData } from "../data/education";
import { GraduationCap, MapPin, Calendar, Award } from "lucide-react";

const Education = () => {
  return (
    <section id="education" className="py-20 md:py-24 border-b border-[#f1f5f9]">
      <div className="max-w-[800px] mx-auto text-center mb-12">
        <h2 className="text-[#0f172a] text-3xl font-light tracking-tight leading-tight mb-2">
          Academic <span className="serif-font font-normal text-[#475569]">Background & Education</span>
        </h2>
        <p className="text-[#64748b] text-sm">
          A summary of my formal engineering training
        </p>
      </div>

      <div className="max-w-[800px] mx-auto premium-card p-6 md:p-8">
        <div className="flex flex-col md:flex-row gap-6 items-start">
          {/* Icon Badge */}
          <div className="w-10 h-10 rounded bg-[#eef2ff] border border-[#e0e7ff] text-[#0066ff] flex items-center justify-center flex-shrink-0">
            <GraduationCap size={20} />
          </div>

          {/* Details */}
          <div className="flex-1 w-full">
            <span className="text-[10px] font-bold uppercase tracking-wider text-[#0066ff] block mb-1">
              Degree & Major
            </span>
            <h3 className="text-base font-semibold text-[#0f172a] mb-2 leading-snug">
              {educationData.degree}
            </h3>
            <p className="text-sm text-[#475569] mb-6 font-medium">
              {educationData.institution}
            </p>

            <div className="h-[1px] bg-[#f1f5f9] w-full mb-6"></div>

            {/* Meta statistics */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-[#f8fafc] flex items-center justify-center text-[#64748b]">
                  <Calendar size={13} />
                </div>
                <div>
                  <span className="text-[10px] text-[#94a3b8] uppercase tracking-wider font-semibold block">Duration</span>
                  <span className="text-[13px] font-semibold text-[#0f172a]">{educationData.duration}</span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-[#f8fafc] flex items-center justify-center text-[#64748b]">
                  <MapPin size={13} />
                </div>
                <div>
                  <span className="text-[10px] text-[#94a3b8] uppercase tracking-wider font-semibold block">Location</span>
                  <span className="text-[13px] font-semibold text-[#0f172a]">{educationData.location}</span>
                </div>
              </div>

              {educationData.cgpa && (
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#f8fafc] flex items-center justify-center text-[#64748b]">
                    <Award size={13} />
                  </div>
                  <div>
                    <span className="text-[10px] text-[#94a3b8] uppercase tracking-wider font-semibold block">CGPA Score</span>
                    <span className="text-[13px] font-semibold text-[#0f172a]">{educationData.cgpa} / 10.0</span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
