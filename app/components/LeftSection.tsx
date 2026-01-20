"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { infoData } from "../data";
import { AvatarBox } from "./AvatarBox";
import { InfoBox } from "./InfoBox";
import { InfoIcons } from "./InfoIcons";

export default function LeftSection() {
  const [open, setOpen] = useState(false);

  return (
    <div className="lg:sticky lg:top-18">
      <div className="lg:max-w-2xs rounded-3xl border border-white/10 bg-[#1e1e1f] overflow-hidden">
        {/* HEADER */}
        <div
          className="
  p-4 md:p-6 relative
  flex items-center gap-4
  lg:flex-col lg:items-center lg:text-center
"
        >
          {/* Avatar */}
          <AvatarBox />

          {/* Name + Role */}
          <div className="flex-1 lg:flex-none">
            <div className="text-lg md:text-xl poppins-medium">
              Mohit Hingorani
            </div>

            <div
              className="
      mt-1
      bg-[#2b2b2c] text-white/70
      px-2 py-1 text-xs md:text-sm
      rounded-md w-fit
      lg:mx-auto
    "
            >
              Full Stack and ML Developer
            </div>
          </div>

          {/* Toggle (mobile only) */}
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden absolute top-4 right-4 text-yellow-400"
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
            lg:hidden grid transition-all duration-500 ease-in-out
            ${open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}
          `}
        >
          <div className="overflow-hidden">
            <div className="h-px bg-white/10 mx-4" />

            <div className="p-4">
              <UserInfo2 />
            </div>

            {/* Footer icons */}
            <div className="border-t border-white/10 p-4 flex justify-center">
              <InfoIcons />
            </div>
          </div>
        </div>

        <div className="hidden lg:block p-6">
          <UserInfo />
          <div className="mt-6">
            <InfoIcons />
          </div>
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
