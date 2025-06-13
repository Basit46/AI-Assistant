import React, { useState } from "react";
import Image from "next/image";
import { useGlobalStore } from "../store/GlobalStore";
import { getGroqChatCompletion } from "../utils";
import { v4 } from "uuid";
import { useRouter } from "next/navigation";

const DefaultPrompts = () => {
  const router = useRouter();
  const { addMessage, setIsLoading, addChatToHistory } = useGlobalStore();

  const options = [
    {
      id: "1",
      img: "/home-v1.png",
      text: "Write on the brief history of Nigeria",
    },
    {
      id: "2",
      img: "/home-v2.png",
      text: "Plan a budget for my vacation",
    },
    {
      id: "3",
      img: "/home-v3.png",
      text: "Ethical implications of AI in the society",
    },
    {
      id: "4",
      img: "/home-v4.png",
      text: "How effective is HMO for Children",
    },
  ];

  const handleClick = async (value: string) => {
    const groupId = v4();
    router.push(`/chats/${groupId}`);
    setIsLoading(true);

    addChatToHistory({
      id: groupId,
      mainUserMsg: value,
    });

    addMessage({
      id: v4(),
      timestamp: new Date().getTime(),
      role: "user",
      content: value,
      groupId: groupId,
    });

    const completion = await getGroqChatCompletion(value);
    addMessage({
      id: completion.id || v4(),
      timestamp: new Date().getTime(),
      role: "ai",
      content: completion.choices[0]?.message?.content || "",
      groupId: groupId,
      responseType: "",
    });

    setIsLoading(false);
  };

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
          <button
            key={i}
            onClick={() => handleClick(item.text)}
            className="w-[188px] h-[144px] rounded-[8px] overflow-hidden p-[1px] bg-[linear-gradient(89.44deg,_#7F8B9E_2.44%,_#343840_99.52%)]"
          >
            <div className="w-full h-full bg-[#282A2FDB] rounded-[8px] p-[16px] flex flex-col justify-between">
              <Image src={item.img} width={24} height={24} alt="icon" />

              <p className="text-left text-[14px] text-[#BABABA] leading-[100%]">
                {item.text}
              </p>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default DefaultPrompts;
