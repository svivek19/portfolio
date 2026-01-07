import { useEffect, useRef, useState } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";

const Navbar = () => {
  const [theme, setTheme] = useState<string>(() => {
    return localStorage.getItem("appTheme") || "light";
  });

  const [active, setActive] = useState<string>("home");
  const [open, setOpen] = useState<boolean>(false);
  const menuRef = useRef<HTMLUListElement | null>(null);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  useEffect(() => {
    document.documentElement.classList.remove("light-mode", "dark-mode");
    document.documentElement.classList.add(`${theme}-mode`);
    localStorage.setItem("appTheme", theme);
  }, [theme]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };

    if (open) document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [open]);

  const linkClass = (name: string) =>
    active === name
      ? "font-semibold underline underline-offset-8"
      : "opacity-70 hover:opacity-100";

  return (
    <nav className="fixed top-0 z-50 w-full backdrop-blur-3xl bg-(--bg)/70">
      <div className="max-w-6xl mx-auto px-4 py-4 relative">
        <div className="flex justify-between items-center">
          <h1 className="font-semibold text-3xl tracking-tight">Vivek</h1>

          <ul className="hidden sm:flex gap-8 text-lg">
            {["home", "skills", "projects", "experience", "contact"].map(
              (item) => (
                <li key={item}>
                  <a
                    href={`#${item}`}
                    className={linkClass(item)}
                    onClick={() => setActive(item)}
                  >
                    {item[0].toUpperCase() + item.slice(1)}
                  </a>
                </li>
              )
            )}
          </ul>

          <div className="flex items-center gap-4">
            <button
              onClick={toggleTheme}
              className="w-9 h-9 rounded-lg border border-black/15 dark:border-white/10 shadow-sm flex items-center justify-center hover:bg-black/5 dark:hover:bg-white/10 transition"
            >
              {theme === "light" ? <Moon size={18} /> : <Sun size={18} />}
            </button>

            <button
              onClick={() => setOpen(!open)}
              className="sm:hidden text-xl"
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {open && (
          <ul
            ref={menuRef}
            className={`sm:hidden absolute right-0 mt-4 w-56 rounded-2xl backdrop-blur-3xl ${
              theme === "light" ? "bg-[#f6f7fb]" : "bg-[#0b1220]"
            }  border border-white/20 shadow-xl`}
          >
            {["home", "skills", "projects", "experience", "contact"].map(
              (item) => (
                <li
                  key={item}
                  className="px-5 py-3"
                  onClick={() => {
                    setActive(item);
                    setOpen(false);
                  }}
                >
                  <a href={`#${item}`} className={linkClass(item)}>
                    {item[0].toUpperCase() + item.slice(1)}
                  </a>
                </li>
              )
            )}
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
