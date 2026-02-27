"use client";

import LeftSection from "./components/LeftSection";
import RightSection from "./components/RightSection";

export default function Home() {
  return (
    <div className="flex justify-center lg:px-3 lg:py-6 2xl:py-12 text-white w-full poppins-normal">
      <div className="flex w-full  flex-col xl:flex-row gap-3 lg:gap-12  xl:gap-8 p-3  lg:px-18 lg:justify-center   ">
        
        {/* Section Left */}
        <div className="  ">
          <LeftSection />
        </div>

        {/* Section Right */}
        <div className="w-full lg:max-w-3xxl xl:max-w-5xl  flex justify-center items-center">
          <RightSection />
        </div>
      </div>
    </div>
  );
}
