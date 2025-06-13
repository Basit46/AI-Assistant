import Image from "next/image";
import React from "react";

const LogoWrapper = () => {
  return (
    <div className="absolute left-[50px] top-[25px] flex gap-[8px] items-center">
      <Image src="/logo.png" width={42} height={45} alt="logo" />
      <p className="mt-[10px] text-[24px] font-semibold leading-none text-light-white">
        BotBuzz
      </p>
    </div>
  );
};

export default LogoWrapper;
