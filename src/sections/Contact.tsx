import { contactData } from "../data/contact";
import {
  Mail,
  MapPin,
  PhoneCall,
  Github,
  Linkedin,
  ArrowUpRight,
} from "lucide-react";

const ICONS: Record<string, React.ElementType> = {
  github: Github,
  linkedin: Linkedin,
};

const Contact = () => {
  return (
    <section id="contact" className="pb-28">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-12">
          <p className="text-xs font-semibold text-[var(--accent)] tracking-widest uppercase mb-2">
            Reach out
          </p>
          <h2 className="text-3xl font-bold tracking-tight">Let's connect</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="p-6 rounded-2xl border border-[var(--border)] bg-[var(--card)] space-y-5">
            <p className="text-sm text-[var(--text-muted)] leading-relaxed">
              Interested in working together or have something in mind? I'd love
              to hear from you.
            </p>

            <a
              href={`mailto:${contactData.email}`}
              className="flex items-center gap-3 p-4 rounded-xl border border-[var(--border)] hover:border-[var(--accent)] hover:text-[var(--accent)] transition group"
            >
              <Mail size={16} className="text-[var(--accent)] shrink-0" />
              <span className="text-sm font-medium">{contactData.email}</span>
            </a>

            <div className="flex items-center gap-3 p-4 rounded-xl border border-[var(--border)]">
              <PhoneCall size={16} className="text-[var(--accent)] shrink-0" />
              <span className="text-sm font-medium">{contactData.phone}</span>
            </div>

            <div className="flex items-center gap-3 pt-1">
              <MapPin size={14} className="text-[var(--text-muted)]" />
              <span className="text-sm text-[var(--text-muted)]">
                Theni, Tamil Nadu
              </span>
              <span className="ml-1 px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-[var(--accent)]/10 text-[var(--accent)] border border-[var(--accent)]/20">
                Open to relocate
              </span>
            </div>
          </div>

          <div className="p-6 rounded-2xl border border-[var(--border)] bg-[var(--card)]">
            <p className="text-xs font-semibold text-[var(--text-muted)] uppercase tracking-widest mb-5">
              Find me on
            </p>
            <div className="space-y-3">
              {contactData.links.map((link) => {
                const Icon = ICONS[link.type];
                return (
                  <a
                    key={link.label}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-4 rounded-xl border border-[var(--border)] hover:border-[var(--accent)] hover:text-[var(--accent)] transition group"
                  >
                    <div className="flex items-center gap-3">
                      {Icon ? (
                        <Icon
                          size={16}
                          className="text-[var(--text-muted)] group-hover:text-[var(--accent)] transition"
                        />
                      ) : (
                        <span className="w-4 h-4 rounded-full bg-[var(--accent)]/20 text-[var(--accent)] text-[10px] flex items-center justify-center font-bold">
                          {link.label[0]}
                        </span>
                      )}
                      <span className="text-sm font-medium">{link.label}</span>
                    </div>
                    <ArrowUpRight
                      size={14}
                      className="text-[var(--text-muted)] group-hover:text-[var(--accent)] transition"
                    />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
