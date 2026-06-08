import { useState } from "react";
import { Menu, X, Code2 } from "lucide-react";
import { personalInfo } from "../data/personal";

interface NavbarProps {
  activeSection: string;
}

const NAV_ITEMS = [
  { id: "home", label: "Home" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
];

const Navbar = ({ activeSection }: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollTo = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="nav-header">
      <div className="max-w-[1100px] mx-auto px-6 h-[88px] flex items-center justify-between">
        {/* Brand/Logo */}
        <button
          onClick={() => scrollTo("home")}
          className="flex items-center gap-2 cursor-pointer border-none bg-transparent p-0 text-left"
          aria-label="Scroll to Home"
        >
          <div className="w-8 h-8 rounded-lg bg-[#0066ff] flex items-center justify-center text-white">
            <Code2 size={16} />
          </div>
          <span className="font-semibold text-lg text-[#0f172a] tracking-tight font-sans">
            {personalInfo.shortName} S
          </span>
        </button>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className={`nav-link border-none bg-transparent cursor-pointer p-0 font-sans ${
                activeSection === item.id ? "active text-[#0066ff]" : ""
              }`}
            >
              {item.label}
              {activeSection === item.id && (
                <span className="absolute -bottom-1 left-0 right-0 h-[2px] bg-[#0066ff] rounded-full" />
              )}
            </button>
          ))}
        </div>

        {/* CTA Button */}
        <div className="hidden md:block">
          <a
            href={personalInfo.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-pill btn-pill-secondary font-sans"
            style={{ textDecoration: "none" }}
          >
            Download Resume
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-[#64748b] hover:text-[#0f172a] bg-transparent border-none cursor-pointer"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="md:hidden absolute top-[88px] left-0 right-0 bg-white border-b border-[#f1f5f9] px-6 py-4 flex flex-col gap-4 shadow-lg animate-fade-in">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className={`nav-link text-left py-2 border-none bg-transparent cursor-pointer font-sans w-full ${
                activeSection === item.id ? "active text-[#0066ff]" : ""
              }`}
            >
              {item.label}
            </button>
          ))}
          <a
            href={personalInfo.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-pill btn-pill-secondary text-center font-sans mt-2"
            style={{ textDecoration: "none" }}
          >
            Download Resume
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
