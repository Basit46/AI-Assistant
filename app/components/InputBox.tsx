"use client";

import React, { useState } from "react";
import { SlMicrophone } from "react-icons/sl";
import { VscSend } from "react-icons/vsc";
import { useGlobalStore } from "../store/GlobalStore";
import { FaStopCircle } from "react-icons/fa";
import { v4 } from "uuid";
import { getGroqChatCompletion } from "../utils";
import { useParams, usePathname, useRouter } from "next/navigation";
import { supabase } from "../utils/supabase";
import { useAuthStore } from "../store/AuthStore";

const InputBox = () => {
  const router = useRouter();
  const pathname = usePathname();
  const { id } = useParams();
  const {
    inputValue,
    setInputValue,
    addMessage,
    isLoading,
    setIsLoading,
    chatHistory,
    addChatToHistory,
    aiCharacter,
    tone,
    depthLevel,
    responseLanguage,
  } = useGlobalStore();
  const { user } = useAuthStore();

  const handleAddMessage = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const groupId = id || v4();

    const isChatAlreadyAdded = chatHistory.find((chat) => chat.id == groupId);
    if (!isChatAlreadyAdded) {
      addChatToHistory({
        id: typeof groupId == "string" ? groupId : groupId[0],
        mainUserMsg: inputValue,
      });
    }
    await supabase.from("chat_history").upsert({
      chat_id: typeof groupId == "string" ? groupId : groupId[0],
      mainUserMsg: inputValue,
      user_id: user?.id,
    });

    if (pathname == "/") {
      router.push(`/chats/${groupId}`);
    }

    addMessage({
      id: v4(),
      groupId: typeof groupId == "string" ? groupId : groupId[0],
      timestamp: new Date().getTime(),
      role: "user",
      content: inputValue,
    });

    await supabase.from("All messages").upsert({
      groupId: typeof groupId == "string" ? groupId : groupId[0],
      role: "user",
      content: inputValue,
      user_id: user?.id,
    });

    setInputValue("");
    main(typeof groupId == "string" ? groupId : groupId[0]);
  };

  const main = async (groupId: string) => {
    setIsLoading(true);
    const completion = await getGroqChatCompletion(
      inputValue,
      aiCharacter.name,
      tone,
      depthLevel,
      responseLanguage
    );
    addMessage({
      id: completion.id || v4(),
      timestamp: new Date().getTime(),
      role: "ai",
      content: completion.choices[0]?.message?.content || "",
      groupId: groupId,
      responseType: "",
    });
    await supabase.from("All messages").upsert({
      role: "ai",
      content: completion.choices[0]?.message?.content || "",
      groupId: groupId,
      responseType: "",
      user_id: user?.id,
    });

    setIsLoading(false);
  };

  const handleStop = () => {
    setIsLoading(false);
  };

  return (
    <div className="mt-[30px] sticky bottom-0 bg-background-dashboard w-[60%] h-[100px] flex flex-col justify-between pb-[20px]">
      <form
        onSubmit={handleAddMessage}
        className="flex items-center w-full h-[48px] rounded-[12px] bg-[#3B3D40] overflow-hidden"
      >
        <input
          type="text"
          className="h-full flex-1 px-[16px] bg-transparent outline-none text-[12px]"
          placeholder="Enter a prompt here"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />

        <div className="w-[1px] h-[20px] bg-[linear-gradient(90deg,_#8692A6_0%,_#343840_100%)]"></div>

        <button
          type="button"
          className="w-[45px] h-full grid place-items-center"
        >
          <SlMicrophone />
        </button>

        {!isLoading ? (
          <button
            type="submit"
            className="w-[45px] h-full border-l border-l-[#0E0D0D] grid place-items-center"
          >
            <VscSend />
          </button>
        ) : (
          <button
            onClick={handleStop}
            type="button"
            className="w-[45px] h-full border-l border-l-[#0E0D0D] grid place-items-center"
          >
            <FaStopCircle />
          </button>
        )}
      </form>

      <p className="text-[12px] text-medium-grey text-center">
        Free Research Preview. Bot Buzz may produce inaccurate information about
        people, places, or facts.{" "}
        <span className="text-button-primary-purple">BotBuzz Version 1.0</span>
      </p>
    </div>
  );
};

export default InputBox;
