"use client";

import React from "react";
import DefaultPrompts from "./components/DefaultPrompts";
import InputBox from "./components/InputBox";

const Home = () => {
  return (
    <div className="min-h-[calc(100vh-80px)] w-full flex flex-col justify-end items-center">
      <DefaultPrompts />
      <InputBox />
    </div>
  );
};

export default Home;
