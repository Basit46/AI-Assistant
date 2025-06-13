"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { LuEye, LuEyeOff } from "react-icons/lu";

interface InputProps extends React.ComponentProps<"input"> {
  isPassword?: boolean;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, isPassword, ...props }, ref) => {
    const [showPassword, setShowPassword] = React.useState(false);

    return (
      <div className="mt-[6px] relative w-full h-[56px] p-[1px] rounded-md bg-[linear-gradient(90deg,_#8692A6_0%,_#343840_100%)]">
        <input
          type={isPassword ? (showPassword ? "text" : "password") : type}
          className={cn(
            `${
              isPassword ? "!pr-[45px]" : ""
            } flex h-full w-full bg-[#282A2F] rounded-md px-3 py-1 text-base font-semibold placeholder:font-semibold shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-[#8692A6] outline-none disabled:cursor-not-allowed disabled:opacity-50`,
            className
          )}
          ref={ref}
          {...props}
        />

        {isPassword && (
          <button
            onClick={() => setShowPassword((prev) => !prev)}
            className="absolute top-1/2 -translate-y-1/2 right-[15px] text-[24px] text-icon-light-blue"
          >
            {!showPassword ? <LuEye /> : <LuEyeOff />}
          </button>
        )}
      </div>
    );
  }
);
Input.displayName = "Input";

export { Input };
