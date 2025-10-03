import { FooterItem } from '@/types';
import React from 'react';

const AppFooter = () => {
  const footerItems: FooterItem[] = [
    { id: 1, href: 'https://www.youtube.com/@Truongnh9x', name: 'Youtube' },
    { id: 2, href: 'https://www.instagram.com/huutruongn/', name: 'Instagram' },
    { id: 3, href: 'https://www.tiktok.com/@truongnh9x', name: 'TikTok' },
    { id: 4, href: 'https://github.com/huutruong2304', name: 'GitHub' },
  ];
  const currentYear = new Date().getFullYear();

  return (
    <footer className="container max-w-3xl mx-auto py-4 flex flex-col items-center gap-2">
      <div className="flex gap-4 justify-center md:justify-end">
        {footerItems.map((item) => (
          <a key={item.id} href={item.href} target="_blank" rel="noopener noreferrer" className="hover:underline">
            {item.name}
          </a>
        ))}
      </div>
      <div className="footer-bottom text-center flex flex-col gap-1 text-sm text-gray-400 md:flex-row">
        <p>
          &copy; {currentYear} <b className="text-orange-500">Truong Nguyen</b> Design & code by me.
        </p>
        <p>All images belong to their respective owners.</p>
      </div>
    </footer>
  );
};

export default AppFooter;
