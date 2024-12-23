import { groq } from "next-sanity";
import { client } from "../client";
import { loadQuery } from "@sanity/react-loader";
import { MenuType } from "@/types/MenuType";

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
}`;

export const MENU_QUERY = groq`
  *[_type == "menu" && language == $lang][0]{
  menuItem
}
`;

export async function getNavigationData() {
  return client.fetch(NAVIGATION_QUERY);
}

export async function getAtelierNavData() {
  return client.fetch(ATELIER_NAV);
}

export function getMenuData(lang = "fr") {
  return loadQuery<MenuType>(MENU_QUERY, { lang });
}
