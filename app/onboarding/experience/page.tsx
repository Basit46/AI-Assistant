"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { HiArrowLongRight } from "react-icons/hi2";
import { IoIosCheckmark } from "react-icons/io";
import { useRouter } from "next/navigation";
import LogoWrapper from "../components/LogoWrapper";

const options = [
  { id: "1", text: "Casual And Friendly" },
  { id: "2", text: "Professional And Formal" },
  { id: "3", text: "Informative And Detailed" },
  { id: "4", text: "Quick And To The Point" },
  { id: "5", text: "Creative And Engaging" },
];

const Experience = () => {
  const NEXT_ROUTE = "/onboarding/interests";
  const router = useRouter();
  const [selectedOption, setSelectedOption] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const option =
      options.find((item) => item.id == selectedOption)?.text.toLowerCase() ||
      "normal";

    router.push(NEXT_ROUTE);
  };

  return (
    <div className="relative w-screen h-screen">
      <Image
        src="/authBg.jpg"
        fill
        alt="bg"
        priority
        className="object-cover"
      />

      <div className="w-full h-full relative z-[2] backdrop-blur-[65px] px-[50px] py-[25px] flex items-center justify-center">
        <LogoWrapper />

        <form onSubmit={handleSubmit}>
          <p className="mb-[20px] text-[14px] text-light-white text-center">
            3/4
          </p>
          <h1 className="text-[32px] font-bold text-center leading-[100%]">
            When Interacting with chat AI, what type of experience <br /> are
            you looking for ?
          </h1>
          <p className="mt-[15px] text-[14px] text-light-grey text-center">
            You can select your option from the following list
          </p>

          <div className="mt-[40px] grid gap-[20px] place-content-center">
            {options.map((item, i) => (
              <div
                key={i}
                style={{
                  background:
                    "linear-gradient(90deg, rgba(134, 146, 166, 0.57) 0%, rgba(52, 56, 64, 0.57) 100%)",
                }}
                className="w-[442px] h-[56px] rounded-[8px] overflow-hidden p-[1px]"
              >
                <div className="w-full h-full bg-[#282A2FDB] rounded-[8px] p-[15px] flex items-center justify-between">
                  <p>{item.text}</p>

                  <button
                    type="button"
                    onClick={() =>
                      setSelectedOption(
                        selectedOption == item.id ? "" : item.id
                      )
                    }
                    className="w-[20px] h-[20px] rounded-[6px] border border-gray-500 overflow-hidden"
                  >
                    {selectedOption == item.id && (
                      <div className="w-full h-full bg-black flex justify-center items-center">
                        <IoIosCheckmark className="size-[20px]" />
                      </div>
                    )}
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-[40px] flex items-center gap-[20px] justify-center">
            <Button
              type="button"
              onClick={() => router.push(NEXT_ROUTE)}
              className="w-[141px] h-[48px] bg-transparent border border-transparent hover:border-button-primary-purple text-button-tertiary-grey duration-300"
            >
              Skip
            </Button>
            <Button
              type="submit"
              className="w-[141px] h-[48px] flex items-center justify-center group"
            >
              <p>Next</p>
              <HiArrowLongRight className="size-[24px] group-hover:translate-x-[10px] duration-300" />
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Experience;
