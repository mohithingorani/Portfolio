"use client";

import LeftSection from "./components/LeftSection";
import RightSection from "./components/RightSection";

export default function Home() {
  return (
    <div className="flex justify-center lg:px-3 lg:py-6 2xl:py-12 text-white w-full poppins-normal">
      <div className="flex flex-col xl:items-start  xl:flex-row gap-3 lg:gap-8 p-3 lg:px-18 lg:justify-center w-full max-w-[1600px]">
        
        {/* Section Left */}
        <div className="w-full lg:w-auto">
          <LeftSection />
        </div>

        {/* Section Right */}
        <div className="w-full lg:grow xl:max-w-225 overflow-hidden">
          <RightSection />
        </div>
      </div>
    </div>
  );
}
