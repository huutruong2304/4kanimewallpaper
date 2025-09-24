'use client';
import React from 'react';
import { Button } from '../ui/button';
import Link from 'next/link';

type Props = {
  title: string;
  children: React.ReactNode;
  href?: string;
  viewMoreLabel?: string;
};

const ImageSection = ({ title, children, href, viewMoreLabel = 'View more' }: Props) => {
  return (
    <div className="my-8">
      <h2 className="text-2xl font-bold text-orange-500 uppercase border-b-2 border-orange-500  mb-8 w-max pr-4">{title}</h2>
      <div className="grid grid-cols-4 gap-4">{children}</div>

      {!!href && (
        <div className="w-full mt-8 flex justify-center">
          <Link
            className="mx-auto px-5 py-2 bg-orange-500 hover:bg-orange-600 uppercase rounded-none cursor-pointer text-sm font-semibold"
            href={href}
          >
            {viewMoreLabel}
          </Link>
        </div>
      )}
    </div>
  );
};

export default ImageSection;
