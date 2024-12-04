import News from "./news";
import styles from "./hero.module.css";
import ServerStatus from "./serverstatus";
import Discord from "./discord";
import Features from "./features";
export default function MidSection() {
  const newsItems = [
    {
      image: "/assets/news/news-1.jpg",
      title: "Latest News",
      date: "March 20, 2024",
      content: "Your news content goes here. This is a sample news article preview that demonstrates the card layout.",
    },
    {
      image: "/assets/news/news-2.jpg",
      title: "Breaking News",
      date: "March 19, 2024",
      content: "Another news article preview. You can customize the content and styling as needed.",
    },
    {
      image: "/assets/news/news-3.jpg",
      title: "Featured Story",
      date: "March 18, 2024",
      content: "Featured story preview. Add images, text, or any other content you\'d like to display.",
    },
    {
      image: "/assets/news/news-1.jpg",
      title: "Wide Story",
      date: "March 17, 2024",
      content: "This story will span two columns in the grid layout.",
    },
  ];

  return (
    <div className={`${styles.midSection}`}>
      <div className="container mx-auto p-12">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr,500px] gap-6">
          <News items={newsItems} />
          <div className="w-full">
            <ServerStatus />
            <Discord />
          </div>
        </div>
        <Features />
      </div>
    </div>
  );
}
