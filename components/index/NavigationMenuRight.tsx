"use client";

import Link from "next/link";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Icon } from "@iconify/react";
import DropdownMenu from "./Dropdownmenu";
import { AnimatePresence, motion } from "framer-motion";
import BrandSymbol from "../icons/BrandSymbol";

function NavigationMenuRight() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="flex items-center gap-x-4">
      <Link href="/" className="font-medium hover:bg-slate-500 rounded-md px-4 py-2 transition-all duration-150">
        Shop
      </Link>
      <div 
        className="relative z-[9999]"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <Link 
          href="/" 
          className={`font-medium flex items-center gap-x-2 rounded-md px-4 py-2 transition-all duration-150
            ${isHovered ? 'bg-slate-500' : 'hover:bg-slate-500'}`}
        >
          <Icon icon="mdi:account" width={24} />
          Account
          <Icon icon="mdi:chevron-down" width={24} />
        </Link>
        <div className="absolute left-1/2 -translate-x-1/2 top-full pt-2">
          <AnimatePresence>
            {isHovered && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: -5 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: -5 }}
                transition={{ duration: 0.1 }}
                style={{ transformOrigin: 'top' }}
                className="z-[9999]"
              >
                <DropdownMenu className="w-72">
                  <div className="flex flex-col gap-y-2 p-3">
                    <button 
                      className="w-full p-2"
                      onMouseEnter={(e) => {
                        e.stopPropagation();
                        setIsHovered(true);
                      }}
                    >
                      <Button variant="primary" className="w-full p-6">
                        <BrandSymbol className="text-white !size-6" />
                        Login
                      </Button>
                    </button>
                    <Link href="/" className="font-medium flex items-center gap-x-2 hover:bg-slate-700 p-2 rounded-md transition-colors">
                      <div className="flex items-center gap-x-3 w-full">
                        <Icon icon="mdi:account" width={34} className="shrink-0 text-zinc-400" />
                        <div className="flex flex-col">
                          <span className="text-lg">Sign Up</span>
                          <span className="text-slate-400 text-sm">Create an account</span>
                        </div>
                      </div>
                    </Link>
                    <Link href="/" className="font-medium flex items-center gap-x-2 hover:bg-slate-700 p-2 rounded-md transition-colors">
                      <div className="flex items-center gap-x-3 w-full">
                        <Icon icon="mdi:cog" width={34} className="shrink-0 text-zinc-400" />
                        <div className="flex flex-col">
                          <span className="text-lg">Settings</span>
                          <span className="text-slate-400 text-sm">Manage your account</span>
                        </div>
                      </div>
                    </Link>
                    <div className="h-[1px] bg-slate-700 my-1" />
                    <Link href="/" className="font-medium flex items-center gap-x-2 hover:bg-slate-700 p-2 rounded-md transition-colors">
                      <Icon icon="akar-icons:question" width={24} className="shrink-0 text-zinc-400" />
                      <span>Support</span>
                    </Link>
                  </div>
                </DropdownMenu>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
      <Link href="/" className="font-medium">
        <Button variant="download" className="p-[1.7rem]">
          <BrandSymbol
            className="text-[#009ae4] !size-6"
          />
          Download Launcher
        </Button>
      </Link>
    </div>
  );
}

export default NavigationMenuRight;
