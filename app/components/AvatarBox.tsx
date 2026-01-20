import Image from "next/image";

export function AvatarBox() {
  return (
    <div className="
      flex items-center justify-center
      rounded-2xl md:rounded-3xl
      bg-linear-to-r from-[#3F3F40] to-[#303030]
      w-20 h-20
      md:w-28 md:h-28
      lg:w-32 lg:h-32
      shrink-0
    ">
      <Image
        src="/mohit-avatar.png"
        alt="avatar"
        width={160}
        height={160}
        className="
          object-contain
          w-16 h-16
          md:w-24 md:h-24
          lg:w-28 lg:h-28
        "
        priority
      />
    </div>
  );
}
