'use client';
import React from 'react';
import { Button } from '../ui/button';
import Link from 'next/link';
import SectionWrapper from './section-wrapper';

type Props = {
  title: string;
  children: React.ReactNode;
  href?: string;
  viewMoreLabel?: string;
};

const ImageSection = ({ title, children, href, viewMoreLabel = 'View more' }: Props) => {
  return (
    <SectionWrapper title={title}>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">{children}</div>

      {!!href && (
        <div className="w-full mt-8 flex justify-center">
          <Link href={href}>
            <Button className="bg-orange-500 hover:bg-orange-600 text-base cursor-pointer ">{viewMoreLabel}</Button>
          </Link>
        </div>
      )}
    </SectionWrapper>
  );
};

export default ImageSection;
