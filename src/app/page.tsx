import React from "react";
import Hero from "@/components/Hero";
import PostsGrid from "@/components/PostsGrid";
import Agenda from "@/components/Agenda";
import Procedures from "@/components/Procedures";
import { playfare, archivo } from "./font";
import Parcours from "@/components/Parcours";
import Contact from "@/components/Contact";
import Menu from "@/components/common/Menu";
import Footer from "@/components/Footer";
import { loadQuery } from "../../sanity/lib/store";
import { HOME_QUERY } from "../../sanity/lib/queries";

interface HomeData {
  title: string;
  subtitle: string;
  postGrid: [{ image: string; description: []; title: string; slug: string }];
  demarches: [{ title: string; description: [] }];
  parcours: [{ year: string; description: [] }];
  imageProfile: string;
  presentationText: [];
}
export default async function Home() {
  const homeData = await loadQuery<HomeData>(HOME_QUERY);

  const { title, subtitle, postGrid, demarches, parcours } = homeData.data;

  return (
    <main>
      <Menu />
      <Hero
        title={title}
        subtitle={subtitle}
        clash={playfare.className}
        satoshi={archivo.className}
      />
      <PostsGrid
        posts={postGrid}
        playfare={playfare.className}
        archivo={archivo.className}
      />
      <Agenda playfare={playfare.className} homePage />
      <Procedures demarche={demarches} />
      <Parcours
        parcours={parcours}
        imageProfile={homeData.data.imageProfile}
        presentationText={homeData.data.presentationText}
      />
      <Contact archivo={archivo.className} />
      <Footer />
    </main>
  );
}
