import { doingData } from "@/app/data";
import UnderLine from "../Underline";
import { DoingBox } from "../DoingBox";

export default function AboutPage() {
  return (
    <div>
      <div className=" poppins-semibold text-3xl ">About Me</div>
      <div className="my-4 ">
        <UnderLine />
      </div>
      <div
        className={`text-[14.4px] leading-5.25 poppins-light  text-white/70 `}
      >
        I have 2 years of experience as a full-stack developer, primarily
        working with TypeScript-based stacks to build scalable web and AI-driven
        applications. Im currently involved in DevOps practices, including
        Docker, containerized deployments, and Auto Scaling Groups (ASGs),
        focusing on building reliable and production-ready systems. As a B.Tech
        student, I actively strengthen my software engineering fundamentals
        while exploring AI, cloud, and system design.
      </div>

      <div className="mt-8 mb-4 text-xl md:text-2xl poppins-semibold">
        What I'm Doing
      </div>
      <div className="grid md:grid-cols-2 gap-4">
        {doingData.map((doing, index) => (
          <DoingBox
            key={index}
            heading={doing.heading}
            data={doing.data}
            Icon={doing.icon}
          />
        ))}
      </div>
    </div>
  );
}
