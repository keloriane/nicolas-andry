import { groq } from "next-sanity";
import { client } from "../client";
import { AgendaMain, AgendaType } from "@/types/AgendaType";

export const AGENDA_QUERY = groq`*[_type == "agenda"][0]`;
export const AGENDA_CREATION_QUERY = groq`*[_type == "agenda"][0].agenda[eventType == "creation"]`;
export const AGENDA_ATELIER_QUERY = groq`*[_type == "agenda"][0].agenda[eventType == "atelier"]`;
export const AGENDA_CTA = groq`*[_type == "agenda"][0]{agendaCTA}`;

export async function getAgendaData(lang = "fr") {
  const [agendaMain, creationEvents, atelierEvents] = await Promise.all([
    client.fetch<AgendaMain>(AGENDA_QUERY),
    client.fetch<AgendaType[]>(AGENDA_CREATION_QUERY),
    client.fetch<AgendaType[]>(AGENDA_ATELIER_QUERY),
  ]);

  return { agendaMain, creationEvents, atelierEvents };
}

export async function getAgendaCTA(lang = "fr") {
  return client.fetch(AGENDA_CTA);
}
