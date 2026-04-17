"use client";
import { WorksSectionTypes } from "@/types/worksSectionTypes";
import { useLanguage } from "@/components/BilingualProvider/LangProvider";
import arrow from "@/public/arrow.png";
import Image from "next/image";
import Link from "next/link";
import Video from 'next-video';

type Props = {
  projectData: WorksSectionTypes;
};

export default function ProjectContent({ projectData }: Props) {
  const { language } = useLanguage();
  const { video, title, category, year } = projectData;

  return (
    <div className="md:pt-32 md:px-32 min-h-[90vh]">
      <div className="flex flex-col text-center">
        <Link href="/#works">
          <Image
            src={arrow}
            width={25}
            height={30}
            alt="arrow"
            className="my-10 md:my-0 ml-4  md:hidden"
          />
        </Link>
        <div className="h-fit relative flex justify-center ">
          {video ? (
            <Video controls className="md:w-[85%]">
              <source src={video} type="video/mp4" />
            </Video>
          ) : language === "FR" ? (
            <p className="md:my-56 my-44 text-xl ">VIDEO NON DISPONIBLE</p>
          ) : (
            <p className="md:my-56 my-44 text-xl">
              SORRY, THE VIDEO IS CURRENTLY UNAVAILABLE
            </p>
          )}
        </div>
        <div className="flex flex-col gap-3">
          <div className="flex flex-col-reverse justify-center align-middle pt-20">
            <h1 className="md:text-6xl text-3xl">
              {language === "EN" ? <p>{title.en}</p> : <p>{title.fr}</p>}
            </h1>
            <h2 className="md:text-3xl">
              {language === "EN" ? (
                <p>{category.en}</p>
              ) : (
                <p>{category.fr}</p>
              )}
            </h2>
          </div>
          <h3 className="md:text-3xl">{year}</h3>
        </div>
      </div>
    </div>
  );
}
