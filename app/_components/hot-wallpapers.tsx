import ImageSection from '@/components/custom/image-section';
import WallpaperCard from '@/components/custom/wallpaper-card';
import { getImagesHot } from '@/service/api';
import React from 'react';
import { LIMIT_PER_SECTION } from '../constant';

type Props = {};

export default async function HotWallpapers(props: Props) {
  const hotResponse = await getImagesHot(1);
  const hotList = hotResponse.data.slice(0, LIMIT_PER_SECTION);
  return (
    <ImageSection title="Hot" href="/top">
      {hotList.map((item) => (
        <WallpaperCard key={item.id} id={item.id} src={item.thumbnail} />
      ))}
    </ImageSection>
  );
}
