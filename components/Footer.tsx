"use client";

import { usePathname } from "next/navigation";
import diphtong from "@/public/diphtong.png";
import Image from "next/image";

export default function Footer() {
  const pathname = usePathname();

  return (
    <div>
      {!pathname.includes("admin") && (
        <div className=" h-32 w-full text-xs md:text-base flex justify-end md:px-32 px-10">
          <p className="sticky opacity-70 mx-auto flex flex-col justify-center">
            {" "}
            Copyright © 2024 ESTHER LHUILLERY
          </p>
          <div className=" flex flex-col justify-center ">
            <Image
              src={diphtong}
              width={34}
              height={10}
              alt="diphtong"
              className="flex justify-end my-2 opacity-75 hover:opacity-100 hover:scale-110 transition-all ease-in-out duration-700"
            />
          </div>
        </div>
      )}
    </div>
  );
}
