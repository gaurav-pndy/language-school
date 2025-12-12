"use client";

import { useState } from "react";
import { useTranslation } from "react-i18next";
import "@/utils/i18n";

export default function ApplyForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    country: "",
    program: "",
    message: "",
  });

  const { t } = useTranslation();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted", form);
  };

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
                {t("applyForm.fullName")}
              </label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder={t("applyForm.namePlaceholder")}
                className="w-full rounded-xl border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-400"
                required
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
                placeholder={t("applyForm.emailPlaceholder")}
                className="w-full rounded-xl border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-400"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">
                {t("applyForm.country")}
              </label>
              <input
                type="text"
                name="country"
                value={form.country}
                onChange={handleChange}
                placeholder={t("applyForm.countryPlaceholder")}
                className="w-full rounded-xl border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-400"
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
                placeholder={t("applyForm.messagePlaceholder")}
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
