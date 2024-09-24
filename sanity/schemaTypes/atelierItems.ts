import { SanityDocument } from "next-sanity";
import { defineField, defineType } from "sanity";

// Define the blockContent type separately
const blockContentType = defineType({
  name: "blockContent",
  title: "Block Content",
  type: "array",
  of: [
    {
      type: "block",
    },
    {
      type: "image",
      options: {
        hotspot: true,
      },
    },
  ],
});

export default defineType({
  name: "ateliers_items",
  title: "Ateliers Items",
  type: "document",
  fields: [
    defineField({
      title: "Title",
      name: "title",
      type: "string",
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      validation: (Rule) => Rule.required(),
      options: {
        source: (doc: SanityDocument, context: any) => context.parent.title,
        maxLength: 200,
        slugify: (input) =>
          input.toLowerCase().replace(/\s+/g, "-").slice(0, 200),
      },
    }),
    defineField({
      name: "introductionText",
      title: "Texte d'introduction",
      type: "blockContent", // Reference the blockContent type defined elsewhere
    }),
    defineField({
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "contentBlocks",
      title: "Content Blocks",
      type: "array",
      of: [
        {
          name: "textWithTitle",
          title: "Text with Title",
          type: "object",
          fields: [
            defineField({
              title: "Title",
              name: "title",
              type: "string",
            }),
            defineField({
              title: "Text Content",
              name: "content_text",
              type: "blockContent",
            }),
          ],
        },
        {
          name: "blockContentWithImage",
          title: "Block Content with Image",
          type: "object",
          fields: [
            defineField({
              title: "Title",
              name: "title",
              type: "string",
            }),
            defineField({
              name: "blockContent",
              title: "content_text",
              type: "blockContent", // Reference the blockContent type defined elsewhere
            }),
            defineField({
              name: "image",
              title: "Image",
              type: "image",
              options: {
                hotspot: true,
              },
            }),
          ],
        },
        defineField({
          title: "Image",
          name: "image",
          type: "image",
          options: {
            hotspot: true,
          },
        }),
      ],
    }),
  ],
});
