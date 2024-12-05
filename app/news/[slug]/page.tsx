import React from "react";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote/rsc";
import styles from "@/components/hero.module.css";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { Icon } from "@iconify/react";
import { TableOfContents } from "../[slug]/components/TableOfContents";

interface FrontMatter {
  title: string;
  date: string;
  author: string;
  role: string;
  authorImage?: string;
  coverImage?: string;
  readTime: number;
  tags?: string[];
  categories?: string[];
}

function calculateReadTime(content: string): number {
  const wordsPerMinute = 200;
  const words = content.trim().split(/\s+/).length;
  return Math.ceil(words / wordsPerMinute);
}

async function getPost(slug: string): Promise<{ frontMatter: FrontMatter; content: string }> {
  try {
    const filePath = path.join(process.cwd(), "_news", `${slug}.mdx`);
    const fileContents = fs.readFileSync(filePath, "utf8");
    
    let parsedMatter;
    try {
      parsedMatter = matter(fileContents);
    } catch (e) {
      console.error(`Error parsing front matter for ${slug}:`, e);
      throw new Error('Invalid front matter format');
    }

    const { data, content } = parsedMatter;
    const frontMatter = data as Omit<FrontMatter, 'readTime'>;

    const processedFrontMatter = {
      ...frontMatter,
      readTime: calculateReadTime(content),
      tags: Array.isArray(frontMatter.tags) ? frontMatter.tags : frontMatter.tags ? [frontMatter.tags] : [],
      categories: Array.isArray(frontMatter.categories) ? frontMatter.categories : frontMatter.categories ? [frontMatter.categories] : []
    };

    return {
      frontMatter: processedFrontMatter,
      content,
    };
  } catch (error) {
    console.error(`Error processing post ${slug}:`, error);
    throw error;
  }
}

export async function generateStaticParams() {
  const postsDirectory = path.join(process.cwd(), "_news");
  const fileNames = fs.readdirSync(postsDirectory);

  return fileNames.map((fileName) => ({
    slug: fileName.replace(/\.mdx$/, ""),
  }));
}

export default async function NewsSlugPage({
  params,
}: {
  params: { slug: string };
}) {
  const { frontMatter, content } = await getPost(params.slug);

  return (
    <article className={`${styles.midSection}`}>
      <div className="container mx-auto mt-44 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4 max-w-4xl mx-auto">
          <div className="flex flex-col justify-center items-center">
            <span className="flex items-center flex-wrap justify-center gap-2 mb-4">
              {frontMatter.categories && frontMatter.categories.length > 0 && (
                <>
                  <span className="text-blue-400 font-semibold flex items-center">
                    <Icon icon="game-icons:feather" className="mr-1.5" />
                    {frontMatter.categories[0]}
                  </span>
                  <span className="mx-2 text-blue-400">·</span>
                </>
              )}
              <span className="text-gray-400">
                {new Date(frontMatter.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                <span className="mx-2 text-blue-400">·</span>
                {frontMatter.readTime} min read
              </span>
            </span>
            <h1 className="text-2xl sm:text-3xl md:text-4xl leading-tight tracking-tight font-bold mb-4 text-center header-font">{frontMatter.title}</h1>
            <Avatar className="h-14 w-14 border-2 border-slate-300">
              <AvatarImage src={frontMatter.authorImage} alt={frontMatter.author} className="object-cover" />
            </Avatar>
            <span className="text-lg font-semibold">{frontMatter.author}</span>
            <span className="text-sm text-gray-400">{frontMatter.role}</span>
            
            {frontMatter.tags && frontMatter.tags.length > 0 && (
              <div className="flex flex-wrap justify-center gap-2 mt-4">
                {frontMatter.tags.map((tag) => (
                  <span key={tag} className="px-2 py-1 bg-gray-800 rounded-full text-sm text-gray-300">
                    {tag}
                  </span>
                ))}
              </div>
            )}
            
          </div>
        </div>
        <Separator className="my-8 md:my-12" />
        
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-8">
          <div className="min-w-0">
            <div className="my-4 sm:my-8">
              {frontMatter.coverImage && (
                <img
                  src={frontMatter.coverImage}
                  alt={frontMatter.title}
                  className="w-full h-48 sm:h-64 object-cover rounded-lg mb-4 sm:mb-8"
                />
              )}
            </div>
            <div className="prose prose-sm sm:prose-base lg:prose-lg prose-invert max-w-none prose-headings:scroll-mt-32">
              <div className="mdx-content-container">
                <MDXRemote 
                  source={content}
                  components={{
                    h1: ({ children }) => {
                      const id = children?.toString().toLowerCase().replace(/\s+/g, '-');
                      return (
                        <h1 id={id} className="group">
                          {children}
                          <a href={`#${id}`} className="ml-2 opacity-0 group-hover:opacity-100 text-blue-400">
                            #
                          </a>
                        </h1>
                      );
                    },
                    h2: ({ children }) => {
                      const id = children?.toString().toLowerCase().replace(/\s+/g, '-');
                      return (
                        <h2 id={id} className="group">
                          {children}
                          <a href={`#${id}`} className="ml-2 opacity-0 group-hover:opacity-100 text-blue-400">
                            #
                          </a>
                        </h2>
                      );
                    },
                    h3: ({ children }) => {
                      const id = children?.toString().toLowerCase().replace(/\s+/g, '-');
                      return (
                        <h3 id={id} className="group">
                          {children}
                          <a href={`#${id}`} className="ml-2 opacity-0 group-hover:opacity-100 text-blue-400">
                            #
                          </a>
                        </h3>
                      );
                    },
                  }}
                />
              </div>
            </div>
          </div>
          <div className="hidden lg:block">
            <TableOfContents />
          </div>
        </div>
      </div>
    </article>
  );
}
