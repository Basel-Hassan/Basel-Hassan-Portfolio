import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faMoon, faSun, faXmark } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import type { Language, Theme } from "../types";

interface NavbarProps {
  theme: Theme;
  language: Language;
  onThemeToggle: () => void;
  onLanguageToggle: () => void;
}

const navItems = [
  ["home", { en: "Home", ar: "الرئيسية" }],
  ["about", { en: "About", ar: "عني" }],
  ["skills", { en: "Skills", ar: "المهارات" }],
  ["projects", { en: "Projects", ar: "المشاريع" }],
  ["education", { en: "Education", ar: "التعليم" }],
  ["contact", { en: "Contact", ar: "تواصل" }],
] as const;

function Navbar({ theme, language, onThemeToggle, onLanguageToggle }: NavbarProps) {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--color-border)] bg-[var(--color-background)]/90 backdrop-blur">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8" aria-label="Main navigation">
        <a href="#home" className="text-2xl font-black">BH<span className="text-[var(--color-primary)]">.</span></a>

        <div className="hidden items-center gap-7 md:flex">
          {navItems.map(([id, labels]) => (
            <a key={id} href={`#${id}`} className="nav-link">{labels[language]}</a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button className="icon-button" onClick={onLanguageToggle} aria-label="Change language">
            {language === "en" ? "ع" : "EN"}
          </button>
          <button className="icon-button" onClick={onThemeToggle} aria-label="Toggle theme">
            <FontAwesomeIcon icon={theme === "dark" ? faSun : faMoon} />
          </button>
          <button className="icon-button mobile-menu-button md:hidden" onClick={() => setOpen((v) => !v)} aria-expanded={open} aria-label={open ? "Close menu" : "Open menu"}>
            <FontAwesomeIcon icon={open ? faXmark : faBars} />
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-[var(--color-border)] px-5 py-4 md:hidden">
          <div className="flex flex-col gap-3">
            {navItems.map(([id, labels]) => (
              <a key={id} href={`#${id}`} className="nav-link" onClick={() => setOpen(false)}>
                {labels[language]}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;