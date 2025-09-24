import React from 'react';
import { AspectRatio } from '../ui/aspect-ratio';
import Image from 'next/image';

type Props = {
  id: string;
  src: string;
};

const ImageCard = ({ id, src }: Props) => {
  return (
    <div className="w-full cursor-pointer rounded-md overflow-hidden hover:scale-110 hover:z-10  transition duration-300 ease-in-out">
      <AspectRatio ratio={16 / 9} className="min-h-36">
        <Image src={src} alt={id} fill unoptimized className="object-cover object-center" />
      </AspectRatio>
    </div>
  );
};

export default ImageCard;
