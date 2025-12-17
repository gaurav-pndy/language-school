"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { RxCross1 } from "react-icons/rx";
import { FaStar } from "react-icons/fa";
import { IoArrowBackOutline, IoArrowForwardOutline } from "react-icons/io5";
import { useTranslation } from "react-i18next";
import "@/utils/i18n";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const initialTestimonials = [
  {
    id: "thevarasa",
    avatar: "/students/1.png",
    rating: 5,
  },
  {
    id: "akil",
    avatar: "/students/2.png",
    rating: 5,
  },
  {
    id: "pavan",
    avatar: "/students/3.jpg",
    rating: 5,
  },
  {
    id: "ramaiah",
    avatar: "/students/4.jpg",
    rating: 5,
  },
];

export default function SuccessStories() {
  const [testimonials] = useState(initialTestimonials);
  const [active, setActive] = useState(null);
  const { t } = useTranslation();

  const getItem = (id) =>
    t(`testimonials.items.${id}`, { returnObjects: true });

  return (
    <section id="testimonials" className="bg-white py-6">
      <div className="max-w-340 mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-2 text-slate-900">
          {t("testimonials.title")}
        </h2>
        <p className="text-lg md:text-xl max-w-2xl mx-auto text-center text-gray-500 mb-10">
          {t("testimonials.subtitle")}
        </p>

        {testimonials.length === 0 ? (
          <p className="text-center text-gray-500">{t("testimonials.empty")}</p>
        ) : (
          <>
            <Swiper
              modules={[Navigation]}
              navigation={{
                prevEl: ".testimonials-prev",
                nextEl: ".testimonials-next",
              }}
              spaceBetween={24}
              slidesPerView={1}
              breakpoints={{
                768: { slidesPerView: 2 },
                1200: { slidesPerView: 3 },
              }}
            >
              {testimonials.map((tst) => {
                const item = getItem(tst.id);
                return (
                  <SwiperSlide key={tst.id}>
                    <article className="h-full bg-white border border-gray-200 rounded-2xl shadow-sm px-6 py-5 flex flex-col">
                      <div className="flex items-center gap-4 mb-4">
                        <img
                          src={tst.avatar}
                          alt={item.name}
                          className="w-24 h-24 shrink-0 rounded-full object-cover"
                        />
                        <div className="min-w-0">
                          <h3 className="text-lg font-semibold text-slate-900">
                            {item.name}
                          </h3>
                          <div className="text-xs flex items-center gap-3 text-gray-500">
                            {item.country}{" "}
                            <span className="bg-[#eff3f7] rounded-lg py-0.5 px-2">
                              {" "}
                              {item.status}
                            </span>
                          </div>
                          <div className="mt-1 inline-flex items-center  text-sm text-slate-600">
                            {item.goal}
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center gap-1 text-[#f59e0b] mb-4">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <FaStar
                            key={i}
                            className={i < tst.rating ? "" : "opacity-30"}
                          />
                        ))}
                      </div>

                      <p
                        className="   line-clamp-4 mb-3"
                        dangerouslySetInnerHTML={{ __html: item.review }}
                      ></p>

                      <button
                        type="button"
                        onClick={() => setActive(tst)}
                        className="mt-auto self-start font-semibold text-[#e45944] cursor-pointer hover:text-[#c74732]"
                      >
                        {t("testimonials.learnMore")}
                      </button>
                    </article>
                  </SwiperSlide>
                );
              })}
            </Swiper>

            <div className="flex  gap-2 mt-2">
              <button
                type="button"
                className="testimonials-prev cursor-pointer w-12 h-12 rounded-full border-2 border-gray-300 bg-[#f1f3f6] flex items-center justify-center text-3xl text-slate-700 hover:bg-gray-100"
              >
                <IoArrowBackOutline />
              </button>
              <button
                type="button"
                className="testimonials-next cursor-pointer w-12 h-12 rounded-full border-2 border-gray-300 bg-[#f1f3f6] flex items-center justify-center text-3xl text-slate-700 hover:bg-gray-100"
              >
                <IoArrowForwardOutline />
              </button>
            </div>
          </>
        )}
      </div>

      {/* Modal with full review */}
      <AnimatePresence>
        {active && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white max-w-3xl w-full rounded-2xl shadow-xl p-6 md:p-8 relative max-h-[85vh] "
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.25 }}
            >
              <button
                onClick={() => setActive(null)}
                aria-label="Close"
                className="absolute top-4 cursor-pointer right-4 text-slate-500 hover:text-slate-800"
              >
                <RxCross1 className="text-xl" />
              </button>

              {(() => {
                const item = getItem(active.id);
                return (
                  <>
                    <div className="flex items-center gap-4 mb-4">
                      <img
                        src={active.avatar}
                        alt={item.name}
                        className="w-24 h-24 shrink-0 rounded-full object-cover"
                      />
                      <div>
                        <h3 className="text-2xl font-semibold text-slate-900">
                          {item.name}
                        </h3>
                        <p className="text-gray-500">
                          {item.country} · {item.status}
                        </p>
                        <p className="text-sm text-gray-400">{item.goal}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-1 text-[#f59e0b] mb-4 text-lg">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <FaStar
                          key={i}
                          className={i < active.rating ? "" : "opacity-30"}
                        />
                      ))}
                    </div>

                    <p
                      className="text-lg text-gray-700 mb-4 max-h-[55vh] overflow-y-scroll"
                      dangerouslySetInnerHTML={{ __html: item.review }}
                    ></p>
                  </>
                );
              })()}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
