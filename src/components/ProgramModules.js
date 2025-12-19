// components/ProgramModules.js
"use client";

import { useState } from "react";
import { useTranslation } from "react-i18next";
import "@/utils/i18n";

export default function ProgramModules() {
  const { t } = useTranslation();
  const [activeIdx, setActiveIdx] = useState(0);

  const modules = t("modules.items", { returnObjects: true });

  const activeModule = modules[activeIdx];

  return (
    <section id="modules" className="bg-white py-6">
      <div className="max-w-340 mx-auto px-4">
        {/* Section headings */}

        <h2 className="text-4xl font-bold text-center mb-3 text-slate-900">
          {t("modules.title")}
        </h2>
        <p className="text-lg md:text-xl max-w-2xl mx-auto text-center text-gray-500 mb-10">
          {t("modules.subtitle")}
        </p>

        {/* Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Left: tabs + content card */}
          <div className="bg-white rounded-2xl lg:min-h-136 xl:min-h-124 border border-gray-200 shadow-sm p-4 md:p-6">
            {/* Tabs */}
            <div className="flex flex-wrap gap-2 mb-4">
              {modules.map((mod, index) => (
                <button
                  key={mod.id}
                  type="button"
                  onClick={() => setActiveIdx(index)}
                  className={`inline-flex items-center px-3 py-1 rounded-full border cursor-pointer transition-all duration-300 text-sm font-semibold ${
                    activeIdx === index
                      ? "bg-[#253f63] border-[#253f63] text-white"
                      : " border-gray-300 text-gray-500 hover:bg-gray-200"
                  }`}
                >
                  {mod.tabLabel}
                </button>
              ))}
            </div>

            {/* Module content */}
            <h4 className="text-lg md:text-xl font-semibold text-slate-900 ">
              {activeModule.title}
            </h4>
            <p className="text-xs md:text-sm text-gray-500 mb-4">
              {activeModule.meta}
            </p>

            <p className=" text-slate-900 mb-2">{t("modules.whatWeStudy")}</p>
            <ul className="list-disc list-outside ml-4   text-slate-900 mb-4">
              {activeModule.bullets.map((b, i) => (
                <li key={i}>{b}</li>
              ))}
            </ul>

            <p className=" text-slate-900 border-l-4 leading-tight  border-red-500 pl-3 mb-4">
              {activeModule.note}
            </p>

            <div className="bg-[#f0f2f5] rounded-xl p-3 md:p-4 mt-2">
              <p className=" text-slate-900 mb-1">{activeModule.resultTitle}</p>
              <p className=" text-slate-900">{activeModule.resultText}</p>
            </div>
          </div>

          {/* Right: image */}
          <div className="w-full h-full rounded-2xl overflow-hidden shadow-sm bg-gray-100">
            <img
              src={activeModule.image}
              alt={activeModule.title}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
