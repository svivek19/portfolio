import { contactData } from "../data/contact";
import { useSnackbar } from "../context/SnackbarContext";
import { Mail, PhoneCall, Copy, ExternalLink, Github, Linkedin, ArrowUpRight, MapPin } from "lucide-react";

const ICONS: Record<string, React.ElementType> = {
  github: Github,
  linkedin: Linkedin
};

const Contact = () => {
  const { showSnackbar } = useSnackbar();

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    showSnackbar(`${label} copied to clipboard!`);
  };

  return (
    <section id="contact" className="py-20 md:py-24 border-b border-[#f1f5f9]">
      <div className="max-w-[800px] mx-auto text-center mb-16">
        <h2 className="text-[#0f172a] text-3xl font-light tracking-tight leading-tight mb-2">
          Let's Build <span className="serif-font font-normal text-[#475569]">Something Exceptional</span>
        </h2>
        <p className="text-[#64748b] text-sm">
          Feel free to reach out for inquiries, collaboration opportunities, or technical discussions.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-[900px] mx-auto">
        {/* Contact info channels */}
        <div className="flex flex-col gap-6">
          {/* Email Card */}
          <div className="premium-card p-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-full bg-[#eef2ff] border border-[#e0e7ff] text-[#0066ff] flex items-center justify-center">
                  <Mail size={14} />
                </div>
                <h3 className="font-semibold text-sm text-[#0f172a] m-0">Email Channel</h3>
              </div>
              <p className="text-sm font-semibold text-[#0f172a] mb-6 tracking-tight">
                {contactData.email}
              </p>
            </div>
            
            <div className="flex items-center gap-2">
              <button
                onClick={() => copyToClipboard(contactData.email, "Email address")}
                className="btn-pill btn-pill-secondary text-xs font-semibold py-1.5 px-4"
              >
                <Copy size={11} className="inline mr-1" /> Copy Email
              </button>
              <a
                href={`mailto:${contactData.email}`}
                className="btn-pill btn-pill-primary text-xs font-semibold py-1.5 px-4"
                style={{ textDecoration: "none" }}
              >
                <ExternalLink size={11} className="inline mr-1" /> Send Mail
              </a>
            </div>
          </div>

          {/* Phone Card */}
          <div className="premium-card p-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-full bg-[#eef2ff] border border-[#e0e7ff] text-[#0066ff] flex items-center justify-center">
                  <PhoneCall size={14} />
                </div>
                <h3 className="font-semibold text-sm text-[#0f172a] m-0">Phone Channel</h3>
              </div>
              <p className="text-sm font-semibold text-[#0f172a] mb-2 tracking-tight">
                {contactData.phone}
              </p>
              
              <div className="flex items-center gap-1.5 text-xs text-[#64748b] mb-6">
                <MapPin size={11} />
                <span>{contactData.location}</span>
                <span className="w-1 h-1 rounded-full bg-[#cbd5e1] mx-1"></span>
                <span className="text-[10px] font-bold text-[#16a34a] bg-[#f0fdf4] border border-[#bbf7d0] px-1.5 py-0.2 rounded">
                  Open to relocate
                </span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => copyToClipboard(contactData.phone, "Phone number")}
                className="btn-pill btn-pill-secondary text-xs font-semibold py-1.5 px-4"
              >
                <Copy size={11} className="inline mr-1" /> Copy Number
              </button>
            </div>
          </div>
        </div>

        {/* Social Profiles Table */}
        <div className="premium-card overflow-hidden">
          <div className="px-6 py-4 bg-[#f8fafc] border-b border-[#f1f5f9] flex items-center justify-between">
            <span className="text-xs font-semibold text-[#0f172a]">Online Profiles & Repos</span>
            <span className="text-[10px] font-semibold text-[#64748b] bg-[#e2e8f0] px-2 py-0.5 rounded-full">
              {contactData.links.length} profiles
            </span>
          </div>

          <table className="clean-table w-full">
            <tbody>
              {contactData.links.map((link) => {
                const IconComponent = ICONS[link.type];
                return (
                  <tr key={link.label}>
                    <td className="p-0">
                      <a
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-between px-6 py-4 text-[#475569] hover:text-[#0066ff] hover:bg-[#f8fafc] transition-all"
                        style={{ textDecoration: "none" }}
                      >
                        <div className="flex items-center gap-3">
                          {IconComponent ? (
                            <div className="text-[#64748b]">
                              <IconComponent size={14} />
                            </div>
                          ) : (
                            <div className="w-5 h-5 rounded bg-[#eef2ff] border border-[#e0e7ff] text-[#0066ff] text-[10px] font-bold flex items-center justify-center">
                              {link.label[0]}
                            </div>
                          )}
                          <span className="font-medium text-[13px]">{link.label}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-[11px] text-[#94a3b8]">
                            {new URL(link.url).hostname.replace("www.", "")}
                          </span>
                          <ArrowUpRight size={13} className="text-[#cbd5e1]" />
                        </div>
                      </a>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default Contact;
