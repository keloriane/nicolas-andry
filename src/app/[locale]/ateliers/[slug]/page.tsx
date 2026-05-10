import { groq, PortableText } from "next-sanity";
import React from "react";
import type { Metadata } from "next";
import { client } from "../../../../../sanity/lib/client";
import BlockSections from "@/components/BlockSections";
import { DEFAULT_LOCALE, isLocale, localeUrl } from "@/lib/seo";

export async function generateMetadata({
  params,
}: {
  params: { locale: string; slug: string };
}): Promise<Metadata> {
  const locale = isLocale(params.locale) ? params.locale : DEFAULT_LOCALE;
  return {
    alternates: { canonical: localeUrl(locale, `ateliers/${params.slug}`) },
  };
}

async function getAteliersData(slug: string) {
  const query = groq`*[_type == "ateliers_items" && slug.current == "${slug}" ][0]{
    title,
    contentBlocks[] {
    title_content,
    content_text[],
    title,
    image,
    blockContent[]
  }
  }`;

  const data = await client.fetch(
    query,
    { slug },
    {
      next: {
        tags: ["sanity-content"],
        revalidate: 3600,
      },
    }
  );
  return data;
}

export default async function AtelierPage({
  params,
}: {
  params: { slug: string; locale: string };
}) {
  const ateliers = await getAteliersData(params.slug);

  return (
    <div style={{ paddingTop: "100px" }}>
      <BlockSections
        ateliers={ateliers.contentBlocks}
        title={ateliers.title}
        locale={params.locale}
      />
    </div>
  );
}
