"use client";

import { useGlobalStore } from "@/app/store/GlobalStore";
import React, { useMemo, useState } from "react";

const Usage = () => {
  const { allMessages } = useGlobalStore();

  const sections = useMemo(() => {
    const now = Date.now();
    const sevenDaysAgo = now - 7 * 24 * 60 * 60 * 1000;

    const recentMessages = allMessages.filter(
      (msg) => new Date(msg.timestamp).getTime() >= sevenDaysAgo
    );

    return [
      {
        name: "Total Conversation (Last 7 Days)",
        value: recentMessages.filter((msg) => msg.role === "ai").length,
      },
    ];
  }, [allMessages]);

  return (
    <div className="w-[90%] min-h-[100px] border border-[#8692A633] rounded-[12px] p-[24px]">
      <div>
        <div>
          <h1 className="text-[24px] font-bold leading-[100%] tracking-[-1.1%]">
            Activity Overview
          </h1>
          <p className="text-[14px] text-dark-grey">
            View detailed insights and trends of your app usage over time
          </p>
        </div>

        <div className="mt-[20px] w-[90%] grid grid-cols-3 gap-[20px]">
          {sections.map((section, i) => (
            <div
              key={i}
              className="w-full h-[138px] rounded-[12px] p-[1px] bg-[linear-gradient(90deg,_rgba(134,_146,_166,_0.57)_0%,_rgba(52,_56,_64,_0.57)_100%)]"
            >
              <div className="w-full h-full bg-[#282A2FDB] rounded-[11px] flex flex-col justify-between p-[16px]">
                <div>
                  <h1 className="font-semibold text-light-white">
                    {section.name}
                  </h1>
                  <p className="text-[14px] text-dark-grey">Last 7 days</p>
                </div>

                <p className="text-[20px] font-semibold">{section.value}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-[30px]">
        <h1 className="text-[24px] font-bold leading-[100%] tracking-[-1.1%]">
          Daily Conversations- 07 Days
        </h1>

        <div className="mt-[20px] w-[90%] h-[225px]">
          <ActivityChart />
        </div>
      </div>
    </div>
  );
};

export default Usage;

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

function ActivityChart() {
  const useLast7DaysData = () => {
    const { allMessages } = useGlobalStore();

    return useMemo(() => {
      const today = new Date();
      const counts = new Map();

      // Pre-fill last 7 days
      for (let i = 0; i < 7; i++) {
        const date = new Date(today);
        date.setDate(today.getDate() - i);
        const key = date.toLocaleDateString("en-GB");
        counts.set(key, {
          date: key,
          conversations: 0,
          timestamp: date.getTime(),
        });
      }

      // Count messages
      allMessages.forEach((msg) => {
        if (msg.role !== "ai") return;
        const ts = new Date(msg.timestamp);
        const key = ts.toLocaleDateString("en-GB");
        const entry = counts.get(key);
        if (entry) entry.conversations += 1;
      });

      // Convert to sorted array using stored timestamps
      return Array.from(counts.values())
        .sort((a, b) => a.timestamp - b.timestamp)
        .map(({ date, conversations }) => ({ date, conversations }));
    }, [allMessages]);
  };

  const data = useLast7DaysData();

  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        data={data}
        margin={{
          top: 0,
          right: 0,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid
          strokeDasharray="1 1"
          vertical={false}
          stroke="#8692A633"
        />
        <XAxis dataKey="date" />
        <YAxis
          tickLine={false}
          offset={50}
          label={{
            value: "Conversations",
            angle: -90,
            position: "insideCenter",
            offset: 100,
          }}
        />
        {/* <Tooltip /> */}

        <Bar dataKey="conversations" fill="#A7A0F8" barSize={22} />
      </BarChart>
    </ResponsiveContainer>
  );
}
