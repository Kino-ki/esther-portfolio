"use client";

import { usePathname } from "next/navigation";

export default function Footer() {
  const pathname = usePathname();

  return (
    <div>
      {!pathname.includes("admin") && (
        <div className="md:mt-10 items-end w-full  h-32 text-sm md:text-base flex flex-col justify-center px-3 md:px-20 pb-1">
          <p className="sticky opacity-70">
            {" "}
            Copyright © 2024 ESTHER LHUILLERY
          </p>
        </div>
      )}
    </div>
  );
}
