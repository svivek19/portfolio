import { personalInfo } from "../data/personal";

const Footer = () => {
  return (
    <footer className="py-4 border-t border-[var(--border)]">
      <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-sm text-[var(--text-muted)]">
        <span>
          © {new Date().getFullYear()} {personalInfo.name}
        </span>
        <span>Crafted with React & Tailwind CSS</span>
      </div>
    </footer>
  );
};

export default Footer;
