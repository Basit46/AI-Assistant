import React from "react";
import { characters } from "../constants";
import { AiPersonality } from "./components/AiPersonality";

const Ai = () => {
  return (
    <div className="px-[20px] py-[40px]">
      <p className="text-[14px] text-medium-grey">Chat with AI</p>
      <h1 className="mt-[10px] text-[40px] font-bold leading-[100%] tracking-[-1.1%] text-button-primary-purple">
        AI Personalities
      </h1>
      <p className="text-[14px]">
        Explore diverse AI personalities tailored to meet your unique needs,
        preferences, and interests.
      </p>

      <div className="mt-[40px]">
        <div className="flex">
          <p className="text-[24px] font-bold tracking-[-1.1%]">
            All Characters
          </p>
        </div>

        <div className="mt-[10px] grid grid-cols-4 gap-5">
          {characters.map((char, i) => (
            <AiPersonality char={char} key={i} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Ai;
