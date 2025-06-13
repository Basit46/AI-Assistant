"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { HiArrowLongRight } from "react-icons/hi2";
import { useRouter } from "next/navigation";
import LogoWrapper from "../components/LogoWrapper";

const options = [
  { id: "1", text: "Science and Technology", img: "/o-img1.png" },
  { id: "2", text: "Entertainment and Pop Culture", img: "/o-img2.png" },
  { id: "3", text: "Travel and Adventure", img: "/o-img3.png" },
  { id: "4", text: "Sports and Wellbeing", img: "/o-img4.png" },
  { id: "5", text: "Education and Learning", img: "/o-img5.png" },
  { id: "6", text: "Art and Literature", img: "/o-img6.png" },
];

const Onboarding = () => {
  const NEXT_ROUTE = "/";
  const router = useRouter();
  const [selectedOption, setSelectedOption] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const option =
      options.find((item) => item.id == selectedOption)?.text || "normal";

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
            4/4
          </p>
          <h1 className="text-[32px] font-bold text-center leading-[100%]">
            Are there any specific topics or areas of interest you <br /> would
            like the AI to focus on during your interactions?
          </h1>
          <p className="mt-[15px] text-[14px] text-light-grey text-center">
            You can select your option from the following list
          </p>

          <div className="mt-[40px] w-fit mx-auto grid gap-[20px] grid-cols-3">
            {options.map((item, i) => (
              <button
                type="button"
                key={i}
                onClick={() => setSelectedOption(item.id)}
                style={{
                  background:
                    item.id == selectedOption
                      ? "var(--button-primary-purple)"
                      : "linear-gradient(90deg, rgba(134, 146, 166, 0.57) 0%, rgba(52, 56, 64, 0.57) 100%)",
                }}
                className="w-[271px] h-[169px] rounded-[8px] overflow-hidden p-[1px]"
              >
                <div className="group relative w-full h-full bg-[#282A2FDB] rounded-[8px] px-[15px] py-[20px] flex flex-col justify-between overflow-hidden">
                  <p className="text-left text-[14px] font-semibold">
                    {item.text}
                  </p>
                  <div className="relative w-full h-[73px] group-hover:h-full duration-1000 rounded-[8px] overflow-hidden">
                    <Image
                      src={item.img}
                      alt={item.text}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </button>
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
