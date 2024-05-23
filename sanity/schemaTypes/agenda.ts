import { defineField, defineType } from "sanity";

export default defineType({
  name: "agenda",
  title: "Agenda",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "introductionText",
      title: "texte d'introduction",
      type: "blockContent",
    }),
    defineField({
      name: "agenda",
      title: "Agenda",
      type: "array",
      of: [
        {
          type: "document",
          fields: [
            {
              name: "title",
              title: "Title",
              type: "string",
            },
            {
              name: "description",
              title: "Description",
              type: "text",
            },
            {
              name: "descriptionB",
              title: "DescriptionB",
              type: "blockContent",
            },
            {
              name: "contact",
              title: "Contact",
              type: "blockContent",
            },
            {
              name: "date",
              title: "Date",
              type: "string",
            },
            {
              name: "location",
              title: "Location",
              type: "string",
            },
            {
              title: "Event type",
              name: "eventType",
              type: "string",
              options: {
                list: [
                  { title: "Atelier", value: "atelier" },
                  { title: "Creation", value: "creation" },
                ],
              },
            },
          ],
        },
      ],
    }),
  ],
});
