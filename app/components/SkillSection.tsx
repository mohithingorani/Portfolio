"use client";
import { useState } from "react";
import { Domains, ALL_DOMAINS, AllDomains } from "../data";
import { SkillRadar } from "./Charts/RadarChart";

export default function Skills() {
  const [selectedDomain, setSelectedDomain] = useState<AllDomains>("Backend");

  const currentDomain = Domains.find((d) => d.name === selectedDomain)!;
  return (
    <div className="w-full  border rounded-2xl border-white/10 p-3 md:p-6 lg:p-8">
      <div className="flex gap-3 mb-6">
        {ALL_DOMAINS.map((domain) => (
          <button
            key={domain}
            onClick={() => setSelectedDomain(domain)}
            className={`border rounded-md  px-2 py-1 md:px-3 md:py-1 text-xs  sm:text-md transition
              ${
                selectedDomain === domain
                  ? "text-yellow-400/80 font-semibold bg-yellow-300/10 border-yellow-300/30"
                  : "border-white/10 text-white/70 hover:boder-yellow-200/10  hover:border-yellow-200/10 hover:text-yellow-300"
              } cursor-pointer `}
          >
            {domain}
          </button>
        ))}
      </div>
      <div className="w-full h-60 sm:h-70 md:h-90 ">
        <SkillRadar data={currentDomain.data} labels={currentDomain.labels} />
      </div>
    </div>
  );
}
