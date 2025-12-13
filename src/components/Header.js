// components/Header.js
"use client";

import { useRef, useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { FaGlobe, FaTelegramPlane, FaWhatsapp } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { useTranslation } from "react-i18next";
import "@/utils/i18n";
import Link from "next/link";

const navLinks = [
  { key: "about", sectionId: "why-us" },
  { key: "programs", sectionId: "programs" },
  { key: "teachers", sectionId: "teachers" },
  { key: "admissions", sectionId: "admissions" },
  { key: "contact", sectionId: "contact" },
];

export default function Header() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { t, i18n } = useTranslation();
  const dropdownRef = useRef(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState(i18n.language);

  const router = useRouter();
  const pathname = usePathname();

  const languages = [
    { code: "en", label: "English", flag: "/flags/us_flag.png" },
    { code: "ru", label: "Русский", flag: "/flags/russia_flag.png" },
  ];

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    setSelectedLang(lang);
    setDropdownOpen(false);
  };

  // When navigating to /#section from another page, Next will change URL
  // but not always scroll; ensure scroll happens on hashchange.
  useEffect(() => {
    if (typeof window === "undefined") return;
    const hash = window.location.hash.replace("#", "");
    if (!hash) return;
    const el = document.getElementById(hash);
    if (el) {
      // small timeout to wait for layout
      const top = el.getBoundingClientRect().top + window.pageYOffset - 80;

      setTimeout(() => {
        window.scrollTo({
          top,
          behavior: "smooth",
        });
      }, 100);
    }
  }, [pathname]);

  const scrollOnHome = (sectionId, offset = 80) => {
    const section = document.getElementById(sectionId);

    if (section) {
      const top =
        section.getBoundingClientRect().top + window.pageYOffset - offset;

      window.scrollTo({
        top,
        behavior: "smooth",
      });
    }
  };

  const handleNavClick = (e, sectionId) => {
    e.preventDefault();

    if (pathname === "/") {
      scrollOnHome(sectionId);
    } else {
      // go to home with hash; useEffect above will scroll after navigation
      router.push(`/#${sectionId}`);
      setSidebarOpen(false);
    }
  };

  const currentLang =
    languages.find((l) => l.code === selectedLang) || languages[0];

  return (
    <header className="w-full bg-gray-50 shadow-lg fixed top-0 z-20">
      <nav className="max-w-340 mx-auto h-18 flex items-center justify-between px-4 py-4">
        <Link href="/" className="font-bold text-2xl text-[#274268]">
          {t("header.brand")}
        </Link>

        <div className="flex items-center gap-8">
          <ul className="hidden xl:flex gap-8 items-center">
            {navLinks.map((link) => (
              <li key={link.key}>
                <a
                  href={`#${link.sectionId}`}
                  onClick={(e) => handleNavClick(e, link.sectionId)}
                  className="text-slate-700 hover:text-slate-950 transition text-sm font-medium"
                >
                  {t(`nav.${link.key}`)}
                </a>
              </li>
            ))}
            <li>
              <Link
                href="/documents"
                className="text-slate-700 hover:text-slate-950 transition text-sm font-medium"
              >
                {t("nav.documents")}
              </Link>
            </li>
          </ul>

          <div className="hidden xl:flex items-center gap-4">
            <div className="hidden lg:flex items-center gap-2 justify-end min-w-0">
              <a
                href="https://wa.me/74951234567"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-500 text-lg xl:text-2xl hover:scale-125 transition-all duration-300"
                aria-label="WhatsApp"
              >
                <FaWhatsapp />
              </a>
              <a
                href="https://t.me/medclinic"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sky-500 text-lg xl:text-2xl hover:scale-125 transition-all duration-300"
                aria-label="Telegram"
              >
                <FaTelegramPlane />
              </a>
              <a
                href=""
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-500 text-lg xl:text-2xl hover:scale-125 transition-all duration-300"
                aria-label="Max"
              >
                <img src="/max.png" alt="" className="w-6" />
              </a>

              <div
                className="relative md:ml-2 flex gap-1 md:gap-2 items-center"
                ref={dropdownRef}
              >
                <FaGlobe className="text-lg xl:text-2xl text-brand1" />
                <div className="relative">
                  <button
                    type="button"
                    className="cursor-pointer border font-semibold base-text px-2 hover:bg-brand1/10 transition-all duration-300 py-1.5 rounded-lg flex items-center gap-2"
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                  >
                    <img
                      src={currentLang.flag}
                      alt="Flag"
                      className="w-3 xl:w-4 h-3 xl:h-4"
                    />
                    {currentLang.label}
                    <IoIosArrowDown className="text-sm" />
                  </button>

                  {dropdownOpen && (
                    <ul className="absolute md:top-9 w-full bg-white border border-[#002379] rounded-lg shadow-md mt-1 right-0 z-10 overflow-hidden">
                      {languages.map((lang) => (
                        <li
                          key={lang.code}
                          className="flex items-center gap-2 px-2 md:px-3 py-1 hover:bg-gray-200 cursor-pointer text-xs xl:text-base"
                          onClick={() => changeLanguage(lang.code)}
                        >
                          <img
                            src={lang.flag}
                            className="w-3 md:w-4 h-3 md:h-4"
                            alt={lang.code}
                          />
                          {lang.label}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </div>

            <a
              href="#programs"
              onClick={(e) => handleNavClick(e, "programs")}
              className="bg-[#e45944] hover:bg-red-600 transition text-white font-semibold px-5 py-2 rounded-lg shadow"
            >
              {t("nav.applyNow")}
            </a>
          </div>
        </div>

        {/* Hamburger for mobile */}
        <button
          className="xl:hidden p-2 rounded transition hover:bg-gray-200"
          aria-label="Open sidebar"
          onClick={() => setSidebarOpen(true)}
        >
          <svg
            width="28"
            height="28"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M4 7h20M4 14h20M4 21h20" />
          </svg>
        </button>
      </nav>

      {/* Mobile sidebar */}
      <AnimatePresence>
        {sidebarOpen && (
          <motion.aside
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed inset-0 z-30 bg-black/40 flex justify-end"
            onClick={() => setSidebarOpen(false)}
          >
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="w-80 bg-white h-full shadow-xl px-6 py-4 flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="self-end mb-8 text-4xl hover:bg-gray-200 rounded"
                aria-label="Close sidebar"
                onClick={() => setSidebarOpen(false)}
              >
                &times;
              </button>
              <ul className="flex flex-col gap-6">
                {navLinks.map((link) => (
                  <li key={link.key}>
                    <a
                      href={`#${link.sectionId}`}
                      onClick={(e) => handleNavClick(e, link.sectionId)}
                      className="text-slate-700 hover:text-slate-950 transition font-medium text-lg"
                    >
                      {t(`nav.${link.key}`)}
                    </a>
                  </li>
                ))}
                <li>
                  <a
                    href="#programs"
                    onClick={(e) => handleNavClick(e, "programs")}
                    className="bg-red-500 hover:bg-red-600 transition text-white font-semibold px-5 py-2 rounded-lg shadow text-center block"
                  >
                    {t("nav.applyNow")}
                  </a>
                </li>
              </ul>
            </motion.div>
          </motion.aside>
        )}
      </AnimatePresence>
    </header>
  );
}
