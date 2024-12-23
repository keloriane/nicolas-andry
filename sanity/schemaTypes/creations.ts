import { defineField, defineType } from "sanity";

export default defineType({
  name: "creations",
  title: "Creations",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "gridCTA",
      title: "Call to action grille",
      type: "string",
    }),
    defineField({
      name: "otherTitle",
      title: "Titre autre Recherche/Creaction",
      type: "blockContent",
    }),
    defineField({
      name: "introductionText",
      title: "Text d'introduction",
      type: "blockContent",
    }),
    defineField({
      name: "imageHeaderLeft",
      title: "Image Header Left",
      type: "image",
    }),
    defineField({
      name: "imageHeaderRight",
      title: "Image Header Right",
      type: "image",
    }),

    defineField({
      name: "posts",
      title: "Posts",
      type: "array",
      of: [{ type: "reference", to: { type: "post" } }],
    }),
  ],
});
