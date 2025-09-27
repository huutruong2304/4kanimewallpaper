'use client';
import Image, { ImageProps } from 'next/image';
import React, { useState } from 'react';

type Props = ImageProps & {
  fallbackSrc?: string;
  onError?: () => void;
};

const AppImage = ({ fallbackSrc = '/fallback-thumbnail.png', onError, ...props }: Props) => {
  const [imgSrc, setImgSrc] = useState(props.src);

  return (
    <Image
      {...props}
      src={imgSrc}
      onError={() => {
        console.error('Image load failed:', imgSrc);
        setImgSrc(fallbackSrc);
        onError?.();
      }}
      alt={props.alt || 'image'}
    />
  );
};

export default AppImage;
