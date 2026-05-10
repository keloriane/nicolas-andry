import imageUrlBuilder from "@sanity/image-url";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";

import { client } from "@/../sanity/lib/client";

const builder = imageUrlBuilder(client);

/**
 * Returns a chainable Sanity image URL builder.
 * Prefer `imageUrl(source, { width })` for one-shot URL generation.
 */
export function urlFor(source: SanityImageSource) {
  return builder.image(source).auto("format");
}

/**
 * Generate a CDN URL with explicit dimensions, used as the `src` for
 * `<Image>`. Next + the custom loader will append `w` for each device size,
 * so the value here is mostly the upper bound for non-srcSet contexts
 * (e.g. open graph, plain <img>, custom fetch).
 */
export function imageUrl(
  source: SanityImageSource,
  { width = 1600, quality = 75 }: { width?: number; quality?: number } = {}
): string {
  return urlFor(source).width(width).quality(quality).fit("max").url();
}
