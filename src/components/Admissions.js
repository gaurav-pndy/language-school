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
      key: "step1",
      icon: <IoBookOutline className="text-2xl" />,
      stepNumber: "1",
    },
    {
      key: "step2",
      icon: <IoDocumentTextOutline className="text-2xl" />,
      stepNumber: "2",
    },
    {
      key: "step3",
      icon: <LuClipboardCheck className="text-2xl" />,
      stepNumber: "3",
    },
  ];

  return (
    <section id="admissions" className="bg-[#fafbfb] py-6">
      <div className="max-w-340 mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-3 text-slate-900">
          {t("admissions.title")}
        </h2>
        <p className="text-lg md:text-xl max-w-2xl mx-auto text-center text-gray-500 mb-10">
          {t("admissions.subtitle")}
        </p>

        <div className="space-y-4">
          {steps.map((step) => {
            const badge = t(`admissions.${step.key}.badge`);
            const title = t(`admissions.${step.key}.title`);
            const firstLine = t(`admissions.${step.key}.firstLine`);
            const secondLine = t(`admissions.${step.key}.secondLine`);

            return (
              <div
                key={step.key}
                className="bg-white rounded-2xl border border-gray-200 shadow-sm px-6 py-5 md:px-8 md:py-6 flex items-stretch"
              >
                {/* Left content */}
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-2 mb-3">
                    <span className="inline-flex items-center px-3 py-0.5 rounded-full bg-[#253f63] text-white text-sm font-semibold">
                      {t("admissions.step")} {step.stepNumber}
                    </span>
                    {badge && (
                      <span className="inline-flex items-center px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-sm font-medium">
                        {badge}
                      </span>
                    )}
                  </div>

                  <h3 className="text-lg md:text-xl font-semibold text-slate-900 mb-2">
                    {title}
                  </h3>

                  <p className="text-sm md:text-base text-gray-600">
                    {firstLine}
                  </p>
                  {secondLine && secondLine !== firstLine && (
                    <p className="text-sm md:text-base text-gray-600 ">
                      {secondLine}
                    </p>
                  )}
                </div>

                {/* Right icon */}
                <div className="ml-4 flex items-center">
                  <div className="w-11 h-11 md:w-12 md:h-12 rounded-2xl bg-[#fceeec] flex items-center justify-center text-[#f6573f]">
                    {step.icon}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
