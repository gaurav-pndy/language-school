// components/Teachers.js
"use client";

import { useTranslation } from "react-i18next";
import "@/utils/i18n";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { IoArrowBackOutline, IoArrowForwardOutline } from "react-icons/io5";

function TeacherCard({ teacher }) {
  const { t, i18n } = useTranslation();
  return (
    <div className="bg-white border border-gray-200 rounded-2xl shadow-sm p-6 flex flex-col transition hover:shadow-lg h-full">
      <div className="w-full aspect-square rounded-2xl overflow-hidden mb-6 bg-gray-100 flex items-center justify-center">
        <img
          src={teacher.image}
          alt={teacher.name}
          className="object-cover w-full h-full"
        />
      </div>
      <div
        className={`${
          i18n.language == "en"
            ? "min-h-28 md:min-h-16 lg:min-h-28 xl:min-h-16"
            : "min-h-28 md:min-h-16 lg:min-h-28 xl:min-h-28"
        }`}
      >
        <h3 className="text-2xl font-semibold text-slate-900">
          {teacher.name}
        </h3>
        <div className="text-gray-600 text-sm">{teacher.location}</div>
        <div className="text-gray-500 text-sm mb-4">{teacher.experience}</div>
      </div>
      <p className="text-gray-700 mb-4">{teacher.bio}</p>
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
  );
}

export default function Teachers() {
  const { t, i18n } = useTranslation();
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

        {/* Mobile: carousel */}
        <div className="block lg:hidden">
          <Swiper
            modules={[Pagination, Navigation]}
            navigation={{
              prevEl: ".teachers-prev",
              nextEl: ".teachers-next",
            }}
            spaceBetween={20}
            slidesPerView={1}
            pagination={{ clickable: true }}
          >
            {teachers.map((teacher) => (
              <SwiperSlide key={teacher.name}>
                <TeacherCard teacher={teacher} />
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="flex  gap-2 mt-2">
            <button
              type="button"
              className="teachers-prev cursor-pointer w-12 h-12 rounded-full border-2 border-gray-300 bg-[#f1f3f6] flex items-center justify-center text-3xl text-slate-700 hover:bg-gray-100"
            >
              <IoArrowBackOutline />
            </button>
            <button
              type="button"
              className="teachers-next cursor-pointer w-12 h-12 rounded-full border-2 border-gray-300 bg-[#f1f3f6] flex items-center justify-center text-3xl text-slate-700 hover:bg-gray-100"
            >
              <IoArrowForwardOutline />
            </button>
          </div>
        </div>

        {/* Desktop: grid */}
        <div className="hidden lg:grid grid-cols-3 gap-8">
          {teachers.map((teacher) => (
            <TeacherCard key={teacher.name} teacher={teacher} />
          ))}
        </div>
      </div>
    </section>
  );
}
