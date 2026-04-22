"use client";

import Image from "next/image";
import clsx from "clsx";
import { useEffect, useState } from "react";

const FALLBACK = "/placeholders/photo-fallback.svg?v=2";

/** Same-origin static files from `/public` — skip `/_next/image` (avoids OneDrive/Windows optimizer failures). */
function isPublicStaticPath(src) {
  return typeof src === "string" && src.startsWith("/") && !src.startsWith("//");
}

/**
 * next/image wrapper: if a remote (or any) URL fails to load, show a neutral local SVG.
 * Local `/…` assets use `unoptimized` unless you pass `unoptimized={false}` explicitly.
 */
export default function SafeImage({ src, alt, className, onError, ...props }) {
  const [useFallback, setUseFallback] = useState(false);
  const { unoptimized: unoptimizedProp, ...rest } = props;
  const unoptimized =
    unoptimizedProp === true
      ? true
      : unoptimizedProp === false
        ? false
        : isPublicStaticPath(src);

  useEffect(() => {
    setUseFallback(false);
  }, [src]);

  if (useFallback) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={FALLBACK}
        alt={alt ?? ""}
        className={clsx(rest.fill && "absolute inset-0 h-full w-full", className)}
        decoding="async"
        aria-hidden={rest["aria-hidden"]}
      />
    );
  }

  return (
    <Image
      {...rest}
      src={src}
      alt={alt ?? ""}
      className={className}
      unoptimized={unoptimized}
      onError={(e) => {
        setUseFallback(true);
        onError?.(e);
      }}
    />
  );
}
