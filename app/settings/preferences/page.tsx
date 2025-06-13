"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { HiArrowLongRight } from "react-icons/hi2";
import { CustomSelect } from "@/app/components/CustomSelect";
import { aiKnowledgeDepth, aiLanguages, aiTones } from "@/app/constants";
import { useGlobalStore } from "@/app/store/GlobalStore";

const Preferences = () => {
  const {
    tone,
    setTone,
    depthLevel,
    setDepthLevel,
    responseLanguage,
    setResponseLanguage,
  } = useGlobalStore();

  const [lang, setLang] = useState("English");
  const [toggleNoti, setToggleNoti] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <div className="w-[90%] min-h-[100px] border border-[#8692A633] rounded-[12px] p-[24px]">
      <div className="flex justify-between">
        <div>
          <h1 className="text-[24px] font-bold leading-[100%] tracking-[-1.1%]">
            Notifications
          </h1>
          <p className="text-[14px] text-dark-grey">
            Will get important notifications through email
          </p>
        </div>

        <button
          onClick={() => setToggleNoti((prev) => !prev)}
          className={`${
            toggleNoti ? "bg-icon-purple" : "bg-medium-grey"
          } w-[48px] h-[24px] rounded-[24px] flex items-center`}
        >
          <div
            className={`${
              toggleNoti ? "translate-x-[26px]" : "translate-x-[4px]"
            } size-[18px] rounded-full bg-main-white duration-300`}
          />
        </button>
      </div>

      <form className="mt-[40px]" onSubmit={handleSubmit}>
        <h1 className="text-[24px] font-bold leading-[100%] tracking-[-1.1%]">
          Language
        </h1>
        <div className="mt-[20px] w-full flex gap-[20px]">
          <div className="w-[40%]">
            <Label htmlFor="lang">Language</Label>
            <CustomSelect
              value={lang}
              setValue={setLang}
              data={[{ value: "English", label: "English" }]}
            />
          </div>
          <div className="w-[40%]">
            <Label htmlFor="glang">Generation Language</Label>
            <CustomSelect
              value={responseLanguage}
              setValue={setResponseLanguage}
              data={aiLanguages}
            />
          </div>
        </div>

        <h1 className="mt-[40px] text-[24px] font-bold leading-[100%] tracking-[-1.1%]">
          Tone
        </h1>
        <div className="mt-[20px] w-full flex gap-[20px]">
          <div className="w-[40%]">
            <Label htmlFor="assword">Tone</Label>
            <CustomSelect value={tone} setValue={setTone} data={aiTones} />
          </div>
          <div className="w-[40%]">
            <Label htmlFor="password">Knowledge depth level</Label>
            <CustomSelect
              value={depthLevel}
              setValue={setDepthLevel}
              data={aiKnowledgeDepth}
            />
          </div>
        </div>

        <Button
          type="submit"
          className="mt-[40px] w-[141px] h-[48px] font-semibold flex items-center justify-center group"
        >
          <p>Update</p>
          <HiArrowLongRight className="size-[24px] group-hover:translate-x-[10px] duration-300" />
        </Button>
      </form>
    </div>
  );
};

export default Preferences;
