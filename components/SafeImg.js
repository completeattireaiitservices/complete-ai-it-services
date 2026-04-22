"use client";

import { useEffect, useState } from "react";

/** Query bumps cache when the SVG was updated (avoids stale branded placeholder). */
const FALLBACK = "/placeholders/photo-fallback.svg?v=2";

/** Native img with fallback when the primary URL fails (404, offline, etc.). */
export default function SafeImg({ src, alt, ...rest }) {
  const [current, setCurrent] = useState(src);

  useEffect(() => {
    setCurrent(src);
  }, [src]);

  return (
    <img
      src={current}
      alt={alt ?? ""}
      {...rest}
      onError={() => {
        if (current !== FALLBACK) setCurrent(FALLBACK);
      }}
    />
  );
}
