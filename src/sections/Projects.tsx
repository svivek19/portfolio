import { projectsData } from "../data/projects";
import { ExternalLink, GitBranch, GitBranchIcon } from "lucide-react";

const Projects = () => {
  return (
    <section id="projects" className="pb-24">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-semibold tracking-tight">Projects</h2>
        <p className="mt-2 text-[var(--text-muted)]">
          Selected work I’ve built recently
        </p>

        <div className="mt-12 space-y-10">
          {projectsData.map((project: any) => (
            <div key={project.title} className="relative pl-6">
              <span className="absolute left-0 top-1.5 h-2.5 w-2.5 rounded-full bg-[var(--accent)]"></span>

              <h3 className="text-lg font-semibold">{project.title}</h3>

              <p className="mt-2 max-w-3xl text-sm text-[var(--text-muted)] leading-relaxed">
                {project.description}
              </p>

              <div className="mt-3 flex flex-wrap gap-3 text-sm text-[var(--text-muted)]">
                {project.tech.map((item: string) => (
                  <span key={item}>{item}</span>
                ))}
              </div>

              <div className="mt-3 flex items-center gap-6 text-sm">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 font-medium text-[var(--accent)]"
                  >
                    Live <ExternalLink size={14} />
                  </a>
                )}

                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 font-medium"
                >
                  Code <GitBranch size={14} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-4 text-center">
        <div className="inline-block snake-border">
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="
        snake-inner
        inline-flex items-center gap-2
        text-sm font-medium
        snake-text
        transition
      "
          >
            View more projects on GitHub
            <GitBranchIcon size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
