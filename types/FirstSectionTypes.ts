import { PortableTextBlock } from "next-sanity";

export type FirstSectionTypes = {
  slug: string;
  video: string;
  _id: string;
  _createdAt: Date;
  title: string;
  description: {
    en: PortableTextBlock[];
    fr: PortableTextBlock[];
  };
};
