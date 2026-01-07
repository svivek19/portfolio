export interface PersonalInfo {
  name: string;
  shortName: string;
  role: string;
  tagline: string;
  status: [];
}

const statuses = [
  "Available for new opportunities",
  "Not actively seeking, but open to discussions",
] as const;

export const personalInfo = {
  name: "Vivekananthan S",
  shortName: "Vivek",
  role: "React & MERN Stack Developer",
  tagline:
    "I build clean, scalable MERN applications with a strong focus on performance and user experience.",
  currentStatus: statuses[0],
};
