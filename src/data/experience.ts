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
    role: "Backend Lead (Contract)",
    company: "Stadius Technologies Pvt. Ltd.",
    duration: "Jan 2026 – Present",
    location: "Remote",
    points: [
      "Designed and developed backend architecture for an MVP-based learning platform (DigiParivaar) using Node.js and Express.js.",
      "Built RESTful APIs for lesson flows, progress tracking, and resume-learning functionality.",
      "Implemented OTP-based authentication using Firebase for secure onboarding.",
      "Designed and optimized MongoDB schemas for users, courses, lessons, and progress tracking.",
      "Deployed backend services using Railway and managed production configurations.",
      "Led backend decisions ensuring scalability, maintainability, and performance.",
    ],
    tech: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "Firebase",
      "Railway",
      "REST APIs",
    ],
  },
  {
    role: "Software Developer",
    company: "Quantum Sharq Innovative Solutions",
    duration: "Jun 2024 – Nov 2025",
    location: "Vellore, Tamil Nadu",
    points: [
      "Engineered a healthcare management system using MERN stack, supporting core workflows for patient and clinical data management.",
      "Optimized 10+ backend APIs and MongoDB queries, improving response times by up to 30% and reducing database load.",
      "Migrated WhatsApp notification system from third-party Interakt API to Meta Business API, significantly reducing operational costs.",
      "Deployed and managed backend services on a Linux VPS, handling server configuration, environment setup, and production monitoring.",
      "Improved frontend performance by optimizing React components using memoization techniques (React.memo, useMemo).",
    ],
    tech: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "MySQL",
      "REST APIs",
      "Meta Cloud APIs",
      "VPS (Linux)",
    ],
  },
];
