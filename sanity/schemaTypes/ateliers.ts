import { defineField } from "sanity";

export default defineField({
  name: "ateliers",
  title: "Ateliers",
  type: "document",
  fields: [
    defineField({
      name: "mainTitle",
      title: "main Title",
      type: "string",
    }),
    defineField({
      name: "introductionText",
      title: "Text d'introduction",
      type: "blockContent",
    }),
    defineField({
      name: "imageHeader",
      title: "Image Header",
      type: "image",
    }),
    defineField({
      name: "images",
      title: "Images",
      validation: (Rule) => Rule.required(),
      type: "array",
      of: [
        {
          type: "image",
          options: { hotspot: true },
          fields: [{ name: "alt", type: "string" }],
        },
      ],
    }),
    defineField({
      title: "Atelier Items",
      name: "atelierItems",
      type: "array",
      of: [{ type: "reference", to: { type: "ateliers_items" } }],
    }),
  ],
});
