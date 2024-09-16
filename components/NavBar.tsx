"use client";
import LangButton from "./BilingualProvider/langButton";
import { useLanguage } from "./BilingualProvider/LangProvider";
import { usePathname } from "next/navigation";
export default function NavBar() {
  const pathname = usePathname();
  const { language } = useLanguage();
  return (
    <div className="fixed">
      <div className="flex flex-col w-screen shadow-[1px_11px_19px_2px_rgba(21,20,20,0.5)] bg-bgcolour/95 rounded-sm ">
        {!pathname.includes("admin") && (
          <nav className="hidden md:visible md:flex flex-row justify-between h-20 text-xl mx-10  ">
            <div className="flex flex-col justify-center">
              <LangButton />
            </div>
            <div className="flex  flex-row gap-8  font">
              <a
                href="/#works"
                className="flex flex-col justify-center tracking-[5.5px]  text-textcolour hover:text-[#b6b8a8] transition-colors"
              >
                {language === "EN" ? "Works" : "Projets"}
              </a>
              <a
                href="/#about"
                className="flex flex-col justify-center tracking-[5.5px]  text-textcolour hover:text-[#b6b8a8]  transition-colors"
              >
                {language === "EN" ? "About" : "A propos"}
              </a>
              <a
                href="/#contact"
                className="flex flex-col justify-center tracking-[5.5px] hover:text-[#b6b8a8]  text-textcolour transition-colors"
              >
                Contact
              </a>
            </div>
          </nav>
        )}
      </div>
    </div>
  );
}
