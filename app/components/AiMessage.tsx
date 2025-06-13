import { MessageType } from "@/types";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { AiOutlineReload } from "react-icons/ai";
import { LuCopy, LuCopyCheck, LuThumbsDown, LuThumbsUp } from "react-icons/lu";
import { formatTimestamp, getGroqChatCompletion } from "../utils";
import ReactMarkdown from "react-markdown";
import { v4 } from "uuid";
import { useGlobalStore } from "../store/GlobalStore";
import { useParams } from "next/navigation";

const AiMessage = ({ msg }: { msg: MessageType }) => {
  const {
    messages,
    deleteMessage,
    addReactionToMsg,
    addMessage,
    setIsLoading,
  } = useGlobalStore();
  const { id } = useParams();

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

  //Handle reloading
  const handleReload = async () => {
    const userMessages = messages.filter((msg) => msg.role === "user");
    const lastUserMessage = userMessages[userMessages.length - 1].content;

    deleteMessage(msg.id);

    setIsLoading(true);
    const completion = await getGroqChatCompletion(lastUserMessage);
    addMessage({
      id: completion.id || v4(),
      timestamp: new Date().getTime(),
      role: "ai",
      content: completion.choices[0]?.message?.content || "",
      groupId: typeof id == "string" ? id : id[0],
      responseType: "",
    });

    setIsLoading(false);
  };

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

      <div className="min-w-[40%] min-h-[56px] border border-[#8692A633] rounded-[16px] bg-[#FFFFFF1A] p-[20px] flex flex-col gap-[10px]">
        {/* <p className="text-[14px] text-[#F5F5F5]">{msg.content}</p> */}
        <div className="ai-content">
          <ReactMarkdown>{msg.content}</ReactMarkdown>
        </div>

        <div className="flex items-center gap-[8px]">
          <button
            onClick={() => addReactionToMsg(msg.id, "like")}
            className="size-[20px] text-[12px] text-[#8692A6]"
          >
            <LuThumbsUp color={msg.reaction === "like" ? "green" : ""} />
          </button>
          <button
            onClick={() => addReactionToMsg(msg.id, "dislike")}
            className="size-[20px] text-[12px] text-[#8692A6]"
          >
            <LuThumbsDown color={msg.reaction === "dislike" ? "red" : ""} />
          </button>
          <button
            onClick={handleCopy}
            className="size-[20px] text-[12px] text-[#8692A6]"
          >
            {!isCopied ? <LuCopy /> : <LuCopyCheck />}
          </button>
          <button
            onClick={handleReload}
            className="size-[20px] text-[12px] text-[#8692A6]"
          >
            <AiOutlineReload />
          </button>
        </div>
      </div>
    </div>
  );
};

export default AiMessage;
