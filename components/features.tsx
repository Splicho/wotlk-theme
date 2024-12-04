import Image from 'next/image';
import { Icon } from '@iconify/react';
import React from 'react'

function Features() {
  return (
    <section>
      <div className="py-24 sm:py-32 min-h-svh">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl sm:text-center">
            <h2 className="text-base font-semibold leading-7 text-muted-foreground">
              Everything you need
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl header-font">
              WOTLK? No problem.
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-300">
                Our goal is to provide a pristine wrath experience for our players. 
                We are a community driven server, and we aim to provide a server that is 
                fun, and engaging for all players.
            </p>
          </div>
        </div>
        <div className="relative overflow-hidden pt-16">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <Image
              src="/assets/sindragosa.jpg"
              alt="App screenshot"
              className="mb-[-12%] rounded-xl shadow-2xl ring-1 ring-white/10"
              width={2432}
              priority
              height={1442}
            />
            <div className="relative" aria-hidden="true">
              <div className="absolute -inset-x-20 bottom-0 bg-gradient-to-t from-[#0e273d] pt-[7%]"></div>
            </div>
          </div>
        </div>
        <div className="mx-auto mt-16 max-w-7xl px-6 sm:mt-20 md:mt-24 lg:px-8">
          <dl className="mx-auto grid max-w-2xl grid-cols-1 gap-x-6 gap-y-10 text-base leading-7 text-gray-300 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-x-8 lg:gap-y-16">
            {features.map((feature, index) => (
              <div key={index} className="relative pl-9">
                <dt className="inline font-semibold text-white">
                  <Icon
                    icon={feature.icon}
                    className="absolute left-1 top-1 h-5 w-5 text-[#0059FF]"
                    aria-hidden="true"
                  />
                  {feature.name}
                </dt>
                <dd className="inline">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}

const features = [
  {
    name: "Transmogrification.",
    description:
      "Customize the appearance of your gear without affecting its stats, allowing for unique character personalization.",
    icon: "mdi:magic-staff",
  },
  {
    name: "High Rates.",
    description:
      "Enjoy accelerated leveling and progression with our high experience and drop rates.",
    icon: "mdi:rocket",
  },
  {
    name: "Malls.",
    description:
      "Access in-game malls for convenient shopping of gear, items, and more.",
    icon: "mdi:shopping",
  },
  {
    name: "Custom Events.",
    description:
      "Participate in unique events designed to challenge and reward players.",
    icon: "mdi:calendar-star",
  },
  {
    name: "PvP Arenas.",
    description:
      "Engage in competitive player versus player combat in custom arenas.",
    icon: "mdi:sword-cross",
  },
  {
    name: "Guild Housing.",
    description:
      "Create and customize your own guild house with unique decorations.",
    icon: "mdi:home-group",
  },
];  

export default Features