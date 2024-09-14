import { defineField, defineType } from "sanity";

export default defineType({
  name: "contact",
  title: "Contact",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
    }),
    defineField({
      name: "contactCta",
      title: "Call to action contact",
      type: "string",
    }),
    defineField({
      name: "contactMail",
      title: "Contact mail",
      type: "string",
    }),
  ],
});
