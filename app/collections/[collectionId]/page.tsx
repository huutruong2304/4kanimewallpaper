import AppPagination from '@/components/custom/app-pagination';
import SectionWrapper from '@/components/custom/section-wrapper';
import WallpaperCard from '@/components/custom/wallpaper-card';
import AppContainer from '@/components/layout/app-container';
import { getCollectionDetail } from '@/service/api';
import React from 'react';

type Props = {
  params: Promise<{ collectionId: string }>;
  searchParams?: Promise<{ page?: string }>;
};

// generate metadata for SEO
export async function generateMetadata({ params }: Props) {
  const { collectionId } = await params;
  return {
    title: `Collection ${collectionId} - 4K Anime Wallpaper`,
    description: `Explore the ${collectionId} collection of high-quality 4K anime wallpapers for your desktop and mobile devices.`,
  };
}

const CollectionDetailPage = async ({ params, searchParams }: Props) => {
  const { collectionId } = await params;
  const { page } = (await searchParams) || { page: '1' };
  const title = `Collection ${collectionId}`;
  const currentPage = page ? parseInt(page) : 1;

  const res = await getCollectionDetail(collectionId, currentPage);
  const images = res.data || [];
  const hasNextPage = res.next_page_url !== null;

  return (
    <AppContainer>
      <SectionWrapper title={title}>
        {images.length === 0 && <div>No images found.</div>}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {images?.map((image) => (
            <WallpaperCard key={image.id} id={image.id} src={image.thumbnail} />
          ))}
        </div>
      </SectionWrapper>

      <AppPagination currentPage={currentPage} hasNextPage={hasNextPage !== null} />
    </AppContainer>
  );
};

export default CollectionDetailPage;
