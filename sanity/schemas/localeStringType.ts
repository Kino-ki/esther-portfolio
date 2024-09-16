import { defineType } from "sanity";

const supportedLanguages = [
  { id: "fr", title: "French", isDefault: true },
  { id: "en", title: "English" },
];

export const baseLanguage = supportedLanguages.find((l) => l.isDefault);
export const localeString = defineType({
  title: "Localized string",
  name: "localeString",
  type: "object",
  fieldsets: [
    {
      title: "Translations",
      name: "translations",
      options: { collapsible: true },
    },
  ],
  fields: supportedLanguages.map((lang) => ({
    title: lang.title,
    name: lang.id,
    type: "string",
    fieldset: lang.isDefault ? undefined : "translations",
  })),
});

export const localePortableString = defineType({
  title: "Localized Portable string",
  name: "localePortableString",
  type: "object",
  fieldsets: [
    {
      title: "Translations",
      name: "translations",
      options: { collapsible: true },
    },
  ],
  fields: supportedLanguages.map((lang) => ({
    title: lang.title,
    name: lang.id,
    type: "array",
    of: [{ type: "block" }],
    fieldset: lang.isDefault ? undefined : "translations",
  })),
});
