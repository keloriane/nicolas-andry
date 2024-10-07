import { defineField, defineType } from "sanity";

export default defineType({
  name: "footer",
  title: "Footer",
  type: "document",
  fields: [
    defineField({
      name: "droit",
      title: "Droit",
      type: "string",
    }),
    defineField({
      name: "cookie",
      title: "Cookies",
      type: "text",
    }),
  ],
});
