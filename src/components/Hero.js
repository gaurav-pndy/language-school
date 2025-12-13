// components/Hero.js
"use client";

import { useCallback, useEffect } from "react";
import { useTranslation } from "react-i18next";
import "@/utils/i18n";
import { usePathname, useRouter } from "next/navigation";

export default function Hero() {
  const { t } = useTranslation();
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

  const handleScroll = (e, sectionId) => {
    e.preventDefault();

    if (pathname === "/") {
      scrollOnHome(sectionId);
    } else {
      // go to home with hash; useEffect above will scroll after navigation
      router.push(`/#${sectionId}`);
    }
  };

  return (
    <section
      id="home"
      className="relative w-full min-h-[calc(100vh-4.5rem)] flex items-center"
      style={{
        backgroundImage: "url('/hero.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#274268]/80" />

      {/* Content */}
      <div className="relative z-10 max-w-340 w-full mx-auto px-4 py-12 text-left">
        <h1 className="text-white text-5xl md:text-6xl font-bold mb-6 max-w-3xl">
          {t("hero.title")}
        </h1>
        <p className="text-xl text-white/90 mb-10 max-w-2xl">
          {t("hero.subtitle")}
        </p>
        <div className="flex flex-col sm:flex-row gap-5">
          <button
            onClick={(e) => handleScroll(e, "programs")}
            className="bg-[#e45944] cursor-pointer hover:bg-red-600 transition text-white font-semibold px-7 py-3 rounded-xl shadow text-lg"
          >
            {t("hero.ctaApply")}
          </button>
        </div>
      </div>
    </section>
  );
}
