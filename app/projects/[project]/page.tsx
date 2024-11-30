"use client";
import { getProject } from "@/sanity/sanity-utils";
import { WorksSectionTypes } from "@/types/worksSectionTypes";
import { useLanguage } from "@/components/BilingualProvider/LangProvider";
import { useEffect, useState } from "react";
import arrow from "@/public/arrow.png";
import Image from "next/image";
import Link from "next/link";
import Video from 'next-video'

type Props = {
  params: { project: string };
};

export default function ProjectPage({ params }: Props) {
  const [projectData, setProjectData] = useState<WorksSectionTypes | null>(
    null
  );
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { language } = useLanguage();

  useEffect(() => {
    const fetchData = async () => {
      const slug = params.project;

      try {
        const data = await getProject(slug);
        setProjectData(data);
        setIsLoading(false);
      } catch (err) {
        setError("Failed to fetch project data");
        setIsLoading(false);
      }
    };
    fetchData();
  }, [params.project]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (!projectData) {
    return <div>No project found</div>;
  }
  const { video, title, category, year } = projectData;
  return (
    <div className="md:pt-32 md:px-32 min-h-[90vh]">
      {projectData && (
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
            <div className="flex flex-row-reverse justify-center align-middle pt-20">
              <h1 className="md:text-6xl ">
                {language === "EN" ? <p>-{title.en}</p> : <p>-{title.fr}</p>}
              </h1>
              <h2 className="md:text-5xl">
                {language === "EN" ? (
                  <p>{category.en}</p>
                ) : (
                  <p>{category.fr}</p>
                )}
              </h2>
            </div>
            <h3 className="text-3xl">{year}</h3>
          </div>
        </div>
      )}
    </div>
  );
}
