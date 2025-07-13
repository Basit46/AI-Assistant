import Image from "next/image";
import React from "react";
import { UserDropDown } from "./UserDropDown";
import { LuPlus } from "react-icons/lu";
import { useRouter } from "next/navigation";

const Header = () => {
  const router = useRouter();
  return (
    <div className="shrink-0 w-full h-[80px] px-[10px] sm:px-[20px] bg-[#FFFFFF1A] flex justify-between items-center backdrop-blur-[24px] [box-shadow:0px_4px_17px_0px_#0000000A]">
      <div className="xmd:invisible flex items-center gap-[20px]">
        <button onClick={() => router.push("/")} className="">
          <LuPlus className="size-[24px]" />
        </button>
        <div className="size-[48px] bg-button-primary-purple rounded-[8px] grid place-items-center">
          <Image src="/logo-white.png" width={24} height={28} alt="logo" />
        </div>
      </div>

      <UserDropDown />
    </div>
  );
};

export default Header;
