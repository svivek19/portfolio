import { useState } from "react";
import { projectsData } from "../data/projects";
import type { Project } from "../data/projects";
import { ExternalLink, Github, X, ArrowUpRight, FolderGit2 } from "lucide-react";

const Projects = () => {
  const [selected, setSelected] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-20 md:py-24 border-b border-[#f1f5f9]">
      <div className="flex flex-wrap items-end justify-between gap-6 mb-12">
        <div>
          <h2 className="text-[#0f172a] text-3xl font-light tracking-tight leading-tight mb-2">
            Featured <span className="serif-font font-normal text-[#475569]">Portfolio & Projects</span>
          </h2>
          <p className="text-[#64748b] text-sm">
            {projectsData.length} active projects • Click any row to view complete details & architecture
          </p>
        </div>
        <a
          href="https://github.com/svivek19"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-pill btn-pill-secondary text-xs font-semibold flex items-center gap-1.5"
          style={{ textDecoration: "none" }}
        >
          View all on GitHub <ArrowUpRight size={13} />
        </a>
      </div>

      {/* CMS Table Card */}
      <div className="premium-card overflow-x-auto w-full">
        <table className="clean-table w-full min-w-[640px]">
          <thead>
            <tr>
              <th className="w-[30%]">Project Name</th>
              <th className="w-[45%]">Description</th>
              <th className="w-[18%]">Key Stack</th>
              <th className="w-[7%] text-right">Links</th>
            </tr>
          </thead>
          <tbody>
            {projectsData.map((project) => (
              <tr
                key={project.title}
                onClick={() => setSelected(project)}
                className="cursor-pointer transition-colors duration-150"
              >
                <td>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded bg-[#eef2ff] border border-[#e0e7ff] text-[#0066ff] flex items-center justify-center flex-shrink-0">
                      <FolderGit2 size={14} />
                    </div>
                    <span className="font-semibold text-[#0f172a] text-[13px]">
                      {project.title}
                    </span>
                  </div>
                </td>
                <td>
                  <p className="text-[12px] text-[#475569] truncate max-w-[350px]">
                    {project.description}
                  </p>
                </td>
                <td>
                  <div className="flex flex-wrap gap-1">
                    {project.tech.slice(0, 3).map((t) => (
                      <span key={t} className="text-[10px] font-medium px-2 py-0.5 rounded bg-[#f8fafc] border border-[#f1f5f9] text-[#64748b]">
                        {t}
                      </span>
                    ))}
                    {project.tech.length > 3 && (
                      <span className="text-[9px] font-bold px-1.5 py-0.5 rounded bg-[#f1f5f9] text-[#64748b]">
                        +{project.tech.length - 3}
                      </span>
                    )}
                  </div>
                </td>
                <td>
                  <div
                    className="flex gap-2 justify-end"
                    onClick={(e) => e.stopPropagation()}
                  >
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1.5 hover:text-[#0066ff] text-[#94a3b8] transition-colors"
                        aria-label={`Open live demo of ${project.title}`}
                      >
                        <ExternalLink size={14} />
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1.5 hover:text-[#0066ff] text-[#94a3b8] transition-colors"
                        aria-label={`Open GitHub repository of ${project.title}`}
                      >
                        <Github size={14} />
                      </a>
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Interactive Detail Modal */}
      {selected && (
        <div className="modal-overlay" onClick={() => setSelected(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            {/* Modal Header */}
            <div className="flex items-center justify-between px-6 py-5 border-b border-[#f1f5f9]">
              <div>
                <h3 className="text-base font-semibold text-[#0f172a]">{selected.title}</h3>
                <p className="text-[11px] text-[#94a3b8] uppercase tracking-wider font-semibold mt-0.5">Project Details</p>
              </div>
              <button
                onClick={() => setSelected(null)}
                className="p-1.5 rounded-full hover:bg-[#f1f5f9] text-[#64748b] hover:text-[#0f172a] bg-transparent border-none cursor-pointer"
                aria-label="Close details"
              >
                <X size={16} />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6">
              <h4 className="text-[11px] text-[#94a3b8] uppercase tracking-wider font-bold mb-2">Overview</h4>
              <p className="text-sm text-[#475569] leading-relaxed mb-6">
                {selected.description}
              </p>

              <div>
                <h4 className="text-[11px] text-[#94a3b8] uppercase tracking-wider font-bold mb-3">Technology Stack</h4>
                <div className="flex flex-wrap gap-1.5">
                  {selected.tech.map((t) => (
                    <span key={t} className="text-[11px] font-medium px-2.5 py-1 rounded bg-[#f8fafc] border border-[#e2e8f0] text-[#475569]">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="px-6 py-4 bg-[#f8fafc] border-t border-[#f1f5f9] flex gap-3">
              {selected.liveUrl && (
                <a
                  href={selected.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-pill btn-pill-primary text-xs font-semibold"
                  style={{ textDecoration: "none" }}
                >
                  <ExternalLink size={12} className="inline mr-1" /> Live Demo
                </a>
              )}
              {selected.githubUrl && (
                <a
                  href={selected.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-pill btn-pill-secondary text-xs font-semibold"
                  style={{ textDecoration: "none" }}
                >
                  <Github size={12} className="inline mr-1" /> Source Code
                </a>
              )}
              <button
                onClick={() => setSelected(null)}
                className="btn-pill btn-pill-secondary text-xs font-semibold bg-transparent border-none hover:bg-[#e2e8f0] ml-auto"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
