"use client";

import { useState, useMemo } from "react";
import { useTranslation } from "react-i18next";
import "@/utils/i18n";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";
import Select from "react-select";
import countryList from "react-select-country-list";

export default function ApplyForm() {
  const { t } = useTranslation();

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

  const countryOptions = useMemo(
    () =>
      countryList()
        .getData()
        .map((c) => ({ value: c.label, label: c.label })),
    []
  );

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (name) => (e) => {
    const { checked } = e.target;
    setForm((prev) => ({ ...prev, [name]: checked }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted", form);
  };

  const selectedCountry =
    form.country && countryOptions.find((c) => c.value === form.country);

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
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">
                {t("contactForm.firstName")}
              </label>
              <input
                type="text"
                name="firstName"
                value={form.firstName}
                onChange={handleChange}
                className="w-full rounded-xl border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-400"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">
                {t("contactForm.lastName")}
              </label>
              <input
                type="text"
                name="lastName"
                value={form.lastName}
                onChange={handleChange}
                className="w-full rounded-xl border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-400"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">
                {t("contactForm.middleName")}
              </label>
              <input
                type="text"
                name="middleName"
                value={form.middleName}
                onChange={handleChange}
                className="w-full rounded-xl border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-400"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">
                {t("applyForm.email")}
              </label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                className="w-full rounded-xl border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-400"
                required
              />
            </div>

            <div className="apply-form-phone">
              <label className="block font-semibold text-slate-800 mb-1">
                {t("contactForm.phone")}
              </label>
              <PhoneInput
                defaultCountry="ru"
                value={form.phone}
                onChange={(phone) => setForm((prev) => ({ ...prev, phone }))}
                className="rounded-xl  border border-gray-300 bg-white w-full"
                inputClassName="!bg-transparent !border-none !w-full !px-3 overflow-hidden! !py-5 focus:!outline-none "
              />
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

            {/* Country dropdown using react-select-country-list */}
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">
                {t("applyForm.country")}
              </label>
              <Select
                options={countryOptions}
                value={selectedCountry || null}
                onChange={(option) =>
                  setForm((prev) => ({
                    ...prev,
                    country: option ? option.value : "",
                  }))
                }
                placeholder={t("applyForm.selectCountry")}
                className="text-sm"
                styles={{
                  control: (base) => ({
                    ...base,
                    borderRadius: 12,
                    borderColor: "#d1d5db",
                    minHeight: "2.5rem",
                    boxShadow: "none",
                    "&:hover": { borderColor: "#fb7185" },
                  }),
                }}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">
                {t("applyForm.interestedIn")}
              </label>
              <select
                name="program"
                value={form.program}
                onChange={handleChange}
                className="w-full rounded-xl border border-gray-300 px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-red-400"
              >
                <option value="">{t("applyForm.selectProgram")}</option>
                <option value="intensive">
                  {t("applyForm.programs.intensive")}
                </option>
                <option value="evening">
                  {t("applyForm.programs.evening")}
                </option>
                <option value="online">{t("applyForm.programs.online")}</option>
                <option value="private">
                  {t("applyForm.programs.private")}
                </option>
                <option value="school">{t("applyForm.programs.school")}</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">
                {t("applyForm.message")}
              </label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                rows={4}
                className="w-full rounded-xl border border-gray-300 px-3 py-2 resize-none focus:outline-none focus:ring-2 focus:ring-red-400"
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-xl bg-[#e45944] hover:bg-[#d94c2e] text-white font-semibold py-3.5 cursor-pointer text-sm shadow-md transition-all duration-300"
            >
              {t("applyForm.sendRequest")}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
