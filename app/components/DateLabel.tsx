import React from "react";

const DateLabel = ({ date }: { date: string }) => {
  return (
    <div className="w-full relative">
      <div className="w-full h-[1px] bg-[#696F79]"></div>
      <p className="bg-background-dashboard px-[10px] absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 text-[12px] text-[#BABABA] capitalize">
        {date}
      </p>
    </div>
  );
};

export default DateLabel;
