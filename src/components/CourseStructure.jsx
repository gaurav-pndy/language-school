"use client";

import { useTranslation } from "react-i18next";
import "@/utils/i18n";

export default function CourseStructure() {
  const { t } = useTranslation();

  return (
    <section className="bg-white py-20" id="features">
      <div className="max-w-340 mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4 text-slate-900">
          {t("courseStructure.title")}
        </h2>
        <p className="text-lg md:text-xl max-w-2xl mx-auto text-center text-gray-500 mb-12">
          {t("courseStructure.description")}
        </p>
      </div>
    </section>
  );
}
