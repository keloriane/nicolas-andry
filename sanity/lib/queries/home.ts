import { groq } from "next-sanity";
import { client } from "../client";

import { HomeData } from "@/types/HomeData";

export const HOME_QUERY = groq`*[_type == "home" && language == $lang][0]`;

export const PARCOURS_QUERY = groq`*[_type == "home"][0]{
  parcours,
  presentationTitle,
  presentationText,
  imageProfile
}`;
export const DEMARCHE_QUERY = groq`*[_type == "home"][0]{ demarches, procedureTitle, procedureText }`;

export async function getHomeData(lang: string = "fr") {
  return client.fetch<HomeData>(HOME_QUERY, { lang }, {
    next: { 
      tags: ["sanity-content"],
      revalidate: 3600, // 1 hour fallback revalidation
    },
  });
}
export async function getBanner() {
  return client.fetch(groq`*[_type == "banner"]`, {}, {
    next: { 
      tags: ["sanity-content"],
      revalidate: 3600,
    },
  });
}

export async function getParcoursData() {
  return client.fetch(PARCOURS_QUERY, {}, {
    next: { 
      tags: ["sanity-content"],
      revalidate: 3600,
    },
  });
}

export async function getDemarcheData() {
  return client.fetch(DEMARCHE_QUERY, {}, {
    next: { 
      tags: ["sanity-content"],
      revalidate: 3600,
    },
  });
}
