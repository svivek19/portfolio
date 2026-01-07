export interface ContactInfo {
  email: string;
  phone: string;
  location: string;
  links: {
    label: string;
    url: string;
    type: "github" | "linkedin" | "leetcode" | "gfg" | "portfolio";
  }[];
}

export const contactData: ContactInfo = {
  email: "svivek030503@gmail.com",
  phone: "+91 9361758471",
  location: "Tamil Nadu, India",
  links: [
    {
      label: "GitHub",
      url: "https://github.com/svivek19",
      type: "github",
    },
    {
      label: "LinkedIn",
      url: "https://www.linkedin.com/in/svivek018/",
      type: "linkedin",
    },
    {
      label: "LeetCode",
      url: "https://leetcode.com/u/viveksivakumar/",
      type: "leetcode",
    },
    {
      label: "GeeksforGeeks",
      url: "https://www.geeksforgeeks.org/profile/viveksivakumar?tab=activity",
      type: "gfg",
    },
  ],
};
