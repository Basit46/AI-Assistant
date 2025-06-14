"use client";

import React, { useEffect, useRef } from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import { usePathname } from "next/navigation";
import InputBox from "./InputBox";
import { useGlobalStore } from "../store/GlobalStore";
import Logout from "./Logout";

const MainContent = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  const { messages } = useGlobalStore();

  const hideExtras =
    pathname.startsWith("/auth") || pathname.startsWith("/onboarding");

  const messagesContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = messagesContainerRef.current;
    if (container && pathname == "/") {
      container.scrollTop = container.scrollHeight;
    }
  }, [messages]);

  return (
    <div className="w-full h-full flex">
      {!hideExtras ? (
        <>
          <Sidebar />
          <div className="relative flex-1 h-screen ">
            <Header />
            <div
              ref={messagesContainerRef}
              className="h-[calc(100vh-80px)] w-full overflow-y-auto scroll-smooth"
            >
              <div className="h-fit">{children}</div>
            </div>
          </div>
          <Logout />
        </>
      ) : (
        <>{children}</>
      )}
    </div>
  );
};

export default MainContent;
