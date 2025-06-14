"use client";

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import React from "react";
import { useAuthStore } from "../store/AuthStore";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

const Logout = () => {
  const router = useRouter();
  const { openLogout, setOpenLogout } = useAuthStore();

  const handleLogout = () => {
    router.push("/auth/login");
  };

  return (
    <Dialog open={openLogout} onOpenChange={setOpenLogout}>
      <DialogContent className="w-[500px] bg-background-dashboard text-main-white border-light-grey border-[1px]">
        <DialogHeader>
          <DialogTitle>Logout</DialogTitle>
        </DialogHeader>
        <p>Are you sure you want to logout?</p>

        <div className="flex gap-[12px]">
          <DialogClose asChild>
            <Button
              onClick={handleLogout}
              className="w-full h-[48px] text-main-white"
            >
              Confirm
            </Button>
          </DialogClose>
          <DialogClose asChild>
            <Button className="w-full h-[48px] text-main-white bg-[red]">
              Cancel
            </Button>
          </DialogClose>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default Logout;
