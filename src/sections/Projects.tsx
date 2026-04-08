import { projectsData } from "../data/projects";
import { contactData } from "../data/contact";
import { ExternalLink, Github, ArrowUpRight } from "lucide-react";

const Projects = () => {
  return (
    <section id="projects" className="pb-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-end justify-between mb-12">
          <div>
            <p className="text-xs font-semibold text-[var(--accent)] tracking-widest uppercase mb-2">
              Work
            </p>
            <h2 className="text-3xl font-bold tracking-tight">Projects</h2>
          </div>
          <a
            href={contactData.links[0].url}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-1.5 text-sm text-[var(--text-muted)] hover:text-[var(--accent)] transition"
          >
            All on GitHub
            <ArrowUpRight size={14} />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {projectsData.map((project, i) => (
            <div
              key={project.title}
              className={`group relative flex flex-col p-6 rounded-2xl border border-[var(--border)] bg-[var(--card)] hover:border-[var(--accent)]/40 transition-all ${
                i === 0 ? "md:col-span-2" : ""
              }`}
            >
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-base font-semibold leading-snug">
                  {project.title}
                </h3>
                <div className="flex items-center gap-3 shrink-0 opacity-60 group-hover:opacity-100 transition">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[var(--text-muted)] hover:text-[var(--accent)] transition"
                      aria-label="Live demo"
                    >
                      <ExternalLink size={15} />
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[var(--text-muted)] hover:text-[var(--accent)] transition"
                      aria-label="Source code"
                    >
                      <Github size={15} />
                    </a>
                  )}
                </div>
              </div>

              <p
                className={`mt-3 text-sm text-[var(--text-muted)] leading-relaxed ${
                  i === 0 ? "max-w-3xl" : ""
                }`}
              >
                {project.description}
              </p>

              <div className="mt-5 pt-4 border-t border-[var(--border)] flex flex-wrap gap-2">
                {project.tech.map((item) => (
                  <span
                    key={item}
                    className="px-2.5 py-0.5 rounded-full text-[11px] font-medium bg-[var(--accent)]/8 text-[var(--accent)] border border-[var(--accent)]/20"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 flex justify-center sm:hidden">
          <a
            href={contactData.links[0].url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm text-[var(--text-muted)] hover:text-[var(--accent)] transition"
          >
            All on GitHub
            <ArrowUpRight size={14} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
