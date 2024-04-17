import React from "react";
import Hero from "@/components/Hero";
import PostsGrid from "@/components/PostsGrid";
import Agenda from "@/components/Agenda";
import Procedures from "@/components/Procedures";
import { playfare, archivo } from "./font";
import { client } from "../../sanity/lib/client";
import { groq } from "next-sanity";
import Parcours from "@/components/Parcours";
import Contact from "@/components/Contact";
import Menu from "@/components/common/Menu";
import Footer from "@/components/Footer";

function getHomeData() {
  return client.fetch(groq`*[_type == "home"][0]`);
}

export default async function Home() {
  const { demarches, parcours, postGrid, title, subtitle } =
    await getHomeData();

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
      <Agenda playfare={playfare.className} />
      <Procedures demarche={demarches} />
      <Parcours parcours={parcours} />
      <Contact />
      <Footer />
    </main>
  );
}
