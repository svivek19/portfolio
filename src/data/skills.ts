import { LayoutDashboard, Server, Database, Wrench, Cloud } from "lucide-react";

export interface SkillCategory {
  title: string;
  icon: React.ElementType;
  description: string;
  skills: string[];
}

export const skillsData: SkillCategory[] = [
  {
    title: "Frontend",
    icon: LayoutDashboard,
    description: "Building modern, responsive user interfaces",
    skills: [
      "JavaScript (ES6+)",
      "TypeScript (basic)",
      "React.js",
      "Redux",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "Material UI",
    ],
  },
  {
    title: "Backend",
    icon: Server,
    description: "Developing scalable server-side applications",
    skills: ["Node.js", "Express.js", "REST API Development"],
  },
  {
    title: "Databases",
    icon: Database,
    description: "Designing and managing application data",
    skills: ["MongoDB", "MySQL", "Redis (basic)"],
  },
  {
    title: "Tools & Technologies",
    icon: Wrench,
    description: "Tools I use for development and collaboration",
    skills: ["Git", "GitHub", "VS Code", "Postman", "Vite"],
  },
  {
    title: "Cloud & Deployment",
    icon: Cloud,
    description: "Deploying and maintaining applications",
    skills: ["AWS (EC2, S3 – basic)", "VPS Hosting", "Vercel"],
  },
];
