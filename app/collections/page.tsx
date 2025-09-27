import { getCollection } from '@/service/api';
import React from 'react';

type Props = {};

const CollectionsPage = async (props: Props) => {
  const res = await getCollection(1);
  console.log('🚀 ~ CollectionsPage ~ res:', res);
  return <div>CollectionPage</div>;
};

export default CollectionsPage;
