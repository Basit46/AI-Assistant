"use client";

import React from "react";
import { IoOpenOutline } from "react-icons/io5";
import DateLabel from "../components/DateLabel";
import { LuTrash2 } from "react-icons/lu";
import { useGlobalStore } from "../store/GlobalStore";
import { chatHistoryType } from "@/types";
import Link from "next/link";

const History = () => {
  const { chatHistory } = useGlobalStore();

  return (
    <div className="w-full h-full flex justify-center py-[40px]">
      <div className="w-[60%] space-y-[60px]">
        <div className="w-full">
          <DateLabel date="today" />
          <div className="pt-[40px] flex flex-col gap-[20px]">
            {chatHistory.map((chat, i) => (
              <Chat key={i} chat={chat} />
            ))}
          </div>
        </div>

        <div className="w-full">
          <DateLabel date="yesterday" />
          <div className="pt-[40px] flex flex-col gap-[20px]"></div>
        </div>

        <div className="w-full">
          <DateLabel date="Previous 30 days" />
          <div className="pt-[40px] flex flex-col gap-[20px]"></div>
        </div>
      </div>
    </div>
  );
};

export default History;

const Chat = ({ chat }: { chat: chatHistoryType }) => {
  return (
    <div className="w-full h-[56px] rounded-[8px] bg-[#FFFFFF1A] flex justify-between items-center border border-[#8692A633] pl-[20px] pr-[10px]">
      <p className="flex-1 text-[14px] text-light-white">{chat.mainUserMsg}</p>
      <Link
        href={`/chats/${chat.id}`}
        className="w-[20px] h-full grid place-items-center"
      >
        <IoOpenOutline />
      </Link>
      <button className="ml-[15px] w-[20px] h-full text-[red]">
        <LuTrash2 />
      </button>
    </div>
  );
};
