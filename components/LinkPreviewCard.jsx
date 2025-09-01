"use client";

import { useEffect, useState } from "react";

export default function LinkPreviewCard({ url }) {
  const [data, setData] = useState(null);

  useEffect(() => {
    let mounted = true;
    (async () => {
      try {
        const r = await fetch(`/api/preview?url=${encodeURIComponent(url)}`);
        const j = await r.json();
        if (mounted) setData(j);
      } catch {}
    })();
    return () => { mounted = false; };
  }, [url]);

  if (!data) {
    return (
      <div className="rounded-xl border border-white/10 bg-white/5 p-4">
        <div className="h-5 w-24 animate-pulse bg-white/10 rounded mb-2" />
        <div className="h-4 w-48 animate-pulse bg-white/10 rounded" />
      </div>
    );
  }

  const { title, description, image, siteName } = data;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="group block rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition overflow-hidden"
    >
      {image && (
        <div className="relative aspect-[16/9]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={image} alt={title || url} className="object-cover w-full h-full" />
        </div>
      )}
      <div className="p-4">
        <div className="text-xs text-white/60">{siteName || new URL(url).hostname}</div>
        <div className="mt-1 font-semibold">{title || url}</div>
        {description && (
          <p className="mt-1 text-sm text-white/70 line-clamp-2">{description}</p>
        )}
      </div>
    </a>
  );
}
