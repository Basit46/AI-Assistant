"use client";

import React from "react";
import UserMessage from "./UserMessage";
import AiMessage from "./AiMessage";
import { useGlobalStore } from "../store/GlobalStore";

const ChatWrapper = () => {
  const { messages } = useGlobalStore();
  return (
    <div className="w-[60%] flex-1 pt-[40px] min-h-[50%]">
      <div>
        <div className="relative">
          <div className="w-full h-[1px] bg-[#696F79]"></div>
          <p className="bg-background-dashboard px-[10px] absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 text-[12px] text-[#BABABA]">
            Today
          </p>
        </div>

        <div className="w-full pt-[40px] space-y-[20px]">
          {messages.map((msg, i) =>
            msg.role == "user" ? (
              <UserMessage msg={msg} key={i} />
            ) : (
              <AiMessage msg={msg} key={i} />
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default ChatWrapper;
