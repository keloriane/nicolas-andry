import { groq } from "next-sanity";
import { client } from "../client";
import { ContactDataType, FooterData } from "@/types/ContactData";

const CONTACT_QUERY = groq`*[_type == "contact"][0]`;
const FOOTER_QUERY = groq`*[_type == "footer"][0]`;

export async function getContactData(lang: string) {
  return client.fetch<ContactDataType>(CONTACT_QUERY, { lang }, {
    next: { 
      tags: ["sanity-content"],
      revalidate: 3600,
    },
  });
}

export async function getFooterData() {
  return client.fetch<FooterData>(FOOTER_QUERY, {}, {
    next: { 
      tags: ["sanity-content"],
      revalidate: 3600,
    },
  });
}
