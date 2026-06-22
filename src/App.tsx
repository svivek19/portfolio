import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import * as Icons from "lucide-react";
import {
  Mail,
  ExternalLink,
  Github,
  Linkedin,
  MapPin,
  Briefcase,
  Code,
  FolderGit,
  CheckCircle,
  FileText,
  GraduationCap,
  Menu,
  X,
} from "lucide-react";
import { portfolioData } from "./data/portfolioData";
import type { Skill, Project } from "./data/portfolioData";

// Helper to resolve Lucide Icons dynamically
const getIconComponent = (name: string, className = "text-brand-blue") => {
  const Icon = (Icons as any)[name];
  return Icon ? <Icon className={className} size={16} /> : <Icons.HelpCircle className={className} size={16} />;
};

export default function App() {
  const [activeSection, setActiveSection] = useState("about");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(portfolioData.personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Monitor scrolling to highlight active section in Navbar
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["about", "skills", "experience", "education", "projects", "contact"];
      const scrollPos = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Experience" },
    { id: "education", label: "Education" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <div className="min-h-screen bg-page text-gray-300 selection:bg-brand-blue/20 selection:text-brand-blue font-sans antialiased">
      
      {/* Sticky Header */}
      <header className="fixed top-0 left-0 w-full z-45 bg-page/90 backdrop-blur-md border-b border-border-custom">
        <nav className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="#about" className="text-base font-bold text-white tracking-widest font-mono">
            VIVEK
          </a>

          {/* Desktop Menu links list */}
          <ul className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className={`text-xs font-mono font-semibold tracking-wider transition-colors duration-200 uppercase ${
                    activeSection === item.id ? "text-brand-blue" : "text-gray-400 hover:text-white"
                  }`}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3">
            {/* Mobile Burger Open button */}
            <button
              onClick={() => setMobileMenuOpen(true)} className="md:hidden p-2 rounded-lg border border-border-custom text-gray-400 hover:text-brand-blue cursor-pointer"
              aria-label="Open mobile menu tray"
            >
              <Menu size={16} />
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Navigation Sidebar Tray */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop dark filter */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)} className="fixed inset-0 z-50 bg-black/70 backdrop-blur-xs"
            />

            {/* Tray container */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 220 }} className="fixed right-0 top-0 bottom-0 w-[78%] max-w-xs z-50 bg-card border-l border-border-custom p-6 flex flex-col justify-between"
            >
              <div>
                <div className="flex justify-between items-center pb-4 border-b border-border-custom mb-6">
                  <span className="text-xs font-bold text-white font-mono uppercase tracking-widest">
                    Menu List
                  </span>
                  <button
                    onClick={() => setMobileMenuOpen(false)} className="p-1.5 rounded-lg border border-border-custom hover:bg-page transition-colors text-gray-400 hover:text-white cursor-pointer"
                  >
                    <X size={16} />
                  </button>
                </div>

                <ul className="flex flex-col gap-4">
                  {navItems.map((item) => (
                    <li key={item.id}>
                      <a
                        href={`#${item.id}`}
                        onClick={() => setMobileMenuOpen(false)}
                        className={`text-sm font-mono font-bold tracking-wider uppercase block py-2 border-b border-border-custom/30 ${
                          activeSection === item.id ? "text-brand-blue" : "text-gray-400"
                        }`}
                      >
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Quick Contacts details in footer of Sidebar Tray */}
              <div className="border-t border-border-custom pt-6 flex flex-col gap-4">
                <div className="text-[10px] font-mono text-gray-500 uppercase tracking-widest">
                  Quick Handles
                </div>
                <div className="flex flex-col gap-2.5 text-xs">
                  <a href={`mailto:${portfolioData.personalInfo.email}`} className="text-gray-400 hover:text-brand-blue font-mono">
                    {portfolioData.personalInfo.email}
                  </a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Main Content Container */}
      <main className="max-w-4xl mx-auto px-6 pt-32 pb-24 flex flex-col gap-32 relative z-10">
        
        {/* HERO SECTION */}
        <section id="about" className="min-h-[60vh] flex flex-col justify-center items-start gap-6 scroll-mt-24">
          {/* Location & Platforms */}
          <div className="flex flex-wrap items-center gap-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-card border border-border-custom text-xs text-brand-blue font-mono">
              <MapPin size={12} className="animate-pulse" />
              <span>{portfolioData.personalInfo.location}</span>
            </div>

            <div className="inline-flex flex-wrap items-center gap-3 px-3 py-1 rounded-full bg-card/50 border border-border-custom text-xs font-mono text-gray-400">
              <span className="text-[10px] text-gray-500">OS Competency:</span>
              <div className="flex items-center gap-1 hover:text-brand-blue hover: transition-colors">
                <Icons.Terminal size={11} className="text-brand-blue" />
                <span>Linux</span>
              </div>
              <div className="flex items-center gap-1 hover:text-brand-blue hover: transition-colors">
                <Icons.Apple size={11} className="text-brand-blue" />
                <span>macOS</span>
              </div>
              <div className="flex items-center gap-1 hover:text-brand-blue hover: transition-colors">
                <Icons.Monitor size={11} className="text-brand-blue" />
                <span>Windows</span>
              </div>
            </div>
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-none mt-2">
            Hi, I'm <span className="text-brand-blue">{portfolioData.personalInfo.name}</span>.
          </h1>
          
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-400 font-mono">
            {portfolioData.personalInfo.role}
          </h2>

          <p className="text-gray-300 text-base sm:text-lg leading-relaxed max-w-2xl">
            {portfolioData.personalInfo.bio}
          </p>

          {/* Social Links & Resume Link */}
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mt-2">
            <a
              href={`mailto:${portfolioData.personalInfo.email}`} className="text-xs font-mono font-bold tracking-wider text-slate-100 hover:text-brand-blue hover: transition-all flex items-center gap-1.5 uppercase"
            >
              <Mail size={13} />
              <span>Email</span>
            </a>
            <span className="text-slate-800">|</span>
            <a
              href={portfolioData.personalInfo.github}
              target="_blank"
              rel="noreferrer" className="text-xs font-mono font-bold tracking-wider text-slate-100 hover:text-brand-blue hover: transition-all flex items-center gap-1.5 uppercase"
            >
              <Github size={13} />
              <span>GitHub</span>
            </a>
            <span className="text-slate-800">|</span>
            <a
              href={portfolioData.personalInfo.linkedin}
              target="_blank"
              rel="noreferrer" className="text-xs font-mono font-bold tracking-wider text-slate-100 hover:text-brand-blue hover: transition-all flex items-center gap-1.5 uppercase"
            >
              <Linkedin size={13} />
              <span>LinkedIn</span>
            </a>
            <span className="text-slate-800">|</span>
            <a
              href={portfolioData.personalInfo.leetcode}
              target="_blank"
              rel="noreferrer" className="text-xs font-mono font-bold tracking-wider text-slate-100 hover:text-brand-blue hover: transition-all flex items-center gap-1.5 uppercase"
            >
              <Code size={13} />
              <span>LeetCode</span>
            </a>
            <span className="text-slate-800">|</span>
            <a
              href={portfolioData.personalInfo.resumeUrl}
              target="_blank"
              rel="noreferrer" className="text-xs font-mono font-bold tracking-wider text-brand-blue hover:text-brand-blue-light hover: transition-all flex items-center gap-1.5 uppercase"
            >
              <FileText size={13} />
              <span>Resume</span>
            </a>
          </div>
        </section>

        {/* SKILLS SECTION */}
        <section id="skills" className="flex flex-col gap-10 scroll-mt-24">
          <div className="border-b border-border-custom pb-4">
            <h2 className="text-2xl font-bold text-white flex items-center gap-2">
              <Code size={20} className="text-brand-blue" />
              <span>Core Stack</span>
            </h2>
          </div>

          <div className="flex flex-col gap-8">
            {[
              { id: 'frontend', label: 'Frontend Development' },
              { id: 'backend', label: 'Backend Architecture' },
              { id: 'databases', label: 'Databases & Caching' },
              { id: 'tools', label: 'Development Tools' },
              { id: 'cloud-deployment', label: 'Cloud & Deployment' },
            ].map((cat) => {
              const catSkills = portfolioData.skills.filter(s => s.category === cat.id);
              if (catSkills.length === 0) return null;

              return (
                <div key={cat.id} className="grid grid-cols-1 md:grid-cols-4 gap-4 items-start py-2 border-b border-border-custom pb-6">
                  {/* Category Header */}
                  <h3 className="text-sm font-mono font-bold tracking-wider text-gray-500 uppercase md:col-span-1 pt-1">
                    {cat.label}
                  </h3>

                  {/* Skills List in category */}
                  <div className="md:col-span-3 flex flex-wrap gap-2">
                    {catSkills.map((skill: Skill) => (
                      <div
                        key={skill.name} className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-lg bg-card border border-border-custom hover:border-brand-blue/30 hover:bg-page transition-all text-xs sm:text-sm font-medium text-gray-200"
                      >
                        {getIconComponent(skill.iconName)}
                        <span>{skill.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* EXPERIENCE SECTION */}
        <section id="experience" className="flex flex-col gap-10 scroll-mt-24">
          <div className="border-b border-border-custom pb-4">
            <h2 className="text-2xl font-bold text-white flex items-center gap-2">
              <Briefcase size={20} className="text-brand-blue" />
              <span>Professional Journey</span>
            </h2>
          </div>

          <div className="flex flex-col">
            {portfolioData.experiences.map((exp, idx) => (
              <div key={exp.company + idx} className="grid grid-cols-1 md:grid-cols-4 gap-4 py-8 border-b border-border-custom last:border-b-0">
                {/* Dates on Left */}
                <div className="md:col-span-1 pt-1">
                  <span className="text-sm font-mono font-bold text-brand-blue tracking-wider">
                    {exp.period}
                  </span>
                </div>

                {/* Details on Right */}
                <div className="md:col-span-3 flex flex-col gap-3 pl-0 md:pl-6 md:border-l border-border-custom relative">
                  {/* Modern dot node */}
                  <div className="hidden md:block absolute left-[-4px] top-2 w-2.5 h-2.5 rounded-full bg-page border-2 border-brand-blue" />

                  <div>
                    <h3 className="text-lg font-bold text-white">
                      {exp.role}
                    </h3>
                    <p className="text-sm font-mono text-gray-400 font-semibold mt-0.5">
                      {exp.company}
                    </p>
                  </div>

                  <p className="text-gray-300 text-sm leading-relaxed">
                    {exp.description}
                  </p>

                  <ul className="flex flex-col gap-2.5 mt-1">
                    {exp.points.map((pt, pIdx) => (
                      <li key={pIdx} className="text-gray-400 text-xs sm:text-sm flex gap-2.5 leading-relaxed">
                        <span className="text-brand-blue select-none font-bold">↳</span>
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Tech stack badge items */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {exp.techStack.map((tech) => (
                      <span
                        key={tech} className="px-2 py-0.5 rounded bg-card border border-border-custom text-[10px] font-mono text-gray-400"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* EDUCATION SECTION */}
        <section id="education" className="flex flex-col gap-10 scroll-mt-24">
          <div className="border-b border-border-custom pb-4">
            <h2 className="text-2xl font-bold text-white flex items-center gap-2">
              <GraduationCap size={20} className="text-brand-blue" />
              <span>Academic Foundation</span>
            </h2>
          </div>

          <div className="flex flex-col">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 py-6 border-b border-border-custom last:border-b-0">
              {/* Dates on Left */}
              <div className="md:col-span-1 pt-1">
                <span className="text-sm font-mono font-bold text-brand-blue tracking-wider">
                  {portfolioData.education.duration}
                </span>
              </div>

              {/* Details on Right */}
              <div className="md:col-span-3 flex flex-col gap-2 pl-0 md:pl-6 md:border-l border-border-custom relative">
                <div className="hidden md:block absolute left-[-4px] top-2 w-2.5 h-2.5 rounded-full bg-page border-2 border-brand-blue" />
                
                <div>
                  <h3 className="text-lg font-bold text-white">
                    {portfolioData.education.degree}
                  </h3>
                  <p className="text-sm font-mono text-gray-400 font-semibold mt-0.5">
                    {portfolioData.education.institution}
                  </p>
                </div>
                
                <div className="flex flex-wrap gap-4 mt-2 text-xs sm:text-sm text-gray-400 font-mono">
                  <span>Location: {portfolioData.education.location}</span>
                  <span>•</span>
                  <span>CGPA: {portfolioData.education.cgpa}</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PROJECTS SECTION */}
        <section id="projects" className="flex flex-col gap-12 scroll-mt-24">
          <div className="border-b border-border-custom pb-4">
            <h2 className="text-2xl font-bold text-white flex items-center gap-2">
              <FolderGit size={20} className="text-brand-blue" />
              <span>Personal Learning Projects</span>
            </h2>
          </div>

          <div className="flex flex-col gap-20">
            {portfolioData.projects.map((project: Project, idx: number) => {
              const isEven = idx % 2 === 0;

              return (
                <div
                  key={project.id} className="flex flex-col md:flex-row items-center gap-8 md:gap-12"
                >
                  {/* Project Image Block */}
                  <div
                    className={`w-full md:w-1/2 order-1 ${
                      isEven ? "md:order-1" : "md:order-2"
                    }`}
                  >
                    <div className="image-container-mask overflow-hidden rounded-2xl aspect-video relative group border border-border-custom bg-card shadow-md">
                      <img
                        src={project.imagePath}
                        alt={`${project.title} screenshot`} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-103"
                      />
                    </div>
                  </div>

                  {/* Project Details Block */}
                  <div
                    className={`w-full md:w-1/2 flex flex-col gap-4 order-2 ${
                      isEven ? "md:order-2" : "md:order-1"
                    }`}
                  >
                    {/* Full Tech Stack Tags */}
                    <div className="flex flex-wrap gap-1.5 mb-2">
                      {project.tags.map((t) => (
                        <span key={t} className="px-2.5 py-0.5 rounded-lg bg-card border border-border-custom text-[10px] font-mono text-gray-400">
                          {t}
                        </span>
                      ))}
                    </div>

                    <h3 className="text-2xl font-bold text-white hover:text-brand-blue hover: transition-colors">
                      {project.title}
                    </h3>

                    <p className="text-gray-300 text-sm leading-relaxed">
                      {project.description}
                    </p>

                    {/* Features checklist */}
                    <ul className="flex flex-col gap-1.5 my-1">
                      {project.features.map((feat, fIdx) => (
                        <li key={fIdx} className="text-gray-300 text-xs sm:text-sm flex items-center gap-2">
                          <CheckCircle size={11} className="text-brand-blue flex-shrink-0" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Technical stats metrics */}
                    <div className="grid grid-cols-3 gap-2 py-3 border-y border-border-custom my-2">
                      {project.stats.map((stat, sIdx) => (
                        <div key={sIdx} className="flex flex-col">
                          <span className="text-[9px] font-mono text-gray-500 uppercase">{stat.label}</span>
                          <span className="text-xs font-bold text-white mt-0.5">{stat.value}</span>
                        </div>
                      ))}
                    </div>

                    {/* Action Links */}
                    <div className="flex gap-4 items-center mt-2">
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noreferrer" className="text-xs font-mono font-bold tracking-wider text-slate-100 hover:text-brand-blue transition-colors flex items-center gap-1.5 uppercase"
                        >
                          <Github size={14} />
                          <span>Code</span>
                        </a>
                      )}
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noreferrer" className="text-xs font-mono font-bold tracking-wider text-slate-100 hover:text-brand-blue transition-colors flex items-center gap-1.5 uppercase"
                        >
                          <ExternalLink size={14} />
                          <span>Demo</span>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* CONTACT SECTION */}
        <section id="contact" className="flex flex-col gap-10 scroll-mt-24">
          <div className="border-b border-border-custom pb-4">
            <h2 className="text-2xl font-bold text-white flex items-center gap-2">
              <Mail size={20} className="text-brand-blue" />
              <span>Reach Out</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Location / Status Card */}
            <div className="p-6 rounded-2xl bg-card border border-border-custom hover:border-brand-blue/20 transition-all flex flex-col gap-4 shadow-sm relative overflow-hidden group">
              <div className="absolute right-0 top-0 w-24 h-24 bg-brand-blue/5 rounded-bl-full blur-xl pointer-events-none group-hover:bg-brand-blue/10 transition-colors" />
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs font-mono font-bold tracking-wider text-gray-500 uppercase">
                  <MapPin size={14} className="text-brand-blue" />
                  <span>Location & Relocation</span>
                </div>
                <span className="flex items-center gap-1.5 text-[10px] font-mono text-brand-blue-light bg-brand-blue-light/10 px-2 py-0.5 rounded-full border border-brand-blue-light/20">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-blue-light animate-pulse" />
                  <span>Open to Relocate</span>
                </span>
              </div>
              <div>
                <p className="text-white text-base font-bold">Tamil Nadu, India</p>
                <p className="text-gray-400 text-xs sm:text-sm mt-2 leading-relaxed font-mono">
                  Ready to relocate to tech hubs like Bangalore, Chennai, Hyderabad, Pune, or other locations for software development and backend roles.
                </p>
              </div>
            </div>

            {/* Direct Mail Card */}
            <div className="p-6 rounded-2xl bg-card border border-border-custom hover:border-brand-blue/20 transition-all flex flex-col gap-4 shadow-sm relative overflow-hidden group">
              <div className="absolute right-0 top-0 w-24 h-24 bg-brand-blue/5 rounded-bl-full blur-xl pointer-events-none group-hover:bg-brand-blue/10 transition-colors" />
              <div className="flex items-center gap-2 text-xs font-mono font-bold tracking-wider text-gray-500 uppercase">
                <Mail size={14} className="text-brand-blue" />
                <span>Direct Communication</span>
              </div>
              <div className="flex flex-col gap-3">
                <p className="text-gray-400 text-xs font-mono">
                  Feel free to drop a message. I usually respond within a few hours.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 items-stretch sm:items-center justify-between bg-page p-3.5 rounded-xl border border-border-custom">
                  <span className="text-white font-mono text-sm break-all font-semibold select-all">
                    {portfolioData.personalInfo.email}
                  </span>
                  <div className="flex items-center gap-2 flex-shrink-0 mt-2 sm:mt-0">
                    <button
                      onClick={handleCopyEmail} className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-lg bg-card border border-border-custom hover:border-brand-blue/30 text-xs font-mono text-gray-400 hover:text-white transition-all cursor-pointer"
                    >
                      {copied ? (
                        <>
                          <Icons.Check size={12} className="text-emerald-400" />
                          <span className="text-emerald-400">Copied!</span>
                        </>
                      ) : (
                        <>
                          <Icons.Copy size={12} />
                          <span>Copy</span>
                        </>
                      )}
                    </button>
                    <a
                      href={`mailto:${portfolioData.personalInfo.email}`} className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-lg bg-brand-blue hover:bg-[#5d0ef5] text-xs font-mono text-white font-bold transition-all"
                    >
                      <Icons.Send size={12} />
                      <span>Send</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="border-t border-border-custom bg-page py-12 relative z-10">
        <div className="max-w-5xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-gray-500">
          <div className="flex items-center gap-1.5">
            <span>© {new Date().getFullYear()}</span>
            <span>•</span>
            <span>Vivek</span>
            <span>•</span>
            <span>Tamil Nadu, India</span>
          </div>

          <div className="flex items-center gap-4">
            <a href={portfolioData.personalInfo.github} target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
              GitHub
            </a>
            <a href={portfolioData.personalInfo.linkedin} target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
              LinkedIn
            </a>
            <a href={portfolioData.personalInfo.leetcode} target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
              LeetCode
            </a>
            <a href={`mailto:${portfolioData.personalInfo.email}`} className="hover:text-white transition-colors">
              Email
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
