"use client";
import '@vidstack/react/player/styles/default/theme.css';
import '@vidstack/react/player/styles/default/layouts/video.css';
import { PortableText } from "@portabletext/react";
import { useLanguage } from "./BilingualProvider/LangProvider";
import { FirstSectionTypes } from "@/types/FirstSectionTypes";
import { MediaPlayer, MediaProvider } from '@vidstack/react';

type Props = {
  data: FirstSectionTypes;
};

export default function FirstSection({ data }: Props) {
  const { language } = useLanguage();
  const { video, title, description } = data;

  return (
    <div className=" flex flex-col h-screen overflow-hidden justify-center pb-32">
      <div className="min-w-screen ">
        {video && (
          <MediaPlayer
          autoPlay
          playsInline
          loop
          muted
          src={video}
            className="scale-[3.5] h-full mt-12 lg:scale-0 md:mt-10">
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
