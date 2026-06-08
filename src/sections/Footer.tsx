import { personalInfo } from "../data/personal";
import { Code2 } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-[#f1f5f9] py-8 mt-12">
      <div className="max-w-[1100px] mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Brand Copyright */}
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded bg-[#0066ff] flex items-center justify-center text-white text-[10px] font-bold">
            <Code2 size={12} />
          </div>
          <span className="text-xs text-[#64748b]">
            &copy; {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
          </span>
        </div>

        {/* Tech stats / Built metadata */}
        <div className="flex items-center gap-1.5 text-xs text-[#94a3b8]">
          <span>Built with</span>
          <span className="text-[#64748b] font-medium">React</span>
          <span>&middot;</span>
          <span className="text-[#64748b] font-medium">TypeScript</span>
          <span>&middot;</span>
          <span className="text-[#64748b] font-medium">Vite</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
