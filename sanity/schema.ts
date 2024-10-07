import { type SchemaTypeDefinition } from "sanity";

import blockContent from "./schemaTypes/blockContent";
import category from "./schemaTypes/category";
import post from "./schemaTypes/post";
import author from "./schemaTypes/author";
import creations from "./schemaTypes/creations";
import home from "./schemaTypes/home";
import agenda from "./schemaTypes/agenda";
import recherches from "./schemaTypes/recherches";
import ateliers from "./schemaTypes/ateliers";
import atelierItems from "./schemaTypes/atelierItems";
import menu from "./schemaTypes/menu";
import contact from "./schemaTypes/contact";
import footer from "./schemaTypes/footer";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    post,
    author,
    category,
    blockContent,
    creations,
    home,
    agenda,
    recherches,
    ateliers,
    menu,
    atelierItems,
    contact,
    footer,
  ],
};
