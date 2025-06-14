"use client";

import { usePathname, useRouter } from "next/navigation";
import React from "react";

const sections = [
  {
    name: "Profile details",
    path: "/settings",
  },

  {
    name: "Preferences",
    path: "/settings/preferences",
  },

  {
    name: "Usage",
    path: "/settings/usage",
  },
];

const Layout = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <div className="px-[20px] py-[40px]">
      <div className="flex gap-[32px]">
        {sections.map((item, i) => {
          const isActive = pathname == item.path;
          return (
            <button
              className={`${
                isActive
                  ? "text-main-white border-b-button-primary-purple"
                  : "text-dark-grey border-b-transparent"
              } font-semibold pb-[10px] border-b-2`}
              onClick={() => router.push(item.path)}
              key={i}
            >
              {item.name}
            </button>
          );
        })}
      </div>

      <div className="mt-[30px]">{children}</div>
    </div>
  );
};

export default Layout;
