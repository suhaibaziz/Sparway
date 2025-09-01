// components/SitePeek.jsx (JSX)
import { useState } from "react";

export default function SitePeek({ url, title }) {
  const [blocked, setBlocked] = useState(false);

  return (
    <div className="rounded-xl border border-white/10 bg-white/5 overflow-hidden">
      {!blocked ? (
        <iframe
          src={url}
          title={title || url}
          className="w-full h-56"
          loading="lazy"
          sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
          referrerPolicy="no-referrer"
          onError={() => setBlocked(true)}
        />
      ) : (
        <div className="p-4">
          <p className="text-white/80 text-sm">
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
}
