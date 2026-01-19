"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

export function InfoIcons() {
  const router = useRouter();

  return (
    <div className="flex w-full justify-between">
      <div className="flex *:invert *:opacity-50 *:hover:opacity-100 w-full justify-center gap-2 ">
        <button
          className="cursor-pointer"
          onClick={() => {
            router.push("https://github.com/mohithingorani");
          }}
        >
          <Image
            className=""
            src={"/logo-github.svg"}
            width={20}
            height={20}
            alt="github"
          />
        </button>
        <button onClick={()=>{
            router.push("https://www.linkedin.com/in/mohithingorani/")
        }} className="cursor-pointer">
          <Image
            src={"/logo-linkedin.svg"}
            width={20}
            height={20}
            alt="github"
          />
        </button>
      </div>
    </div>
  );
}
