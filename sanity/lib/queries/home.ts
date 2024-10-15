import { groq } from "next-sanity";
import { client } from "../client";
import { loadQuery } from "@sanity/react-loader";
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
  return client.fetch<HomeData>(HOME_QUERY, { lang });
}

export async function getParcoursData() {
  return client.fetch(PARCOURS_QUERY);
}

export async function getDemarcheData() {
  return client.fetch(DEMARCHE_QUERY);
}
