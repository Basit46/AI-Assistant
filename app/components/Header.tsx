import Image from "next/image";
import React from "react";
import { UserDropDown } from "./UserDropDown";

const Header = () => {
  return (
    <div className="shrink-0 w-full h-[80px] px-[20px] bg-[#FFFFFF1A] flex justify-end items-center backdrop-blur-[24px] [box-shadow:0px_4px_17px_0px_#0000000A]">
      <UserDropDown />
    </div>
  );
};

export default Header;
