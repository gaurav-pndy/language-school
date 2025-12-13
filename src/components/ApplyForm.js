"use client";

import { useState, useMemo } from "react";
import { useTranslation } from "react-i18next";
import "@/utils/i18n";

import PhoneInput from "react-phone-number-input";

import Select from "react-select";
import countries from "@/utils/countryNames";

export default function ApplyForm() {
  const { t, i18n } = useTranslation();

  const [form, setForm] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    email: "",
    phone: "",
    whatsapp: false,
    telegram: false,
    max: false,
    country: "",
    program: "",
    message: "",
  });

  const countryOptions = useMemo(() => {
    const lang = i18n.language === "ru" ? "ru" : "en";
    const names = countries.getNames(lang, { select: "official" });

    return Object.entries(names).map(([code, name]) => ({
      value: code,
      label: name,
    }));
  }, [i18n.language]);

  const selectedCountry =
    form.country && countryOptions.find((c) => c.value === form.country);

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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (name) => (e) => {
    setForm((prev) => ({ ...prev, [name]: e.target.checked }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", form);
  };

  // ------------------------
  // UI Rendering
  // ------------------------
  return (
    <section id="contact">
      <div className="max-w-340 mx-auto px-4">
        <div className="bg-white rounded-2xl shadow-xl p-6">
          <h3 className="text-2xl font-semibold mb-1 text-slate-900">
            {t("applyForm.title")}
          </h3>
          <p className="text-sm text-gray-500 mb-6">
            {t("applyForm.subtitle")}
          </p>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* First Name */}
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">
                {t("contactForm.firstName")}
              </label>
              <input
                type="text"
                name="firstName"
                value={form.firstName}
                onChange={handleChange}
                className="w-full rounded-xl border border-gray-300 px-3 py-2"
                required
              />
            </div>

            {/* Last Name */}
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">
                {t("contactForm.lastName")}
              </label>
              <input
                type="text"
                name="lastName"
                value={form.lastName}
                onChange={handleChange}
                className="w-full rounded-xl border border-gray-300 px-3 py-2"
                required
              />
            </div>

            {/* Middle Name */}
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">
                {t("contactForm.middleName")}
              </label>
              <input
                type="text"
                name="middleName"
                value={form.middleName}
                onChange={handleChange}
                className="w-full rounded-xl border border-gray-300 px-3 py-2"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">
                {t("applyForm.email")}
              </label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                className="w-full rounded-xl border border-gray-300 px-3 py-2"
                required
              />
            </div>

            {/* Phone Input */}
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">
                {t("contactForm.phone")}
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

              {/* Contact preferences */}
              <div className="mt-2 flex flex-wrap gap-4 text-xs text-slate-700">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    className="accent-[#e45944]"
                    checked={form.whatsapp}
                    onChange={handleCheckboxChange("whatsapp")}
                  />
                  <span>{t("contactForm.whatsapp")}</span>
                </label>

                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    className="accent-[#e45944]"
                    checked={form.telegram}
                    onChange={handleCheckboxChange("telegram")}
                  />
                  <span>{t("contactForm.telegram")}</span>
                </label>

                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    className="accent-[#e45944]"
                    checked={form.max}
                    onChange={handleCheckboxChange("max")}
                  />
                  <span>{t("contactForm.max")}</span>
                </label>
              </div>
            </div>

            {/* Country Select */}
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">
                {t("applyForm.country")}
              </label>

              <Select
                options={countryOptions}
                value={selectedCountry}
                onChange={(option) =>
                  setForm((prev) => ({
                    ...prev,
                    country: option ? option.value : "",
                  }))
                }
                placeholder={t("applyForm.selectCountry")}
                className="text-sm"
              />
            </div>

            {/* Program */}
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">
                {t("applyForm.interestedIn")}
              </label>
              <select
                name="program"
                value={form.program}
                onChange={handleChange}
                className="w-full rounded-xl border border-gray-300 px-3 py-2 bg-white"
              >
                <option value="">{t("applyForm.selectProgram")}</option>
                <option value="6-months-course">
                  {t("applyForm.programs.option1")}
                </option>
              </select>
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">
                {t("applyForm.message")}
              </label>
              <textarea
                name="message"
                rows={4}
                value={form.message}
                onChange={handleChange}
                className="w-full rounded-xl border border-gray-300 px-3 py-2 resize-none"
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full rounded-xl bg-[#e45944] hover:bg-[#d94c2e] text-white font-semibold py-3.5 text-sm shadow-md transition-all"
            >
              {t("applyForm.sendRequest")}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
