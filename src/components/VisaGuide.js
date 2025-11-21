// components/VisaGuide.js

import { FiCheckCircle } from "react-icons/fi";
import { IoDocumentTextOutline } from "react-icons/io5";
import { LuShield } from "react-icons/lu";
import { SlPlane } from "react-icons/sl";
import { HiOutlineLocationMarker } from "react-icons/hi";

const steps = [
  {
    icon: <IoDocumentTextOutline />,
    step: 1,
    label: "3-5 business days",
    title: "Apply to Our School & Request Invitation",
    desc: "Submit your application and request visa support. We'll send you the official invitation letter needed for your visa application.",
  },
  {
    icon: <FiCheckCircle />,
    step: 2,
    label: "1-2 weeks",
    title: "Gather Required Documents",
    desc: "Prepare all necessary documents for your consulate application. See checklist below for complete list.",
  },
  {
    icon: <LuShield />,
    step: 3,
    label: "Appointment required",
    title: "Submit Application to Russian Consulate",
    desc: "Take all documents to your nearest Russian consulate or visa center. Pay the visa fee and submit your application.",
  },
  {
    icon: <SlPlane />,
    step: 4,
    label: "5-20 business days",
    title: "Receive Visa & Prepare Travel",
    desc: "Collect your approved visa and book your flights. Make sure to have all documents ready for border control.",
  },
  {
    icon: <HiOutlineLocationMarker />,
    step: 5,
    label: "Within 7 days of arrival",
    title: "Arrival in Russia: Migration Card & Registration",
    desc: "Upon arrival, complete migration card at border control. We'll help with registration within 7 days as required by law.",
  },
];

const requiredDocs = [
  "Valid passport (6+ months validity beyond visa expiration)",
  "Passport and photos (per consulate specification)",
  "Original invitation letter support letter from school",
  "Completed visa application form (online)",
  "Visa fee payment receipt",
  "Copy of school enrolment contract",
  "Medical insurance policy (as required)",
  "HIV/AIDS test certificate (if stay over 90 days)",
];

const arrivalChecklist = [
  "Migration card (keep safe throughout your stay)",
  "Registration notification (completed within 7 days)",
  "Health insurance policy",
  "School enrollment confirmation",
];

export default function VisaGuide() {
  return (
    <section id="visa" className="bg-white py-20">
      <div className="max-w-340 mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4 text-slate-900">
          Complete Visa Guide
        </h2>
        <p className="text-lg md:text-xl max-w-2xl mx-auto text-center text-gray-500 mb-12">
          Step-by-step process for obtaining your Russian student visa
        </p>

        <div className="space-y-6 mb-10">
          {steps.map((s) => (
            <div
              key={s.step}
              className="bg-white border border-gray-200 rounded-2xl py-5 px-6 flex flex-col md:flex-row gap-6 shadow-sm hover:dhadow-lg transition-all duration-300"
            >
              <div className="shrink-0">
                <span className="md:mb-6 flex items-center justify-center w-14 h-14 rounded-full shrink-0 bg-[#fceeec] text-3xl text-[#f6573f]">
                  {s.icon}
                </span>
              </div>
              <div>
                <div className="flex gap-4">
                  <span className=" rounded-full bg-[#274268] flex items-center justify-center text-white font-semibold text-xs leading-0 px-4 py-1">
                    Step {s.step}
                  </span>
                  <span className="py-1 text-xs bg-[#f3f4f7] text-gray-800 font-semibold px-4 rounded-full">
                    {s.label}
                  </span>
                </div>
                <div className="font-semibold text-base md:text-xl mt-2 mb-2 text-slate-900">
                  {s.title}
                </div>
                <div className="text-gray-600 text-sm">{s.desc}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Checklists */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
          {/* Documents Checklist */}
          <div className="border border-[#e45944] rounded-2xl p-6 ">
            <div className="font-semibold text-2xl text-slate-900 mb-2 flex gap-2 items-start">
              {/* Checklist Icon */}
              <IoDocumentTextOutline className="text-3xl shrink-0 mt-0.5 text-[#f6573f]" />
              Required Documents Checklist
            </div>
            <div className="text-gray-500 text-sm mb-6">
              Documents needed for visa application
            </div>
            <ul className="space-y-3 ">
              {requiredDocs.map((doc) => (
                <li key={doc} className="flex gap-2  text-gray-700">
                  <FiCheckCircle className="mt-1 shrink-0 text-lg text-[#f6573f]" />
                  {doc}
                </li>
              ))}
            </ul>
          </div>
          {/* Arrival Checklist */}
          <div className="border border-[#e45944] rounded-2xl p-6 ">
            <div className="font-semibold text-2xl text-slate-900 mb-2 flex gap-2">
              {/* Checklist Icon */}
              <SlPlane className="text-3xl shrink-0 mt-0.5 text-[#f6573f]" />
              On Arrival in Russia
            </div>
            <div className="text-gray-500 text-sm mb-6">
              What you need when you arrive
            </div>
            <ul className="space-y-3 ">
              {arrivalChecklist.map((doc) => (
                <li key={doc} className="flex gap-2  text-gray-700">
                  <FiCheckCircle className="mt-1 shrink-0 text-lg text-[#f6573f]" />
                  {doc}
                </li>
              ))}
            </ul>
            <div className="bg-[#fceeec] rounded-2xl p-4 mt-6  text-sm">
              <h6 className="font-semibold mb-4 text-slate-800">Important:</h6>
              <p className="text-gray-500">
                Our staff will meet you at the school and assist with
                registration formalities. We'll handle the paperwork with local
                authorities on your behalf.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
