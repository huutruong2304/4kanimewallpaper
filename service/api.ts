'use server';
import { Collection, ImageDetail } from '@/types';
import { fetcher } from './fetcher';
import { ApiListResponse, ApiResponse } from '@/types/api';

export async function getCollection(page: number) {
  return await fetcher<ApiListResponse<Collection>>(`/albums?page=${page}`);
}

export async function getCollectionDetail(id: string) {
  return await fetcher<Collection>(`/albums/${id}`);
}

export async function getImageDetail(id: string) {
  return await fetcher<ImageDetail>(`/image/${id}`);
}

export async function getImagesNew(page: number) {
  return await fetcher<ApiResponse<ImageDetail>>(`/new?page=${page}`);
}

export async function getImagesHot(page: number) {
  return await fetcher<ApiResponse<ImageDetail>>(`/hot?page=${page}`);
}

export async function getImagesPopular(page: number) {
  return await fetcher<ApiResponse<ImageDetail>>(`/popular?page=${page}`);
}
