import type { ImageLoaderProps } from "next/image";

/**
 * Custom Next.js image loader.
 *
 * For Sanity CDN images we ask Sanity to resize/transcode at the edge:
 *   - `w`: requested device width
 *   - `q`: quality (Next default = 75)
 *   - `auto=format`: serve AVIF/WebP when supported
 *   - `fit=max`: never upscale, preserve aspect ratio
 *
 * For everything else (local /public assets, third-party hosts) we return
 * the URL unchanged so Next still renders them, just without resizing.
 */
const SANITY_CDN = "https://cdn.sanity.io/";

export default function sanityImageLoader({
  src,
  width,
  quality,
}: ImageLoaderProps): string {
  if (src.startsWith(SANITY_CDN)) {
    const url = new URL(src);
    url.searchParams.set("w", String(width));
    url.searchParams.set("q", String(quality ?? 75));
    url.searchParams.set("auto", "format");
    url.searchParams.set("fit", "max");
    return url.toString();
  }

  return src;
}
