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
      name: "imageHeader",
      title: "Image Header",
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
