import Image from "next/image";

export function AvatarBox() {
  return (
    <div className="
      flex items-center justify-center
      rounded-2xl md:rounded-3xl
      bg-linear-to-r from-[#3F3F40] to-[#303030]
      w-20 h-20
      shrink-0
      lg:w-36 lg:h-36
    ">
      <div className="w-32 h-32 relative">
      <Image
        src="/mohit-avatar.png"
        alt="avatar"
        fill 
        className="
          object-contain


        "
        priority
      />
      </div>
    </div>
  );
}
