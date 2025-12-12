// components/Hero.js
"use client";

import { useTranslation } from "react-i18next";
import "@/utils/i18n";

export default function Hero() {
  const { t } = useTranslation();

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
          <a
            href="#courses"
            className="bg-[#e45944] hover:bg-red-600 transition text-white font-semibold px-7 py-3 rounded-xl shadow text-lg"
          >
            {t("hero.ctaApply")}
          </a>
        </div>
      </div>
    </section>
  );
}
