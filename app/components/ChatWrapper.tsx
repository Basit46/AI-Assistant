"use client";

import React, { useEffect, useLayoutEffect } from "react";
import UserMessage from "./UserMessage";
import AiMessage from "./AiMessage";
import { useGlobalStore } from "../store/GlobalStore";
import { useParams } from "next/navigation";
import { useAuthStore } from "../store/AuthStore";
import { supabase } from "../utils/supabase";

const ChatWrapper = () => {
  const {
    messages,
    allMessages,
    addBulkMessage,
    resetMessages,
    initAllMessages,
  } = useGlobalStore();
  const { id } = useParams();
  const { user } = useAuthStore();

  useEffect(() => {
    if (!user?.id) return;
    getMsgsFromSupabase(user.id);
  }, [user?.id]);

  const getMsgsFromSupabase = async (uid: string) => {
    const { data, error } = await supabase
      .from("All messages")
      .select()
      .eq("user_id", uid)
      .order("timestamp", { ascending: true });

    if (error) {
      console.error("Error fetching messages:", error.message);
      return;
    }

    initAllMessages(
      (data ?? []).map((row) => ({
        id: row?.id,
        timestamp: row?.timestamp,
        role: row?.role,
        content: row?.content,
        groupId: row?.groupId,
        responseType: row?.responseType,
        reaction: row?.reaction,
      }))
    );
  };

  useEffect(() => {
    if (id && user) {
      resetMessages();
      const filteredMsgs = allMessages?.filter((msg) => msg.groupId == id);
      addBulkMessage(filteredMsgs);
    } else {
      return;
    }
  }, [id, user, allMessages]);

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
