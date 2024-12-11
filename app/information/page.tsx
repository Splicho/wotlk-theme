import React from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import Image from "next/image";
import styles from "@/components/hero.module.css";
import { Icon } from "@iconify/react";

type Feature = {
  icon: string;
  title: string;
  description?: string;
  details?: string[];
};

const tabs = [
  {
    value: "general",
    icon: "material-symbols:info-outline",
    title: "GENERAL INFORMATION",
    subtitle: "Basic server information",
    content: {
      banner: "/assets/news/news-1.jpg",
      features: [
        {
          icon: "mdi:gamepad-variant-outline",
          title: "Server Base Version:",
          description: "Latest Update 4.0"
        },
      ] as Feature[]
    }
  },
  {
    value: "keyfeatures",
    icon: "mdi:gamepad-variant-outline",
    title: "KEY FEATURES",
    subtitle: "Key features of the server",
    content: {
      banner: "/assets/news/news-2.jpg",
      features: [
        {
          icon: "mdi:gamepad-variant-outline",
          title: "PVE Blizzlike Wrath+ Realm:",
          description: "Garrosh is offers diverse new ways to enjoy old content"
        }
      ]
    }
  },
  {
    value: "raidbosses",
    icon: "game-icons:fish-monster",
    title: "INSTANCES & RAID BOSSES",
    subtitle: "Spawn and entry information",
    content: {
      banner: "/assets/news/news-3.jpg",
      features: [
        {
          icon: "game-icons:fish-monster",
          title: "Spawn and entry information",
          details: [
            "Spawn and entry information",
          ]
        }
      ]
    }
  }
  // Add more tabs as needed
];

export default function InformationPage() {
  return (
    <div className={`${styles.midSection}`}>
      <div className="container mx-auto p-4 lg:p-10">
        <div className="text-center mb-8">
          <h1 className="text-2xl lg:text-4xl font-bold mb-2 header-font">Server Information</h1>
          <p className="text-gray-400 text-sm lg:text-base">Everything you need to know about our server</p>
        </div>

        <div className="h-[calc(100vh-2rem)] lg:h-[calc(100vh-5rem)]">
          <Tabs defaultValue="general" orientation="vertical" className="flex w-full flex-col lg:flex-row h-full">
            <div className="w-full lg:w-80 mb-4 lg:mb-0">
              <ScrollArea className="h-auto lg:h-screen">
                <TabsList className="grid grid-cols-2 lg:grid-cols-none lg:flex lg:flex-col w-full gap-2 bg-transparent p-4">
                  {tabs.map((tab) => (
                    <TabsTrigger
                      key={tab.value}
                      value={tab.value}
                      className="flex items-center gap-4 w-full p-4 text-left bg-gray-900/50 hover:bg-gray-800 rounded-lg data-[state=active]:bg-gray-800 h-[80px]"
                    >
                      <Icon icon={tab.icon} className="text-2xl text-blue-300" />
                      <div className="w-full">
                        <h3 className="font-semibold text-sm lg:text-base">{tab.title}</h3>
                        <p className="text-xs lg:text-sm text-gray-400">{tab.subtitle}</p>
                      </div>
                    </TabsTrigger>
                  ))}
                </TabsList>
              </ScrollArea>
            </div>

            <div className="flex-1">
              <ScrollArea className="h-[calc(100vh-200px)] lg:h-screen">
                {tabs.map((tab) => (
                  <TabsContent 
                    key={tab.value} 
                    value={tab.value} 
                    className="mt-0 h-full"
                  >
                    <div className="p-4 lg:p-6">
                      {tab.content?.banner && (
                        <div className="relative h-48 lg:h-64 w-full mb-6">
                          <Image
                            src={tab.content.banner}
                            alt="Banner"
                            fill
                            className="object-cover rounded-lg"
                          />
                        </div>
                      )}
                      
                      <div className="space-y-4 lg:space-y-6">
                        {tab.content?.features?.map((feature, index) => (
                          <div key={index} className="flex items-start gap-4">
                            <Icon icon={feature.icon} className="text-xl lg:text-2xl" />
                            <div>
                              <h4 className="font-medium text-blue-400 text-sm lg:text-base">
                                {feature.title} {feature?.description}
                              </h4>
                              {feature?.details && (
                                <ul className="mt-2 space-y-2 text-gray-400 text-sm lg:text-base">
                                  {feature.details.map((detail, idx) => (
                                    <li key={idx}>{detail}</li>
                                  ))}
                                </ul>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </TabsContent>
                ))}
              </ScrollArea>
            </div>
          </Tabs>
        </div>
      </div>
    </div>
  );
}
