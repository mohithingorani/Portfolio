import Image from "next/image";

export function AvatarBox (){
    return <div className="bg-linear-to-r rounded-2xl md:rounded-3xl from-[#3F3F40] flex justify-center items-center to-[#303030] w-23 h-20 md:w-30 md:h-25 lg:w-40 lg:h-35 ">
        <Image className="h-20 w-27 md:h-25 md:w-33 lg:h-35 lg:w-43" src={"/mohit-avatar.png"} width={200} height={200} alt="avatar"/>
    </div>
    
}