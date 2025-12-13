// components/ContactUsSection.js
"use client";

import { useMemo, useState } from "react";
import { IoPaperPlaneOutline } from "react-icons/io5";

import { useTranslation } from "react-i18next";
import "@/utils/i18n";

import PhoneInput from "react-phone-number-input";

import Select from "react-select";
import countries from "@/utils/countryNames";

export default function ContactUs() {
  const { t, i18n } = useTranslation();

  const [form, setForm] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    phone: "",
    whatsapp: false,
    telegram: false,
    max: false,
    email: "",
    message: "",
  });

  const phoneLabels = useMemo(() => {
    const lang = i18n.language === "ru" ? "ru" : "en";
    const names = countries.getNames(lang, { select: "official" });

    // react-phone-number-input expects a dictionary:
    // { US: "United States", RU: "Россия", ... }
    const dict = {};
    Object.keys(names).forEach((code) => {
      dict[code] = names[code];
    });

    return dict;
  }, [i18n.language]);

  const handleChange = (field) => (value) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Contact form submitted:", form);
  };

  const Required = () => <span className="text-red-500 ml-1">*</span>;

  return (
    <section id="contact-form" className="w-full bg-[#fafbfc] py-6 pb-12">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4 text-slate-900">
          {t("contactForm.title")}
        </h2>
        <p className="text-lg md:text-xl max-w-2xl mx-auto text-center text-gray-500 mb-12">
          {t("contactForm.subtitle")}
        </p>

        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-2xl shadow-xl p-6 md:p-8 grid md:grid-cols-2 gap-6"
        >
          {/* Left column */}
          <div>
            <label className="block font-semibold text-slate-800 mb-1">
              {t("contactForm.lastName")}
              <Required />
            </label>
            <input
              type="text"
              required
              className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#e45944]"
              value={form.lastName}
              onChange={(e) => handleChange("lastName")(e.target.value)}
            />
          </div>

          <div>
            <label className="block font-semibold text-slate-800 mb-1">
              {t("contactForm.firstName")}
              <Required />
            </label>
            <input
              type="text"
              required
              className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#e45944]"
              value={form.firstName}
              onChange={(e) => handleChange("firstName")(e.target.value)}
            />
          </div>

          <div>
            <label className="block font-semibold text-slate-800 mb-1">
              {t("contactForm.middleName")}
            </label>
            <input
              type="text"
              className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#e45944]"
              value={form.middleName}
              onChange={(e) => handleChange("middleName")(e.target.value)}
            />
          </div>

          <div>
            <label className="block font-semibold text-slate-800 mb-1">
              {t("contactForm.email")}
              <Required />
            </label>
            <input
              type="email"
              required
              className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#e45944]"
              value={form.email}
              onChange={(e) => handleChange("email")(e.target.value)}
            />
          </div>

          {/* Right column */}
          <div>
            <label className="block font-semibold text-slate-800 mb-1">
              {t("contactForm.phone")}
              <Required />
            </label>
            <div className="phone-input-wrapper w-full">
              <PhoneInput
                international
                defaultCountry="RU"
                value={form.phone}
                onChange={(phone) => setForm((prev) => ({ ...prev, phone }))}
                labels={phoneLabels}
                countryCallingCodeEditable={false}
                className="phone-input"
              />
            </div>
            <div className="mt-2 flex flex-wrap gap-4 text-xs text-slate-700">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  className="accent-[#e45944]"
                  checked={form.whatsapp}
                  onChange={(e) => handleChange("whatsapp")(e.target.checked)}
                />
                <span>{t("contactForm.whatsapp")}</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  className="accent-[#e45944]"
                  checked={form.telegram}
                  onChange={(e) => handleChange("telegram")(e.target.checked)}
                />
                <span>{t("contactForm.telegram")}</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  className="accent-[#e45944]"
                  checked={form.max}
                  onChange={(e) => handleChange("max")(e.target.checked)}
                />
                <span>{t("contactForm.max")}</span>
              </label>
            </div>
          </div>

          <div>
            <label className="block font-semibold text-slate-800 mb-1">
              {t("contactForm.message")}
            </label>
            <textarea
              rows={4}
              className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#e45944] resize-none"
              value={form.message}
              onChange={(e) => handleChange("message")(e.target.value)}
              placeholder={t("contactForm.messagePlaceholder")}
            />
          </div>

          <button
            type="submit"
            className="w-full md:col-span-2 mt-2 inline-flex items-center justify-center gap-2 rounded-lg bg-[#e45944] text-white font-semibold py-3 cursor-pointer shadow hover:bg-[#d94c2e] transition-all duration-300"
          >
            <IoPaperPlaneOutline />
            {t("contactForm.send")}
          </button>
        </form>
      </div>
    </section>
  );
}
