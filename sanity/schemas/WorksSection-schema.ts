import { defineType } from "sanity";
import { baseLanguage } from "./localeStringType";

export const WorksSchema = defineType({
  title: "Work",
  name: "work",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "localeString",
    },
    {
      name: "category",
      title: "Category",
      type: "localeString",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title.en",
      },
    },

    {
      name: "video",
      title: "Video",
      type: "file",
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      options: { hotspot: true },
      fields: [
        {
          name: "alt",
          title: "Alt",
          type: "string",
        },
      ],
    },
    {
      name: "year",
      title: "Year",
      type: "string",
    },
  ],
  preview: {
    select: {
      title: "title.fr",
      subtitle: `title.en`,
    },
  },
});
