"use client";

import React, { useEffect } from "react";
import DateLabel from "../components/DateLabel";
import { useGlobalStore } from "../store/GlobalStore";
import Chat from "./components/Chat";
import { supabase } from "../utils/supabase";
import { useAuthStore } from "../store/AuthStore";
import { useRouter } from "next/navigation";

const History = () => {
  const { chatHistory, initChatHistory } = useGlobalStore();
  const { user } = useAuthStore();

  useEffect(() => {
    if (!user?.id) return;
    getChatsFromSupabase(user.id);
  }, [user?.id]);

  const getChatsFromSupabase = async (uid: string) => {
    const { data, error } = await supabase
      .from("chat_history")
      .select()
      .eq("user_id", uid)
      .order("timestamp", { ascending: false });

    if (error) {
      console.error("Error fetching chat history:", error.message);
      return;
    }

    initChatHistory(
      (data ?? []).map((row) => ({
        id: row.chat_id,
        mainUserMsg: row.mainUserMsg,
        timestamp: row.timestamp,
      }))
    );
  };

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
      <div className="w-[90%] xmd:w-[60%] space-y-[40px]">
        <div className="w-full">
          <DateLabel date="today" />
          <div className="pt-[40px] flex flex-col gap-[20px]">
            {todaysChats.length > 0 ? (
              todaysChats.map((chat, i) => <Chat key={chat.id} chat={chat} />)
            ) : (
              <EmptyList />
            )}
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
            <DateLabel date="Others" />
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

const EmptyList = () => {
  const router = useRouter();

  return (
    <div className="w-full h-fit bg-[#FFFFFF1A] rounded-[8px] border border-[#8692A633] p-[20px]">
      <h1 className="text-[20px]">No history for today</h1>
      <button
        onClick={() => router.push("/")}
        className="mt-[20px] bg-button-primary-purple text-main-black px-[20px] h-[40px] rounded-[8px]"
      >
        Start conversation
      </button>
    </div>
  );
};
