export interface Experience {
  role: string;
  company: string;
  duration: string;
  location?: string;
  points: string[];
  tech?: string[];
}

export const experienceData: Experience[] = [
  {
    role: "Software Developer",
    company: "Quantum Sharq Innovative Solutions",
    duration: "Jun 2024 – Nov 2025",
    location: "Vellore, Tamil Nadu",
    points: [
      "Developed and delivered multiple end-to-end features for a healthcare web platform.",
      "Built and optimized REST APIs using Node.js and Express.js, improving response times.",
      "Worked closely with frontend teams to integrate APIs and improve user workflows.",
      "Handled production bug fixes, deployments, and performance improvements.",
    ],
    tech: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "REST APIs",
      "Meta Cloud APIs",
      "VPS",
    ],
  },
];
