"use client";

import { useState } from "react";
import { SlArrowDown, SlArrowUp } from "react-icons/sl";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    q: "How do I apply to the school?",
    a: "Simply fill out our online application form, take the free placement test, and schedule a consultation with our admissions team. We'll guide you through the entire enrollment process.",
  },
  {
    q: "Do I need to know Russian before applying?",
    a: "No! We welcome complete beginners (A1 level). Our courses are designed for all levels from absolute beginner to advanced (A1-C2). The placement test will determine your starting level.",
  },
  {
    q: "How do I get a Russian student visa?",
    a: "Once enrolled, we provide you with an official invitation letter required for your visa application. You then apply at your nearest Russian consulate. The entire process typically takes 2-4 weeks. We provide complete guidance and support throughout.",
  },
  {
    q: "What accommodation options are available?",
    a: "We offer three main options: student dormitory (shared or private rooms), host family placement for cultural immersion, or assistance finding a private apartment. All options are within 20 minutes of the school.",
  },
  {
    q: "Can I work while studying in Russia?",
    a: "International students on a student visa can work part-time (up to 20 hours/week) with proper work authorization. We can advise you on the legal requirements and help with paperwork if needed.",
  },
  {
    q: "What is the cost of living in Russia?",
    a: "Moscow living costs range from €400-800/month depending on lifestyle. This includes accommodation, food, transport, and entertainment. Russia is generally more affordable than Western Europe or North America.",
  },
  {
    q: "Is health insurance required?",
    a: "Yes, medical insurance valid in Russia is mandatory for obtaining a student visa. We can recommend affordable insurance providers that meet Russian requirements.",
  },
  {
    q: "What happens if I miss classes?",
    a: "We understand that life happens. For intensive courses, you can make up missed classes in other groups or through additional materials. For private lessons, we can reschedule with 24 hours notice.",
  },
  {
    q: "Can I extend my course or change programs?",
    a: "Absolutely! Many students extend their stay or switch between programs. We'll help you adjust your visa and registration accordingly.",
  },
  {
    q: "Do you offer online courses for students outside Russia?",
    a: "Yes! Our online Russian courses are available worldwide. You'll have live classes via Zoom with the same qualified teachers, plus access to our learning platform.",
  },
];

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState(-1);

  return (
    <section id="faq" className="bg-white py-20">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4 text-slate-900">
          Frequently Asked Questions
        </h2>
        <p className="text-lg md:text-xl max-w-2xl mx-auto text-center text-gray-500 mb-12">
          Quick answers to common questions about studying Russian with us
        </p>
        <div className="bg-white border border-gray-200 rounded-2xl shadow-sm p-6">
          <div className="mb-5">
            <h6 className="text-2xl font-semibold mb-2">Got Questions?</h6>
            <div className="text-gray-500 text-sm">
              Find answers below or contact us directly for personalized
              assistance
            </div>
          </div>
          <div>
            {faqs.map((faq, idx) => (
              <div className="border-b py-4 border-gray-200" key={faq.q}>
                <button
                  type="button"
                  aria-expanded={openIdx === idx}
                  aria-controls={`faq-content-${idx}`}
                  className="w-full text-left  px-2 focus:outline-none font-medium text-slate-900 cursor-pointer flex items-center justify-between"
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
                      className="text-sm px-2  text-gray-600 overflow-hidden"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.22, ease: "easeInOut" }}
                    >
                      {" "}
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
