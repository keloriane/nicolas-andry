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
  return builder.image(source);
}
