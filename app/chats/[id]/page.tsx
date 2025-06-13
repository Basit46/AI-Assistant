"use client";

import React from "react";
import ChatWrapper from "@/app/components/ChatWrapper";
import InputBox from "@/app/components/InputBox";

const Home = () => {
  return (
    <div className="min-h-[calc(100vh-80px)] w-full flex flex-col justify-end items-center">
      <ChatWrapper />
      <InputBox />
    </div>
  );
};

export default Home;
