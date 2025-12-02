import createImageUrlBuilder from "@sanity/image-url";
import type { Image } from "sanity";

import { dataset, projectId } from "../env";

const imageBuilder = createImageUrlBuilder({
  projectId: projectId || "",
  dataset: dataset || "",
});

export const urlForImage = (source: Image | string) => {
  return imageBuilder?.image(source)
    .auto("format") // Auto-optimize format (WebP when supported)
    .fit("max") // Maintain aspect ratio
    .quality(85) // Optimize quality for web
    .url();
};
