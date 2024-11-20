import React from "react";

import { playfare } from "../../font";

import HeaderMask from "@/components/common/PageHeader/HeaderMask";
import { getCreationData } from "../../../../sanity/lib/queries";
import Separator from "@/components/common/Separator";
import { Metadata } from "next";
import PostGridItem from "@/components/Postgrig/PostGridItem";

export const metadata: Metadata = {
  title: "Créations",
  description: "Photography",
};

export default async function Creations({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const creations = await getCreationData();

  const creation = creations[0];

  if (!creation) return <div>No creation data found</div>;

  return (
    <main>
      <HeaderMask
        imageLeft={creation.imageHeaderLeft.url}
        imageRight={creation.imageHeaderRight.url}
        playfare={playfare.className}
        title={creation.title}
        introductionText={creation.introductionText}
      />
      <PostGridItem
        locale={locale}
        creations={creations[0].posts}
        cta={creation.gridCTA}
      />

      <Separator />
    </main>
  );
}
