import Image from "next/image";

export function AvatarBox (){
    return <div className="bg-linear-to-r rounded-3xl from-[#3F3F40] flex justify-center items-center to-[#303030] w-40 h-35 ">
        <Image className="h-35 w-43" src={"/mohit-avatar.png"} width={200} height={200} alt="avatar"/>
    </div>
    
}