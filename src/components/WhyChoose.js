// components/WhyChoose.js
"use client";

import Image from "next/image";
import { FiCheckCircle } from "react-icons/fi";
import { useTranslation } from "react-i18next";
import "@/utils/i18n";

export default function WhyChoose() {
  const { t } = useTranslation();
  const points = t("whyUs.points", { returnObjects: true });

  return (
    <section className="bg-white py-6" id="why-us">
      <div className="max-w-340 mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Left: text and bullets */}
          <div>
            <h3 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">
              {t("whyUs.title")}
            </h3>

            <ul className="space-y-3">
              {points.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <FiCheckCircle className="mt-1.5 shrink-0 text-[#f6573f]" />
                  <p className="text-gray-700 md:text-lg">{item}</p>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: image */}
          <div className="relative w-full h-[260px] md:h-[360px] lg:h-96">
            <Image
              src="/why-us.avif"
              alt={t("whyUs.title")}
              fill
              className="object-cover rounded-2xl shadow-lg"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
