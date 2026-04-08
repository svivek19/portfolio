import { useEffect, useRef, useState } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";

const NAV_ITEMS = [
  "home",
  "skills",
  "projects",
  "experience",
  "contact",
] as const;

const Navbar = () => {
  const [theme, setTheme] = useState<string>(
    () => localStorage.getItem("appTheme") || "light",
  );
  const [active, setActive] = useState<string>("home");
  const [open, setOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);

  const toggleTheme = () =>
    setTheme((prev) => (prev === "light" ? "dark" : "light"));

  useEffect(() => {
    document.documentElement.classList.remove("light-mode", "dark-mode");
    document.documentElement.classList.add(`${theme}-mode`);
    localStorage.setItem("appTheme", theme);
  }, [theme]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { root: null, rootMargin: "-50% 0px -50% 0px", threshold: 0 },
    );
    sections.forEach((s) => observer.observe(s));
    return () => sections.forEach((s) => observer.unobserve(s));
  }, []);

  useEffect(() => {
    const handleOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node))
        setOpen(false);
    };
    if (open) document.addEventListener("mousedown", handleOutside);
    return () => document.removeEventListener("mousedown", handleOutside);
  }, [open]);

  return (
    <nav
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-[var(--bg)]/80 backdrop-blur-xl border-b border-[var(--border)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 relative">
        <div className="flex justify-between items-center">
          <a href="#home" className="flex items-center gap-2 group">
            <span className="w-7 h-7 rounded-lg bg-[var(--accent)] flex items-center justify-center text-white text-xs font-bold tracking-tight">
              VS
            </span>
            <span className="font-semibold text-base tracking-tight hidden sm:block">
              Vivek
            </span>
          </a>

          <ul className="hidden sm:flex items-center gap-1">
            {NAV_ITEMS.map((item) => (
              <li key={item}>
                <a
                  href={`#${item}`}
                  onClick={() => setActive(item)}
                  className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
                    active === item
                      ? "bg-[var(--accent)] text-white"
                      : "text-[var(--text-muted)] hover:text-[var(--text)]"
                  }`}
                >
                  {item[0].toUpperCase() + item.slice(1)}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3">
            <button
              onClick={toggleTheme}
              className="w-8 h-8 rounded-full border border-[var(--border)] flex items-center justify-center text-[var(--text-muted)] hover:text-[var(--text)] hover:bg-[var(--card)] transition"
            >
              {theme === "light" ? <Moon size={15} /> : <Sun size={15} />}
            </button>
            <button
              onClick={() => setOpen(!open)}
              className="sm:hidden text-[var(--text-muted)]"
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {open && (
          <div
            ref={menuRef}
            className="sm:hidden absolute right-4 top-14 w-52 rounded-2xl bg-[var(--card)] border border-[var(--border)] overflow-hidden shadow-xl"
          >
            {NAV_ITEMS.map((item) => (
              <button
                key={item}
                className={`w-full text-left px-5 py-3 text-sm transition ${
                  active === item
                    ? "text-[var(--accent)] font-medium bg-[var(--accent)]/5"
                    : "text-[var(--text-muted)] hover:bg-[var(--card)]"
                }`}
                onClick={() => {
                  document
                    .getElementById(item)
                    ?.scrollIntoView({ behavior: "smooth" });
                  setActive(item);
                  setOpen(false);
                }}
              >
                {item[0].toUpperCase() + item.slice(1)}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
