import React from "react";
import { IoOpenOutline } from "react-icons/io5";
import DateLabel from "../components/DateLabel";

const Chats = () => {
  return (
    <div className="w-full h-full flex justify-center py-[40px]">
      <div className="w-[60%] space-y-[60px]">
        <div className="w-full">
          <DateLabel date="today" />
          <div className="pt-[40px] flex flex-col gap-[20px]">
            <Chat />
            <Chat />
            <Chat />
          </div>
        </div>

        <div className="w-full">
          <DateLabel date="yesterday" />
          <div className="pt-[40px] flex flex-col gap-[20px]">
            <Chat />
            <Chat />
            <Chat />
          </div>
        </div>

        <div className="w-full">
          <DateLabel date="Previous 30 days" />
          <div className="pt-[40px] flex flex-col gap-[20px]">
            <Chat />
            <Chat />
            <Chat />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chats;

const Chat = () => {
  return (
    <div className="w-full h-[56px] rounded-[8px] bg-[#FFFFFF1A] flex justify-between items-center border border-[#8692A633] pl-[20px] pr-[10px]">
      <p className="flex-1 text-[14px] text-light-white">
        How do you approach designing for accessibility in UI?
      </p>
      <button className="w-[20px] h-full">
        <IoOpenOutline />
      </button>
    </div>
  );
};
