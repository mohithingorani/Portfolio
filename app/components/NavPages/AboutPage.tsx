import { doingData } from "@/app/data";
import UnderLine from "../Underline";
import { DoingBox } from "../DoingBox";

export default function AboutPage() {
  return (
    <div className="">
      
      {/* Header */}
      <div className="poppins-semibold text-3xl">About Me</div>

      <div className="my-4">
        <UnderLine />
      </div>

      <p className="text-[15px] leading-7 poppins-light text-white/70 max-w-3xl">
        I’m a full-stack developer with experience of building scalable web and AI-driven applications. 
        I’ve designed Agentic AI systems and RAG pipelines, integrating LLMs with external data to create 
        context-aware solutions. Alongside development, I work with Docker and cloud deployments to build 
        reliable, production-ready systems while strengthening my foundations in AI, distributed systems, 
        and system design as a B.Tech student.
      </p>

      {/* Divider Space */}
      <div className="mt-12" />

      {/* What I'm Doing */}
      <div className="space-y-6">
        <h2 className="text-xl md:text-2xl poppins-semibold tracking-wide">
          What I'm Doing
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {doingData.map((doing, index) => (
            <div
              key={index}
              className="rounded-2xl p-2 backdrop-blur-md 
                         bg-white/5 border border-white/10 
                         transition-all duration-300 
                         hover:scale-[1.02] hover:border-white/20 flex flex-col justify-center"
            >
              <DoingBox
                heading={doing.heading}
                data={doing.data}
                Icon={doing.icon}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}