"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { HiArrowLongRight } from "react-icons/hi2";
import { IoIosCheckmark } from "react-icons/io";
import { useRouter } from "next/navigation";
import LogoWrapper from "../components/LogoWrapper";

const Hobbies = () => {
  const NEXT_ROUTE = "/onboarding/experience";
  const router = useRouter();
  const [text, setText] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

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
            2/4
          </p>
          <h1 className="text-[32px] font-bold text-center">
            What are some of your favorite hobbies or activities
          </h1>
          <p className="text-[14px] text-light-grey text-center">
            Tell us about your activities that you do in your leisure time
          </p>

          <textarea
            className="mt-[40px] mx-auto text-center block resize-none bg-transparent text-[36px] font-bold outline-none placeholder:text-[#8692A6]"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="type here"
          />

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

export default Hobbies;
