import React from "react";
import Image from "next/image";

const DefaultPrompts = () => {
  const options = [
    {
      id: "1",
      img: "/home-v1.png",
      text: "Create a crossword puzzle for me",
    },
    {
      id: "2",
      img: "/home-v2.png",
      text: "Plan a budget for my vacation",
    },
    {
      id: "3",
      img: "/home-v3.png",
      text: "Ethical implications of AI",
    },
    {
      id: "4",
      img: "/home-v4.png",
      text: "Calendar for the whole month",
    },
  ];

  return (
    <div className="absolute left-1/2 top-1/2 mt-[-50px] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
      <div className="size-[48px] bg-light-white rounded-[8px] shadow-[0px_4px_4px_0px_#0000000A] grid place-items-center">
        <Image src="/logo.png" width={24} height={28} alt="logo" />
      </div>
      <h1 className="mt-[20px] text-[20px] font-semibold text-center">
        Your Daily AI Assistant
      </h1>

      <div className="mt-[40px] flex gap-5">
        {options.map((item, i) => (
          <div
            key={i}
            className="w-[188px] h-[144px] rounded-[8px] overflow-hidden p-[1px] bg-[linear-gradient(89.44deg,_#7F8B9E_2.44%,_#343840_99.52%)]"
          >
            <div className="w-full h-full bg-[#282A2FDB] rounded-[8px] p-[16px] flex flex-col justify-between">
              <Image src={item.img} width={24} height={24} alt="icon" />

              <p className="text-[14px] text-[#BABABA] leading-[100%]">
                {item.text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DefaultPrompts;
