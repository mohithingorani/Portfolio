"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { infoData } from "../data";
import { AvatarBox } from "./AvatarBox";
import { InfoBox } from "./InfoBox";
import { SocialLinks } from "./SocialLinks";

export default function LeftSection() {
  const [open, setOpen] = useState(false);

  return (
    <div className="xl:sticky xl:top-10 2xl:top-18 transition-all duration-200">
      <div className="xl:max-w-xl xl:w-max rounded-3xl border border-white/10 bg-[#1e1e1f] xl:pt-8 overflow-hidden transition-all duration-200">
        {/* HEADER */}
        <div
          className="
  p-4  relative
  flex items-center gap-4
  xl:flex-col xl:items-center xl:text-center
"
        >
          {/* Avatar */}
          <AvatarBox />

          {/* Name + Role */}
          <div className="flex-1 xl:flex-none">
            <div className="text-lg md:text-xl poppins-medium">
              Mohit Hingorani
            </div>

            <div
              className="
      mt-1
      bg-[#2b2b2c] text-white/70
      px-2 py-1 text-xs md:text-sm
      rounded-md w-fit
      xl:mx-auto
    "
            >
              Full Stack and AI Developer
</div> 
          </div>

          {/* Toggle (mobile only) */}
          <button
            onClick={() => setOpen(!open)}
            className="xl:hidden absolute top-4 right-4 text-yellow-400"
          >
            <ChevronDown
              className={`transition-transform duration-300 ${
                open ? "rotate-180" : ""
              }`}
            />
          </button>
        </div>

        {/* MOBILE ACCORDION (inside card) */}
        <div
          className={`
            xl:hidden grid transition-all duration-500 ease-in-out
            ${open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}
          `}
        >
          <div className="overflow-hidden">
<div className="h-px bg-white/5 mx-6" />
            <div className="p-4">
              <UserInfo2 />
            </div>

            {/* Footer icons */}
            <div className="border-t border-white/10 p-4 flex justify-center">
              <SocialLinks />
            </div>
          </div>
        </div>

        {/* DESKTOP CONTENT (UNCHANGED BEHAVIOR) */}
<div className="hidden xl:block px-6 pb-6">          <UserInfo />
            <SocialLinks />
          </div>
        </div>
      </div>
  );
}

function UserInfo() {
  return (
    <div className="w-full border-t border-white/10 mt-6 pt-6 pb-12 flex flex-col gap-5">
      {infoData.map((info, index) => (
        <InfoBox
          key={index}
          heading={info.heading}
          value={info.value}
          icon={info.icon}
        />
      ))}
    </div>
  );
}

function UserInfo2() {
  return (
    <div className="flex flex-col gap-5">
      {infoData.map((info, index) => (
        <InfoBox
          key={index}
          heading={info.heading}
          value={info.value}
          icon={info.icon}
        />
      ))}
    </div>
  );
}
