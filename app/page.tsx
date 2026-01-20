"use client";

import LeftSection from "./components/LeftSection";
import RightSection from "./components/RightSection";

export default function Home() {
  return (
    <div className="flex justify-center lg:py-12 text-white w-full poppins-normal">
      <div className="flex flex-col w-full lg:w-fit lg:flex-row gap-6 xl:gap-8 p-6   ">
        
        {/* Section Left */}
        <div className="w-full">
          <LeftSection />
        </div>

        {/* Section Right */}
        <div className="w-full">
          <RightSection />
        </div>
      </div>
    </div>
  );
}
