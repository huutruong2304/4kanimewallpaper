import HotWallpapers from '@/app/_components/hot-wallpapers';
import DownloadWallpaper from '@/components/custom/download-wallpaper';
import SectionWrapper from '@/components/custom/section-wrapper';
import AppContainer from '@/components/layout/app-container';
import { getImageDetail, getImagesNew } from '@/service/api';
import Image from 'next/image';
import React from 'react';

type Props = {
  params: Promise<{ wallpaperId: string }>;
};

// Generate metadata for SEO
export async function generateMetadata({ params }: Props) {
  const { wallpaperId } = await params;
  const description = 'A collection of high-quality 4K anime wallpapers for your desktop and mobile devices.';

  const details = await getImageDetail(wallpaperId);
  const title = details?.name || `${details.id} - 4K Anime Wallpaper`;

  if (!details)
    return {
      title,
      description,
    };

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'website',
      url: details.thumbnail,
    },
    twitter: {
      title,
      description,
      card: 'summary_large_image',
      images: [details.thumbnail],
    },
  };
}

export default async function WallpaperPage(props: Props) {
  const { wallpaperId } = await props.params;
  const details = await getImageDetail(wallpaperId);

  return (
    <AppContainer>
      <SectionWrapper title={'Wallpapers for dekstop & moble'}>
        <div className="relative max-w-3xl h-[500px] rounded-lg shadow mx-auto overflow-hidden">
          <Image src={details.link_img} alt={details.id} fill className="object-cover" />
        </div>
        <div className="flex justify-center my-8">
          <DownloadWallpaper url={details.link_img} filename={details.name || details.id} />
        </div>
      </SectionWrapper>

      <HotWallpapers />
    </AppContainer>
  );
}

// Generate static params for SEO and performance
export async function generateStaticParams() {
  const totalPages = 20;
  const results = await Promise.all(Array.from({ length: totalPages }, (_, i) => getImagesNew(i + 1)));
  const allWallpapers = results.flatMap((res) => res.data);
  return allWallpapers.map((item) => ({
    wallpaperId: item.id.toString(),
  }));
}
