import React from 'react';
import { AspectRatio } from '../ui/aspect-ratio';
import Image from 'next/image';
import Link from 'next/link';

type Props = {
  id: string;
  src: string;
};

const WallpaperCard = ({ id, src }: Props) => {
  return (
    <Link
      href={`/wallpapers/${id}`}
      className="w-full cursor-pointer rounded-md overflow-hidden hover:scale-110 hover:z-10  transition duration-300 ease-in-out"
    >
      <AspectRatio ratio={16 / 9} className="min-h-36">
        <Image src={src} alt={id} fill className="object-cover object-center" unoptimized />
      </AspectRatio>
    </Link>
  );
};

export default WallpaperCard;
