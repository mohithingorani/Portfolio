import { infoData } from "../data";
import { AvatarBox } from "./AvatarBox";
import { InfoBox } from "./InfoBox";
import { InfoIcons } from "./InfoIcons";

export default function LeftSection() {
  return (
    <div className="lg:sticky lg:top-12 lg:self-start">
      <div className="w-full lg:max-w-2xs lg:max-h-180 p-4 md:p-8 flex lg:flex-col justify-start items-center  border-[0.2px] border-white/10 rounded-2xl  bg-[#1e1e1f]">
        <AvatarBox />
        <div className="flex flex-col gap-3 lg:gap-0 h-full ml-4 lg:ml-0 lg:block">
          <div className=" text-xl md:text-2xl  lg:my-5 poppins-medium">Mohit Hingorani</div>
          <div className="bg-[#2b2b2c] text-white/70 px-2 py-1 text-xs md:text-sm rounded-md poppins-normal">
            Full Stack and ML Developer
          </div>
        </div>
        <div className="hidden lg:inline-block">
          <UserInfo />
        </div>
        <div className="hidden lg:inline-block">
          <InfoIcons />
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
            <InfoBox
              heading={info.heading}
              value={info.value}
              icon={info.icon}
            />
          </div>
        );
      })}
    </div>
  );
}