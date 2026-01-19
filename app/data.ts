export type Info = { icon: string; heading: string; value: string }[];

export const infoData: Info = [
  { icon: "mail", heading: "EMAIL", value: "mohithingorani20..." },
  { icon: "phone", heading: "PHONE", value: "+91-9811033533" },
  { icon: "calendar", heading: "BIRTHDAY", value: "DEC 16, 2003" },
  { icon: "location", heading: "LOCATION", value: "New Delhi, India" },
];

export type Doing = { heading: string; data: string }[];
export const doingData: Doing = [
  {
    heading: "Artificial Intelligence",
    data: "Building AI-powered features, RAG systems, chatbots, and intelligent agents for real-world applications.",
  },
  {
    heading: "Full-Stack Engineering",
    data: "Developing scalable TypeScript-based web and app solutions with a focus on performance and clean architecture.",
  },
  {
    heading: "Backend & Systems",
    data: "Designing reliable APIs, databases, and backend services while improving system stability and scalability.",
  },
  {
    heading: "DevOps & Cloud",
    data: "Working with Docker, containerized deployments, and Auto Scaling Groups (ASGs) to build production-ready infrastructure.",
  },
];
