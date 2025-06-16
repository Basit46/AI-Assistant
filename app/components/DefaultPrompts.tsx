"use client";

import React, { useMemo } from "react";
import Image from "next/image";
import { greetings } from "../constants";

const DefaultPrompts = () => {
  const hour = new Date().getHours();
  const section = hour < 12 ? "morning" : hour < 18 ? "afternoon" : "evening";

  const randomIndex = useMemo(
    () => Math.floor(Math.random() * greetings[section].length),
    [section]
  );

  return (
    <div className="w-[60%] absolute left-1/2 top-1/2 mt-[-50px] -translate-x-1/2 -translate-y-1/2">
      <div className="size-[48px] bg-light-white rounded-[8px] shadow-[0px_4px_4px_0px_#0000000A] grid place-items-center">
        <Image src="/logo.png" width={24} height={28} alt="logo" />
      </div>
      <h1 className="mt-[10px] text-[20px] font-semibold">
        Your Daily AI Assistant
      </h1>

      <div className="mt-[40px]">
        <h1 className="text-[40px] font-semibold">
          {greetings[section][randomIndex]}, Basit
        </h1>
      </div>
    </div>
  );
};

export default DefaultPrompts;
