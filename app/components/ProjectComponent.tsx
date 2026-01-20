import Image from "next/image";
import { EyeIcon } from "./Icons";
import Link from "next/link";

export default function ProjectComponent({
  image,
  link,
  heading,
  description,
}: {
  image: string;
  link: string;
  heading: string;
  description: string;
}) {
  return (
    <Link href={link} className="block">
      <div className="group mb-1 cursor-pointer flex flex-col gap-2 w-full">
        <div className="relative w-full aspect-2/1 overflow-hidden rounded-xl">
          <Image
            src={`/projects/${image}`}
            alt=""
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-110"
          />

          <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <span className="w-10 h-10 flex items-center justify-center rounded-md bg-[#1e1e1f]">
              <EyeIcon />
            </span>
          </div>
        </div>

        <div className="ml-1 poppins">
          <div className="text-white/90">{heading}</div>
          <div className="text-white/60 text-sm">{description}</div>
        </div>
      </div>
    </Link>
  );
}
