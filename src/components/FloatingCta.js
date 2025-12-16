// components/FloatingCta.js
"use client";

import { useCallback, useEffect } from "react";
import { useTranslation } from "react-i18next";
import "@/utils/i18n";
import { usePathname, useRouter } from "next/navigation";

export default function FloatingCta() {
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
    <div className="fixed right-4 bottom-4 z-40 bg-white rounded-lg border border-[#e45944] shadow-lg">
      {/* Text bubble */}
      <div className="   px-4 pt-2 text-xs md:text-sm font-medium text-center max-w-68">
        {t("floatingCta.text")}
      </div>

      {/* Button block */}
      <div className="rounded-lg   p-2 flex flex-col items-stretch gap-2 s">
        <button
          type="button"
          onClick={(e) => handleScroll(e, "programs")}
          className="rounded-lg bg-[#e45944] text-white cursor-pointer font-semibold px-5 py-2 hover:bg-[#d94c2e] transition-colors"
        >
          {t("floatingCta.apply")}
        </button>
        <button
          type="button"
          onClick={(e) => handleScroll(e, "contact-form")}
          className="font-medium text-[#e45944] underline cursor-pointer underline-offset-2 hover:text-neutral-700"
        >
          {t("floatingCta.contact")}
        </button>
      </div>
    </div>
  );
}
