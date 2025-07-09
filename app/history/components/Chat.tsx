import { useGlobalStore } from "@/app/store/GlobalStore";
import { supabase } from "@/app/utils/supabase";
import { chatHistoryType } from "@/types";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { IoOpenOutline } from "react-icons/io5";
import { LuTrash2 } from "react-icons/lu";

const Chat = ({ chat }: { chat: chatHistoryType }) => {
  const { deleteChatFromHistory } = useGlobalStore();

  const [clicked, setClicked] = useState(false);

  const handleDelete = () => {
    setClicked(true);

    setTimeout(() => {
      deleteChatFromHistory(chat.id);
    }, 300);
  };

  return (
    <div
      className={`${
        clicked ? "translate-x-[-100%] opacity-0 duration-300" : ""
      } w-full min-h-[46px] py-[10px] rounded-[8px] bg-[#FFFFFF1A] border border-[#8692A633] pl-[20px] pr-[10px] flex items-center`}
    >
      <div className="w-full h-full flex justify-between items-center">
        <p className="flex-1 text-[14px] text-light-white">
          {chat.mainUserMsg}
        </p>
        <Link
          href={`/chats/${chat.id}`}
          className="w-[20px] h-full grid place-items-center"
        >
          <IoOpenOutline />
        </Link>
        {/* <button
          onClick={handleDelete}
          className="ml-[15px] w-[20px] h-full text-[red]"
        >
          <LuTrash2 />
        </button> */}
      </div>
    </div>
  );
};

export default Chat;
