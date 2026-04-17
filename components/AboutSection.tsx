"use client";
import { useLanguage } from "./BilingualProvider/LangProvider";
import { AboutTypes } from "@/types/aboutTypes";
import { PortableText } from "@portabletext/react";

type Props = {
  data: AboutTypes;
};

export default function AboutSection({ data }: Props) {
  const { language } = useLanguage();

  return (
    <div className="flex flex-col justify-start py-20">
      <div className="flex items-center w-full justify-center h-[12rem] md:bg-fixed bg-parallax bg-[length:800px_500px] md:bg-auto drop-shadow-xl">
      </div>

      <div className="md:mx-10 mx-2 text-textcolour ">
        {language === "FR" ? (
          <div>
            <h1 className=" md:text-7xl mb-12 mt-16 md:mt-32 md-mb-20 text-[2.8rem] leading-tight tracking-widest px-2 ">
              {data.title.fr.toUpperCase()}
            </h1>
            <div className="md:text-3xl text-white text-lg px-3 md:mr-28 text-pretty tracking-wide leading-relaxed">
              <PortableText value={data.content.fr} />
            </div>
          </div>
        ) : (
          <div>
            <h1 className=" md:text-7xl mb-12 mt-16 md:mt-32 md-mb-20  text-[2.8rem] leading-tight tracking-widest px-2 ">
              {data.title.en.toUpperCase()}
            </h1>
            <div className="md:text-3xl text-lg text-white px-3 md:mr-28 text-pretty tracking-wide leading-relaxed">
              <PortableText value={data.content.en} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
