export interface Skill {
  name: string;
  category: 'frontend' | 'backend' | 'databases' | 'tools' | 'cloud-deployment';
  iconName: string; // Dynamic Lucide Icon name
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  location: string;
  description?: string;
  points: string[];
  techStack: string[];
}

export interface Education {
  degree: string;
  institution: string;
  duration: string;
  location: string;
  cgpa: string;
}

export interface Project {
  id: string;
  title: string;
  summary: string;
  description: string;
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
  features: string[];
  stats: { label: string; value: string }[];
  accentColor: string;
  imagePath: string;
}

export interface PortfolioData {
  personalInfo: {
    name: string;
    role: string;
    subTitle: string;
    bio: string;
    email: string;
    phone: string;
    location: string;
    github: string;
    linkedin: string;
    leetcode: string;
    resumeUrl: string;
  };
  skills: Skill[];
  experiences: Experience[];
  education: Education;
  projects: Project[];
}

export const portfolioData: PortfolioData = {
  personalInfo: {
    name: "Vivekananthan S",
    role: "Full-Stack Engineer",
    subTitle: "Engineering scalable backend architectures, high-performance API integrations, and robust database schemas.",
    bio: "I am a dedicated Full-Stack Engineer focused on building clean, high-performance web systems. I specialize in React/Next.js frontend systems, designing scalable Node.js/Express APIs, optimizing database operations (MongoDB, MySQL), and deploying production-ready services on cloud environments and VPS hosts.",
    email: "vivekananthansk@gmail.com",
    phone: "", // Removed phone
    location: "Tamil Nadu, India (Open to relocate)",
    github: "https://github.com/svivek19",
    linkedin: "https://www.linkedin.com/in/vivekananthansk/",
    leetcode: "https://leetcode.com/u/viveksivakumar/",
    resumeUrl: "https://drive.google.com/file/d/1AGu_j4bTaT7gYGTgTfLbgUlcTYud6QHv/view?usp=drive_link",
  },
  skills: [
    // Frontend
    { name: "Next.js", category: "frontend", iconName: "Layers" },
    { name: "React.js", category: "frontend", iconName: "Layers" },
    { name: "React Query", category: "frontend", iconName: "Network" },
    { name: "Redux", category: "frontend", iconName: "Activity" },
    { name: "TypeScript", category: "frontend", iconName: "Code" },
    { name: "JavaScript (ES6+)", category: "frontend", iconName: "FileCode" },
    { name: "HTML5", category: "frontend", iconName: "Chrome" },
    { name: "CSS3", category: "frontend", iconName: "Palette" },
    { name: "Tailwind CSS", category: "frontend", iconName: "Wind" },
    // Backend
    { name: "Node.js", category: "backend", iconName: "Server" },
    { name: "Express.js", category: "backend", iconName: "Cpu" },
    { name: "REST API Development", category: "backend", iconName: "Globe" },
    { name: "WebSockets (Socket.io)", category: "backend", iconName: "Zap" },
    { name: "Firebase Auth & Services", category: "backend", iconName: "Flame" },
    { name: "Content-Driven Architecture", category: "backend", iconName: "FolderOpen" },
    // Databases
    { name: "MongoDB", category: "databases", iconName: "Database" },
    { name: "MySQL", category: "databases", iconName: "Columns" },
    { name: "PostgreSQL", category: "databases", iconName: "Layers" },
    { name: "Redis", category: "databases", iconName: "Zap" },
    // Tools
    { name: "Git", category: "tools", iconName: "GitBranch" },
    { name: "GitHub", category: "tools", iconName: "Github" },
    { name: "VS Code", category: "tools", iconName: "Code2" },
    { name: "Postman", category: "tools", iconName: "Radio" },
    { name: "Vite", category: "tools", iconName: "Lightning" },
    { name: "Cloudinary", category: "tools", iconName: "Image" },
    // Cloud / Deployment
    { name: "Railway", category: "cloud-deployment", iconName: "Cloud" },
    { name: "VPS (Linux)", category: "cloud-deployment", iconName: "HardDrive" },
    { name: "Vercel", category: "cloud-deployment", iconName: "ExternalLink" },
    { name: "Render", category: "cloud-deployment", iconName: "Shuffle" },
    { name: "AWS S3", category: "cloud-deployment", iconName: "Box" },
    { name: "AWS EC2", category: "cloud-deployment", iconName: "Server" },
  ],
  experiences: [
    {
      role: "Backend Lead (Contract)",
      company: "Stadius Technologies Pvt. Ltd.",
      period: "Jan 2026 – Present",
      location: "Remote",
      points: [
        "Designed and developed backend architecture for an MVP-based learning platform (DigiParivaar) using Node.js and Express.js.",
        "Built RESTful APIs for lesson flows, progress tracking, and resume-learning functionality.",
        "Implemented OTP-based authentication using Firebase for secure onboarding.",
        "Designed and optimized MongoDB schemas for users, courses, lessons, and progress tracking.",
        "Deployed backend services using Railway and managed production configurations.",
        "Led backend decisions ensuring scalability, maintainability, and performance.",
      ],
      techStack: ["Node.js", "Express.js", "MongoDB", "Firebase", "Railway", "REST APIs"]
    },
    {
      role: "Software Developer",
      company: "Quantum Sharq Innovative Solutions",
      period: "Jun 2024 – Nov 2025",
      location: "Vellore, Tamil Nadu",
      points: [
        "Engineered a healthcare management system using MERN stack, supporting core workflows for patient and clinical data management.",
        "Optimized 10+ backend APIs and MongoDB queries, improving response times by up to 30% and reducing database load.",
        "Migrated WhatsApp notification system from third-party Interakt API to Meta Business API, significantly reducing operational costs.",
        "Deployed and managed backend services on a Linux VPS, handling server configuration, environment setup, and production monitoring.",
        "Improved frontend performance by optimizing React components using memoization techniques (React.memo, useMemo).",
      ],
      techStack: ["React", "Node.js", "Express", "MongoDB", "MySQL", "REST APIs", "Meta Cloud APIs", "VPS (Linux)"]
    }
  ],
  education: {
    degree: "Bachelor of Technology (B.Tech) – Information Technology",
    institution: "Bharath Niketan Engineering College",
    duration: "Aug 2020 – June 2024",
    location: "Tamil Nadu, India",
    cgpa: "8.11",
  },
  projects: [
    {
      id: "vshop",
      title: "VShop – Full-Stack E-Commerce Platform",
      summary: "High-performance Next.js e-commerce app featuring a dual-mode Neon Postgres database adapter.",
      description: "Built a dual-mode database adapter auto-switching between Neon Postgres and local JSON cache, reducing cloud query latency by 45% via automated offline fallback and sync.",
      tags: ["Next.js 15", "React 19", "Drizzle ORM", "Neon Postgres", "NextAuth.js", "Zustand"],
      githubUrl: "https://github.com/svivek19/vshop-ecommerce-nextjs",
      liveUrl: "https://vshop-ecommerce-nextjs.vercel.app/",
      features: [
        "Implemented checkout with canvas-rendered UPI QR countdowns and PhonePe simulation.",
        "Created an NLP-powered product query parser maintaining sub-80ms search-to-checkout times.",
        "Stress-tested 1,000+ concurrent cart events using Zustand persistence and server-side PDF invoice generation."
      ],
      stats: [
        { label: "Query Latency", value: "-45%" },
        { label: "Checkout Time", value: "<80ms" },
        { label: "Cart Stress Test", value: "1,000+ Events" }
      ],
      accentColor: "#3b82f6",
      imagePath: "/vshop.png"
    },
    {
      id: "vhub",
      title: "VHub – Real-Time Chat Application",
      summary: "Scalable WebSocket chat platform serving high concurrent presence metrics.",
      description: "Engineered a chat platform for 50+ concurrent users using Socket.IO rooms and namespaces; deployed Redis caching for unread counts and presence with O(1) access time, cutting DB read load by 60%.",
      tags: ["MongoDB", "Express.js", "React.js", "Node.js", "Socket.IO", "Redis", "Cloudinary", "TanStack Query"],
      githubUrl: "https://github.com/svivek19/VHub-frontend",
      liveUrl: "https://vhub-chat-app.vercel.app/",
      features: [
        "Delivered typing indicators, read receipts, emoji reactions, and threaded replies.",
        "Sub-100ms response times under load via event-driven Socket.IO architectures.",
        "Validated scalability with 1M+ message records using cursor-based pagination and compound indexes."
      ],
      stats: [
        { label: "DB Read Load", value: "-60%" },
        { label: "Response Latency", value: "<100ms" },
        { label: "Data Records Scale", value: "1M+ Messages" }
      ],
      accentColor: "#3b82f6",
      imagePath: "/vhub.png"
    },
    {
      id: "linker",
      title: "Linker – URL Shortener with Real-Time Analytics",
      summary: "High-throughput cache-first redirect engine with background analytics buffering.",
      description: "Linker is a high-performance, internal URL shortener built to handle massive concurrent traffic spikes (e.g., tens of thousands of clicks in a short window) without dropping click analytics or introducing latency.",
      tags: ["Next.js", "TypeScript", "MongoDB", "Tailwind CSS", "Recharts", "Lucide React"],
      githubUrl: "https://github.com/svivek19/link-shortener-nextjs.git",
      features: [
        "Cache-first redirection (302 Found) resolving in under 15ms by bypassing DB queries.",
        "High-throughput analytics queue buffering click events, batch writing them every 1s (or 500 items).",
        "Interactive dashboard displaying volume history charts, referrers, and load test simulators."
      ],
      stats: [
        { label: "Redirect Time", value: "<15ms" },
        { label: "Batch Write Trigger", value: "1s / 500 items" },
        { label: "Simulated Clicks", value: "10,000 Rapid" }
      ],
      accentColor: "#ec4899",
      imagePath: "/url.png"
    }
  ]
};
