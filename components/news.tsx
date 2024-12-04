import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Icon } from "@iconify/react";

interface NewsItem {
  image: string;
  title: string;
  date: string;
  content: string;
}

interface NewsProps {
  items: NewsItem[];
}

export default function News({ items }: NewsProps) {
  // Take only the first 3 items
  const displayItems = items.slice(0, 3);

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 auto-rows-[400px] gap-6">
      {displayItems.map((item, index) => (
        <Card 
          key={index} 
          className={`overflow-hidden group relative ${
            index === 0 ? 'md:col-span-2 md:row-span-2' : // First card (Latest News)
            index === 1 ? 'md:col-span-2' : // Second card (Breaking News)
            index === 2 ? 'md:col-span-2' : // Third card (Featured Story)
            ''
          }`}
        >
          <div className={`relative w-full h-full`}>
            <Image
              src={item.image}
              alt="News image"
              fill
              className="object-cover transition-all duration-500 ease-in-out group-hover:scale-110 group-hover:rotate-2 group-hover:brightness-90"
              priority={index === 0}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent">
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="header-font text-xl md:text-2xl mb-2 text-white">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-200 mb-2">Posted on {item.date}</p>
                <p className={`text-gray-200 mb-4 ${
                  index === 0 ? 'line-clamp-3' : 'line-clamp-2'
                }`}>
                  {item.content}
                </p>
                <Button variant="primary" className="flex items-center gap-2">
                  <Icon icon="game-icons:bookmarklet" /> Read More
                </Button>
              </div>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
} 