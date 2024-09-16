import { groq } from "next-sanity";
import { client } from "./client";
import { loadQuery } from "@sanity/react-loader";
import { HomeData } from "@/types/HomeData";
import { MenuType } from "@/types/MenuType";
import { AgendaMain, AgendaType } from "@/types/AgendaType";
import { Creation } from "@/types/Creations";

export const HOME_QUERY = groq`*[_type == "home" && language == $lang][0]`;

export async function GetHomeData(lang: string = "fr") {
  const res = await loadQuery<HomeData>(HOME_QUERY, { lang });

  return res;
}
export const PARCOURS_QUERY = groq`*[_type == "home"][0]{
  parcours,
  presentationTitle,
  presentationText,
  imageProfile

}`;

export const DEMARCHE_QUERY = groq`*[_type == "home"][0]{ demarches,procedureTitle }`;

export const NAVIGATION_QUERY = groq`*[_type == "post"]{
  title,
  categories[]->{
    title
  },
  slug
}`;
export const ATELIER_NAV = groq`*[_type == "ateliers"]{
  atelierItems[]-> {
    title,
    slug
  } 
  }
  `;

export const ATELIER_QUERY = groq`*[_type == "ateliers"]`;
export const RECHERCHES_QUERY = groq`*[_type == "recherches"][0]`;
export const AGENDA_QUERY = groq`*[_type == "agenda"][0]`;

export const AGENDA_CREATION_QUERY = groq`*[_type == "agenda"][0].agenda[eventType == "creation"]`;
export const AGENDA_ATELIER_QUERY = groq`*[_type == "agenda"][0].agenda[eventType == "atelier"]`;
export const AGENDA_CTA = groq`*[_type == "agenda"][0]{agendaCTA}`;

export async function GetAgendaData(lang: string = "fr") {
  const agendaData = await Promise.all([
    client.fetch<AgendaMain>(AGENDA_QUERY),
    client.fetch<AgendaType[]>(AGENDA_CREATION_QUERY),
    client.fetch<AgendaType[]>(AGENDA_ATELIER_QUERY),
  ]);

  return agendaData;
}

export async function GetAgendaCTA(lang: string = "fr") {
  const cta = await client.fetch(AGENDA_CTA);
  return cta;
}
export const ATELIER_QUERY_NAVIGATION = groq`[_type == "ateliers"]{title}`;

export const CREATTION_QUERY = groq`
*[_type == "creations"] {
  title,
  introductionText,
  imageHeader,
  "activePost": *[_type == "posts" && references(^._id)]{
    title,
    content,
    'images': images[]{
      "url": asset->url,
      "alt": asset->alt
    }
  }[0], // Assuming only one active post per creation
  "posts": posts[]->{title, slug}
}
`;

export const MENU_QUERY = groq`
  *[_type == "menu" && language == $lang][0]{
  menuItem
}
`;

export function getMenuData(lang = "fr") {
  if (!client || !MENU_QUERY) {
    console.error("Sanity client or MENU_QUERY is not defined");
    return null;
  }

  try {
    const res = loadQuery<MenuType>(MENU_QUERY, { lang });
    return res;
  } catch (error) {
    console.error("Error loading menu data:", error);
    return null;
  }
}

export async function getCreationData() {
  return await client.fetch<Creation[]>(groq`
    *[_type == "creations"] {
      title,
      introductionText,
      imageHeader,
      imageHeaderLeft{ "url": asset->url, "alt": asset->alt },
      imageHeaderRight{ "url": asset->url, "alt": asset->alt },
      "posts": posts[] -> {title, slug, mainImage{ "url": asset->url, "alt": asset->alt }}
    }
  `);
}
