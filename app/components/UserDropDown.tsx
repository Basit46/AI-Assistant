"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useAuthStore } from "../store/AuthStore";

export function UserDropDown() {
  const router = useRouter();
  const { setOpenLogout, user } = useAuthStore();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="focus:outline-none">
        <div className="relative size-[48px] rounded-[8px] overflow-hidden">
          <Image src="/avatar.jpg" fill className="object-cover" alt="avatar" />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className="w-56 p-[8px] bg-[#FFFFFF1A] shadow-[0px_4px_24px_0px_#0000000A] backdrop-blur-[30px] border-none outline-none text-main-white"
        align="end"
      >
        <DropdownMenuItem className="focus:bg-transparent focus:text-main-white border-b border-b-white rounded-[0px]">
          <p className="">
            <span className="capitalize">{user?.email?.slice(0, 1)}</span>
            {user?.email?.slice(1)}
          </p>
        </DropdownMenuItem>

        {/* <DropdownMenuItem
          className="cursor-pointer"
          onClick={() => router.push("/ai")}
        >
          Customize Bot
        </DropdownMenuItem>

        <DropdownMenuItem
          className="cursor-pointer"
          onClick={() => router.push("/settings")}
        >
          Profile Settings
        </DropdownMenuItem> */}

        <DropdownMenuItem
          className="cursor-pointer bg-[red] mt-[20px] focus:bg-[red] focus:text-white focus:border-[0.5px] focus:border-gray-400"
          onClick={() => setOpenLogout(true)}
        >
          Logout
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
