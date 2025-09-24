import { FooterItem } from '@/types';
import React from 'react';

type Props = {};

const AppFooter = (props: Props) => {
  const footerItems: FooterItem[] = [
    { id: 1, href: 'https://www.facebook.com', name: 'Facebook' },
    { id: 2, href: 'https://www.twitter.com', name: 'Twitter' },
    { id: 3, href: 'https://www.instagram.com', name: 'Instagram' },
  ];
  const currentYear = new Date().getFullYear();

  return (
    <footer className="container max-w-3xl mx-auto py-4 flex flex-col md:flex-row justify-between gap-2">
      <div className="footer-bottom text-center">
        <p>
          &copy; {currentYear} <b>Truong Nguyen</b>. All rights reserved.
        </p>
      </div>

      <div className="flex gap-4 justify-center md:justify-end">
        {footerItems.map((item) => (
          <a key={item.id} href={item.href} target="_blank" rel="noopener noreferrer">
            {item.name}
          </a>
        ))}
      </div>
    </footer>
  );
};

export default AppFooter;
