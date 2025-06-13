import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { DropdownMenuItem } from "@/components/ui/dropdown-menu";
import React from "react";

const Logout = () => {
  return (
    <Dialog>
      <DialogTrigger asChild className="cursor-pointer">
        <DropdownMenuItem>Logout</DropdownMenuItem>
      </DialogTrigger>
      <DialogContent>
        <DialogTitle>Logout</DialogTitle>
        <p>Are you sure you want to logout</p>
      </DialogContent>
    </Dialog>
  );
};

export default Logout;
