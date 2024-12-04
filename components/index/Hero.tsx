"use client";

import React from "react";
import styles from "./hero.module.css";
import Image from "next/image";
import Link from "next/dist/client/link";
import Timeline from "./Timeline";
import HeroSlider from './HeroSlider';

function Hero() {
  return (
    <div className={`w-full min-h-screen ${styles.heroBackground}`}>
      <div className="w-full min-h-screen flex flex-col items-center justify-center">
        <div className="flex flex-col items-center justify-center py-20 mt-10">
          <div>
            <Image
              src="/assets/hero/hero_logo.png"
              alt="logo"
              width={800}
              height={1000}
              className="object-cover"
            />
          </div>
          <HeroSlider />
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
                className="object-cover group-hover:brightness-125 transition-all duration-300"
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
        <Timeline />
      </div>
    </div>
  );
}

export default Hero;
