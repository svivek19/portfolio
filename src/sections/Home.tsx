import { personalInfo } from "../data/personal";

const Home = () => {
  const isAvailable =
    personalInfo.currentStatus === "Available for new opportunities";

  return (
    <section
      id="home"
      className="relative min-h-[calc(100vh-96px)] flex items-center"
    >
      <div className="max-w-6xl mx-auto px-4 w-full">
        <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight">
          {personalInfo.name}
        </h1>

        <p className="mt-2 text-lg sm:text-xl text-(--text-muted)">
          {personalInfo.role}
        </p>

        <p className="mt-6 max-w-2xl text-base sm:text-lg text-(--text-muted)">
          {personalInfo.tagline}
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href="#projects"
            className="px-6 py-3 rounded-lg bg-(--accent) text-white font-medium hover:opacity-90 transition"
          >
            View Projects
          </a>

          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="
    px-6 py-3 rounded-lg
    border border-(--border)
    font-medium
    transition
    hover:bg-black/5
    dark:hover:bg-white/10
  "
          >
            Resume
          </a>
        </div>

        <div className="mt-3 inline-flex">
          <div className={"snake-border"}>
            <div
              className={`snake-inner inline-flex items-center gap-2 rounded-full
        ${isAvailable ? "" : "border border-(--border)"}
        px-3 py-1 text-sm text-(--text-muted)`}
            >
              <span
                className={`h-2 w-2 rounded-full ${
                  isAvailable
                    ? "bg-green-500 animate-pulse"
                    : "bg-blue-500 animate-pulse"
                }`}
              ></span>

              {personalInfo.currentStatus}
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 opacity-70">
        <a href="#skills" aria-label="Scroll down">
          <div className="w-5 h-8 rounded-full border border-(--text-muted) flex justify-center">
            <span className="w-1 h-2 bg-(--text-muted) rounded-full mt-1 animate-bounce"></span>
          </div>
        </a>
      </div>
    </section>
  );
};

export default Home;
