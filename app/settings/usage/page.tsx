"use client";

import React, { useState } from "react";

const Usage = () => {
  const sections = [
    {
      name: "Total Conversation",
      value: "04",
    },
    {
      name: "Total Credits Used",
      value: "00",
    },
    {
      name: "Percent of Active days",
      value: "16%",
    },
  ];

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

const data = [
  { date: "07/06/2025", conversations: 12 },
  { date: "08/06/2025", conversations: 8 },
  { date: "09/06/2025", conversations: 15 },
  { date: "10/06/2025", conversations: 22 },
  { date: "11/06/2025", conversations: 18 },
  { date: "12/06/2025", conversations: 25 },
  { date: "13/06/2025", conversations: 9 },
];

function ActivityChart() {
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
