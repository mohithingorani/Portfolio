"use client"
import Image from "next/image";
import { EyeIcon } from "./Icons";
import { useRouter } from "next/navigation";

export default function ProjectComponent({
  image,
  link,
  heading,
  description
}:{
  image:string,
  link:string,
  heading:string,
  description:string
}) {
  const router = useRouter();
  return (
    <div className="mb-6">
      <div className="group cursor-pointer relative w-80 h-40 overflow-hidden rounded-xl">
        {/* Image */}
        <Image
          src={`/projects/${image}`}
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
          <span onClick={()=>router.push(link)} className=" w-15 h-15 flex justify-center items-center rounded-md bg-[#1e1e1f] p-2">
            <EyeIcon className="opacity-60 hover:opacity-100" />
          </span>
        </div>
      </div>
      <div className="ml-2 mt-2 poppins">
        <div className="text-white/90">{heading}</div>
        <div className="text-white/60">{description}</div>
      </div>
    </div>
  );
}
