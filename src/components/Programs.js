"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { RxCross1 } from "react-icons/rx";
import ApplyForm from "./ApplyForm";
import { useTranslation } from "react-i18next";
import "@/utils/i18n";

export default function Programs() {
  const [showPopup, setShowPopup] = useState(false);
  const { t } = useTranslation();

  const bullets = t("programs.sixMonthBullets", { returnObjects: true });

  return (
    <section id="programs" className="bg-gray-50 py-20">
      <div className="max-w-340 mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4 text-slate-900">
          {t("programs.title")}
        </h2>
        <p className="text-lg md:text-xl max-w-2xl mx-auto text-center text-gray-500 mb-10">
          {t("programs.subtitle")}
        </p>

        {/* 6 Month Course pricing block */}
        <div className="mb-10 grid grid-cols-1 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1.2fr)] gap-6">
          {/* Left card (price) */}
          <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 flex flex-col justify-between">
            <div className="flex flex-col justify-between h-40">
              <h3 className="text-2xl font-semibold mb-1 text-slate-900">
                {t("programs.sixMonthTitle")}
              </h3>

              <div>
                <div className="text-5xl font-bold text-slate-900">
                  {t("programs.sixMonthPrice")}{" "}
                  <span className="text-base font-normal">
                    {t("programs.sixMonthPerMonth")}
                  </span>
                </div>
              </div>
            </div>

            <button
              type="button"
              onClick={() => setShowPopup(true)}
              className="mt-8 px-5 py-3 text-lg rounded-lg cursor-pointer font-semibold shadow bg-[#e45944] hover:bg-[#d94c2e] text-white transition"
            >
              {t("programs.applyNow")}
            </button>
          </div>

          {/* Right column (program bullets) */}
          <div className="bg-[#e45944] text-white rounded-2xl p-6 sm:p-8">
            <h3 className="text-2xl font-semibold mb-4">
              {t("programs.sixMonthProgramTitle")}
            </h3>
            <ul className="space-y-2 text-sm text-white/80 list-disc list-inside">
              {bullets.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Popup */}
      <AnimatePresence>
        {showPopup && (
          <motion.div
            className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className="bg-white rounded-xl shadow-lg max-w-3xl w-full mx-4 p-4 md:p-6 pt-10 md:pt-12 relative overflow-hidden"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <button
                className="absolute top-4 z-50 right-4 text-brand1 cursor-pointer text-2xl"
                onClick={() => setShowPopup(false)}
                aria-label="Close"
              >
                <RxCross1 />
              </button>
              <div className="max-h-[80vh] overflow-y-scroll">
                <ApplyForm />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
