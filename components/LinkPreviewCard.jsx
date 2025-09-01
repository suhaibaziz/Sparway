'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

const LinkPreviewCard = ({ url }) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    let mounted = true;
    (async () => {
      try {
        const r = await fetch(`/api/preview?url=${encodeURIComponent(url)}`);
        const j = await r.json();
        if (mounted) setData(j);
      } catch (err) {
        // optional: surface a minimal fallback instead of an empty catch
        if (mounted) setData({ title: null, description: null, image: null, siteName: null });
      }
    })();

    return () => {
      mounted = false;
    };
  }, [url]);

  if (!data) {
    return (
      <div className="rounded-xl border border-white/10 bg-white/5 p-4">
        <div className="mb-2 h-5 w-24 animate-pulse rounded bg-white/10" />
        <div className="h-4 w-48 animate-pulse rounded bg-white/10" />
      </div>
    );
  }

  const { title, description, image, siteName } = data;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="group block overflow-hidden rounded-xl border border-white/10 bg-white/5 transition hover:bg-white/10"
      title={title || url}
    >
      {image && (
        <div className="relative aspect-[16/9] w-full">
          <Image
            src={image}
            alt={title || url}
            fill
            unoptimized                         /* avoid next/image domain config */
            className="object-cover"
            sizes="100vw"
          />
        </div>
      )}
      <div className="p-4">
        <div className="text-xs text-white/60">
          {siteName || new URL(url).hostname}
        </div>
        <div className="mt-1 font-semibold">{title || url}</div>
        {description && (
          <p className="mt-1 line-clamp-2 text-sm text-white/70">{description}</p>
        )}
      </div>
    </a>
  );
};

export default LinkPreviewCard;
