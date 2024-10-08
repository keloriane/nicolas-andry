import React from "react";

import Menu from "@/components/common/Menu";
import { archivo, playfare } from "../../font";
import { client } from "../../../../sanity/lib/client";
import { groq } from "next-sanity";
import Slider from "@/components/Slider";
import AterlierItem from "@/components/AtelierSection";

import FullHeader from "@/components/common/PageHeader/FullHeader";
import AtelierNavigation from "@/components/AtelierNavigation";
import Separator from "@/components/common/Separator";
import { GetAgendaCTA, GetAgendaData } from "../../../../sanity/lib/queries";
import Agenda from "@/components/Agenda";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import AgendaCta from "@/components/common/AgendaCta";

async function getAteliersData() {
  return await client.fetch(
    groq`
    *[_type == "ateliers"][0] {
      mainTitle,
      imageHeader,
      introductionText,
      images,
      "atelierItems": atelierItems[] -> {title , slug , image }
    }
  `
  );
}

export default async function Ateliers({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const cta = await GetAgendaCTA(locale);
  const ateliers = await getAteliersData();
  console.log("Ateliers", ateliers);

  return (
    <main>
      <FullHeader
        playfare={playfare.className}
        title={ateliers.mainTitle}
        introductionText={ateliers.introductionText[0].children[0].text}
      />

      <div className="slider_container" style={{ paddingTop: "100px" }}>
        <Slider images={ateliers.images} centered={true} />
      </div>

      <div className="atelier_container" style={{ position: "relative" }}>
        {/* <AterlierItem
          mainSection={ateliers.globalSection}
          sections={ateliers.globalSection[0].sections}
        /> */}
        <AtelierNavigation
          atelierItems={ateliers.atelierItems}
          locale={locale}
        />

        <Separator />
        <AgendaCta text={cta.agendaCTA} locale={locale} />

        <Contact archivo={archivo.className} />
        <Footer locale={locale} />
      </div>
    </main>
  );
}
