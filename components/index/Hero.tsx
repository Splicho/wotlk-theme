import React from "react";
import styles from "./hero.module.css";
import Image from "next/image";
import Link from "next/dist/client/link";
import Timeline from "./Timeline";


function Hero() {
  return (
    <>
      <div
        className={`fixed inset-0 w-full h-screen flex flex-col items-center justify-center z-0 ${styles.heroBackground}`}
      />
      <Image
        src="/assets/hero/Render.png"
        alt="Render"
        width={1000}
        height={1000}
        className="fixed left-1/2 -translate-x-1/2 top-20 z-[100] object-cover pointer-events-none"
      />
      <div className="relative w-full h-screen flex flex-col items-center justify-center z-[200]">
        <div className="flex flex-col items-center justify-center py-20">
          <div>
            <Image
              src="/assets/hero/hero_logo.png"
              alt="logo"
              width={800}
              height={1000}
              className="relative object-cover"
            />
          </div>
          <div>
            <h1 className="text-[68px] header-font max-w-[500px] text-center leading-[1.2] tracking-[-1px] bg-gradient-to-b from-[#0b89c6] to-white text-transparent bg-clip-text drop-shadow-[0_2px_0px_rgba(0,0,0,1)]">
              <span className="block">EMBARK ON</span>
              <span className="block">A ADVENTURE</span>
            </h1>
            <div className="mt-10">
              <Link
                href="/"
                className="relative flex items-center justify-center group"
              >
                <Image
                  src="/assets/hero/play_button.png"
                  alt="explore"
                  width={300}
                  height={100}
                  className="relative object-cover group-hover:brightness-125 transition-all duration-300"
                />
                <span className="absolute text-white text-2xl font-semibold transition-all duration-300 group-hover:scale-105 group-hover:tracking-wider group-hover:text-shadow-[0_2px_0px_rgba(0,0,0,1)] group-hover:drop-shadow-[0_0_7px_rgba(255,255,255,0.5)]">
                  Play Now
                </span>
              </Link>
            </div>
            <div className="mt-10">
              <div className="bg-[radial-gradient(ellipse_at_top,_#5e9fef,_transparent_80%)] px-20 pt-2 pb-8">
                <span className="text-white text-2xl font-semibold header-font drop-shadow-[0_2px_0px_rgba(0,0,0,1)]">
                  3,201 Players Online
                </span>
              </div>
            </div>
          </div>
        </div>
        <Timeline />
      </div>
    </>
  );
}

export default Hero;
