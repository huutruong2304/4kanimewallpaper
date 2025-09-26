export interface HeaderItem {
  name: string;
  href: string;
  icon?: React.ReactNode;
  children?: HeaderItem[];
}

export interface FooterItem {
  id: number | string;
  href: string;
  name: string;
}

export interface ImageDetail {
  id: string;
  name?: string;
  thumbnail: string;
  link_img: string;
}

export interface Collection {
  _id: number;
  id: string;
  title: string;
  link_thumb: string;
  total_image: number;
  view: number;
}

export enum CategoryValue {
  NEW = 'new',
  HOT = 'hot',
  POPULAR = 'popular',
}

export enum CategoryLabel {
  NEW = 'New Upload',
  HOT = 'Hot Wallpapers',
  POPULAR = 'Top Rated',
}
