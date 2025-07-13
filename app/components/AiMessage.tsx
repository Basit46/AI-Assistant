import { MessageType } from "@/types";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { LuCopy, LuCopyCheck } from "react-icons/lu";
import { formatTimestamp } from "../utils";
import ReactMarkdown from "react-markdown";

const AiMessage = ({ msg }: { msg: MessageType }) => {
  //Copying message
  const [isCopied, setIsCopied] = useState(false);
  const handleCopy = () => {
    navigator.clipboard.writeText(msg.content);
    setIsCopied(true);
  };
  useEffect(() => {
    if (isCopied) {
      const timeoutId = setTimeout(() => {
        setIsCopied(false);
      }, 2000);

      return () => {
        clearTimeout(timeoutId);
      };
    }
  }, [isCopied]);

  return (
    <div className="flex flex-col gap-5">
      <div className="flex gap-[12px] items-center">
        <div className="relative size-[32px] bg-[#FFFFFF] rounded-[8px] overflow-hidden grid place-items-center">
          <Image src="/logo.png" width={18} height={18} alt="AI" />
        </div>
        <p className="font-semibold text-button-primary-purple">
          {msg.responseType} Response
        </p>
        <p className="text-[8px] text-light-grey">
          {formatTimestamp(msg.timestamp)}
        </p>
      </div>

      <div className="min-w-[40%] min-h-[56px] border border-[#8692A633] rounded-[16px] bg-[#FFFFFF1A] p-[10px] vsm:p-[20px] flex flex-col gap-[10px]">
        <div className="ai-content prose text-white max-w-full prose-invert">
          <ReactMarkdown>{msg.content}</ReactMarkdown>
        </div>

        <div className="flex items-center gap-[8px]">
          <button
            onClick={handleCopy}
            className="size-[20px] text-[12px] text-[#8692A6]"
          >
            {!isCopied ? <LuCopy /> : <LuCopyCheck />}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AiMessage;
