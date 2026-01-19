import { doingData } from "@/app/data";
import UnderLine from "../Underline";
import { DoingBox } from "../DoingBox";
import Image from "next/image";
import { EyeIcon } from "../Icons";

export default function PortfolioPage() {
  return (
    <div>
      <div className="poppins-semibold text-3xl">Portfolio</div>
      <div className="my-4 ">
        <UnderLine />
      </div>
      <div className="mt-8">
        <Project />
      </div>
    </div>
  );
}

function Project() {
  return (
    <div>
      <div className="group cursor-pointer relative w-80 h-40 overflow-hidden rounded-xl">
        {/* Image */}
        <Image
          src="/voltex.jpg"
          alt=""
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-110"
        />

        {/* Overlay */}
        <div
          className="absolute inset-0 flex items-center justify-center
        bg-black/50 opacity-0 transition-opacity duration-300
        group-hover:opacity-100"
        >
          <span className=" w-15 h-15 flex justify-center items-center rounded-md bg-[#1e1e1f] p-2">
            <EyeIcon className="opacity-80" />
          </span>
        </div>
      </div>
      <div className="ml-2 mt-2 poppins">
        <div className="text-white/90">Self Deployed PaaS</div>
        <div className="text-white/60">Devops</div>
      </div>
    </div>
  );
}
