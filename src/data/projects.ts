export interface Project {
  title: string;
  description: string;
  tech: string[];
  liveUrl?: string;
  githubUrl?: string;
}

export const projectsData: Project[] = [
  {
    title: "Learning Management System (LMS)",
    description:
      "A full-featured MERN-based LMS platform supporting multiple user roles (User, Instructor, Admin) with course management, payments, analytics, and cloud storage. Designed with scalability, security, and real-world use cases in mind.",
    tech: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Razorpay",
      "AWS S3",
      "JWT",
      "i18n",
    ],
    liveUrl: "https://lms-mrtn.onrender.com/",
    githubUrl: "https://github.com/svivek19/lms-frontend.git",
  },
  {
    title: "TaskFlow – Task Management PWA",
    description:
      "A progressive web app for task management with secure authentication, data visualization dashboards, and Excel export functionality. Optimized for performance and responsive across devices.",
    tech: [
      "React",
      "Redux Toolkit",
      "Node.js",
      "Express",
      "MongoDB",
      "Chart.js",
    ],
    liveUrl: "https://task-managent-frontend.onrender.com/",
    githubUrl: "https://github.com/svivek19/task-managent-frontend.git",
  },
  {
    title: "V-DEV – Developer Community Platform",
    description:
      "A StackOverflow-inspired developer forum featuring OTP-based authentication, Q&A discussions, and an AI-powered learning roadmap generator using Gemini AI.",
    tech: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Tailwind CSS",
      "Gemini AI",
    ],
    liveUrl:
      "https://www.linkedin.com/posts/svivek018_webdev-mernstack-reactjs-activity-7316452466873536512-ylMh?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD3v8DkBg2GzusbaISwhtZ8Oa1EtrW066Rk",
    githubUrl: "https://github.com/svivek19/v-dev.git",
  },
  {
    title: "URL Shortener Web App",
    description:
      "A lightweight MERN-based URL shortener that converts long URLs into compact, shareable links with fast redirection and basic security validations.",
    tech: ["React", "Node.js", "Express", "MongoDB"],
    liveUrl: "https://url-client-e2zp.onrender.com/",
    githubUrl: "https://github.com/svivek19/url-client.git",
  },
];
