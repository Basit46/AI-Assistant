"use client";

import React from "react";
import DateLabel from "../components/DateLabel";
import { useGlobalStore } from "../store/GlobalStore";
import Chat from "./components/Chat";

const History = () => {
  const { chatHistory } = useGlobalStore();

  function isSameUTCDate(a: Date, b: Date): boolean {
    return (
      a.getUTCFullYear() === b.getUTCFullYear() &&
      a.getUTCMonth() === b.getUTCMonth() &&
      a.getUTCDate() === b.getUTCDate()
    );
  }

  const now = new Date();
  const today = new Date(now);
  const yesterday = new Date(now);
  yesterday.setUTCDate(now.getUTCDate() - 1);

  // Today
  const todaysChats = chatHistory.filter((chat) =>
    isSameUTCDate(new Date(chat.timestamp), today)
  );

  // Yesterday
  const yesterdaysChats = chatHistory.filter((chat) =>
    isSameUTCDate(new Date(chat.timestamp), yesterday)
  );

  // Everything else
  const olderChats = chatHistory.filter((chat) => {
    const chatDate = new Date(chat.timestamp);
    return (
      !isSameUTCDate(chatDate, today) && !isSameUTCDate(chatDate, yesterday)
    );
  });

  return (
    <div className="w-full h-full flex justify-center py-[40px]">
      <div className="w-[60%] space-y-[40px]">
        <div className="w-full">
          <DateLabel date="today" />
          <div className="pt-[40px] flex flex-col gap-[20px]">
            {todaysChats.map((chat, i) => (
              <Chat key={chat.id} chat={chat} />
            ))}
          </div>
        </div>

        {yesterdaysChats.length > 0 && (
          <div className="w-full">
            <DateLabel date="yesterday" />
            <div className="pt-[40px] flex flex-col gap-[20px]">
              {yesterdaysChats.map((chat, i) => (
                <Chat key={chat.id} chat={chat} />
              ))}
            </div>
          </div>
        )}

        {olderChats.length > 0 && (
          <div className="w-full">
            <DateLabel date="yesterday" />
            <div className="pt-[40px] flex flex-col gap-[20px]">
              {olderChats.map((chat, i) => (
                <Chat key={chat.id} chat={chat} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default History;
