import { defineField, defineType } from "sanity";

export default defineType({
  name: "home",
  title: "Home page",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "language",
      title: "Language",
      type: "string",
    }),
    defineField({
      name: "subtitle",
      title: "Subtitle",
      type: "string",
    }),
    defineField({
      name: "introductionText",
      title: "Text d'introduction",
      type: "blockContent",
    }),
    defineField({
      name: "postGrid",
      title: "Post grid",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "title",
              title: "Title",
              type: "string",
            },
            {
              name: "description",
              title: "Description",
              type: "blockContent",
            },
            {
              name: "image",
              title: "Image",
              type: "image",
            },
            {
              name: "slug",
              title: "Slug",
              type: "string",
            },
            {
              name: "postgridCta",
              title: "Call to action",
              type: "string",
            },
          ],
        },
      ],
    }),

    defineField({
      name: "procedureTitle",
      title: "Demarches title",
      type: "string",
    }),
    defineField({
      name: "procedureText",
      title: "Demarches text",
      type: "text",
    }),
    defineField({
      name: "demarches",
      title: "Démarches",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "title",
              title: "Title",
              type: "string",
            },
            {
              name: "description",
              title: "Description",
              type: "blockContent",
            },
          ],
        },
      ],
    }),
    defineField({
      name: "presentationTitle",
      title: "Presentation title",
      type: "string",
    }),
    defineField({
      name: "parcours",
      title: "Parcours",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "year",
              title: "Year",
              type: "string",
            },
            {
              name: "description",
              title: "Description",
              type: "blockContent",
            },
          ],
        },
      ],
    }),
    defineField({
      name: "presentationText",
      title: "Text de présentation",
      type: "blockContent",
    }),
    defineField({
      name: "presentationTextCta",
      title: "Text de présentation call to action",
      type: "string",
    }),
    defineField({
      title: "imageProfile",
      name: "imageProfile",
      type: "image",
    }),
  ],
});
