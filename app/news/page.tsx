import React from 'react';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Image from 'next/image';
import Link from 'next/link';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Icon } from "@iconify/react";
import styles from '@/components/hero.module.css';

// Update the Post interface
interface Post {
  slug: string;
  title: string;
  date: string;
  excerpt?: string;
  coverImage?: string;
  categories?: string;
  tags?: string[];
  author?: string;
  authorImage?: string;
  role?: string;
  readTime?: number;
}

// Add this function before getPosts
function calculateReadTime(content: string): number {
  const wordsPerMinute = 200;
  const words = content.trim().split(/\s+/).length;
  return Math.ceil(words / wordsPerMinute);
}

// Update the getPosts function
async function getPosts(): Promise<Post[]> {
  const postsDirectory = path.join(process.cwd(), '_news');
  const fileNames = fs.readdirSync(postsDirectory);

  const posts = fileNames.map((fileName) => {
    const slug = fileName.replace(/\.mdx$/, '');
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data: frontMatter, content } = matter(fileContents);
    
    return {
      slug,
      ...frontMatter,
      readTime: calculateReadTime(content)
    } as Post;
  });

  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export default async function NewsPage() {
  const posts = await getPosts();

  return (
    <div className={`${styles.midSection}`}>
        <div className="container mx-auto mt-44 p-10">
            <h1 className="header-font text-5xl font-bold mb-4 text-center">Latest News</h1>
            <p className="text-center text-gray-400 mb-20">Stay updated with the latest news and announcements from our server.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 auto-rows-[400px] gap-6">
        {posts.map((post: Post, index) => (
          <Card 
            key={post.slug}
            className="overflow-hidden group relative"
          >
            <div className="relative w-full h-full">
              {post.coverImage && (
                <Image
                  src={post.coverImage}
                  alt={post.title}
                  fill
                  className="object-cover transition-all duration-500 ease-in-out group-hover:scale-110 group-hover:rotate-2 group-hover:brightness-90"
                  priority={index === 0}
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent">
                <Link href={`/news/${post.slug}`} className="absolute inset-0">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    {post.categories && (
                      <span className="inline-block px-3 py-1 text-sm rounded-full bg-slate-800 text-blue-300 uppercase font-semibold mb-3">
                        {post.categories}
                      </span>
                    )}
                    <h3 className="header-font text-xl md:text-2xl mb-2 text-white">
                      {post.title}
                    </h3>
                    <div className="flex items-center gap-4 text-sm text-gray-200 mb-2">
                      <div className="flex items-center gap-1">
                        <Icon icon="uil:calendar-alt" />
                        {new Date(post.date).toLocaleDateString('en-US', { 
                          month: 'long', 
                          day: 'numeric', 
                          year: 'numeric' 
                        })}
                      </div>
                      <div className="flex items-center gap-1">
                        <Icon icon="uil:clock" />
                        {post.readTime} min read
                      </div>
                      {post.author && (
                        <div className="flex items-center gap-2">
                          {post.authorImage && (
                            <Image
                              src={post.authorImage}
                              alt={post.author}
                              width={24}
                              height={24}
                              className="rounded-full"
                            />
                          )}
                          <span>{post.author}</span>
                        </div>
                      )}
                    </div>
                    <p className="text-gray-200 mb-4 line-clamp-2">
                      {post.excerpt}
                    </p>
                    <Button variant="primary" className="flex items-center gap-2">
                      <Icon icon="game-icons:bookmarklet" /> Read More
                    </Button>
                  </div>
                </Link>
              </div>
            </div>
          </Card>
        ))}
            </div>
        </div>
    </div>  
  );
}