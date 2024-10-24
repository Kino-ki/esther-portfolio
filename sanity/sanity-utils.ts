import { createClient, groq } from "next-sanity";
import config from "./config/client-config";
import { FirstSectionTypes } from "@/types/FirstSectionTypes";
import { WorksSectionTypes } from "@/types/worksSectionTypes";
import { AboutTypes } from "@/types/aboutTypes";

export async function getFirstSection(): Promise<FirstSectionTypes[]> {
  const client = createClient(config);
  let res = client.fetch(
    groq`*[_type == "homepage"]{
        _id,
        _createdAt,
        "video" : video.asset -> url,
        title,
        "slug" : slug.current,
        description
        }`
  );
  return res;
}

export async function getAboutSection(): Promise<AboutTypes[]> {
  const client = createClient(config);
  let res = await client.fetch(
    groq`*[_type == "about"]{
            _id,
        _createdAt,
        title,
        content
    } `
  );
  return res;
}

export async function getWorksSection(): Promise<WorksSectionTypes[]> {
  const client = createClient(config);
  let res = await client.fetch(
    groq`*[_type == "work"] | order(_createdAt desc) {
    _id,
    _createdAt,
    title,
    category,
    "slug" : slug.current,
    "image": image.asset -> url,
    year
    }  `
  );

  return res;
}
export async function getProject(slug: string): Promise<WorksSectionTypes> {
  const client = createClient(config);
  const res = await client.fetch(
    groq`*[_type=="work" && slug.current==$slug][0]{
      _id,
      _createdAt,
      title,
      category,
      "slug" : slug.current,
      "video": video.asset -> url,
      year
      }`,
    { slug }
  );
  return res;
}
