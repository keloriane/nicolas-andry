import { groq } from "next-sanity";

export const HOME_QUERY = groq`*[_type == "home"][0]`;
export const AGENDA_Query = groq`*[_type == "agenda"][0]`;
