export interface Education {
  degree: string;
  institution: string;
  duration: string;
  location: string;
  cgpa?: string;
}

export const educationData: Education = {
  degree: "Bachelor of Technology (B.Tech) – Information Technology",
  institution: "Bharath Niketan Engineering College",
  duration: "Aug 2020 – June 2024",
  location: "Tamil Nadu, India",
  cgpa: "8.11",
};
