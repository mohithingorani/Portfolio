"use client";
import { useState } from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Domains, ALL_DOMAINS, AllDomains } from "../data";
import { SkillRadar } from "./Charts/RadarChart";

export default function Skills() {
  const [selectedDomain, setSelectedDomain] = useState<AllDomains>("Backend");
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  const currentDomain = Domains.find((d) => d.name === selectedDomain)!;

  return (
    <div ref={containerRef} className="w-full border rounded-2xl border-white/10 p-3 md:p-6 lg:p-8">
      <motion.div 
        className="flex gap-3 mb-6"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, staggerChildren: 0.1 }}
      >
        {ALL_DOMAINS.map((domain, index) => (
          <motion.button
            key={domain}
            onClick={() => setSelectedDomain(domain)}
            className={`border rounded-md px-2 py-1 md:px-3 md:py-1 text-xs sm:text-md transition
              ${
                selectedDomain === domain
                  ? "text-yellow-200/80 font-semibold bg-yellow-200/10 border-yellow-200/30"
                  : "border-white/10 text-white/70 hover:boder-yellow-200/10 hover:border-yellow-200/10 hover:text-yellow-200"
              } cursor-pointer`}
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            {domain}
          </motion.button>
        ))}
      </motion.div>
      <motion.div
        className="w-full h-60 sm:h-70 md:h-90 lg:h-110 xl:h-120"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={isInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <SkillRadar data={currentDomain.data} labels={currentDomain.labels} />
      </motion.div>
    </div>
  );
}