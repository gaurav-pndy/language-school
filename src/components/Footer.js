// components/Footer.js
"use client";

import { useTranslation } from "react-i18next";
import {
  FaMapMarkerAlt,
  FaClock,
  FaEnvelope,
  FaPhoneAlt,
  FaWhatsapp,
  FaTelegramPlane,
} from "react-icons/fa";
import Link from "next/link";
import "@/utils/i18n";
import { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";

const navLinks = [
  { key: "about", sectionId: "why-us" },
  { key: "programs", sectionId: "programs" },
  { key: "teachers", sectionId: "teachers" },
  { key: "admissions", sectionId: "admissions" },
  { key: "contact", sectionId: "contact" },
];

export default function Footer() {
  const { t, i18n } = useTranslation();

  const router = useRouter();
  const pathname = usePathname();

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
    }
  };

  const logoSrc = i18n.language === "ru" ? "/logo_ru.png" : "/logo_en.png";

  return (
    <footer id="footer" className="bg-[#274268] text-white pt-10 pb-4 px-4">
      <div className="max-w-340 mx-auto grid md:grid-cols-2 lg:grid-cols-[1.2fr_0.9fr_0.9fr_1fr] gap-8">
        {/* Column 1: Logo / short text */}
        <div className="flex flex-col gap-4">
          <Link href="/" className="font-bold text-4xl text-white">
            {t("header.brand")}
          </Link>
        </div>

        {/* Column 2: Navigation */}
        <div>
          <h3 className="text-sm font-semibold mb-4 uppercase tracking-wide">
            {t("footer.navigation")}
          </h3>
          <ul className="flex flex-col gap-2 ">
            {navLinks.map((link) => (
              <li key={link.key}>
                <button
                  type="button"
                  onClick={(e) => handleNavClick(e, link.sectionId)}
                  className="hover:text-[#fbbf24] transition-colors cursor-pointer text-left"
                >
                  {t(`nav.${link.key}`)}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div className="">
          <h3 className="text-sm font-semibold mb-4 uppercase tracking-wide">
            {t("footer.legalDocs")}
          </h3>
          <div className="flex flex-col">
            <Link
              href="/documents"
              className="hover:text-[#fbbf24] transition-colors "
            >
              {t("nav.documents")}
            </Link>
          </div>
        </div>

        {/* Column 3: Contact info */}
        <div className="text-sm space-y-3">
          <h3 className="text-sm font-semibold mb-2 uppercase tracking-wide">
            {t("footer.contact")}
          </h3>

          <div className="flex items-start gap-2">
            <FaMapMarkerAlt className="mt-1 shrink-0" />
            <div>
              <p className="text-white/80">{t("footer.address")}</p>
            </div>
          </div>

          <div className="flex items-start gap-2">
            <FaEnvelope className="mt-1 shrink-0" />
            <div>
              <a
                href="mailto:info@ruslanguage.ru"
                className="text-white/80 hover:text-[#fbbf24] transition-colors"
              >
                {t("footer.email")}
              </a>
            </div>
          </div>

          <div className="flex items-start gap-2">
            <FaPhoneAlt className="mt-1 shrink-0" />
            <div>
              <a
                href="tel:+7XXXXXXXXXX"
                className="text-white/80 hover:text-[#fbbf24] transition-colors"
              >
                {t("footer.phone")}
              </a>
            </div>
          </div>

          <div className="flex items-start gap-2">
            <FaClock className="mt-1 shrink-0" />
            <div>
              <p className="text-white/80">{t("footer.hours.monFri")}</p>
              <p className="text-white/80">{t("footer.hours.sat")}</p>
              <p className="text-white/80">{t("footer.hours.sun")}</p>
            </div>
          </div>

          <div className="flex gap-4">
            <a
              href="https://wa.me/74955142058"
              target="_blank"
              className="bg-[#2aa81a] hover:scale-110 transition-all duration-300 cursor-pointer p-2 rounded-full"
            >
              <FaWhatsapp size={24} />
            </a>

            <a
              href="https://t.me/medclinic"
              target="_blank"
              className="bg-[#039be5] hover:scale-110 transition-all duration-300 cursor-pointer p-2 rounded-full"
            >
              <FaTelegramPlane size={24} />
            </a>
            <a
              href=""
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-500 bg-[#793be4] hover:scale-110 transition-all duration-300 cursor-pointer p-2  rounded-full text-lg xl:text-2xl  "
              aria-label="Max"
            >
              <img src="/max.png" alt="" className="w-6" />
            </a>
          </div>
        </div>
      </div>

      <div className="text-center text-white/60 text-xs mt-6">
        {t("footer.copyright")}
      </div>
    </footer>
  );
}
