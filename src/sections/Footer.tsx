import { personalInfo } from "../data/personal";

const Footer = () => {
  return (
    <footer className="py-6 border-t border-[var(--border)]">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <span className="w-6 h-6 rounded-md bg-[var(--accent)] flex items-center justify-center text-white text-[10px] font-bold">
            VS
          </span>
          <span className="text-sm text-[var(--text-muted)]">
            © {new Date().getFullYear()} {personalInfo.name}
          </span>
        </div>
        <span className="text-xs text-[var(--text-muted)]">
          Built with React & Tailwind CSS
        </span>
      </div>
    </footer>
  );
};

export default Footer;
