"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { FcGoogle } from "react-icons/fc";
import Link from "next/link";
import { supabase } from "@/app/utils/supabase";
import { useRouter } from "next/navigation";
import { CheckedState } from "@radix-ui/react-checkbox";

const SignUp = () => {
  const router = useRouter();

  const [checked, setChecked] = useState<CheckedState>(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!checked) {
      setErrorMsg("Agree to Terms and Conditions");
      return;
    }

    setErrorMsg(null);
    setIsLoading(true);
    const { data, error } = await supabase.auth.signUp({
      email: formData.email.trim().toLowerCase(),
      password: formData.password.trim().toLowerCase(),
    });

    console.log(data);
    setIsLoading(false);

    if (error) {
      setErrorMsg(error.message);
      return;
    }

    router.push("/");
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
        <div className="w-full mx-auto xl:mx-0 md:w-[60%] xl:w-[35%] h-full flex flex-col">
          <div className="flex gap-[8px] items-center">
            <Image src="/logo.png" width={42} height={45} alt="logo" />
            <p className="mt-[10px] text-[24px] font-semibold leading-none text-light-white">
              BotBuzz
            </p>
          </div>

          <div className="mt-[50px]">
            <h1 className="text-[32px] font-bold leading-[100%]">
              Create an Account
            </h1>
            <p className="text-[18px] font-semibold text-medium-grey">
              Kindly fill in your details to create an account
            </p>
          </div>

          <form className="mt-[30px] space-y-[20px]" onSubmit={handleSubmit}>
            <div>
              <Label htmlFor="fullName">Your fullname*</Label>
              <Input
                id="fullName"
                value={formData.fullName}
                onChange={(e) =>
                  setFormData({ ...formData, fullName: e.target.value })
                }
                required
                placeholder="Enter your name"
                autoComplete="false"
              />
            </div>
            <div>
              <Label htmlFor="email">Your email*</Label>
              <Input
                id="email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                required
                placeholder="Enter your email"
                type="email"
                autoComplete="false"
              />
            </div>
            <div>
              <Label htmlFor="password">Password*</Label>
              <Input
                id="password"
                value={formData.password}
                onChange={(e) =>
                  setFormData({ ...formData, password: e.target.value })
                }
                required
                placeholder="Enter password"
                isPassword
              />
            </div>

            <div className="flex items-center gap-[8px]">
              <Checkbox
                checked={checked}
                onCheckedChange={(value) => setChecked(value)}
              />
              <p className="font-semibold text-[#696F79]">
                I agree to terms & conditions
              </p>
            </div>

            <div className="!mt-[30px]">
              {errorMsg && (
                <p className="mb-[4px] text-[red] text-center">{errorMsg}</p>
              )}
              <Button loading={isLoading} className="w-full">
                Sign up
              </Button>
            </div>
          </form>

          <p className="mt-[20px] text-[14px] font-semibold text-center">
            Already have an Account?{" "}
            <Link href="/auth/login" className="text-button-primary-purple">
              Login
            </Link>
          </p>
        </div>

        <div className="hidden xl:block relative w-1/2 h-full pl-[40px]">
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
