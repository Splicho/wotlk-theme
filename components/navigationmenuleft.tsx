"use client";

import React, { useState } from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import { Icon } from "@iconify/react";
import DropdownMenu from "./dropdownmenu";
import { AnimatePresence, motion } from "framer-motion";

function Navigationmenu() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="flex items-center gap-x-2">
      <Link
        href="/"
        className="font-medium hover:bg-slate-500 rounded-md px-4 py-2 transition-all duration-150"
      >
        Home
      </Link>
      <Link
        href="/"
        className="font-medium hover:bg-slate-500 rounded-md px-4 py-2 transition-all duration-150"
      >
        Information
      </Link>
      <Link
        href="/"
        className="font-medium hover:bg-slate-500 rounded-md px-4 py-2 transition-all duration-150"
      >
        News
      </Link>
      <Link
        href="/"
        className="font-medium hover:bg-slate-500 rounded-md px-4 py-2 transition-all duration-150"
      >
        Bug Tracker
      </Link>
      <div
        className="relative"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <Link
          href="/"
          className={`font-medium rounded-md px-4 py-2 transition-all duration-150 flex items-center gap-x-1
            ${isHovered ? 'bg-slate-500' : 'hover:bg-slate-500'}`}
        >
          Community <Icon icon="stash:chevron-down" width={24} />
        </Link>
        <div className="absolute left-1/2 -translate-x-1/2 top-full pt-2">
          <AnimatePresence>
            {isHovered && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: -5 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: -5 }}
                transition={{ duration: 0.1 }}
                style={{ transformOrigin: "top" }}
              >
                <DropdownMenu className="w-72">
                  <div className="flex flex-col gap-y-2 p-3">
                    <Link
                      href="/"
                      className="font-medium flex items-center gap-x-2 hover:bg-slate-700 p-2 rounded-md transition-colors"
                    >
                      <Icon
                        icon="ic:round-discord"
                        width={48}
                        className="text-[#5865F2]"
                      />
                      <div className="flex flex-col">
                        <span className="text-lg">Discord</span>
                        <span className="text-slate-400 text-sm">
                          Join our Discord server
                        </span>
                      </div>
                    </Link>
                    <Link
                      href="/"
                      className="font-medium flex items-center gap-x-2 hover:bg-slate-700 p-2 rounded-md transition-colors"
                    >
                      <Icon
                        icon="mdi:reddit"
                        width={48}
                        className="text-[#FF4500]"
                      />
                      <div className="flex flex-col">
                        <span className="text-lg">Reddit</span>
                        <span className="text-slate-400 text-sm">
                          Join the discussion
                        </span>
                      </div>
                    </Link>
                  </div>
                </DropdownMenu>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
      <Link href="/" className="font-medium">
        <Button variant="ghost">
          <Icon icon="ri:more-fill" />
        </Button>
      </Link>
    </div>
  );
}

export default Navigationmenu;
