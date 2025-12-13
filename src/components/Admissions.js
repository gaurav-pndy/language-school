// components/Admissions.js
"use client";

import { IoBookOutline, IoDocumentTextOutline } from "react-icons/io5";
import { LuClipboardCheck } from "react-icons/lu";
import { useTranslation } from "react-i18next";
import "@/utils/i18n";

export default function Admissions() {
  const { t } = useTranslation();

  const steps = [
    {
      key: "choose",
      icon: <IoBookOutline />,
    },
    {
      key: "form",
      icon: <IoDocumentTextOutline />,
    },
    {
      key: "test",
      icon: <LuClipboardCheck />,
    },
  ];

  return (
    <section id="admissions" className="bg-[#fafbfb] py-6">
      <div className="max-w-340 mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4 text-slate-900">
          {t("admissions.title")}
        </h2>
        <p className="text-lg md:text-xl max-w-2xl mx-auto text-center text-gray-500 mb-10">
          {t("admissions.subtitle")}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((step) => {
            const title = t(`admissions.steps.${step.key}.title`);
            const points = t(`admissions.steps.${step.key}.points`, {
              returnObjects: true,
            });

            return (
              <div
                key={step.key}
                className="bg-white rounded-2xl border border-gray-200 p-6 flex flex-col hover:shadow-lg transition-all duration-300"
              >
                <div className="flex flex-col gap-2 mb-4">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center bg-gradient-to-br from-[#474661] to-[#c7564a] text-white text-3xl">
                    {step.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900">
                    {title}
                  </h3>
                </div>
                <ul className="space-y-2 text-sm text-gray-600 list-disc list-outside ml-4">
                  {points.map((p, idx) => (
                    <li key={idx}>{p}</li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
