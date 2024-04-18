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
                  { title: "Recherche", value: "recherche" },
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
