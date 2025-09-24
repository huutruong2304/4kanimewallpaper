'use client';
import Link from 'next/link';
import React from 'react';

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import { CoffeeIcon, ChartNoAxesColumnIcon, ShuffleIcon, LibraryBigIcon } from 'lucide-react';
import { HeaderItem } from '@/types';

type Props = {};

const Header = (props: Props) => {
  const headerList: HeaderItem[] = [
    { name: 'New', href: '/new', icon: <CoffeeIcon className="text-white" size={20} /> },
    { name: 'Hot', href: '/top', icon: <ChartNoAxesColumnIcon className="text-white" size={20} /> },
    { name: 'Random', href: '/random', icon: <ShuffleIcon className="text-white" size={20} /> },
    {
      name: 'Collections',
      href: '/collections',
      icon: <LibraryBigIcon className="!text-white !text-base" size={20} />,
      children: [
        {
          name: 'Naruto',
          href: '/collections/naruto',
        },
        {
          name: 'One Piece',
          href: '/collections/one-piece',
        },
        {
          name: 'Bleach',
          href: '/collections/bleach',
        },
        {
          name: 'Kimetsu no Yaiba',
          href: '/collections/kimetsu-no-yaiba',
        },
      ],
    },
  ];

  return (
    <header className="p-4 flex items-center justify-between container mx-auto sticky top-0 ">
      <div className="text-orange-400 uppercase font-bold text-xl">4k Anime Wallpaper</div>
      <NavigationMenu viewport={false}>
        <NavigationMenuList>
          {headerList.map((item) =>
            item.children ? (
              <NavigationMenuItem key={item.name}>
                <NavigationMenuTrigger>
                  <div className="flex gap-2 items-center text-base font-bold">
                    {item.icon}
                    {item.name}
                  </div>
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[300px] gap-4">
                    <li>
                      {item.children.map((child) => (
                        <NavigationMenuLink key={child.name} asChild>
                          <Link href={child.href}>
                            <div className="font-medium">{child.name}</div>
                            {/* <div className="text-muted-foreground">Read our latest blog posts.</div> */}
                          </Link>
                        </NavigationMenuLink>
                      ))}
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            ) : (
              <NavigationMenuItem key={item.name}>
                <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                  <Link href={item.href}>
                    <div className="flex gap-2 items-center text-base font-bold">
                      {item.icon}
                      {item.name}
                    </div>
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            )
          )}
        </NavigationMenuList>
      </NavigationMenu>
    </header>
  );
};

export default Header;
