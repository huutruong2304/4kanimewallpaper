import { AspectRatio } from '@radix-ui/react-aspect-ratio';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

type Props = {
  id: string;
  src: string;
  title: string;
  views?: number;
  totalImages?: number;
};

const CollectionCard = ({ id, src, title, views, totalImages }: Props) => {
  return (
    <Link
      href={`/collections/${id}`}
      className="w-full cursor-pointer rounded-md overflow-hidden hover:scale-110 hover:z-10  transition duration-300 ease-in-out relative my-2"
    >
      <AspectRatio ratio={16 / 9} className="min-h-36 overflow-hidden rounded-md">
        <Image src={src} alt={id} fill className="object-cover object-center" />
      </AspectRatio>
      <h3 className="mt-4 text-sm font-bold text-gray-800 dark:text-gray-200 line-clamp-2">{title}</h3>
      <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
        {totalImages ?? 0} images {views ? `· ${views} views` : ''}
      </p>
    </Link>
  );
};

export default CollectionCard;
