import { defineField, defineType } from "sanity";

export default defineType({
  name: "menu",
  title: "Menu",
  type: "document",
  fields: [
    defineField({
      name: "menuItem",
      title: "Menu Item",
      type: "array",
      of: [
        {
          type: "document",
          fields: [
            {
              name: "name",
              title: "Name",
              type: "string",
              validation: (Rule) => Rule.required(),
            },
            {
              name: "link",
              title: "Link",
              type: "string",
              validation: (Rule) => Rule.required(),
            },
          ],
        },
      ],
    }),
  ],
});
