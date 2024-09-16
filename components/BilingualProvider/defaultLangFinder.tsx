"use client";

export function getDefaultLang(): string {
  if (typeof window !== "undefined") {
    const storedlang = localStorage.getItem("language");
    const browserlang = navigator.language;

    return storedlang || browserlang.slice(0, 2);
  }
  return "en"; // Default to English if not running in the browser
}
