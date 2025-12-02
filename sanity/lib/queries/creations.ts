import { groq } from "next-sanity";
import { client } from "../client";
import { Creation } from "@/types/Creations";

const CREATION_QUERY = groq`
*[_type == "creations"] {
  title,
  introductionText,
  gridCTA,
  imageHeader,
  imageHeaderLeft{ "url": asset->url, "alt": asset->alt },
  imageHeaderRight{ "url": asset->url, "alt": asset->alt },
  "posts": posts[] -> {title, slug, mainImage{ "url": asset->url, "alt": asset->alt }}
}
`;

export async function getCreationData() {
  return client.fetch<Creation[]>(CREATION_QUERY, {}, {
    next: { 
      tags: ["sanity-content"],
      revalidate: 3600,
    },
  });
}
