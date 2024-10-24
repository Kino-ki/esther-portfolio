"use client";
import { useLanguage } from "./LangProvider";

export default function LangButton() {
  const { setLanguage, language } = useLanguage();

  const languages: string[] = ["FR", "EN"];

  const handleLanguageChange = () => {
    const newLanguage = languages.find((lang) => lang !== language);
    if (newLanguage) {
      setLanguage(newLanguage);
      localStorage.setItem("language", newLanguage);
    }
  };

  return (
    <div>
      {language && (
        <button type="button" className="text-xl tracking-[0px]  hover:text-[#b6b8a8] text-lime-50 transition-colors ease-in-out duration-75" onClick={() => handleLanguageChange()}>
          {language === "EN" ? "FR" : "EN"}
        </button>
      )}
    </div>
  );
}
