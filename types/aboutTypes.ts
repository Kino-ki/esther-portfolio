import { PortableTextBlock } from "next-sanity";

export type AboutTypes = {
  slug: string;
  title: {
    en: string;
    fr: string;
  };
  content: {
    en: PortableTextBlock[];
    fr: PortableTextBlock[];
  };
};
