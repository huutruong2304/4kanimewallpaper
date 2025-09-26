import AppPagination from '@/components/custom/app-pagination';
import SectionWrapper from '@/components/custom/section-wrapper';
import WallpaperCard from '@/components/custom/wallpaper-card';
import AppContainer from '@/components/layout/app-container';
import { getImagesHot, getImagesNew } from '@/service/api';
import React from 'react';
import { notFound } from 'next/navigation';
import { CategoryLabel, CategoryValue, ImageDetail } from '@/types';

type Props = {
  params: Promise<{ categoryId: string }>;
  searchParams?: Promise<{ page?: string }>;
};

// generate metadata for SEO
export async function generateMetadata({ params }: Props) {
  const { categoryId } = await params;

  let title = 'Others - 4K Anime Wallpaper';
  let description = 'A collection of high-quality 4K anime wallpapers for your desktop and mobile devices.';

  if (categoryId === CategoryValue.NEW) {
    title = 'New - 4K Anime Wallpaper';
    description = 'Discover the latest 4K anime wallpapers, updated regularly with fresh and vibrant designs for your desktop and mobile devices.';
  } else if (categoryId === CategoryValue.HOT) {
    title = 'Hot Wallpapers - 4K Anime Wallpaper';
    description =
      'Explore the hottest 4K anime wallpapers that are trending now, featuring popular and eye-catching designs for your desktop and mobile devices.';
  } else if (categoryId === CategoryValue.POPULAR) {
    title = 'Top Rated - 4K Anime Wallpaper';
    description =
      'Browse our top-rated 4K anime wallpapers, curated for quality and popularity, perfect for enhancing your desktop and mobile devices.';
  }
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'website',
    },
    twitter: {
      title,
      description,
      card: 'summary_large_image',
    },
  };
}

const CategoryPage = async ({ params, searchParams }: Props) => {
  const { categoryId } = await params;
  const { page } = (await searchParams) || { page: '1' };
  const currentPage = page ? parseInt(page) : 1;
  let title = 'Others';
  let images: ImageDetail[] = [];
  let hasNextPage = false;

  // Fetch images based on category

  if (categoryId === CategoryValue.NEW) {
    title = CategoryLabel.NEW;
    const newResponse = await getImagesNew(currentPage);
    images = newResponse?.data ?? [];
    hasNextPage = newResponse.next_page_url !== null;
  } else if (categoryId === CategoryValue.HOT) {
    title = CategoryLabel.HOT;
    const hotResponse = await getImagesHot(currentPage);
    images = hotResponse?.data ?? [];
    hasNextPage = hotResponse.next_page_url !== null;
  } else if (categoryId === CategoryValue.POPULAR) {
    title = CategoryLabel.POPULAR;
    const popularResponse = await getImagesNew(currentPage);
    images = popularResponse?.data ?? [];
    hasNextPage = popularResponse.next_page_url !== null;
  } else {
    title = 'Others';
  }

  if (!images.length) return notFound();

  return (
    <AppContainer>
      <SectionWrapper title={title}>
        {images.length === 0 && <div>No images found.</div>}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {images?.map((image) => (
            <WallpaperCard key={image.id} id={image.id} src={image.thumbnail} />
          ))}
        </div>
      </SectionWrapper>

      <AppPagination currentPage={currentPage} hasNextPage={hasNextPage !== null} />
    </AppContainer>
  );
};

export default CategoryPage;

// Generate static params for SEO and performance
export async function generateStaticParams() {
  return [{ categoryId: CategoryValue.NEW }, { categoryId: CategoryValue.HOT }, { categoryId: CategoryValue.POPULAR }];
}
