import { MessageType } from "@/types";
import Image from "next/image";
import React from "react";
import { formatTimestamp } from "../utils";

const UserMessage = ({ msg }: { msg: MessageType }) => {
  return (
    <div className="flex flex-col items-end gap-5">
      <div className="flex gap-[12px] items-center">
        <p className="text-[8px] text-light-grey">
          {formatTimestamp(msg.timestamp)}
        </p>
        <div className="relative size-[32px] rounded-[8px] overflow-hidden">
          <Image src="/avatar.jpg" fill className="object-cover" alt="avatar" />
        </div>
      </div>

      <div className="min-w-[40%] min-h-[40px] sm:min-h-[56px] border border-[#8692A633] rounded-[12px] bg-[#282A2FDB] p-[10px] vsm:p-[20px] flex items-center">
        <p className="text-[14px] text-[#F5F5F5]">{msg.content}</p>
      </div>
    </div>
  );
};

export default UserMessage;
