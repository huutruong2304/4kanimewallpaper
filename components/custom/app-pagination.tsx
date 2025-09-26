'use client';
import { useRouter, useSearchParams } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ArrowRight } from 'lucide-react';

export default function AppPagination({ currentPage, hasNextPage }: { currentPage: number; hasNextPage?: boolean }) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const goToPage = (page: number) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set('page', page.toString());
    router.push(`?${params.toString()}`);
  };

  const visiblePages = Array.from({ length: 5 }, (_, i) => i + currentPage - 2).filter((page) => page > 0);

  return (
    <div className="w-full mt-8 flex justify-center ">
      <Button
        className="mr-4 bg-orange-500 hover:bg-orange-600 text-base cursor-pointer"
        disabled={currentPage <= 1}
        onClick={() => goToPage(currentPage - 1)}
      >
        <ArrowLeft />
        Previous
      </Button>

      {visiblePages.map((page) => (
        <Button
          key={page}
          className={`mx-1 cursor-pointer ${page === currentPage ? 'bg-orange-500  hover:bg-orange-500' : 'bg-gray-200 hover:bg-gray-300'}`}
          onClick={() => (page === currentPage ? null : goToPage(page))}
        >
          {page}
        </Button>
      ))}

      <Button
        className="ml-4 bg-orange-500 hover:bg-orange-600 text-base cursor-pointer"
        disabled={!hasNextPage}
        onClick={() => goToPage(currentPage + 1)}
      >
        Next
        <ArrowRight />
      </Button>
    </div>
  );
}
