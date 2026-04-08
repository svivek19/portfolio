import { personalInfo } from "../data/personal";
import { ArrowRight, Download } from "lucide-react";

const Home = () => {
  const isAvailable =
    personalInfo.currentStatus === "Available for new opportunities";

  return (
    <section
      id="home"
      className="relative min-h-[calc(100vh-96px)] flex items-center"
    >
      <div className="max-w-6xl mx-auto px-6 w-full py-20">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[var(--border)] bg-[var(--card)] mb-8">
          <span
            className={`h-1.5 w-1.5 rounded-full ${
              isAvailable
                ? "bg-green-500 animate-pulse"
                : "bg-blue-500 animate-pulse"
            }`}
          />
          <span className="text-xs font-medium text-[var(--text-muted)]">
            {personalInfo.currentStatus}
          </span>
        </div>

        <h1 className="text-5xl sm:text-7xl font-bold tracking-tight leading-[1.05]">
          {personalInfo.name.split(" ")[0]}
          <br />
          <span className="text-[var(--text-muted)] font-normal">
            {personalInfo.name.split(" ").slice(1).join(" ")}
          </span>
        </h1>

        <div className="mt-6 flex items-center gap-3">
          <div className="h-px w-8 bg-[var(--accent)]" />
          <p className="text-xs font-semibold text-[var(--accent)] tracking-widest uppercase">
            {personalInfo.role}
          </p>
        </div>

        <p className="mt-6 max-w-xl text-base text-[var(--text-muted)] leading-relaxed">
          {personalInfo.tagline}
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-4">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[var(--accent)] text-white text-sm font-medium hover:opacity-90 transition"
          >
            View Projects
            <ArrowRight size={15} />
          </a>

          <a
            href={personalInfo.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-[var(--border)] text-sm font-medium text-[var(--text-muted)] hover:text-[var(--text)] hover:border-[var(--accent)] transition"
          >
            <Download size={15} />
            Resume
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <a href="#skills" aria-label="Scroll down">
          <div className="w-5 h-8 rounded-full border border-[var(--border)] flex justify-center">
            <span className="w-0.5 h-2 bg-[var(--text-muted)] rounded-full mt-1.5 animate-bounce" />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Home;
