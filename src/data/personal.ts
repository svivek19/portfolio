export interface PersonalInfo {
  name: string;
  shortName: string;
  role: string;
  tagline: string;
  resume: string;
  currentStatus: string;
}

const statuses = [
  "Available for new opportunities",
  "Not actively seeking, but open to discussions",
] as const;

export const personalInfo = {
  name: "Vivekananthan S",
  shortName: "Vivek",
  role: "Full Stack Developer (MERN | Real-time Systems)",
  tagline:
    "Full-stack MERN developer with 2 years of experience building scalable backend systems and real-time applications. Focused on performance optimization, caching strategies, and real-time synchronization.",
  resume:
    "https://drive.google.com/file/d/1hgRCiMnQzAOFDJ60ZNnki0JTopss3_RB/view?usp=sharing",
  currentStatus: statuses[0],
};
