"use client";
import { getWorksSection } from "@/sanity/sanity-utils";
import { useLanguage } from "./BilingualProvider/LangProvider";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { WorksSectionTypes } from "@/types/worksSectionTypes";

export default function WorksSection() {
  const { language } = useLanguage();
  const [sectionData, setSectionData] = useState<WorksSectionTypes[] | null>(
    null
  );
  const [hoveredWorkId, setHoveredWorkId] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getWorksSection();
      setSectionData(data);
    };
    fetchData();
  }, []);

  if (!sectionData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-col justify-center md:py-20">
      <h1 className="flex flex-row justify-start text-[2.8rem] leading-tight tracking-widest px-8 border-b-white text-textcolour mx-2 py-6 border-b mt-10 mb-20 md:hidden">
        {language === "FR" ? <p>PROJETS</p> : <p> WORKS</p>}
      </h1>
      <div className="lg:grid lg:grid-cols-3 md:grid md:grid-cols-2 flex flex-col justify-start gap-2 md:mx-5 ">
        {sectionData &&
          sectionData.map((work) => (
            <Link
              href={`/projects/${work.slug}/`}
              key={work._id}
              onMouseEnter={() => setHoveredWorkId(work._id)}
              onMouseLeave={() => setHoveredWorkId(null)}
              className="flex md:w-[100%] md:h-[20rem] w-screen h-52 overflow-hidden relative items-center  "
            >
              <Image
                src={work.image}
                alt={work.slug}
                width={700}
                height={111}
                className={`object-cover relative ${hoveredWorkId === work._id && `scale-110  transition-transform duration-500 ease-in-out`}`}
              />
              {hoveredWorkId === work._id ? (
                <div className="absolute text-center  text-[#2B2828]  text-3xl font-semibold flex flex-col justify-center backdrop-blur-[1px] bg-[#BBBBBB]/70 w-full h-full">
                  {language === "FR" ? (
                    <div className=" opacity-90">
                      <h1 className="mb-2 text-5xl">{work.title.fr}</h1>
                      <h3 className=" opacity- text-xl">{work.category.fr}</h3>
                      <h3 className="text-xl">{work.year}</h3>
                    </div>
                  ) : (
                    <div className=" opacity-90">
                      <h1 className="mb-2 text-5xl ">{work.title.en}</h1>
                      <h3 className=" opacity- text-xl">{work.category.en}</h3>
                      <h3 className="text-xl">{work.year}</h3>
                    </div>
                  )}
                </div>
              ) : (
                <div className="absolute backdrop-blur-0 bg-[#535050]/50 w-full h-full "></div>
              )}
            </Link>
          ))}
      </div>
    </div>
  );
}
