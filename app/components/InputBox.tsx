"use client";

import React, { useState } from "react";
import { SlMicrophone } from "react-icons/sl";
import { VscSend } from "react-icons/vsc";
import { useGlobalStore } from "../store/GlobalStore";
import { FaStopCircle } from "react-icons/fa";
import { v4 } from "uuid";
import { getGroqChatCompletion } from "../utils";

const InputBox = () => {
  const { inputValue, setInputValue, addMessage, isLoading, setIsLoading } =
    useGlobalStore();

  const handleAddMessage = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    addMessage({
      id: v4(),
      timestamp: new Date().getTime(),
      role: "user",
      content: inputValue,
    });

    setInputValue("");
    main();
  };

  const main = async () => {
    setIsLoading(true);
    const completion = await getGroqChatCompletion(inputValue);
    addMessage({
      id: completion.id || v4(),
      timestamp: new Date().getTime(),
      role: "ai",
      content: completion.choices[0]?.message?.content || "",
      groupId: "",
      responseType: "",
    });

    setIsLoading(false);
  };

  const handleStop = () => {
    setIsLoading(false);
  };

  return (
    <div className="mt-[30px] bg-background-dashboard w-[60%] h-[100px] flex flex-col justify-between pb-[20px]">
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
