// components/FloatingCta.js
"use client";

import { useCallback } from "react";
import { useTranslation } from "react-i18next";
import "@/utils/i18n";

export default function FloatingCta() {
  const { t } = useTranslation();

  const handleScroll = useCallback((sectionId) => {
    const el = document.getElementById(sectionId);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  return (
    <div className="fixed right-4 bottom-4 z-40">
      {/* Text bubble */}
      <div className="mb-2 rounded-lg border border-[#e45944] bg-white/95 shadow-lg px-4 py-2 text-xs md:text-sm font-medium text-center max-w-68">
        {t("floatingCta.text")}
      </div>

      {/* Button block */}
      <div className="rounded-lg bg-white shadow-[0_10px_30px_rgba(0,0,0,0.15)] p-2 flex flex-col items-stretch gap-2 border border-black/10">
        <button
          type="button"
          onClick={() => handleScroll("programs")}
          className="rounded-lg bg-[#e45944] text-white cursor-pointer font-semibold px-5 py-2 hover:bg-[#d94c2e] transition-colors"
        >
          {t("floatingCta.apply")}
        </button>
        <button
          type="button"
          onClick={() => handleScroll("contact-form")}
          className="font-medium text-[#e45944] underline cursor-pointer underline-offset-2 hover:text-neutral-700"
        >
          {t("floatingCta.contact")}
        </button>
      </div>
    </div>
  );
}
