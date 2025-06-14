"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React, { useState } from "react";
import { HiArrowLongRight } from "react-icons/hi2";
import {
  LuBot,
  LuMessageSquareText,
  LuMessagesSquare,
  LuPlus,
  LuSettings,
  LuSparkles,
} from "react-icons/lu";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { useGlobalStore } from "../store/GlobalStore";

const sections = [
  // {
  //   path: "/",
  //   name: "Chat",
  //   icon: <LuMessagesSquare />,
  // },
  {
    path: "/history",
    name: "Chat History",
    icon: <LuMessageSquareText />,
  },
  {
    path: "/ai",
    name: "AI Personalities",
    icon: <LuBot />,
  },
  {
    path: "/settings",
    name: "Settings",
    icon: <LuSettings />,
  },
];

const Sidebar = () => {
  const pathname = usePathname();
  const router = useRouter();
  const { resetMessages } = useGlobalStore();

  const [isExpanded, setIsExpanded] = useState(true);

  const handleNewChat = () => {
    router.push("/");
    resetMessages();
  };

  return (
    <div
      className={`${
        isExpanded ? "w-[260px]" : "w-[118px] items-center"
      } relative duration-300 z-[2] h-full flex flex-col px-[20px] bg-[#FFFFFF1A] backdrop-blur-[24px] [box-shadow:0px_4px_17px_0px_#0000000A] border-r-[1.5px] border-r-[#8692A633]`}
    >
      {/* Toggle Expand Button */}
      <button
        onClick={() => setIsExpanded((prev) => !prev)}
        className="absolute right-[-12px] top-[40px] -translate-y-1/2 size-[24px] bg-[#FFFFFF] rounded-[5px] grid place-items-center"
      >
        <MdKeyboardArrowLeft
          className={`${isExpanded ? "" : "rotate-[180deg]"} text-icon-active`}
        />
      </button>

      <div className="h-[80px] flex items-center">
        <div className="size-[48px] bg-button-primary-purple rounded-[8px] grid place-items-center">
          <Image src="/logo-white.png" width={24} height={28} alt="logo" />
        </div>
      </div>

      <div className="py-[30px] flex-1 flex flex-col justify-between">
        {/* Navigations */}
        <div className="space-y-[10px]">
          <button
            onClick={handleNewChat}
            className={`${
              isExpanded ? "w-full" : "w-[48px]"
            } h-[48px] flex items-center gap-[16px] rounded-[8px] px-[12px] whitespace-nowrap shrink-0 [&_svg]:size-[24px] [&_svg]:shrink-0`}
          >
            <LuPlus />
            {isExpanded && (
              <p className="text-[14px] font-semibold whitespace-nowrap shrink-0">
                New Chat
              </p>
            )}
          </button>

          {sections.map((item, i) => {
            const isActive =
              item.path == "/"
                ? pathname == item.path
                : pathname.startsWith(item.path);

            return (
              <Link
                key={i}
                href={item.path}
                className={`${
                  isActive ? "bg-button-primary-purple text-main-black" : ""
                } ${
                  isExpanded ? "w-full" : "w-[48px]"
                } h-[48px] flex items-center gap-[16px] rounded-[8px] px-[12px] whitespace-nowrap shrink-0 [&_svg]:size-[24px] [&_svg]:shrink-0`}
              >
                {item.icon}
                {isExpanded && (
                  <p className="text-[14px] font-semibold whitespace-nowrap shrink-0">
                    {item.name}
                  </p>
                )}
              </Link>
            );
          })}
        </div>

        {isExpanded ? (
          <div className="relative w-full h-[254px] bg-[#7468FC] rounded-[20px] overflow-hidden">
            <div className="absolute bottom-[-60%] left-[-85%] w-[272px] h-[297px] rounded-full rotate-90 bg-[linear-gradient(130.99deg,_rgba(255,_255,_255,_0.4)_-16.86%,_rgba(255,_255,_255,_0)_44.99%)]" />
            <div className="absolute top-[-50%] left-[30%] w-[215px] h-[237px] rotate-[90deg] rounded-full bg-[linear-gradient(320.29deg,_rgba(255,_255,_255,_0.4)_-13.64%,_rgba(255,_255,_255,_0.0224001)_32.77%,_rgba(255,_255,_255,_0)_35.52%)]" />

            <div className="w-full h-full flex flex-col items-center justify-center gap-[7px]">
              <div className="size-[48px] rounded-[10px] bg-main-white flex items-center justify-center">
                <LuSparkles className="text-[28px] text-[#7468FC]" />
              </div>
              <p className="text-[18px] font-semibold">Upgrade to Pro</p>
              <p className="text-[12px] leading-[100%] text-center">
                Unlock powerful features <br /> with our pro upgrade today!
              </p>
              <Button className="mt-[20px] bg-white w-[129px] h-[40px] flex items-center justify-center text-icon-purple">
                <p>Upgrade now</p>
                <HiArrowLongRight className="size-[24px]" />
              </Button>
            </div>
          </div>
        ) : (
          <div className="size-[48px] bg-white text-icon-purple rounded-[8px] grid place-items-center">
            <LuSparkles className="text-[28px] text-[#7468FC]" />
          </div>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
