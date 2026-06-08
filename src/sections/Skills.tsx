import { LayoutDashboard, Server, Database, Cloud, Cpu, MessageSquare } from "lucide-react";

const offerings = [
  {
    title: "Frontend Development",
    icon: LayoutDashboard,
    description: "Building fast, pixel-perfect, responsive user interfaces using React, TypeScript, Redux, Tailwind, and Material UI with optimal web vitals.",
    skills: ["React.js", "TypeScript", "Redux", "Tailwind CSS", "HTML5", "CSS3"]
  },
  {
    title: "Backend Architectures",
    icon: Server,
    description: "Designing scalable server-side systems, RESTful APIs, lessons routing engines, and secure authorization gates with Express.js and Node.js.",
    skills: ["Node.js", "Express.js", "REST APIs", "Content-Driven Architecture", "JWT", "Firebase Auth"]
  },
  {
    title: "Database Engineering",
    icon: Database,
    description: "Structuring relational and non-relational database schemas, modeling complex relations, and optimizing database queries for high efficiency.",
    skills: ["MongoDB", "MySQL", "PostgreSQL", "Mongoose", "Query Optimization"]
  },
  {
    title: "Real-Time Sync",
    icon: MessageSquare,
    description: "Implementing live communication pipelines, WebSocket event synchronizations, typing indicators, and message receipts with Socket.io.",
    skills: ["WebSockets", "Socket.io", "Event-Driven Architecture"]
  },
  {
    title: "Performance Caching",
    icon: Cpu,
    description: "Integrating high-performance memory stores to manage real-time online presence, count tracks, session caches, and reduce database latency.",
    skills: ["Redis Caching", "Memory Storage", "Data Structures", "Speed Audits"]
  },
  {
    title: "Cloud & Devops",
    icon: Cloud,
    description: "Deploying and scaling production deployments on Linux VPS platforms, managing assets on AWS S3, and utilizing Railway and Vercel services.",
    skills: ["Linux VPS", "AWS S3 / EC2", "Railway", "Vercel", "Render"]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 md:py-24 border-b border-[#f1f5f9]">
      <div className="max-w-[800px] mx-auto text-center mb-16">
        <h2 className="text-[#0f172a] text-3xl font-light tracking-tight leading-tight mb-4">
          Explore <span className="serif-font font-normal text-[#475569]">My Offerings</span> for You
        </h2>
        <p className="text-[#64748b] text-sm max-w-[600px] mx-auto leading-relaxed">
          Embark on a technical journey: discovering scalable web solutions infused with clean code, caching performance, and structural precision to shape tomorrow's digital products.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-[1000px] mx-auto">
        {offerings.map((item, idx) => {
          const IconComponent = item.icon;
          return (
            <div key={idx} className="premium-card p-6 flex flex-col justify-between h-full">
              <div>
                {/* Icon Container */}
                <div className="icon-badge">
                  <IconComponent size={20} />
                </div>
                
                {/* Offering Title */}
                <h3 className="text-[#0f172a] text-base font-semibold mb-3">
                  {item.title}
                </h3>
                
                {/* Offering Description */}
                <p className="text-[#64748b] text-[13px] leading-relaxed mb-6">
                  {item.description}
                </p>
              </div>

              {/* Badges/Tags list */}
              <div className="flex flex-wrap gap-1.5 mt-auto pt-4 border-t border-[#f1f5f9]">
                {item.skills.map((s, sIdx) => (
                  <span key={sIdx} className="text-[10px] font-medium px-2 py-0.5 rounded bg-[#f8fafc] border border-[#f1f5f9] text-[#64748b]">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Skills;
