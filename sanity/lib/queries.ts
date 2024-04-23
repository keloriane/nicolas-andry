import { groq } from "next-sanity";

export const HOME_QUERY = groq`*[_type == "home"][0]`;

export const ATELIER_QUERY = groq`*[_type == "ateliers"]`;
export const RECHERCHES_QUERY = groq`*[_type == "recherches"][0]`;
export const AGENDA_Query = groq`*[_type == "agenda"][0]`;

export const ATELIER_QUERY_NAVIGATION = groq`[_type == "ateliers"]{title}`;
