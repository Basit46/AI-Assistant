"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { HiArrowLongRight } from "react-icons/hi2";
import { IoIosCheckmark } from "react-icons/io";
import { useRouter } from "next/navigation";
import LogoWrapper from "./components/LogoWrapper";

const options = [
  {
    id: "1",
    img: "/o-icon1.png",
    text: "Friendly",
    value: "friendly",
  },
  {
    id: "2",
    img: "/o-icon2.png",
    text: "Introvert",
    value: "introvert",
  },
  {
    id: "3",
    img: "/o-icon3.png",
    text: "Extrovert",
    value: "extrovert",
  },
  {
    id: "4",
    img: "/o-icon4.png",
    text: "Analytical",
    value: "analytical",
  },
  {
    id: "5",
    img: "/o-icon5.png",
    text: "Creative",
    value: "creative",
  },
  {
    id: "6",
    img: "/o-icon6.png",
    text: "Others",
    value: "normal",
  },
];

const Onboarding = () => {
  const NEXT_ROUTE = "/onboarding/hobbies";
  const router = useRouter();
  const [selectedOption, setSelectedOption] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const option =
      options.find((item) => item.id == selectedOption)?.value || "normal";

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
            1/4
          </p>
          <h1 className="text-[32px] font-bold text-center">
            How would you describe your personality?
          </h1>
          <p className="text-[14px] text-light-grey text-center">
            You can select your option from the following list
          </p>

          <div className="mt-[40px] w-fit mx-auto grid gap-[20px] grid-cols-3">
            {options.map((item, i) => (
              <div
                key={i}
                style={{
                  background:
                    "linear-gradient(90deg, rgba(134, 146, 166, 0.57) 0%, rgba(52, 56, 64, 0.57) 100%)",
                }}
                className="w-[200px] h-[155px] rounded-[8px] overflow-hidden p-[1px]"
              >
                <div className="w-full h-full bg-[#282A2FDB] rounded-[8px] p-[15px] flex flex-col justify-between">
                  <Image src={item.img} width={38} height={38} alt="icon" />

                  <div className="flex items-center gap-[8px]">
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
                    <p>{item.text}</p>
                  </div>
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

export default Onboarding;
