import React from "react";
import Hero from "@/components/Hero";
import PostsGrid from "@/components/PostsGrid";
import { playfare, archivo } from "./../font";

import Banner from "@/components/Banner";
import bannerImage from "@/../public/banner.png";
import {
  getAgendaData,
  getBanner,
  getHomeData,
} from "./../../../sanity/lib/queries";
import AboutSection from "@/components/About";
import Separator from "@/components/common/Separator";

import { urlFor } from "@/lib/imageBuilder";
import Agenda from "@/components/Agenda";
import { urlForImage } from "../../../sanity/lib/image";

export default async function Home({
  params: { locale },
}: {
  params: { locale: string };
}) {
  // Validate locale and provide fallback
  const validLocales = ["fr", "en", "nl"];
  const currentLocale = validLocales.includes(locale) ? locale : "fr";

  const [homeData, agendaData, bannerData] = await Promise.all([
    getHomeData(currentLocale),
    getAgendaData(currentLocale),
    getBanner(),
  ]);

  // Handle case where homeData is null - provide fallback data
  if (!homeData) {
    console.warn(
      `No home data found for locale: ${currentLocale}, using fallback`
    );
    // Return a fallback page or redirect
    return (
      <main>
        <div style={{ padding: "2rem", textAlign: "center" }}>
          <h1>Page en cours de construction</h1>
          <p>Cette page n'est pas encore disponible dans cette langue.</p>
        </div>
      </main>
    );
  }

  // Handle case where agendaData is null - provide fallback
  if (!agendaData) {
    console.warn(
      `No agenda data found for locale: ${currentLocale}, using fallback`
    );
  }

  // Handle case where bannerData is null or empty - provide fallback
  if (!bannerData || bannerData.length === 0) {
    console.warn("No banner data found, using fallback");
  }

  const { title, subtitle, postGrid, introductionText, imageHeader } = homeData;

  // Safe access to agenda data
  const agendaCreation = agendaData?.creationEvents || [];
  const agendaAtelier = agendaData?.atelierEvents || [];

  // Safe access to banner data
  const bannerImageUrl =
    bannerData && bannerData.length > 0
      ? urlFor(bannerData[0].image).url()
      : bannerImage;

  return (
    <main>
      <Hero
        title={title}
        subtitle={subtitle}
        satoshi={archivo.className}
        presentationText={introductionText}
        image={urlFor(imageHeader).url()}
      />
      <PostsGrid
        posts={postGrid}
        playfare={playfare.className}
        archivo={archivo.className}
        locale={currentLocale}
      />

      {agendaData && (
        <Agenda
          titleAgendaCreation={
            agendaData.agendaMain?.titleAgendaCreation || "Agenda"
          }
          titleAgendaAtelier={
            agendaData.agendaMain?.titleAgendaAtelier || "Ateliers"
          }
          locale={currentLocale}
          introductionText={agendaData.agendaMain?.introductionText || []}
          title={agendaData.agendaMain?.title || "Agenda"}
          cta={agendaData.agendaMain?.agendaCTA || "Voir l'agenda"}
          agendaCreation={agendaCreation}
          agendaAtelier={agendaAtelier}
          playfare={playfare.className}
          homePage={true}
        />
      )}

      {bannerData && bannerData.length > 0 && (
        <Banner
          src={urlFor(bannerData[0].image).url()}
          width={1120}
          height={316}
        />
      )}

      <AboutSection
        presentationTitle={homeData.presentationTitle}
        imageProfile={homeData.imageProfile}
        presentationText={homeData.presentationText}
        homePage
        locale={currentLocale}
      />
      <Separator />
    </main>
  );
}
