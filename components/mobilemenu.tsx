"use client";

import React from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Icon } from "@iconify/react";
import Link from "next/link";
import { Button } from "./ui/button";
import BrandSymbol from "./icons/BrandSymbol";

function MobileMenu() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="lg:hidden">
        <Icon icon="ci:hamburger-lg" className="h-12 w-12" />
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-slate-800">
        <SheetHeader className="mb-6">
          <div className="flex flex-col gap-y-4 mt-6">
            <Link href="/" className="font-medium p-2 hover:bg-slate-900 rounded-md">
              Home
            </Link>
            <Link href="/" className="font-medium p-2 hover:bg-slate-900 rounded-md">
              Information
            </Link>
            <Link href="/" className="font-medium p-2 hover:bg-slate-900 rounded-md">
              News
            </Link>
            <Link href="/" className="font-medium p-2 hover:bg-slate-900 rounded-md">
              Bug Tracker
            </Link>
            <Link href="/" className="font-medium p-2 hover:bg-slate-900 rounded-md">
              Shop
            </Link>
            <div className="h-[1px] bg-slate-800" />
            <Link href="/" className="font-medium p-2 hover:bg-slate-900 rounded-md">
              Discord
            </Link>
            <Link href="/" className="font-medium p-2 hover:bg-slate-900 rounded-md">
              Reddit
            </Link>
            <div className="h-[1px] bg-slate-800" />
            <Button variant="primary" className="w-full p-6">
              <BrandSymbol className="text-white !size-6" />
              Login
            </Button>
            <Button variant="download" className="w-full p-6">
              <BrandSymbol className="text-[#009ae4] !size-6" />
              Download Launcher
            </Button>
          </div>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}

export default MobileMenu; 