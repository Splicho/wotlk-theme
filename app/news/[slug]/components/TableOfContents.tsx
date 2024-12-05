'use client';
import React, { useEffect, useState } from 'react';
import { Icon } from '@iconify/react';

interface HeadingData {
  id: string;
  text: string;
  level: number;
}

export function TableOfContents() {
  const [headings, setHeadings] = useState<HeadingData[]>([]);
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    const contentElement = document.querySelector('.prose.prose-invert');
    if (!contentElement) return;

    const elements = Array.from(contentElement.querySelectorAll('h2, h3'));
    const headingData = elements
      .map((element) => {
        // Get text content before any anchor tags
        const textContent = Array.from(element.childNodes)
          .filter(node => node.nodeType === Node.TEXT_NODE)
          .map(node => node.textContent?.trim())
          .join(' ');

        return {
          id: element.id,
          text: textContent,
          level: parseInt(element.tagName[1]),
        };
      })
      .filter(heading => heading.id && heading.text);

    console.log('Heading data:', headingData); // Debug log
    setHeadings(headingData);

    const callback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveId(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(callback, {
      rootMargin: '-100px 0px -66%',
    });

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  if (headings.length === 0) return null;

  return (
    <nav className="sticky top-32 max-h-[calc(100vh-9rem)] overflow-auto">
      <div className="mb-4 flex items-center gap-2 font-semibold">
        <Icon icon="solar:list-bold" className="h-5 w-5" />
        Table of Contents
      </div>
      <ul className="space-y-2.5 text-sm">
        {headings.map((heading) => (
          <li
            key={heading.id}
            style={{ paddingLeft: `${(heading.level - 2) * 1}rem` }}
          >
            <a
              href={`#${heading.id}`}
              className={`hover:text-blue-400 ${
                activeId === heading.id
                  ? 'text-blue-400 font-medium'
                  : 'text-gray-400'
              }`}
              onClick={(e) => {
                e.preventDefault();
                document.getElementById(heading.id)?.scrollIntoView({
                  behavior: 'smooth',
                });
              }}
            >
              {heading.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
} 