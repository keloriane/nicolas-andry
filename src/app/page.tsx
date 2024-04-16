"use client";
import React from "react";

import PageContent from "@/components/PageContent";
import HeroShop from "@/components/HeroShop";
import Hero from "@/components/Hero";
import { Playfair_Display, Archivo } from "next/font/google";
import localFont from "next/font/local";
import PostsGrid from "@/components/PostsGrid";
import Agenda from "@/components/Agenda";
import Procedures from "@/components/Procedures";
import { playfare, archivo } from "./font";

export default function Home() {
  return (
    <main>
      <Hero clash={playfare.className} satoshi={archivo.className} />
      <PostsGrid playfare={playfare.className} archivo={archivo.className} />
      <Agenda playfare={playfare.className} />
      <Procedures />
    </main>
  );
}
