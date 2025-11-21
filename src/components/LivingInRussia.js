"use client";

import { useState } from "react";
import { FiDollarSign } from "react-icons/fi";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { PiForkKnife, PiTrain } from "react-icons/pi";
import { BsSuitcaseLg } from "react-icons/bs";
import { FaBuildingColumns } from "react-icons/fa6";
import { LuShield } from "react-icons/lu";
import { FaRegHeart } from "react-icons/fa";

const tabContent = [
  {
    label: "Cost of Living",
    content: (
      <div className="bg-white rounded-2xl shadow border border-gray-200 p-6">
        <h3 className="text-2xl font-semibold mb-1 text-slate-900 flex items-center">
          <FiDollarSign className="mr-2 text-3xl text-[#f6573f]" /> Monthly
          Living Costs in Moscow
        </h3>
        <div className="text-gray-500 text-sm mb-6">
          Approximate costs for international students (in euros)
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="flex items-center p-4 rounded-xl bg-[#f7f8f9]">
            <span className="mr-4 flex items-center justify-center w-14 h-14 rounded-xl shrink-0 bg-[#fceeec] text-3xl text-[#f6573f]">
              <HiOutlineLocationMarker />
            </span>
            <div>
              <div className="font-semibold text-slate-900 mb-1">
                Accommodation
              </div>
              <div className="font-bold text-lg text-[#f6573f]">
                €200-400/month
              </div>
            </div>
          </div>
          <div className="flex items-center p-4 rounded-xl bg-[#f7f8f9]">
            <span className="mr-4 flex items-center justify-center w-14 h-14 rounded-xl shrink-0 bg-[#fceeec] text-3xl text-[#f6573f]">
              <PiForkKnife />
            </span>
            <div>
              <div className="font-semibold text-slate-900 mb-1">
                Food & Groceries
              </div>
              <div className="font-bold text-lg text-[#f6573f]">
                €150-250/month
              </div>
            </div>
          </div>
          <div className="flex items-center p-4 rounded-xl bg-[#f7f8f9]">
            <span className="mr-4 flex items-center justify-center w-14 h-14 rounded-xl shrink-0 bg-[#fceeec] text-3xl text-[#f6573f]">
              <PiTrain />
            </span>
            <div>
              <div className="font-semibold text-slate-900 mb-1">
                Transport (Metro pass)
              </div>
              <div className="font-bold text-lg text-[#f6573f]">€30/month</div>
            </div>
          </div>
          <div className="flex items-center p-4 rounded-xl bg-[#f7f8f9]">
            <span className="mr-4 flex items-center justify-center w-14 h-14 rounded-xl shrink-0 bg-[#fceeec] text-3xl text-[#f6573f]">
              <BsSuitcaseLg />
            </span>
            <div>
              <div className="font-semibold text-slate-900 mb-1">
                Entertainment
              </div>
              <div className="font-bold text-lg text-[#f6573f]">
                €50-100/month
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#fceeec] rounded-xl p-4 mt-6">
          <h6 className="font-semibold text-slate-800 mb-2">
            Total estimated monthly cost:{" "}
          </h6>
          <p className="font-bold text-2xl text-[#f6573f] mb-2">€430 - €780</p>

          <div className="text-gray-500 text-sm">
            This makes Moscow one of the most affordable major cities in Europe
            for international students.
          </div>
        </div>
      </div>
    ),
  },
  {
    label: "City Guide",
    content: (
      <div className="bg-white rounded-2xl shadow border border-gray-200 p-6">
        <h3 className="text-2xl font-semibold mb-1 text-slate-900 flex items-center">
          <FaBuildingColumns className="mr-2 text-3xl text-[#f6573f]" /> Moscow
          City Guide
        </h3>
        <div className="text-gray-500 text-sm mb-6">
          Must-see attractions and cultural highlights
        </div>
        <div className="grid sm:grid-cols-2 gap-4 mb-6">
          <div className="rounded-xl border border-gray-200 p-4">
            <div className="font-semibold mb-2">Red Square & Kremlin</div>
            <div className="text-sm text-gray-600">
              Iconic historic center, UNESCO World Heritage site
            </div>
          </div>
          <div className="rounded-xl border border-gray-200 p-4">
            <div className="font-semibold mb-2">Tretyakov Gallery</div>
            <div className="text-sm text-gray-600">
              World-class Russian art museum
            </div>
          </div>
          <div className="rounded-xl border border-gray-200 p-4">
            <div className="font-semibold mb-2">Bolshoi Theatre</div>
            <div className="text-sm text-gray-600">
              Historic opera and ballet performances
            </div>
          </div>
          <div className="rounded-xl border border-gray-200 p-4">
            <div className="font-semibold mb-2">Gorky Park</div>
            <div className="text-sm text-gray-600">
              Modern urban park with cultural events
            </div>
          </div>
          <div className="rounded-xl border border-gray-200 p-4">
            <div className="font-semibold mb-2">Arbat Street</div>
            <div className="text-sm text-gray-600">
              Historic pedestrian street with shops and cafes
            </div>
          </div>
          <div className="rounded-xl border border-gray-200 p-4">
            <div className="font-semibold mb-2">Moscow Metro</div>
            <div className="text-sm text-gray-600">
              Architectural masterpiece underground
            </div>
          </div>
        </div>
        <div className="bg-[#f7f8f9] rounded-lg p-4 my-4 ">
          <h6 className="flex items-center mb-2">
            <PiTrain className="text-lg mr-2 text-[#f6573f]" />{" "}
            <span className="font-semibold">Getting Around</span>
          </h6>
          <div>
            <p className="text-gray-600 text-sm">
              Moscow has one of the world's most efficient metro systems. A
              monthly pass costs just €30 and covers unlimited rides. The metro
              is fast, clean, and many stations are architectural marvels worth
              visiting.
            </p>
          </div>
        </div>
        <div className="bg-[#f7f8f9] rounded-lg p-4 my-4 ">
          <h6 className="flex items-center mb-2">
            <span className="font-semibold">Location Benefits</span>
          </h6>
          <div>
            <p className="text-gray-600 text-sm">
              Our school is located in central Moscow near
              Pushkinskaya/Tverskaya metro stations, placing you within minutes
              of major attractions, restaurants, and cultural venues.
            </p>
          </div>
        </div>
      </div>
    ),
  },
  {
    label: "Safety & Health",
    content: (
      <div className="bg-white rounded-2xl shadow border border-gray-200 p-6">
        <h3 className="text-2xl font-semibold mb-1 text-slate-900 flex items-center">
          <LuShield className="mr-2 text-3xl text-[#f6573f]" /> Safety & Health
          Information
        </h3>
        <div className="text-gray-500 text-sm mb-6">
          Stay safe and healthy during your stay in Russia
        </div>
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2 text-slate-900 flex items-center">
            <LuShield className="mr-2 text-xl text-[#f6573f]" /> Safety Tips
          </h3>
          <ul className=" space-y-2 text-sm text-gray-700">
            <li className="flex gap-2">
              {" "}
              <span className="bg-[#f3f4f7] text-slate-900 font-medium text-xs rounded-full w-6 flex justify-center items-center h-6 shrink-0">
                1
              </span>{" "}
              <p className="mt-0.5">
                {" "}
                Always carry your passport and migration card
              </p>
            </li>
            <li className="flex gap-2">
              {" "}
              <span className="bg-[#f3f4f7] text-slate-900 font-medium text-xs rounded-full w-6 flex justify-center items-center h-6 shrink-0">
                2
              </span>{" "}
              <p className="mt-0.5">
                {" "}
                Register your address within 7 days of arrival (we help with
                this)
              </p>
            </li>
            <li className="flex gap-2">
              {" "}
              <span className="bg-[#f3f4f7] text-slate-900 font-medium text-xs rounded-full w-6 flex justify-center items-center h-6 shrink-0">
                3
              </span>{" "}
              <p className="mt-0.5">
                {" "}
                Learn basic Russian phrases for emergencies
              </p>
            </li>
            <li className="flex gap-2">
              {" "}
              <span className="bg-[#f3f4f7] text-slate-900 font-medium text-xs rounded-full w-6 flex justify-center items-center h-6 shrink-0">
                4
              </span>{" "}
              <p className="mt-0.5">
                {" "}
                Save emergency numbers: Police (102), Ambulance (103), Fire
                (101)
              </p>
            </li>
            <li className="flex gap-2">
              {" "}
              <span className="bg-[#f3f4f7] text-slate-900 font-medium text-xs rounded-full w-6 flex justify-center items-center h-6 shrink-0">
                5
              </span>{" "}
              <p className="mt-0.5">
                {" "}
                Use official taxis or ride-sharing apps (Yandex Taxi, Uber)
              </p>
            </li>
            <li className="flex gap-2">
              {" "}
              <span className="bg-[#f3f4f7] text-slate-900 font-medium text-xs rounded-full w-6 flex justify-center items-center h-6 shrink-0">
                6
              </span>{" "}
              <p className="mt-0.5">
                {" "}
                Moscow is generally safe, but be aware of your surroundings in
                crowded places
              </p>
            </li>
          </ul>
        </div>
        <div className="bg-[#fceeec] rounded-xl p-4 mt-6">
          <h6 className="flex items-center mb-2">
            <FaRegHeart className="text-lg mr-2 text-[#f6573f]" />{" "}
            <span className="font-semibold">
              Health Insurance & Medical Care
            </span>
          </h6>
          <div className="mb-2 text-sm">
            <span className="font-semibold">Insurance requirement:</span> All
            international students must have medical insurance valid in Russia.
            We recommend policies starting from €20/month.
          </div>
          <div className="mb-2 text-sm">
            <span className="font-semibold">Medical facilities:</span> Moscow
            has excellent private and public hospitals. We'll provide you with a
            list of English-speaking doctors and clinics near the school.
          </div>
          <div className=" text-sm">
            <span className="font-semibold">Emergency numbers:</span>
            <br />
            &bull; Ambulance: 103 or 112
            <br />
            &bull; 24/7 School Support: Available for emergencies
          </div>
        </div>
      </div>
    ),
  },
  {
    label: "Pre-Arrival",
    content: (
      <div className="bg-white rounded-2xl shadow border border-gray-200 p-6">
        <h3 className="text-2xl font-semibold mb-1 text-slate-900 flex items-center">
          Pre-Arrival Checklist
        </h3>
        <div className="text-gray-500 text-sm mb-6">
          Make sure you have everything ready before traveling to Russia
        </div>
        <div className="mb-4">
          <div className="font-semibold text-[#f6573f] mb-2">
            Essential Documents
          </div>
          <ul className="space-y-2 text-sm">
            <li className="flex gap-2">
              <input type="checkbox" disabled className="mt-0.5  bg-white" />
              Valid passport (6+ months validity)
            </li>
            <li className="flex gap-2">
              <input type="checkbox" disabled className="mt-0.5  bg-white" />
              Russian student visa
            </li>
            <li className="flex gap-2">
              <input type="checkbox" disabled className="mt-0.5  bg-white" />
              Invitation letter from school (original)
            </li>
            <li className="flex gap-2">
              <input type="checkbox" disabled className="mt-0.5  bg-white" />
              School enrollment confirmation
            </li>
            <li className="flex gap-2">
              <input type="checkbox" disabled className="mt-0.5  bg-white" />
              Medical insurance policy
            </li>
            <li className="flex gap-2">
              <input type="checkbox" disabled className="mt-0.5  bg-white" />
              HIV certificate (for long-term visas)
            </li>
            <li className="flex gap-2">
              <input type="checkbox" disabled className="mt-0.5  bg-white" />
              Copies of all Important documents (keep digital and physical)
            </li>
          </ul>
        </div>
        <div className="mb-6">
          <div className="font-semibold text-[#f6573f] mb-2">What to Pack</div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-2">
            <div>
              <span className="font-semibold">Clothing</span>
              <ul className="text-sm text-gray-500 list-disc space-y-1 pl-4 mt-2">
                <li>Warm winter clothes (Nov–March)</li>
                <li>Comfortable walking shoes</li>
                <li>Formal outfit for special events</li>
              </ul>
            </div>
            <div>
              <span className="font-semibold">Other Essentials</span>
              <ul className="text-sm text-gray-500 list-disc space-y-1 pl-4 mt-2">
                <li>Unlocked smartphone</li>
                <li>Power adapter (European plug)</li>
                <li>Any prescription medications</li>
                <li>Russian phrasebook or app</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="rounded-lg bg-[#e9ecef] p-4 ">
          <h6 className="font-semibold mb-2">Airport Pickup Service</h6>
          <p className="text-gray-500 text-sm">
            We offer airport pickup service for €50. Our staff will meet you at
            arrivals with a sign, help with your luggage, and take you directly
            to your accommodation. Request this service in your application
            form.
          </p>
        </div>
      </div>
    ),
  },
];

export default function LivingInRussia() {
  const [active, setActive] = useState(0);

  return (
    <section id="living" className="bg-gray-50 py-20">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4 text-slate-900">
          Living in Russia
        </h2>
        <p className="text-lg md:text-xl max-w-2xl mx-auto text-center text-gray-500 mb-12">
          Everything you need to know about life as an international student in
          Moscow
        </p>
        {/* Tab headers */}
        <div className="mb-8 grid grid-cols-2 md:grid-cols-4 bg-[#f3f4f7] p-1 rounded-xl gap-2">
          {tabContent.map((tab, i) => (
            <button
              key={tab.label}
              onClick={() => setActive(i)}
              className={`px-6 cursor-pointer text-xs md:text-sm py-2 rounded-xl font-medium outline-none transition 
                ${
                  active === i
                    ? "bg-white shadow text-slate-900"
                    : " text-gray-600"
                }`}
              type="button"
            >
              {tab.label}
            </button>
          ))}
        </div>
        {/* Tab content */}
        <div>{tabContent[active].content}</div>
      </div>
    </section>
  );
}
