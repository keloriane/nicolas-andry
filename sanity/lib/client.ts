import { createClient } from "next-sanity";

import { apiVersion, dataset, projectId, useCdn } from "../env";

export const client = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn, // CDN enabled for faster responses
  perspective: "published", // Only fetch published content
  stega: {
    enabled: false,
    studioUrl: "/studio",
  },
});
