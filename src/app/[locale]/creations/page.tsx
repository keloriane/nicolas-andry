import React from "react";

import { archivo, playfare } from "../../font";

import Postgrid from "@/components/Postgrig";
import HeaderMask from "@/components/common/PageHeader/HeaderMask";
import {
  GetAgendaCTA,
  GetAgendaData,
  getCreationData,
} from "../../../../sanity/lib/queries";
import Separator from "@/components/common/Separator";

import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { Metadata } from "next";
import AgendaCta from "@/components/common/AgendaCta";

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
  const cta = await GetAgendaCTA(locale);

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
      <Postgrid locale={locale} creations={creations[0].posts} />
      <Separator />
      <AgendaCta text={cta.agendaCTA} locale={locale} />

      <Contact archivo={archivo.className} />
      <Footer locale={locale} />
    </main>
  );
}
