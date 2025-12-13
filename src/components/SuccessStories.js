"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { RxCross1 } from "react-icons/rx";
import { FaStar } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import "@/utils/i18n";

const initialTestimonials = [
  {
    id: "thevarasa-sabilshan",

    avatar:
      "https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: 5,
  },
  // more ids later
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
        <h2 className="text-4xl font-bold text-center mb-3 text-slate-900">
          {t("testimonials.title")}
        </h2>
        <p className="text-lg md:text-xl max-w-2xl mx-auto text-center text-gray-500 mb-12">
          {t("testimonials.subtitle")}
        </p>

        {testimonials.length === 0 ? (
          <p className="text-center text-gray-500">{t("testimonials.empty")}</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {testimonials.map((tst) => {
              const item = getItem(tst.id);
              return (
                <article
                  key={tst.id}
                  className="bg-white border border-gray-200 rounded-2xl shadow-sm p-6 flex flex-col gap-4"
                >
                  <div className="flex items-center gap-4">
                    <img
                      src={tst.avatar}
                      alt={tst.name}
                      className="w-20 h-20 shrink-0 rounded-full object-cover"
                    />
                    <div>
                      <h3 className="text-lg font-semibold text-slate-900">
                        {item.name}
                      </h3>
                      <p className="text-xs text-gray-500">
                        {item.country} · {item.status}
                      </p>
                      <p className="text-[11px] text-gray-400">
                        {item.program} · {item.duration} · {item.studyTime}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-1 text-[#f59e0b]">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <FaStar
                        key={i}
                        className={i < tst.rating ? "" : "opacity-30"}
                      />
                    ))}
                  </div>

                  <p className="text-gray-700 line-clamp-3">{item.review}</p>

                  <button
                    type="button"
                    onClick={() => setActive(tst)}
                    className="mt-auto self-start text-sm font-semibold text-[#e45944] hover:text-[#c74732] cursor-pointer"
                  >
                    {t("testimonials.learnMore")}
                  </button>
                </article>
              );
            })}
          </div>
        )}
      </div>

      {/* Modal */}
      <AnimatePresence>
        {active && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white max-w-2xl w-full rounded-2xl shadow-xl p-6 md:p-8 relative max-h-[80vh] overflow-y-auto"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.25 }}
            >
              <button
                onClick={() => setActive(null)}
                aria-label="Close"
                className="absolute top-4 right-4 text-slate-500 hover:text-slate-800"
              >
                <RxCross1 className="text-xl" />
              </button>

              {active &&
                (() => {
                  const item = getItem(active.id);
                  return (
                    <>
                      <div className="flex items-center gap-4 mb-4">
                        <img
                          src={active.avatar}
                          alt={active.name}
                          className="w-24 h-24 shrink-0 rounded-full object-cover"
                        />
                        <div>
                          <h3 className="text-2xl font-semibold text-slate-900">
                            {active.name}
                          </h3>
                          <p className="text-gray-500">
                            {item.country} · {item.status}
                          </p>
                          <p className="text-sm text-gray-400">
                            {item.program} · {item.duration} · {item.studyTime}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center gap-1 text-[#f59e0b] mb-3 text-lg">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <FaStar
                            key={i}
                            className={i < active.rating ? "" : "opacity-30"}
                          />
                        ))}
                      </div>

                      <p className="text-lg text-gray-700 mb-3">
                        {item.review}
                      </p>
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
