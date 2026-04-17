import { createClient, groq } from "next-sanity";
import config from "./config/client-config";
import { FirstSectionTypes } from "@/types/FirstSectionTypes";
import { WorksSectionTypes } from "@/types/worksSectionTypes";
import { AboutTypes } from "@/types/aboutTypes";

const client = createClient(config);

export async function getFirstSection(): Promise<FirstSectionTypes[]> {
  return client.fetch(
    groq`*[_type == "homepage"]{
        _id,
        _createdAt,
        "video" : video.asset -> url,
        title,
        "slug" : slug.current,
        description
        }`,
    {},
    { next: { revalidate: 3600 } }
  );
}

export async function getAboutSection(): Promise<AboutTypes[]> {
  return client.fetch(
    groq`*[_type == "about"]{
            _id,
        _createdAt,
        title,
        content
    }`,
    {},
    { next: { revalidate: 3600 } }
  );
}

export async function getWorksSection(): Promise<WorksSectionTypes[]> {
  return client.fetch(
    groq`*[_type == "work"] | order(_createdAt desc) {
    _id,
    _createdAt,
    title,
    category,
    "slug" : slug.current,
    "image": image.asset -> url,
    year
    }`,
    {},
    { next: { revalidate: 3600 } }
  );
}

export async function getProject(slug: string): Promise<WorksSectionTypes> {
  return client.fetch(
    groq`*[_type=="work" && slug.current==$slug][0]{
      _id,
      _createdAt,
      title,
      category,
      "slug" : slug.current,
      "video": video.asset -> url,
      year
      }`,
    { slug },
    { next: { revalidate: 3600 } }
  );
}
