"use server";

import { groq } from "next-sanity";
import { client } from "../../sanity/lib/client";

export async function getActivePostServer(slug: string) {
  await client.fetch(
    groq`
          *[_type == "post" && slug.current == $slug]{
            title,
            categories,
            content,
            'images': images[]{
              "url": asset->url,
              "alt": asset->alt,
              "metadata": asset->ref
            }
          }
        `,
    { slug }
  );
}
