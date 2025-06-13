"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Logout from "./Logout";

export function UserDropDown() {
  const router = useRouter();

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
        <DropdownMenuItem className="focus:bg-transparent focus:text-main-white">
          <p>hassanbasitope@gmail.com</p>
        </DropdownMenuItem>
        <DropdownMenuItem
          className="cursor-pointer"
          onClick={() => router.push("/settings")}
        >
          Profile Settings
        </DropdownMenuItem>
        <DropdownMenuItem
          className="cursor-pointer"
          onClick={() => router.push("/ai")}
        >
          Customize Bot
        </DropdownMenuItem>

        <Logout />
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
