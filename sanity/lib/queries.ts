import { groq } from "next-sanity";
import { client } from "./client";
import { loadQuery } from "@sanity/react-loader";
import { HomeData } from "@/types/HomeData";
import { MenuType } from "@/types/MenuType";

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

export async function getAgendaData() {
  return client.fetch(groq` *[_type == "agenda"][0]`);
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
