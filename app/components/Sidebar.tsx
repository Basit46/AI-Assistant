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
  {
    path: "/history",
    name: "Chat History",
    icon: <LuMessageSquareText />,
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
        isExpanded ? "w-[118px] xmd:w-[260px]" : "w-[118px] items-center"
      } relative hidden xmd:flex duration-300 z-[2] h-full flex-col px-[20px] bg-[#FFFFFF1A] backdrop-blur-[24px] [box-shadow:0px_4px_17px_0px_#0000000A] border-r-[1.5px] border-r-[#8692A633]`}
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
              <p className="hidden xmd:block text-[14px] font-semibold whitespace-nowrap shrink-0">
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
                  isExpanded ? "w-[48px] xmd:w-full" : "w-[48px]"
                } h-[48px] flex items-center gap-[16px] rounded-[8px] px-[12px] whitespace-nowrap shrink-0 [&_svg]:size-[24px] [&_svg]:shrink-0`}
              >
                {item.icon}
                {isExpanded && (
                  <p className="hidden xmd:block text-[14px] font-semibold whitespace-nowrap shrink-0">
                    {item.name}
                  </p>
                )}
              </Link>
            );
          })}
        </div>

        <div className="">
          <Link
            href="/ai"
            className={`${
              pathname == "/ai"
                ? "bg-button-primary-purple text-main-black"
                : ""
            } ${
              isExpanded ? "w-full" : "w-[48px]"
            } h-[48px] flex items-center gap-[16px] rounded-[8px] px-[12px] whitespace-nowrap shrink-0`}
          >
            <LuSettings className="shrink-0 size-[24px]" />
            {isExpanded && (
              <p className="hidden xmd:block text-[14px] font-semibold whitespace-nowrap shrink-0 leading-none">
                AI Pesonality
              </p>
            )}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
