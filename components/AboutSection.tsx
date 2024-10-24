"use client";
import { getAboutSection } from "@/sanity/sanity-utils";
import { useLanguage } from "./BilingualProvider/LangProvider";
import { AboutTypes } from "@/types/aboutTypes";
import { useEffect, useState } from "react";
import { PortableText } from "@portabletext/react";


export default function AboutSection() {
  const [sectionData, setsectionData] = useState<AboutTypes | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { language } = useLanguage();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getAboutSection();
        setsectionData(data[0]);
        setIsLoading(false);
      } catch {
        setError("Failed to fetch section data");
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (!sectionData) {
    return <div>No section found</div>;
  }
  return (
    <div className="flex flex-col justify-start py-20">
      <div className="flex items-center w-full justify-center h-[12rem] bg-fixed bg-parallax bg-cover drop-shadow-xl">
      </div>

      {sectionData && (
        <div className="md:mx-10 mx-2 text-textcolour ">
          {language == "FR" ? (
            <div>
              <h1 className=" md:text-7xl mb-12 mt-16 md:mt-32 md-mb-20 text-[2.8rem] leading-tight tracking-widest px-2 ">
                {sectionData.title.fr.toUpperCase()}
              </h1>
              <div className="md:text-3xl text-white text-lg px-3 md:mr-28 text-pretty tracking-wide leading-relaxed">
                <PortableText value={sectionData.content.fr} />
              </div>
            </div>
          ) : (
            <div>
              <h1 className=" md:text-7xl mb-12 mt-16 md:mt-32 md-mb-20  text-[2.8rem] leading-tight tracking-widest px-2 ">
                {sectionData.title.en.toUpperCase()}
              </h1>
              <div className="md:text-3xl text-lg text-white px-3 md:mr-28 text-pretty tracking-wide leading-relaxed">
                <PortableText value={sectionData.content.en} />
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
