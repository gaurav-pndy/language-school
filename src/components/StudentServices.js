// components/StudentServices.js

import { FiCheckCircle, FiCreditCard, FiHome } from "react-icons/fi";
import { IoDocumentTextOutline } from "react-icons/io5";

const services = [
  {
    title: "Visa Support",
    icon: <IoDocumentTextOutline className="text-3xl text-[#f6573f]" />,
    desc: "Complete visa assistance including:",
    bullets: [
      "Official invitation letter for student visa",
      "Step-by-step application guidance",
      "Migration registration upon arrival",
      "Visa extension assistance if needed",
    ],
    button: "Learn More",
  },
  {
    title: "Accommodation",
    icon: <FiHome className="text-3xl text-[#f6573f]" />,
    desc: "Comfortable housing options:",
    bullets: [
      "Student dormitory (shared/private rooms)",
      "Host family placement (cultural immersion)",
      "Private apartment assistance",
      "All within 20 minutes of school",
    ],
    button: "View Options",
  },
  {
    title: "Arrival & Orientation",
    icon: <FiCreditCard className="text-3xl text-[#f6573f]" />,
    desc: "Smooth transition to Russian life:",
    bullets: [
      "Airport pickup service available",
      "Orientation day & city tour",
      "Help with SIM cards, metro cards, banking",
      "24/7 emergency support",
    ],
    button: "Get Started",
  },
];

export default function StudentServices() {
  return (
    <section id="services" className="bg-gray-50 py-20">
      <div className="max-w-340 mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4 text-slate-900">
          Student Services
        </h2>
        <p className="text-lg md:text-xl max-w-2xl mx-auto text-center text-gray-500 mb-12">
          Complete support from application to graduation
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-white border border-gray-200 rounded-2xl shadow-sm p-6 flex flex-col transition hover:shadow-lg"
            >
              <span className="mb-6 flex items-center justify-center shrink-0 w-14 h-14 rounded-lg bg-[#fceeec]">
                {service.icon}
              </span>
              <h3 className="text-2xl font-semibold mb-4 text-slate-900">
                {service.title}
              </h3>
              <div className="text-gray-500 mb-2">{service.desc}</div>
              <ul className="mb-7 space-y-2">
                {service.bullets.map((item, idx) => (
                  <li key={idx} className="flex  gap-2 text-sm text-gray-700">
                    {/* Red checkmark icon */}
                    <FiCheckCircle className="text-[#f6573f] mt-1" />
                    {item}
                  </li>
                ))}
              </ul>
              <button
                type="button"
                className="w-full py-2.5 rounded-xl font-semibold text-slate-900 bg-white border border-gray-200 transition-all duration-300 cursor-pointer hover:bg-[#e45944] hover:text-white"
              >
                {service.button}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
