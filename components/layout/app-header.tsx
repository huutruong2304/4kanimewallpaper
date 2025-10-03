'use client';
import Link from 'next/link';
import React from 'react';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import { CoffeeIcon, ChartNoAxesColumnIcon, LibraryBigIcon, StarIcon, MenuIcon } from 'lucide-react';
import { HeaderItem } from '@/types';
import Image from 'next/image';

import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

const AppHeader = () => {
  const [open, setOpen] = React.useState(false);

  const headerList: HeaderItem[] = [
    { name: 'New', href: '/new', icon: <CoffeeIcon size={20} /> },
    { name: 'Hot', href: '/hot', icon: <ChartNoAxesColumnIcon size={20} /> },
    { name: 'Top Rated', href: '/popular', icon: <StarIcon size={20} /> },
    {
      name: 'Collections',
      href: '/collections',
      icon: <LibraryBigIcon size={20} />,
    },
  ];

  return (
    <header className="bg-black shadow-2xl sticky top-0 z-50">
      <div className="py-2 flex items-center justify-between container mx-auto">
        {/* Logo */}
        <div className="text-orange-400 uppercase font-bold text-xl">
          <div className="w-[180px] h-[50px] overflow-hidden rounded-md relative">
            <Link href="/">
              <Image src="/logo.png" alt="logo" fill className="object-cover -ml-8" />
            </Link>
          </div>
        </div>

        {/* Desktop Navigation */}
        <NavigationMenu viewport={false} className="hidden md:flex">
          <NavigationMenuList>
            {headerList.map((item) => (
              <NavigationMenuItem key={item.name}>
                <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                  <Link href={item.href}>
                    <div className="flex gap-2 items-center text-base font-bold text-white">
                      {item.icon}
                      {item.name}
                    </div>
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        {/* Mobile Menu */}
        <div className="md:hidden">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <button className="p-2 text-white">
                <MenuIcon size={28} />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-black text-white">
              <nav className="mt-8 flex flex-col gap-4 px-4">
                {headerList.map((item) => (
                  <Link key={item.name} href={item.href} onClick={() => setOpen(false)} className="flex gap-3 items-center text-lg font-medium">
                    {item.icon}
                    {item.name}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default AppHeader;
