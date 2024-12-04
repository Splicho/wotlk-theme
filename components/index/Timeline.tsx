import React from "react";
import Image from "next/image";
function Timeline() {
  return (
    <div className="mt-10 mb-10 p-6 flex flex-col md:flex-row items-center justify-center gap-y-8 md:gap-x-10">
      <div className="flex flex-col items-center">
        <div className="relative w-32 h-8 self-start ml-10 top-1">
          <div
            className="absolute inset-0 bg-[#182132]"
            style={{ clipPath: "polygon(15% 0%, 85% 0%, 100% 100%, 0% 100%)" }}
          ></div>
          <span className="absolute inset-0 flex items-center justify-center text-white text-sm md:text-base font-semibold header-font drop-shadow-[0_2px_0px_rgba(0,0,0,1)]">
            Q1 2025
          </span>
        </div>
        <div className="relative">
          <Image
            src="/assets/hero/hero_arrow.svg"
            alt="arrow"
            width={500}
            height={100}
            className="relative object-cover w-[300px] md:w-[500px]"
          />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center gap-2">
            <Image
              src="/assets/hero/naxxramas.jpg"
              alt="naxxramas"
              width={30}
              height={30}
              className="rounded-sm w-6 md:w-[30px]"
            />
            <span className="text-[#b6c8d3] text-xl md:text-3xl font-semibold header-font drop-shadow-[0_2px_0px_rgba(0,0,0,1)]">
              Naxxramas
            </span>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center grayscale brightness-[60%] hover:brightness-[70%] transition-all duration-300">
        <div className="relative w-32 h-8 self-start ml-10 top-1">
          <div
            className="absolute inset-0 bg-[#182132]"
            style={{ clipPath: "polygon(15% 0%, 85% 0%, 100% 100%, 0% 100%)" }}
          ></div>
          <span className="absolute inset-0 flex items-center justify-center text-white text-sm md:text-base font-semibold header-font drop-shadow-[0_2px_0px_rgba(0,0,0,1)]">
            Q2 2025
          </span>
        </div>
        <div className="relative">
          <Image
            src="/assets/hero/hero_arrow.svg"
            alt="arrow"
            width={500}
            height={100}
            className="relative object-cover w-[300px] md:w-[500px]"
          />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center gap-2">
            <Image
              src="/assets/hero/yoggsaron.jpg"
              alt="ulduar"
              width={30}
              height={30}
              className="rounded-sm w-6 md:w-[30px]"
            />
            <span className="text-[#b6c8d3] text-xl md:text-3xl font-semibold header-font drop-shadow-[0_2px_0px_rgba(0,0,0,1)]">
              Ulduar
            </span>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center grayscale brightness-[45%] hover:brightness-[55%] transition-all duration-300">
        <div className="relative w-32 h-8 self-start ml-10 top-1">
          <div
            className="absolute inset-0 bg-[#182132]"
            style={{ clipPath: "polygon(15% 0%, 85% 0%, 100% 100%, 0% 100%)" }}
          ></div>
          <span className="absolute inset-0 flex items-center justify-center text-white text-sm md:text-base font-semibold header-font drop-shadow-[0_2px_0px_rgba(0,0,0,1)]">
            Q3 2025
          </span>
        </div>
        <div className="relative">
          <Image
            src="/assets/hero/hero_arrow.svg"
            alt="arrow"
            width={500}
            height={100}
            className="relative object-cover w-[300px] md:w-[500px]"
          />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center gap-2">
            <Image
              src="/assets/hero/icecrowncitadel.jpg"
              alt="icecrown citadel"
              width={30}
              height={30}
              className="rounded-sm w-6 md:w-[30px]"
            />
            <span className="text-[#b6c8d3] text-xl md:text-3xl font-semibold header-font drop-shadow-[0_2px_0px_rgba(0,0,0,1)] whitespace-nowrap">
              Icecrown Citadel
            </span>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center grayscale brightness-[30%] hover:brightness-[40%] transition-all duration-300">
        <div className="relative w-32 h-8 self-start ml-10 top-1">
          <div
            className="absolute inset-0 bg-[#182132]"
            style={{ clipPath: "polygon(15% 0%, 85% 0%, 100% 100%, 0% 100%)" }}
          ></div>
          <span className="absolute inset-0 flex items-center justify-center text-white text-sm md:text-base font-semibold header-font drop-shadow-[0_2px_0px_rgba(0,0,0,1)]">
            Q4 2025
          </span>
        </div>
        <div className="relative">
          <Image
            src="/assets/hero/hero_arrow.svg"
            alt="arrow"
            width={500}
            height={100}
            className="relative object-cover w-[300px] md:w-[500px]"
          />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center gap-2">
            <Image
              src="/assets/hero/halion.jpg"
              alt="halion"
              width={30}
              height={30}
              className="rounded-sm w-6 md:w-[30px]"
            />
            <span className="text-[#b6c8d3] text-xl md:text-3xl font-semibold header-font drop-shadow-[0_2px_0px_rgba(0,0,0,1)] whitespace-nowrap">
              Ruby Sanctum
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Timeline;
