import { doingData } from "@/app/data";
import UnderLine from "../Underline";
import GitHubContributions from "./GitHubContributions";

export default function AboutPage() {
  return (
    <div className="">
      
      {/* Header */}
      <div className="poppins-semibold text-3xl">About Me</div>

      <div className="my-4">
        <UnderLine />
      </div>

      <p className="text-[15px] leading-7 poppins-light text-white/70 max-w-3xl">
        I'm a full-stack developer with experience of building scalable web and AI-driven applications. 
        I've designed Agentic AI systems and RAG pipelines, integrating LLMs with external data to create 
        context-aware solutions. Alongside development, I work with Docker and cloud deployments to build 
        reliable, production-ready systems while strengthening my foundations in AI, distributed systems, 
        and system design as a B.Tech student.
      </p>

      {/* Divider Space */}
      <div className="mt-12" />

      {/* GitHub Activity */}
      <div className="space-y-6 pb-24">
        <h2 className="text-xl md:text-2xl poppins-semibold tracking-wide">
          GitHub Activity
        </h2>
        <div className="overflow-visible">
        <GitHubContributions username="mohithingorani" />
        </div>
      </div>
    </div>
  );
}