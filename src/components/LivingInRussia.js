"use client";

import { useState } from "react";
import { useTranslation } from "react-i18next";
import "@/utils/i18n";
import { FiDollarSign } from "react-icons/fi";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { PiForkKnife, PiTrain } from "react-icons/pi";
import { BsSuitcaseLg } from "react-icons/bs";
import { FaBuildingColumns, FaCar } from "react-icons/fa6";
import { LuShield } from "react-icons/lu";
import { FaMobileAlt, FaRegHeart } from "react-icons/fa";
import { IoHomeOutline } from "react-icons/io5";
import {
  MdOutlineElectricalServices,
  MdOutlineLocalGroceryStore,
} from "react-icons/md";

export default function LivingInRussia() {
  const { t } = useTranslation();
  const [active, setActive] = useState(0);

  const tabs = [
    { key: "cost", label: t("living.tabs.cost") },
    { key: "city", label: t("living.tabs.city") },
    { key: "safety", label: t("living.tabs.safety") },
  ];

  return (
    <section id="living" className="bg-gray-50 py-6">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4 text-slate-900">
          {t("living.title")}
        </h2>
        <p className="text-lg md:text-xl max-w-2xl mx-auto text-center text-gray-500 mb-12">
          {t("living.subtitle")}
        </p>

        {/* Tab headers */}
        <div className="mb-8 grid grid-cols-1 md:grid-cols-3 bg-[#f3f4f7] p-1 rounded-xl gap-2">
          {tabs.map((tab, i) => (
            <button
              key={tab.key}
              onClick={() => setActive(i)}
              type="button"
              className={`px-6 cursor-pointer text-sm py-2 rounded-xl font-medium outline-none transition ${
                active === i
                  ? "bg-white shadow text-slate-900"
                  : "text-gray-600"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab content */}
        {active === 0 && <CostTab />}
        {active === 1 && <CityTab />}
        {active === 2 && <SafetyTab />}
      </div>
    </section>
  );
}

function CostTab() {
  const { t } = useTranslation();

  return (
    <div className="bg-white rounded-2xl shadow border border-gray-200 p-6">
      <h3 className="text-2xl font-semibold mb-1 text-slate-900 flex items-center">
        <FiDollarSign className="mr-2 text-3xl text-[#f6573f]" />
        {t("living.cost.heading")}
      </h3>
      <div className="text-gray-500  mb-6">{t("living.cost.subheading")}</div>

      <div className="grid grid-cols-1 md:grid-cols-2  gap-4">
        {/* Left column */}
        <div className="grid items-stretch space-y-4">
          {/* Accommodation */}
          <div className="rounded-xl flex gap-2 justify-between bg-[#f7f8fa] p-4 ">
            <div>
              <div className=" text-lg items-center mb-2">
                <span className="font-semibold text-slate-900">
                  {t("living.cost.blocks.accommodation.title")}
                </span>
                <span className="text-[#e45944] font-semibold">
                  {t("living.cost.blocks.accommodation.price")}
                </span>
              </div>
              <ul className=" list-disc  text-gray-600 list-inside">
                {t("living.cost.blocks.accommodation.text", {
                  returnObjects: true,
                }).map((str, i) => (
                  <li key={i}>{str}</li>
                ))}
              </ul>
            </div>

            <span className="mb-6 flex items-center justify-center w-12 h-12 rounded-lg font-bold bg-[#fceeec] shrink-0 text-[#f6573f] text-2xl">
              <IoHomeOutline />
            </span>
          </div>

          {/* Utilities */}
          <div className="rounded-xl flex gap-2 justify-between bg-[#f7f8fa] p-4">
            <div>
              <div className=" text-lg items-center mb-2">
                <span className="font-semibold text-slate-900">
                  {t("living.cost.blocks.utilities.title")}
                </span>
                <span className="text-[#e45944] font-semibold">
                  {t("living.cost.blocks.utilities.price")}
                </span>
              </div>
              <p className=" text-gray-600 whitespace-pre-line">
                {t("living.cost.blocks.utilities.text")}
              </p>
            </div>
            <span className="mb-6 flex items-center shrink-0 justify-center w-12 h-12 rounded-lg font-bold bg-[#fceeec] text-[#f6573f] text-2xl">
              <MdOutlineElectricalServices />
            </span>
          </div>

          {/* Mobile */}
          <div className="rounded-xl flex gap-2 justify-between bg-[#f7f8fa] p-4">
            <div>
              <div className=" text-lg items-center mb-2">
                <span className="font-semibold text-slate-900">
                  {t("living.cost.blocks.mobile.title")}
                </span>
                <span className="text-[#e45944] font-semibold">
                  {t("living.cost.blocks.mobile.price")}
                </span>
              </div>
              <p className=" text-gray-600 whitespace-pre-line">
                {t("living.cost.blocks.mobile.text")}
              </p>
            </div>
            <span className="mb-6 flex items-center justify-center w-12 h-12 rounded-lg font-bold bg-[#fceeec] shrink-0 text-[#f6573f] text-2xl">
              <FaMobileAlt />
            </span>
          </div>
        </div>

        {/* Right column */}
        <div className="grid items-stretch space-y-4">
          {/* Transport */}
          <div className="rounded-xl flex gap-2 justify-between bg-[#f7f8fa] p-4">
            <div>
              <div className="text-lg items-center mb-2">
                <span className="font-semibold text-slate-900">
                  {t("living.cost.blocks.transport.title")}
                </span>
                <span className="text-[#e45944] font-semibold">
                  {t("living.cost.blocks.transport.price")}
                </span>
              </div>
              <p className=" text-gray-600 whitespace-pre-line">
                {t("living.cost.blocks.transport.text")}
              </p>
            </div>
            <span className="mb-6 flex items-center shrink-0 justify-center w-12 h-12 rounded-lg font-bold bg-[#fceeec] text-[#f6573f] text-2xl">
              <FaCar />
            </span>
          </div>

          {/* Groceries */}
          <div className="rounded-xl flex gap-2 justify-between bg-[#f7f8fa] p-4">
            <div>
              <div className=" text-lg items-center mb-2">
                <span className="font-semibold text-slate-900">
                  {t("living.cost.blocks.groceries.title")}
                </span>{" "}
                <span className="text-[#e45944] font-semibold">
                  {t("living.cost.blocks.groceries.price")}
                </span>
              </div>
              <p className=" text-gray-600 whitespace-pre-line">
                {t("living.cost.blocks.groceries.text")}
              </p>
            </div>
            <span className="mb-6 flex items-center shrink-0 justify-center w-12 h-12 rounded-lg font-bold bg-[#fceeec] text-[#f6573f] text-2xl">
              <MdOutlineLocalGroceryStore />
            </span>
          </div>

          {/* Total panel */}
          <div className="rounded-xl  bg-[#274268] text-white p-4 space-y-2">
            <p className="font-semibold ">{t("living.cost.total.heading")}</p>
            <p className="whitespace-pre-line">{t("living.cost.total.note")}</p>
            <div className="flex flex-wrap gap-2 mt-1">
              <p className="inline-flex items-center px-3 py-1.5 gap-1 rounded-lg bg-white text-slate-900 font-semibold">
                <span>{t("living.cost.total.min")} </span>{" "}
                <span className="text-[#e45944]">
                  {t("living.cost.total.minPrice")}
                </span>
              </p>
              <p className="inline-flex items-center px-3 py-1.5 gap-1 rounded-lg bg-white text-slate-900 font-semibold">
                <span>{t("living.cost.total.max")} </span>{" "}
                <span className="text-[#e45944]">
                  {t("living.cost.total.maxPrice")}
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function CostItem({ icon, label, value }) {
  return (
    <div className="flex items-center p-4 rounded-xl bg-[#f7f8f9]">
      <span className="mr-4 flex items-center justify-center w-14 h-14 rounded-lg shrink-0 bg-[#fceeec] text-3xl text-[#f6573f]">
        {icon}
      </span>
      <div>
        <div className="font-semibold text-slate-900 mb-1">{label}</div>
        <div className="font-bold text-lg text-[#f6573f]">{value}</div>
      </div>
    </div>
  );
}

function CityTab() {
  const { t } = useTranslation();

  const places = ["red", "tretyakov", "bolshoi", "gorky", "arbat", "metro"];

  return (
    <div className="bg-white rounded-2xl shadow border border-gray-200 p-6">
      <h3 className="text-2xl font-semibold mb-1 text-slate-900 flex items-center">
        <FaBuildingColumns className="mr-2 text-3xl text-[#f6573f]" />
        {t("living.city.heading")}
      </h3>
      <div className="text-gray-500  mb-6">{t("living.city.subheading")}</div>

      <div className="grid sm:grid-cols-2 gap-4 mb-6">
        {places.map((key) => (
          <div key={key} className="rounded-xl border border-gray-200 p-4">
            <div className="font-semibold mb-2">
              {t(`living.city.places.${key}.title`)}
            </div>
            <div className="text-sm text-gray-600">
              {t(`living.city.places.${key}.desc`)}
            </div>
          </div>
        ))}
      </div>

      <div className="bg-[#f7f8f9] rounded-lg p-4 my-4">
        <h6 className="flex items-center mb-2">
          <PiTrain className="text-lg mr-2 text-[#f6573f]" />
          <span className="font-semibold">
            {t("living.city.gettingAroundTitle")}
          </span>
        </h6>
        <p className="text-gray-600 text-sm">
          {t("living.city.gettingAroundText")}
        </p>
      </div>

      <div className="bg-[#f7f8f9] rounded-lg p-4 my-4">
        <h6 className="flex items-center mb-2">
          <span className="font-semibold">
            {t("living.city.locationTitle")}
          </span>
        </h6>
        <p className="text-gray-600 text-sm">{t("living.city.locationText")}</p>
      </div>
    </div>
  );
}

function SafetyTab() {
  const { t } = useTranslation();
  const tips = t("living.safety.tips", { returnObjects: true });
  return (
    <div className="bg-white rounded-2xl shadow border border-gray-200 p-6">
      <h3 className="text-2xl font-semibold mb-1 text-slate-900 flex items-center">
        <LuShield className="mr-2 text-3xl text-[#f6573f]" />
        {t("living.safety.heading")}
      </h3>
      <div className="text-gray-500 mb-6">{t("living.safety.subheading")}</div>

      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-2 text-slate-900 flex items-center">
          <LuShield className="mr-2 text-xl text-[#f6573f]" />
          {t("living.safety.tipsTitle")}
        </h3>
        <ul className="space-y-2 text-sm text-gray-700">
          {tips.map((tip, index) => (
            <li key={index} className="flex gap-2">
              <span className="bg-[#f3f4f7] text-slate-900 font-medium text-xs rounded-full w-6 h-6 flex justify-center items-center shrink-0">
                {index + 1}
              </span>
              <p className="mt-0.5">{tip}</p>
            </li>
          ))}
        </ul>
      </div>

      <div className="bg-[#fceeec] rounded-xl p-4 mt-6">
        <h6 className="flex items-center mb-2">
          <FaRegHeart className="text-lg mr-2 text-[#f6573f]" />
          <span className="font-semibold">
            {t("living.safety.healthTitle")}
          </span>
        </h6>
        <div className="mb-2 text-sm">
          <span className="font-semibold">
            {t("living.safety.insurance").split(":")[0]}:
          </span>{" "}
          {t("living.safety.insurance").split(":").slice(1).join(":").trim() ||
            t("living.safety.insurance")}
        </div>
        <div className="mb-2 text-sm">{t("living.safety.facilities")}</div>
        <div className="text-sm whitespace-pre-line">
          {t("living.safety.emergency")}
        </div>
      </div>
    </div>
  );
}
