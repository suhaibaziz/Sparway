'use client';

import { useState } from "react";

const SitePeek = ({ url, title }) => {
  const [blocked, setBlocked] = useState(false);

  return (
    <div className="overflow-hidden rounded-xl border border-white/10 bg-white/5">
      {!blocked ? (
        <iframe
          src={url}
          title={title || url}
          className="h-56 w-full"
          loading="lazy"
          sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
          referrerPolicy="no-referrer"
          onError={() => setBlocked(true)}
        />
      ) : (
        <div className="p-4">
          <p className="text-sm text-white/80">
            Einbettung blockiert. Vorschau unten:
          </p>
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-block underline decoration-white/30 hover:decoration-white"
          >
            {title || url}
          </a>
        </div>
      )}
    </div>
  );
};

export default SitePeek;
