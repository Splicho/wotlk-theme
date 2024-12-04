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
import styles from "@/components/Index/hero.module.css";
import { Icon } from "@iconify/react";
export default function MidSection() {
  return (
    <div className={styles.midSection}>
      <h2 className="text-2xl md:text-5xl font-semibold text-center mb-6 mt-10 header-font">Latest News</h2>  
      <p className="text-center text-sm md:text-base text-slate-400">Read the latest news and updates about our project.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
        {/* News Card 1 */}
        <Card className="overflow-hidden">
          <div className="relative w-full h-48">
            <Image
              src="/assets/news/news-1.jpg"
              alt="News image"
              fill
              className="object-cover"
              priority
            />
          </div>
          <CardHeader>
            <CardTitle className="header-font text-xl md:text-2xl">
              Latest News
            </CardTitle>
            <CardDescription>Posted on March 20, 2024</CardDescription>
          </CardHeader>
          <CardContent>
            <p>
              Your news content goes here. This is a sample news article preview
              that demonstrates the card layout.
            </p>
          </CardContent>
          <CardFooter>
            <Button variant="primary" className="flex items-center gap-2"><Icon icon="game-icons:bookmarklet" /> Read More</Button>
          </CardFooter>
        </Card>

        {/* News Card 2 */}
        <Card className="overflow-hidden">
          <div className="relative w-full h-48">
            <Image
              src="/assets/news/news-2.jpg"
              alt="News image"
              fill
              className="object-cover"
            />
          </div>
          <CardHeader>
            <CardTitle className="header-font text-xl md:text-2xl">
              Breaking News
            </CardTitle>
            <CardDescription>Posted on March 19, 2024</CardDescription>
          </CardHeader>
          <CardContent>
            <p>
              Another news article preview. You can customize the content and
              styling as needed.
            </p>
          </CardContent>
          <CardFooter>
            <Button variant="primary" className="flex items-center gap-2"><Icon icon="game-icons:bookmarklet" /> Read More</Button>
          </CardFooter>
        </Card>

        {/* News Card 3 */}
        <Card className="overflow-hidden">
          <div className="relative w-full h-48">
            <Image
              src="/assets/news/news-3.jpg"
              alt="News image"
              fill
              className="object-cover"
            />
          </div>
          <CardHeader>
            <CardTitle className="header-font text-xl md:text-2xl">
              Featured Story
            </CardTitle>
            <CardDescription>Posted on March 18, 2024</CardDescription>
          </CardHeader>
          <CardContent>
            <p>
              Featured story preview. Add images, text, or any other content
              you'd like to display.
            </p>
          </CardContent>
          <CardFooter>
            <Button variant="primary" className="flex items-center gap-2"><Icon icon="game-icons:bookmarklet" /> Read More</Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
