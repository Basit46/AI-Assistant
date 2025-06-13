import React from "react";
import { SlMicrophone } from "react-icons/sl";
import { VscSend } from "react-icons/vsc";
import DefaultPrompts from "./components/DefaultPrompts";
import ChatWrapper from "./components/ChatWrapper";
import InputBox from "./components/InputBox";

const Home = () => {
  return (
    <div className="relative w-full flex flex-col justify-end items-center">
      {true ? <ChatWrapper /> : <DefaultPrompts />}

      <InputBox />
    </div>
  );
};

export default Home;
