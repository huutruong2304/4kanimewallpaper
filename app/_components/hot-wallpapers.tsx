import ImageSection from '@/components/custom/image-section';
import WallpaperCard from '@/components/custom/wallpaper-card';
import { getImagesHot } from '@/service/api';
import React from 'react';
import { LIMIT_PER_SECTION } from '../../constants';
import { CategoryLabel } from '@/types';

export default async function HotWallpapers() {
  const hotResponse = await getImagesHot(1);
  const hotList = hotResponse.data.slice(0, LIMIT_PER_SECTION);
  return (
    <ImageSection title={CategoryLabel.HOT} href="/hot">
      {hotList.map((item) => (
        <WallpaperCard key={item.id} id={item.id} src={item.thumbnail} />
      ))}
    </ImageSection>
  );
}
