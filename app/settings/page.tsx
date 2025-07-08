"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Image from "next/image";
import React from "react";
import { HiArrowLongRight } from "react-icons/hi2";
import { LuPencil } from "react-icons/lu";

const Settings = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <div className="w-[90%] min-h-[100px] border border-[#8692A633] rounded-[12px] p-[24px]">
      <div className="relative size-[112px] rounded-[10px]">
        <Image
          src="/avatar.jpg"
          fill
          className="object-cover rounded-[10px]"
          alt="avatar"
        />
        <button className="absolute bottom-[-10px] right-[-10px] size-[28px] bg-[#FAFAFA] rounded-[4px] grid place-items-center text-black">
          <LuPencil />
        </button>
      </div>

      <form className="mt-[40px]" onSubmit={handleSubmit}>
        <h1 className="text-[24px] font-bold leading-[100%] tracking-[-1.1%]">
          Personal Information
        </h1>
        <div className="mt-[20px] w-full flex gap-[20px]">
          <div className="w-[40%]">
            <Label htmlFor="fullName">Your fullname*</Label>
            <Input
              id="fullName"
              placeholder="Enter your name"
              autoComplete="false"
            />
          </div>
          <div className="w-[40%]">
            <Label htmlFor="email">Your email*</Label>
            <Input
              id="email"
              placeholder="Enter your email"
              type="email"
              autoComplete="false"
            />
          </div>
        </div>

        <h1 className="mt-[40px] text-[24px] font-bold leading-[100%] tracking-[-1.1%]">
          Password
        </h1>
        <div className="mt-[20px] w-full flex gap-[20px]">
          <div className="w-[40%]">
            <Label htmlFor="password">Password*</Label>
            <Input id="password" placeholder="Enter password" isPassword />
          </div>
          <div className="w-[40%]">
            <Label htmlFor="password">Confirm Password*</Label>
            <Input id="password" placeholder="Enter password" isPassword />
          </div>
        </div>

        <Button
          type="submit"
          className="mt-[40px] w-[141px] h-[48px] font-semibold flex items-center justify-center group"
        >
          <p>Update</p>
          <HiArrowLongRight className="size-[24px] group-hover:translate-x-[10px] duration-300" />
        </Button>
      </form>
    </div>
  );
};

export default Settings;
