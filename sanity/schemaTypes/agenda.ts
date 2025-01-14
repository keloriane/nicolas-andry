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
      name: "titleAgendaCreation",
      title: "Title Creation",
      type: "string",
    }),
    defineField({
      name: "titleAgendaAtelier",
      title: "Title Atelier",
      type: "string",
    }),
    defineField({
      name: "introductionText",
      title: "texte d'introduction",
      type: "blockContent",
    }),
    defineField({
      name: "agendaCTA",
      title: "Call to action agenda",
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
              name: "date",
              title: "Date",
              type: "string",
            },
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
