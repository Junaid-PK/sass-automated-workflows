"use client";
import React from "react";
import Link from "next/link";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { usePathname } from "next/navigation";
import { menuOptions } from "@/lib/contants";
import clsx from "clsx";
import { Separator } from "@/components/ui/separator";
import { DatabaseIcon, GitBranch, LucideMousePointerClick } from "lucide-react";
import { ModeToggle } from "@/components/commons/ModeToggle";

type Props = {};

const Sidebar = (props: Props) => {
  const pathname = usePathname();
  return (
    <nav className="dark:bg-black h-screen overflow-scroll flex flex-col py-6 gap-10 px-2 justify-between items-center">
      <div className="flex flex-col gap-8 justify-center items-center">
        <Link href="/" className="font-bold flex flex-row">
          fuzzie.
        </Link>
        <TooltipProvider>
          {menuOptions.map((menuItem) => (
            <ul key={menuItem.name}>
              <Tooltip delayDuration={0}>
                <TooltipTrigger>
                  <li>
                    <Link
                      href={menuItem.href}
                      className={clsx(
                        "group h-8 w-8 flex items-center justify-center scale-[1.5] rounded-lg p-[3px] cursor-pointer",
                        {
                          "dark:bg-[#2F0068] bg-[#EEE0FD]":
                            pathname === menuItem.href,
                        },
                      )}
                    >
                      <menuItem.Component
                        selected={pathname === menuItem.href}
                      />
                    </Link>
                  </li>
                </TooltipTrigger>
                <TooltipContent
                  side="right"
                  className="bg-black/10 backdrop-blur-xl"
                >
                  {menuItem.name}
                </TooltipContent>
              </Tooltip>
            </ul>
          ))}
        </TooltipProvider>
        <Separator />
        <div className="flex flex-col items-center gap-9 dark:bg-[#353346]/30 py-4 px-2 rounded-full h-56 overflow-scroll border-1px">
          <div className="relative dark:bg-[#353346]/70 rounded-full border-[1px] p-2 dark:border-t-[2px] dark:border-[#353346]">
            <LucideMousePointerClick size={18} className="dark:text-white" />
            <div className="border-l-2 border-muted-foreground/50 h-6 left-1/2 absolute transform translate-x-[-50%] -bottom-[30px]" />
          </div>
          <div className="relative dark:bg-[#353346]/70 rounded-full border-[1px] p-2 dark:border-t-[2px] dark:border-[#353346]">
            <GitBranch size={18} className="dark:text-white" />
            <div className="border-l-2 border-muted-foreground/50 h-6 left-1/2 absolute transform translate-x-[-50%] -bottom-[30px]" />
          </div>
          <div className="relative dark:bg-[#353346]/70 rounded-full border-[1px] p-2 dark:border-t-[2px] dark:border-[#353346]">
            <DatabaseIcon size={18} className="dark:text-white" />
            <div className="border-l-2 border-muted-foreground/50 h-6 left-1/2 absolute transform translate-x-[-50%] -bottom-[30px]" />
          </div>
          <div className="relative dark:bg-[#353346]/70 rounded-full border-[1px] p-2 dark:border-t-[2px] dark:border-[#353346]">
            <GitBranch size={18} className="dark:text-white" />
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center gap-8">
        <ModeToggle />
      </div>
    </nav>
  );
};

export default Sidebar;
