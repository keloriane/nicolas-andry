import { groq } from "next-sanity";
import { client } from "./client";

export const HOME_QUERY = groq`*[_type == "home"][0]`;
export const PARCOURS_QUERY = groq`*[_type == "home"][0]{
  parcours,
  presentationTitle,
  presentationText,
  imageProfile

}`;

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
  *[_type == "menu"][0]{
  menuItem
}
`;
