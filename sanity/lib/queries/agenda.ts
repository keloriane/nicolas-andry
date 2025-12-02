import { groq } from "next-sanity";
import { client } from "../client";
import { AgendaMain, AgendaType } from "@/types/AgendaType";

// Optimized: Single query instead of three separate queries
const AGENDA_DATA_QUERY = groq`*[_type == "agenda"][0]{
  ...,
  "creationEvents": agenda[eventType == "creation"],
  "atelierEvents": agenda[eventType == "atelier"]
}`;

export const AGENDA_CTA = groq`*[_type == "agenda"][0]{agendaCTA}`;

export async function getAgendaData(lang = "fr") {
  // Single optimized query instead of three separate fetches
  const agendaData = await client.fetch<AgendaMain & {
    creationEvents: AgendaType[];
    atelierEvents: AgendaType[];
  }>(AGENDA_DATA_QUERY, {}, {
    next: { 
      tags: ["sanity-content"],
      // Revalidate every hour as a fallback (webhook will invalidate immediately on changes)
      revalidate: 3600,
    },
  });

  return {
    agendaMain: agendaData,
    creationEvents: agendaData.creationEvents || [],
    atelierEvents: agendaData.atelierEvents || [],
  };
}

export async function getAgendaCTA(lang = "fr") {
  return client.fetch(AGENDA_CTA, {}, {
    next: { tags: ["sanity-content"] },
  });
}
