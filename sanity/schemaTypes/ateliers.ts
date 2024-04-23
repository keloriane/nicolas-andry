import { defineField } from "sanity";

export default defineField({
  name: "ateliers",
  title: "Ateliers",
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
