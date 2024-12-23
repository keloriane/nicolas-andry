import { defineField, defineType } from "sanity";

export default defineType({
  name: "recherches",
  title: "Recherches",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "introductionText",
      title: "Text d'introduction",
      type: "blockContent",
    }),
    defineField({
      name: "otherTitle",
      title: "Titre autre Recherche/Creaction",
      type: "blockContent",
    }),
    defineField({
      name: "gridCTA",
      title: "Call to action grille",
      type: "string",
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
