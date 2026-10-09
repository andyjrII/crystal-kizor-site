'use client';

import { useEffect, useState } from 'react';

export default function ChapterNav({
  chapters,
}: {
  chapters: { id: string; name: string }[];
}) {
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    const sections = chapters
      .map((c) => document.getElementById(c.id))
      .filter((el): el is HTMLElement => el !== null);
    if (sections.length === 0) return;
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
        }
      },
      { rootMargin: '-45% 0px -50% 0px' },
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, [chapters]);

  return (
    <nav aria-label='Chapters' className='chips'>
      {chapters.map((c) => (
        <a
          key={c.id}
          href={`#${c.id}`}
          className='chip'
          aria-current={active === c.id ? 'true' : undefined}
        >
          {c.name}
        </a>
      ))}
    </nav>
  );
}
