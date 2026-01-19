"use client";
import { AvatarBox } from "./components/AvatarBox";
import { InfoBox } from "./components/InfoBox";
import { buttons, doingData, infoData } from "./data";
import { InfoIcons } from "./components/InfoIcons";
import { useState } from "react";
import { CurrentPage } from "./types";
import AboutPage from "./components/NavPages/AboutPage";
import ResumePage from "./components/NavPages/Resume";

export default function Home() {
  const [currentPage, setCurrentPage] = useState<CurrentPage>(
    CurrentPage.about,
  );
  return (
    <div className="flex justify-center py-12 text-white poppins-normal">
      <div className="flex gap-12">
        <div className="sticky top-12 self-start">
        <div className="max-w-2xs max-h-180 p-8 flex flex-col justify-start items-center  border-[0.2px] border-white/10 rounded-2xl  bg-[#1e1e1f]">
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
        </div>

        <div className="w-3xl relative p-8 border-[0.2px] border-white/10 rounded-3xl bg-[#1e1e1f]">
          <div className="absolute text-sm flex gap-8 top-0 right-0 border-[0.2px] border-white/10 bg-[#282829] rounded-tr-3xl *:hover:text-yellow-400 *:cursor-pointer rounded-bl-3xl px-8 py-4 ">
            {buttons.map((buttonval, index) => {
              return (
                <button
                  className={`${buttonval === currentPage && "text-yellow-400"}`}
                  key={index}
                  onClick={() => setCurrentPage(buttonval)}
                >
                  {buttonval}
                </button>
              );
            })}
          </div>
          {currentPage === CurrentPage.about && <AboutPage />}
          {currentPage===CurrentPage.resume && <ResumePage/>}
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
