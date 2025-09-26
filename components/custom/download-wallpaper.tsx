'use client';
import { Button } from '@/components/ui/button';
import { sleep } from '@/lib/utils';
import { DownloadIcon, Loader2Icon } from 'lucide-react';
import { useState } from 'react';

type Props = {
  url: string;
  filename?: string;
  downloadLabel?: string;
};

export default function DownloadWallpaper({ url, filename, downloadLabel = 'Download' }: Props) {
  const [isDownloading, setIsDownloading] = useState(false);
  const handleDownload = async () => {
    setIsDownloading(true);
    try {
      // add a small delay here
      sleep(500);
      const res = await fetch(url, { mode: 'cors' });
      const blob = await res.blob();
      const blobUrl = window.URL.createObjectURL(blob);

      const a = document.createElement('a');
      a.href = blobUrl;
      a.download = filename || 'wallpaper.jpg';
      document.body.appendChild(a);
      a.click();
      a.remove();
      window.URL.revokeObjectURL(blobUrl);
    } catch (err) {
      console.error('Download failed', err);
    }
    setIsDownloading(false);
  };

  return (
    <Button onClick={handleDownload} className="bg-orange-500 hover:bg-orange-600 w-96 text-base cursor-pointer" disabled={isDownloading}>
      {isDownloading ? <Loader2Icon className="animate-spin" /> : <DownloadIcon />}
      {downloadLabel}
    </Button>
  );
}
