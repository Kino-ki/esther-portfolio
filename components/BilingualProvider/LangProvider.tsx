"use client";
import { createContext, useContext, useEffect, useState } from "react";
import { getDefaultLang } from "./defaultLangFinder";
interface LanguageContextProps {
  language: string;
  setLanguage: (lang: string) => void;
}

const LanguageContext = createContext<LanguageContextProps | undefined>(
  undefined
);

export default function LanguageContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [language, setLanguage] = useState<string>(
    getDefaultLang().toUpperCase()
  );
  useEffect(() => {
    const rootElement = document.querySelector("#root");

    if (rootElement) {
      if (language === "EN") {
        rootElement.classList.add("EN");
      } else {
        rootElement.classList.remove("EN");
      }
    }
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}
export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error(
      "useLanguage must be used within a LanguageContextProvider"
    );
  }
  return context;
};
