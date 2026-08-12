import { useEffect, useState } from "react";
import type { Language } from "../types";

const STORAGE_KEY = "basel-portfolio-language";

export function useLanguage() {
  const [language, setLanguage] = useState<Language>(() => {
    return localStorage.getItem(STORAGE_KEY) === "ar" ? "ar" : "en";
  });

  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir = language === "ar" ? "rtl" : "ltr";
    localStorage.setItem(STORAGE_KEY, language);
  }, [language]);

  return {
    language,
    toggleLanguage: () => setLanguage((current) => (current === "en" ? "ar" : "en")),
  };
}