import { characters } from "@/app/constants";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import Image from "next/image";

export function AiPersonality({ char }: { char: (typeof characters)[0] }) {
  return (
    <Dialog>
      <DialogTrigger>
        <div className="w-full h-[344px] rounded-[12px] overflow-hidden grid place-items-center p-[1px] bg-[linear-gradient(90deg,_rgba(134,_146,_166,_0.57)_0%,_rgba(52,_56,_64,_0.57)_100%)]">
          <div className="w-full h-full bg-[#27292EDB] px-[16px] py-[24px] rounded-[11px] flex flex-col gap-[15px] items-center">
            <div className="size-[80px] rounded-full relative">
              <Image
                src={char.img}
                fill
                className="object-cover"
                alt={char.name}
              />
            </div>
            <h1 className="text-center text-[20px] font-semibold">
              {char.name}
            </h1>
            <p className="w-[60%] text-center text-[14px] text-medium-grey leading-[100%]">
              {char.description}
            </p>

            <div className="flex flex-wrap justify-center gap-[8px]">
              {char.tags.map((tag, i) => (
                <div
                  key={i}
                  className="w-fit h-[24px] p-[1px] rounded-[6px] bg-[linear-gradient(90deg,_rgba(134,_146,_166,_0.57)_0%,_rgba(52,_56,_64,_0.57)_100%)]"
                >
                  <div className="w-fit h-full flex items-center bg-[#282A2FDB] rounded-[5px] px-[6px] text-[12px] whitespace-nowrap">
                    {tag}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </DialogTrigger>

      <DialogContent
        hideCloseBtn
        className="w-[75%] max-w-[75%] h-[70%] flex gap-[10px] p-0 bg-transparent border-none outline-none"
      >
        <div className="glass-effect w-[30%] h-full rounded-l-[16px] px-[24px] py-[32px] flex flex-col justify-between items-center">
          <div className="flex flex-col items-center">
            <div className="w-[70%] aspect-square rounded-full relative">
              <Image src={char.img} fill className="object-cover" alt="AI" />
            </div>
            <h1 className="mt-[20px] mb-[20px] text-[32px] font-bold text-center leading-[100%]">
              {char.name}
            </h1>
            <p className="w-[90%] text-center">{char.description}</p>
          </div>
          <Button className="w-[196px] h-[48px] text-[16px]">Chat now</Button>
        </div>

        <div className="glass-effect flex-1 h-full rounded-r-[16px] py-[32px] px-[24px] flex flex-col gap-[48px]">
          <div className="space-y-[20px]">
            <div className="flex gap-[8px]">
              <p className="w-[64px] font-semibold leading-none">Role</p>
              <p className="text-[14px]  leading-none">{char.role}</p>
            </div>
            <div className="flex gap-[8px]">
              <p className="w-[64px] font-semibold leading-none">Purpose</p>
              <p className="text-[14px]  leading-none">{char.purpose}</p>
            </div>
          </div>

          <div>
            <h2 className="text-[24px] font-bold leading-[100%] tracking-[-1.1%]">
              Character Skills
            </h2>

            <div className="flex flex-wrap gap-[12px]">
              {char.tags.map((tag, i) => (
                <div
                  key={i}
                  className="mt-[12px] w-fit h-[48px] p-[1px] rounded-[6px] bg-[linear-gradient(90deg,_rgba(134,_146,_166,_0.57)_0%,_rgba(52,_56,_64,_0.57)_100%)]"
                >
                  <div className="w-fit h-full flex items-center bg-[#282A2FDB] rounded-[5px] px-[16px] text-[14px] whitespace-nowrap">
                    {tag}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-[24px] font-bold leading-[100%] tracking-[-1.1%]">
              Interaction Style
            </h2>

            <div className="flex flex-wrap gap-[12px]">
              {char.interactionStyles.map((style, i) => (
                <div
                  key={i}
                  className="mt-[12px] w-fit h-[48px] p-[1px] rounded-[6px] bg-[linear-gradient(90deg,_rgba(134,_146,_166,_0.57)_0%,_rgba(52,_56,_64,_0.57)_100%)]"
                >
                  <div className="w-fit h-full flex items-center bg-[#282A2FDB] rounded-[5px] px-[16px] text-[14px] whitespace-nowrap">
                    {style}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
