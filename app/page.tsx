"use client";

import LeftSection from "./components/LeftSection";
import RightSection from "./components/RightSection";

export default function Home() {
  return (
    <div className="flex justify-center lg:py-12 text-white w-full poppins-normal">
      <div className="flex w-full  flex-col lg:flex-row gap-3 lg:gap-6 xl:gap-8 p-3 md:p-6 lg:justify-center   ">
        
        {/* Section Left */}
        <div className="  ">
          <LeftSection />
        </div>

        {/* Section Right */}
        <div className="w-full lg:max-w-3xl xl:max-w-5xl  flex justify-center items-center">
          <RightSection />
        </div>
      </div>
    </div>
  );
}
