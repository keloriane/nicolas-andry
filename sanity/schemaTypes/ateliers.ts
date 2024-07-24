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
      name: "globalSection",
      title: "Global Section",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              title: "Title",
              name: "title_globalSection",
              type: "string",
            },
            {
              title: "Slug",
              name: "slug",
              type: "slug",
              options: {
                source: (doc, context: any) =>
                  context.parent.title_globalSection,
                maxLength: 200,
                slugify: (input) =>
                  input.toLowerCase().replace(/\s+/g, "-").slice(0, 200),
              },
            },
            {
              name: "sections",
              title: "Post Sections",
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
                      name: "content",
                      title: "Content",
                      type: "blockContent",
                    },
                    {
                      name: "image",
                      title: "Image",
                      type: "image",
                    },
                    {
                      name: "slug",
                      title: "slug",
                      type: "slug",
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    }),
    defineField({
      name: "sections",
      title: "Post Sections",
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
              name: "content",
              title: "Content",
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
              type: "slug",
            },
          ],
        },
      ],
    }),
  ],
});
