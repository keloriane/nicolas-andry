import { groq } from "next-sanity";
import { client } from "../client";
import { MenuType } from "@/types/MenuType";

const SANITY_NEXT = {
  next: { tags: ["sanity-content"], revalidate: 3600 },
};

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
  return client.fetch(NAVIGATION_QUERY, {}, SANITY_NEXT);
}

export async function getAtelierNavData() {
  return client.fetch(ATELIER_NAV, {}, SANITY_NEXT);
}

export async function getMenuData(lang = "fr"): Promise<MenuType[]> {
  const res = await client.fetch<{ menuItem?: MenuType[] } | null>(
    MENU_QUERY,
    { lang },
    SANITY_NEXT
  );
  return res?.menuItem ?? [];
}
