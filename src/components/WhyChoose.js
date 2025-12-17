"use client";

import { LuGlobe, LuUsers } from "react-icons/lu";
import { IoBookOutline } from "react-icons/io5";
import { FiCheckCircle } from "react-icons/fi";
import { useTranslation } from "react-i18next";

export default function WhyChoose() {
  const { i18n, t } = useTranslation();
  const features = [
    {
      title: t("whyUs.h1"),
      description: t("whyUs.p1"),
      icon: <LuUsers strokeWidth={2} className="text-2xl  text-[#f6573f]" />,
    },
    {
      title: t("whyUs.h2"),
      description: t("whyUs.p2"),
      icon: (
        <IoBookOutline strokeWidth={4} className="text-2xl text-[#f6573f]" />
      ),
    },
    {
      title: t("whyUs.h3"),
      description: t("whyUs.p3"),
      icon: <LuGlobe strokeWidth={1.5} className="text-2xl text-[#f6573f]" />,
    },
    {
      title: t("whyUs.h4"),
      description: t("whyUs.p4"),
      icon: (
        <FiCheckCircle strokeWidth={2} className="text-2xl text-[#f6573f]" />
      ),
    },
  ];

  return (
    <section className="bg-white py-6" id="why-us">
      <div className="max-w-340 mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-10 text-slate-900">
          {t("whyUs.title")}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-white border border-gray-200 rounded-xl shadow-sm p-8 flex flex-col items-start transition hover:shadow-lg"
            >
              <span className="mb-6 flex items-center justify-center w-12 h-12 rounded-lg font-bold bg-[#fceeec]">
                {feature.icon}
              </span>
              <h3
                className={`text-xl font-semibold ${
                  i18n.language == "en"
                    ? "md:min-h-16 lg:min-h-22 xl:min-h-16"
                    : "md:min-h-16 lg:min-h-28 xl:min-h-22"
                } mb-3 text-slate-900`}
              >
                {feature.title}
              </h3>
              <p className="text-gray-500">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
