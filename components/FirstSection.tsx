"use client";
import { getFirstSection } from "@/sanity/sanity-utils";
import { PortableText, PortableTextBlock } from "@portabletext/react";
import { useLanguage } from "./BilingualProvider/LangProvider";
import { useEffect, useState } from "react";
import { FirstSectionTypes } from "@/types/FirstSectionTypes";
// import BackgroundVideo from "next-video/background-video";
import { MediaPlayer, MediaProvider } from '@vidstack/react';
import { defaultLayoutIcons, DefaultVideoLayout } from '@vidstack/react/player/layouts/default';


export default function FirstSection() {
  const [sectionData, setSectionData] = useState<FirstSectionTypes | null>(null);
  const { language } = useLanguage();

  useEffect(() => {
    const fetchData = async () => {
      const data = await getFirstSection();
      console.log("Fetched data:", data);
      setSectionData(data[0]);
    };
    fetchData();
  }, []);

  if (!sectionData || !sectionData.video) {
    return <div>Loading...</div>;
  }

  const { video, title, description } = sectionData;


  return (
    <div className=" flex flex-col h-screen overflow-hidden justify-center pb-32">
      <div className="min-w-screen ">
        {video && (
          <MediaPlayer
          autoPlay
          loop
          muted
          src={video}
            className="scale-[3.5] h-full mt-12 lg:scale-[0px] md:mt-10">
              <MediaProvider/>
              </MediaPlayer>
        )}
      </div>
      <div className= "flex justify-center backdrop-blur-[1.5px] bg-[#292525]/20 top-0  w-full h-full z-40 absolute">
        <div className=" z-10 absolute top-52  md:top-[20rem] ">
          <div className=" text-center font-primaryfont  ">
            <h1 className="text-3xl md:text-6xl font-semibold tracking-wider text-[#CFEB98] opacity-80 md:mt-0 mt-12">
              {title}
            </h1>
            <h2 className="text-2xl md:tracking-[12px] tracking-widest leading-10 opacity-80 mt-5">
              {language === "EN" ? (
                <PortableText value={description.en} />
              ) : (
                <PortableText value={description.fr} />
              )}
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}
