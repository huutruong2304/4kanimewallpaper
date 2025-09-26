'use server';
import { Collection, ImageDetail } from '@/types';
import { fetcher } from './fetcher';
import { ApiListResponse } from '@/types/api';

export async function getCollection(page: number) {
  return fetcher<ApiListResponse<Collection>>(`/albums?page=${page}`, { next: { revalidate: 60 * 60 } });
}

export async function getCollectionDetail(id: string) {
  return fetcher<Collection>(`/albums/${id}`, { next: { revalidate: 60 * 60 } });
}

export async function getImageDetail(id: string) {
  return fetcher<ImageDetail>(`/image/${id}`, { next: { revalidate: 60 * 60 } });
}

export async function getImagesNew(page: number) {
  return fetcher<ApiListResponse<ImageDetail[]>>(`/new?page=${page}`, {
    next: { revalidate: 60 * 60 },
  });
}

export async function getImagesHot(page: number) {
  return fetcher<ApiListResponse<ImageDetail[]>>(`/hot?page=${page}`, {
    next: { revalidate: 60 * 60 },
  });
}

export async function getImagesPopular(page: number) {
  return fetcher<ApiListResponse<ImageDetail[]>>(`/popular?page=${page}`, {
    next: { revalidate: 60 * 60 },
  });
}
