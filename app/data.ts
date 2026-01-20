import { CurrentPage } from "./types";

export type Info = { icon: string; heading: string; value: string }[];

export const infoData: Info = [
  { icon: "mail", heading: "EMAIL", value: "mohithingorani20003@gmail.com" },
  { icon: "phone", heading: "PHONE", value: "+91-9811033533" },
  { icon: "calendar", heading: "BIRTHDAY", value: "DEC 16, 2003" },
  { icon: "location", heading: "LOCATION", value: "New Delhi, India" },
];

export type Doing = { heading: string; data: string }[];
import {
  Brain,
  Code2,
  Server,
  CloudCog,
} from "lucide-react";

export const doingData = [
  {
    heading: "Artificial Intelligence",
    data: "Building AI-powered features, RAG systems, chatbots, and intelligent agents for real-world applications.",
    icon: Brain,
  },
  {
    heading: "Full-Stack Engineering",
    data: "Developing scalable TypeScript-based web and app solutions with a focus on performance and clean architecture.",
    icon: Code2,
  },
  {
    heading: "Backend & Systems",
    data: "Designing reliable APIs, databases, and backend services while improving system stability and scalability.",
    icon: Server,
  },
  {
    heading: "DevOps & Cloud",
    data: "Working with Docker, containerized deployments, and Auto Scaling Groups (ASGs) to build production-ready infrastructure.",
    icon: CloudCog,
  },
];


// <button>About</button>
// <button>Resume</button>
// <button>Portfolio</button>
// <button>Contact</button>

export const buttons = Object.values(CurrentPage);

export const ALL_DOMAINS = ["Backend", "Devops", "Frontend"] as const;

export type AllDomains = (typeof ALL_DOMAINS)[number];

export interface DomainType {
  name: AllDomains;
  data: number[];
  labels: string[];
}

export const Domains: DomainType[] = [
  {
    name: "Backend",
    data: [85, 50, 70, 30, 90, 85, 80],
    labels: ["Node.js", "Java", "Python", "Kafka", "PostgreSQL", "MongoDB", "Redis"],
  },
//   {
//     name: "AI/ML",
//     data: [80, 80, 50, 60, 20, 65, 55,40],
//     labels: ["AI Agents", "Python", "LangChain", "Transformers", "Llamaindex", "LLMs", "RAG","LangGraph"],
//   },
  {
    name: "Devops",
    data: [92, 50, 85, 85, 80, 89, 60],
    labels: ["Docker", "K8s", "AWS", "CI/CD", "Linux", "Nginx", "Monitoring"],
  },
  {
    name: "Frontend",
    data: [85, 90, 85, 90, 88, 80, 85],
    labels: ["React", "Next.js", "TS", "Tailwind", "HTML", "CSS", "UI/UX"],
  },
];

// Backend
// AI/ML
// DevOps
// Frontend
