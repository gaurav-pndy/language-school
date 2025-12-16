// components/Admissions.js
"use client";

import { useState } from "react";
import { IoBookOutline, IoDocumentTextOutline } from "react-icons/io5";
import { LuClipboardCheck } from "react-icons/lu";
import { SlArrowDown, SlArrowUp } from "react-icons/sl";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import "@/utils/i18n";

export default function Admissions() {
  const { t } = useTranslation();

  // which step's extra points are open (by key)
  const [open, setOpen] = useState({});

  const steps = [
    {
      key: "choose",
      icon: <IoBookOutline className="text-2xl" />,
      stepLabel: "1",
      timeLabel: t("admissions.steps.choose.time") || "3–5 business days",
    },
    {
      key: "form",
      icon: <IoDocumentTextOutline className="text-2xl" />,
      stepLabel: "2",
      timeLabel: t("admissions.steps.form.time") || "1–2 weeks",
    },
    {
      key: "test",
      icon: <LuClipboardCheck className="text-2xl" />,
      stepLabel: "3",
      timeLabel:
        t("admissions.steps.test.time") ||
        t("admissions.steps.test.badge") ||
        "Appointment required",
    },
  ];

  const toggle = (key) => setOpen((prev) => ({ ...prev, [key]: !prev[key] }));

  return (
    <section id="admissions" className="bg-[#fafbfb] py-6">
      <div className="max-w-340 mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4 text-slate-900">
          {t("admissions.title")}
        </h2>
        <p className="text-lg md:text-xl max-w-2xl mx-auto text-center text-gray-500 mb-10">
          {t("admissions.subtitle")}
        </p>

        <div className="space-y-4">
          {steps.map((step) => {
            const title = t(`admissions.steps.${step.key}.title`);
            const points = t(`admissions.steps.${step.key}.points`, {
              returnObjects: true,
            });

            const firstPoint = points[0];
            const extraPoints = points.slice(1);
            const isOpen = !!open[step.key];

            return (
              <div
                onClick={() => toggle(step.key)}
                key={step.key}
                className="bg-white rounded-2xl border cursor-pointer border-gray-200 shadow-sm p-6"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center bg-[#fceeec] text-[#f6573f] flex-shrink-0">
                    {step.icon}
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <span className="inline-flex items-center px-3 py-1 rounded-full bg-[#274268] text-white text-xs font-semibold">
                        {t("admissions.step")} {step.stepLabel}
                      </span>
                    </div>
                    <h3 className="text-lg md:text-xl font-semibold text-slate-900 mb-2">
                      {title}
                    </h3>

                    {/* First point – always visible */}
                    <ul className="list-disc list-outside ml-4 text-sm text-gray-600">
                      {firstPoint && <li>{firstPoint}</li>}
                    </ul>
                  </div>

                  {extraPoints.length > 0 && (
                    <button
                      type="button"
                      aria-label={
                        isOpen ? "Collapse details" : "Expand details"
                      }
                      className="ml-3 cursor-pointer  text-slate-500 hover:text-slate-800 flex-shrink-0"
                    >
                      {isOpen ? <SlArrowUp /> : <SlArrowDown />}
                    </button>
                  )}
                </div>

                {/* Extra points with smooth accordion animation */}
                <AnimatePresence initial={false}>
                  {isOpen && extraPoints.length > 0 && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <ul className="list-disc list-outside ml-20 mt-1 space-y-1 text-sm text-gray-600">
                        {extraPoints.map((p, idx) => (
                          <li key={idx}>{p}</li>
                        ))}
                      </ul>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
