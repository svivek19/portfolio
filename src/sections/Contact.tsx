import { contactData } from "../data/contact";
import { Mail, Link2, ArrowUpRight, MapPin, PhoneCall } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="max-sm:pt-0 pb-28">
      <div className="max-w-6xl mx-auto px-4">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-semibold tracking-tight">
            Let’s connect
          </h2>

          <p className="mt-2 text-[var(--text-muted)]">
            Interested in working together or have something in mind? I’d love
            to hear from you.
          </p>

          <a
            href={`mailto:${contactData.email}`}
            className="
              mt-6 inline-flex items-center gap-2
              rounded-md
              border border-[var(--border)]
              px-4 py-2
              text-sm font-medium
              transition
              hover:border-[var(--accent)]
              hover:text-[var(--accent)]
            "
          >
            <Mail size={16} />
            {contactData.email}
          </a>

          <span
            className="
              mt-6 ml-2 inline-flex items-center gap-2
              rounded-md
              border border-[var(--border)]
              px-4 py-2
              text-sm font-medium
              tracking-wide
              transition
              hover:border-[var(--accent)]
              hover:text-[var(--accent)]
            "
          >
            <PhoneCall size={16} />
            {contactData.phone}
          </span>

          <div className="mt-8 flex flex-wrap gap-5">
            {contactData.links.map((link) => (
              <a
                key={link.label}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  inline-flex items-center gap-2
                  text-sm font-medium
                  text-[var(--text-muted)]
                  hover:text-[var(--accent)]
                  transition
                "
              >
                <Link2 size={14} />
                {link.label}
                <ArrowUpRight size={14} />
              </a>
            ))}
          </div>

          <div className="mt-8 flex items-center gap-4 text-sm text-[var(--text-muted)]">
            <span className="inline-flex items-center gap-1.5">
              <MapPin size={14} />
              Theni, Tamil Nadu
            </span>

            <span
              className="
                inline-flex items-center
                rounded-full
                px-3 py-1
                text-xs font-medium
                text-white
                border border-[var(--accent)]/30
                bg-[var(--accent)]
              "
            >
              Open to relocate
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
