// components/Teachers.js
"use client";

import { useTranslation } from "react-i18next";
import "@/utils/i18n";

export default function Teachers() {
  const { t } = useTranslation();

  const teachers = t("teachers.list", { returnObjects: true });

  return (
    <section id="teachers" className="bg-white py-6">
      <div className="max-w-340 mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4 text-slate-900">
          {t("teachers.title")}
        </h2>
        <p className="text-lg md:text-xl max-w-2xl mx-auto text-center text-gray-500 mb-12">
          {t("teachers.subtitle")}
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {teachers.map((teacher) => (
            <div
              key={teacher.name}
              className="bg-white border border-gray-200 rounded-2xl shadow-sm p-6 flex flex-col transition hover:shadow-lg"
            >
              <div className="w-full aspect-square rounded-2xl overflow-hidden mb-6 bg-gray-100 flex items-center justify-center">
                <img
                  src={teacher.image}
                  alt={teacher.name}
                  className="object-cover w-full h-full"
                />
              </div>
              <h3 className="text-2xl font-semibold text-slate-900 ">
                {teacher.name}
              </h3>
              <div className=" text-gray-600  text-sm">{teacher.location}</div>
              <div className="text-gray-500 text-sm mb-4">
                {teacher.experience}
              </div>
              <p className=" mb-4">{teacher.bio}</p>
              <div className="flex flex-wrap gap-2 mt-auto">
                {teacher.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-[#f3f4f7] rounded-full px-3 py-1 text-sm font-medium text-gray-800"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
