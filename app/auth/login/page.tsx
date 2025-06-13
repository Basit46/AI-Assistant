"use client";

import React from "react";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { FcGoogle } from "react-icons/fc";
import Link from "next/link";

const SignUp = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
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

      <div className="w-full h-full relative z-[2] backdrop-blur-[65px] px-[50px] py-[25px] flex justify-between">
        <div className="w-[35%] h-full flex flex-col">
          <div className="flex gap-[8px] items-center">
            <Image src="/logo.png" width={42} height={45} alt="logo" />
            <p className="mt-[10px] text-[24px] font-semibold leading-none text-light-white">
              BotBuzz
            </p>
          </div>

          <div className="mt-[50px]">
            <h1 className="text-[32px] font-bold leading-[100%]">Login</h1>
            <p className="text-[18px] font-semibold text-medium-grey">
              Add your credentials to log in
            </p>
          </div>

          <form className="mt-[30px] space-y-[20px]" onSubmit={handleSubmit}>
            <div>
              <Label htmlFor="email">Your email*</Label>
              <Input id="email" placeholder="Enter your email" type="email" />
            </div>
            <div>
              <Label htmlFor="password">Password</Label>
              <Input id="password" placeholder="Enter password" isPassword />
            </div>

            <Button className="w-full !mt-[30px]">Log in</Button>
          </form>

          <p className="mt-[20px] text-[14px] font-semibold text-center">
            Don't have an Account?{" "}
            <Link href="/signin" className="text-button-primary-purple">
              Signup
            </Link>
          </p>
        </div>

        <div className="relative w-1/2 h-full pl-[40px]">
          <div className="w-full h-full relative rounded-[20px] overflow-hidden">
            <Image
              src="/woman.jpg"
              fill
              alt="woman"
              priority
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
