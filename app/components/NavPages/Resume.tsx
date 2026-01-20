import UnderLine from "../Underline";
import Box from "../Box";
import { SkillRadar } from "../Charts/RadarChart";
import { AllDomains, Domains } from "@/app/data";
import Skills from "../SkillSection";

export default function ResumePage() {
  return (
    <div>
      <div className="poppins-semibold text-3xl">Resume</div>
      <div className="my-4 ">
        <UnderLine />
      </div>
      <div className="flex ml-1 mt-8 mb-4 jusify-start items-center">
        <Box />
        <div className="text-xl md:text-2xl poppins-semibold ml-4">Education</div>
      </div>

      <div className="relative pl-12">
        <div className="absolute left-6.75 -top-4 md:h-34  xl:h-30 w-px bg-white/10" />

        <div className="relative mb-8 pl-6 poppins-normal">
          <span className="absolute -left-6.5 top-1 w-3 h-3 bg-yellow-300/50 rounded-full" />
          <span className="absolute -left-5.75 top-1.5 w-1.5 h-1.5 bg-yellow-100 rounded-full" />
          <h4 className="font-medium text-sm md:text-lg text-white/95">Manipal University Jaipur</h4>
          <span className="text-yellow-400/70 text-xs md:text-sm">2022 — 2026</span>
          <p className="text-white/60 text-xs md:text-sm">
            Studying Computer Science Engineering with honours in Artificial
            Intelligence and Machine Learning
          </p>
        </div>
        <div className="relative mb-8 pl-6 poppins-normal">
          <span className="absolute -left-6.5 top-1 w-3 h-3 bg-yellow-300/50 rounded-full" />
          <span className="absolute -left-5.75 top-[6.3px] w-1.5 h-1.5 bg-yellow-100 rounded-full" />
          <h4 className="font-medium text-sm md:text-lg text-white/95">Aadharshila Vidyapeeth</h4>
          <span className="text-yellow-400/70 text-xs md:text-sm  ">2021 - 2022</span>
          <p className="text-white/60 text-xs md:text-sm">
            Studied Physics, Maths and Chemistry and prepared for IIT-JEE
          </p>
        </div>
      </div>

     <Skills/>
    </div>
  );
}
