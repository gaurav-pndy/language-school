// components/Programs.js

import { metadata } from "@/app/layout";
import { IoBookOutline } from "react-icons/io5";
import { LuCalendar } from "react-icons/lu";
import { FaRegClock } from "react-icons/fa";

const courses = [
  {
    title: "Intensive Russian",
    highlight: "Most Popular",
    metadata: ["2-12 weeks", "20 hours/week", "All levels"],
    description:
      "Fast-track program for rapid progress. Perfect for students with limited time.",
    price: "From €250/week",

    button: "Learn More",
  },
  {
    title: "Evening Classes",
    metadata: ["3-6 months", "6 hours/week", "A1-C1"],
    description:
      "Flexible schedule for working professionals and long-term residents.",
    price: "From €180/month",
    button: "Learn More",
  },
  {
    title: "Online Russian",
    metadata: ["Flexible", "Custom schedule", "All levels"],
    description:
      "Learn from anywhere with live online classes via Zoom. Same quality instruction.",
    price: "From €25/hour",
    button: "Learn More",
  },
  {
    title: "Private Lessons",
    metadata: ["Flexible", "Fully customizable", "All levels"],
    description:
      "One-on-one instruction tailored to your specific needs and goals.",
    price: "From €35/hour",
    button: "Learn More",
  },
  {
    title: "Summer School",
    metadata: ["2-4 weeks", "15 hours/week + activities", "All levels"],
    description:
      "Language learning plus cultural excursions. Perfect summer experience.",
    price: "From €450/week",
    button: "Learn More",
  },
  {
    title: "Exam Preparation",
    metadata: ["4-8 weeks", "12 hours/week", "B1-C2"],
    description: "TORFL/TRKI exam preparation with certified instructors.",
    price: "From €300/week",
    button: "Learn More",
  },
];

const startDatesInfo = [
  {
    title: "Intensive Courses",
    description: "Every Monday (year-round)",
  },
  {
    title: "Evening Classes",
    description: "1st Monday of each month",
  },
  {
    title: "Summer School",
    description: "June – August",
  },
];

export default function Programs() {
  return (
    <section id="courses" className="bg-gray-50 py-20">
      <div className="max-w-340 mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4 text-slate-900">
          Our Programs{" "}
        </h2>
        <p className="text-lg md:text-xl max-w-2xl mx-auto text-center text-gray-500 mb-12">
          Choose the course that fits your goals and schedule
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mb-10">
          {courses.map((course, idx) => (
            <div
              key={course.title}
              className={`bg-white  rounded-xl shadow-sm hover:shadow-xl p-6 transition-all duration-300 relative flex flex-col justify-between
                ${
                  course.highlight
                    ? "border-2 border-[#e45944]"
                    : "border border-gray-100"
                }`}
            >
              {/* Highlight Tag */}
              {course.highlight && (
                <span className="absolute -top-3.5 right-4 bg-[#e45944] text-white text-xs font-semibold px-3 py-1 rounded-full shadow">
                  {course.highlight}
                </span>
              )}
              <div>
                <h3 className="text-2xl font-medium mb-2 text-slate-900">
                  {course.title}
                </h3>
                <ul className="flex flex-col gap-1 mb-2 text-gray-500 text-sm">
                  <li className="flex items-center gap-2">
                    {/* Example icon: replace with icon library */}
                    <LuCalendar className="mt-0.5" />
                    {course.metadata[0]}
                  </li>
                  <li className="flex items-center gap-2">
                    {/* Example icon: replace with icon library */}
                    <FaRegClock className="mt-0.5" />
                    {course.metadata[1]}
                  </li>
                  <li className="flex items-center gap-2">
                    {/* Example icon: replace with icon library */}
                    <IoBookOutline className="mt-0.5" />
                    {course.metadata[2]}
                  </li>
                </ul>
                <p className="text-gray-500 mb-4 min-h-[52px]">
                  {course.description}
                </p>
              </div>
              <div className="flex justify-between items-center">
                <span className={`block font-bold text-lg text-[#e45944]`}>
                  {course.price}
                </span>
                <button
                  type="button"
                  className={`px-5 py-2 rounded-lg cursor-pointer font-semibold shadow ${
                    course.highlight
                      ? "bg-[#e45944] hover:bg-red-600 text-white"
                      : "bg-[#274268] hover:bg-slate-950 text-white"
                  } transition`}
                >
                  {course.button}
                </button>
              </div>
            </div>
          ))}
        </div>
        {/* Start Dates Banner */}
        <div className="bg-linear-to-r from-[#274167] to-[#1f3452] text-white rounded-xl p-8 mt-8 ">
          <h4 className="font-semibold text-2xl mb-1 ">Course Start Dates</h4>
          <p className="text-white/80 text-sm mb-6">
            Group courses start on the first Monday of each month
          </p>
          <ul className="grid md:grid-cols-3 gap-8 justify-between ">
            {startDatesInfo.map((info) => (
              <li key={info.title}>
                <div className="font-semibold mb-1 text-lg">{info.title}</div>
                <div className="text-white/80 ">{info.description}</div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
