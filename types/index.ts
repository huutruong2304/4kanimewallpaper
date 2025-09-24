export interface HeaderItem {
  name: string;
  href: string;
  icon?: React.ReactNode;
  children?: HeaderItem[];
}
