import { AvatarBox } from "./components/AvatarBox";
import { InfoBox } from "./components/InfoBox";
import { doingData, infoData } from "./data";
import { InfoIcons } from "./components/InfoIcons";
import UnderLine from "./components/Underline";
import { DoingBox } from "./components/DoingBox";
export default function Home() {
  return (
    <div className="flex justify-center py-12 text-white poppins-normal">
      <div className="flex gap-12">
        <div className="max-w-2xs p-8 flex flex-col justify-start items-center  border-[0.2px] border-white/10 rounded-2xl  bg-[#1e1e1f]">
          <AvatarBox />
          <div className=" text-2xl my-5 poppins-medium">Mohit Hingorani</div>
          <div className="bg-[#2b2b2c] text-white/70 px-2 py-1 text-sm rounded-md poppins-normal">
            Full Stack and ML Developer
          </div>
          <UserInfo />
          <div>
            <InfoIcons />
          </div>
        </div>

        <div className="max-w-3xl relative p-8 border-[0.2px] border-white/10 rounded-3xl bg-[#1e1e1f]">
          <div className="absolute text-sm flex gap-8 top-0 right-0 border-[0.2px] border-white/10 bg-[#282829] rounded-tr-3xl rounded-bl-3xl px-8 py-4 ">
            <div className="text-yellow-400">About</div>
            <div>Resume</div>
            <div>Portfolio</div>
            <div>Contact</div>
          </div>
          <div className="poppins-semibold text-3xl">About Me</div>
          <div className="my-4 ">
            <UnderLine />
          </div>
          <div className="text-xs leading-5 poppins-normal text-white/70">
            I have 2 years of experience as a full-stack developer, primarily
            working with TypeScript-based stacks to build scalable web and
            AI-driven applications. Im currently involved in DevOps practices,
            including Docker, containerized deployments, and Auto Scaling Groups
            (ASGs), focusing on building reliable and production-ready systems.
            As a B.Tech IT student, I actively strengthen my software
            engineering fundamentals while exploring AI, cloud, and system
            design.
          </div>

          <div className="mt-8 mb-4 text-2xl poppins-semibold">
            What I'm Doing
          </div>
          <div className="grid grid-cols-2 gap-4">
            {doingData.map((doing, index) => {
              return (
                <DoingBox
                  key={index}
                  data={doing.data}
                  heading={doing.heading}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

function UserInfo() {
  return (
    <div className="w-full border-t border-white/10 mt-8 pt-6 pb-12 flex flex-col gap-5 ">
      {infoData.map((info, index) => {
        return (
          <div key={index}>
            <InfoBox heading={info.heading} value={info.value} icon={info.icon} />
          </div>
        );
      })}
    </div>
  );
}
