"use client";

import { useState } from "react";
import { SlArrowDown, SlArrowUp } from "react-icons/sl";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import "@/utils/i18n";

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState(-1);
  const { t } = useTranslation();

  const faqs = t("faq.items", { returnObjects: true });

  return (
    <section id="faq" className="bg-white py-20">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4 text-slate-900">
          {t("faq.title")}
        </h2>
        <p className="text-lg md:text-xl max-w-2xl mx-auto text-center text-gray-500 mb-12">
          {t("faq.subtitle")}
        </p>
        <div className="bg-white border border-gray-200 rounded-2xl shadow-sm p-6">
          <div className="mb-5">
            <h6 className="text-2xl font-semibold mb-2">
              {t("faq.introTitle")}
            </h6>
            <div className="text-gray-500 text-sm">{t("faq.introText")}</div>
          </div>
          <div>
            {faqs.map((faq, idx) => (
              <div className="border-b py-4 border-gray-200" key={faq.q}>
                <button
                  type="button"
                  aria-expanded={openIdx === idx}
                  aria-controls={`faq-content-${idx}`}
                  className="w-full text-left px-2 focus:outline-none font-medium text-slate-900 cursor-pointer flex items-center justify-between"
                  onClick={() => setOpenIdx(openIdx === idx ? -1 : idx)}
                >
                  {faq.q}
                  <span className="ml-2 text-xs text-slate-900">
                    {openIdx === idx ? <SlArrowUp /> : <SlArrowDown />}
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {openIdx === idx && (
                    <motion.div
                      id={`faq-content-${idx}`}
                      className="text-sm px-2 text-gray-600 overflow-hidden"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.22, ease: "easeInOut" }}
                    >
                      <br />
                      {faq.a}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
