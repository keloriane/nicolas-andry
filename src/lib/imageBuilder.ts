import imageUrlBuilder from "@sanity/image-url";
import { client } from "@/../sanity/lib/client";

interface ImageType {
  _id: string;
  asset: {
    _ref: string;
  };
}
const builder = imageUrlBuilder(client);
export function urlFor(source: string | [] | ImageType) {
  return builder
    .image(source)
    .auto("format") // Auto-optimize format (WebP when supported)
    .quality(85); // Optimize quality for web
}
