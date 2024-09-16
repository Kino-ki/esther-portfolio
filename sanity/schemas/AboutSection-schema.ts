import { defineType, defineField } from "sanity";

export const AboutSchema = defineType({
  title: "About",
  name: "about",
  type: "document",
  fields: [
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      readOnly: true,
    },
    defineField({
      name: "title",
      type: "localeString",
    }),
    defineField({
      name: "content",
      type: "localePortableString",
    }),
  ],
  preview: {
    select: {
      title: "title.fr",
      subtitle: `title.en`,
    },
  },
});
