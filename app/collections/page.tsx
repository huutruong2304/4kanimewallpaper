import AppPagination from '@/components/custom/app-pagination';
import CollectionCard from '@/components/custom/collection-card';
import SectionWrapper from '@/components/custom/section-wrapper';
import AppContainer from '@/components/layout/app-container';
import { getCollection } from '@/service/api';
import React from 'react';

type Props = {
  searchParams?: Promise<{ page?: string }>;
};

// generate metadata for SEO
export async function generateMetadata({}: Props) {
  return {
    title: `Collections - 4K Anime Wallpaper`,
    description: `Explore a variety of high-quality 4K anime wallpaper collections for your desktop and mobile devices.`,
  };
}

const CollectionsPage = async ({ searchParams }: Props) => {
  const { page } = (await searchParams) || { page: '1' };

  const currentPage = page ? parseInt(page) : 1;
  let hasNextPage = false;

  const res = await getCollection(currentPage);
  const collectionList = res.data || [];
  hasNextPage = res.next_page_url !== null;

  return (
    <AppContainer>
      <SectionWrapper title={'Collections'}>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {collectionList.map((item) => (
            <CollectionCard key={item.id} id={item.id} src={item.link_thumb} title={item.title} totalImages={item.total_image} views={item.view} />
          ))}
        </div>
      </SectionWrapper>

      <AppPagination currentPage={currentPage} hasNextPage={hasNextPage !== null} />
    </AppContainer>
  );
};

export default CollectionsPage;

// gererate static params for collections
export async function generateStaticParams() {
  const res = await getCollection(1);
  const collectionList = res.data || [];
  return collectionList.map((collection) => ({
    collectionId: collection.id,
  }));
}
