"use client";

import { usePathname } from "next/navigation";
import { useLanguage } from "./BilingualProvider/LangProvider";

import diphtong from "@/public/diphtong.png";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const pathname = usePathname();
  const { language } = useLanguage();

  return (
    <div>
      {!pathname.includes("admin") && (
        <div className=" h-20 w-full text-xs md:text-sm flex justify-between lg:px-32 px-10 mt-10 ">
          <div className="flex text-start   w-full">
            <p className="sticky opacity-70 flex flex-col justify-center w-4/5 md:w-full">
              {" "}
              Copyright © 2024 ESTHER LHUILLERY
            </p>
          </div>
          <div className="flex gap-3  h-fit">
            <p className=" opacity-60 flex flex-col justify-end text-end  text-sm pb-2">
              {language === "EN" ? "created by " : "création web "}
            </p>
            <div className=" flex flex-col justify-center  ">
              <Link href="https://www.diphtong.ca/home" target="_blank">
                <Image
                  src={diphtong}
                  width={30}
                  height={10}
                  alt="diphtong"
                  className="flex justify-end my-2 opacity-75 hover:opacity-90 hover:scale-105 transition-all ease-in-out duration-300"
                />
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
