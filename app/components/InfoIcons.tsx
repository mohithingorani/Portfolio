import Image from "next/image";
import Link from "next/link";

export function InfoIcons() {
  return (
    <div className="flex w-full justify-between">
      <div className="flex *:invert *:opacity-50 *:hover:opacity-100 w-full justify-center gap-2 ">
        <Link className="block" href={"https://github.com/mohithingorani"}>
          <Image
            className=""
            src={"/logo-github.svg"}
            width={20}
            height={20}
            alt="github"
          />
        </Link>
        {/* </button> */}

        <Link href={"https://www.linkedin.com/in/mohithingorani"}>
          <Image
            src={"/logo-linkedin.svg"}
            width={20}
            height={20}
            alt="github"
          />
        </Link>
      </div>
    </div>
  );
}
