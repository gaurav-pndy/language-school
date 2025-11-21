// components/Admissions.js

import { IoBookOutline, IoDocumentTextOutline } from "react-icons/io5";
import { LuClipboardCheck, LuVideo } from "react-icons/lu";

const steps = [
  {
    title: "Choose Your Course",
    icon: <IoBookOutline />,
    num: "01",
    desc: "Browse our programs and select the course that matches your goals and schedule.",
  },
  {
    title: "Complete Application Form",
    icon: <IoDocumentTextOutline />,
    num: "02",
    desc: "Fill out our online application form with your personal and educational information.",
  },
  {
    title: "Free Placement Test",
    icon: <LuClipboardCheck />,
    num: "03",
    desc: "Take our online placement test to determine your current Russian level (beginner to advanced).",
  },
  {
    title: "Interview & Consultation",
    icon: <LuVideo />,
    num: "04",
    desc: "Schedule a free video consultation with our admissions team to discuss your learning plan.",
  },
];

export default function Admissions() {
  return (
    <section id="admissions" className="bg-[#fafbfb] py-20">
      <div className="max-w-340 mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4 text-slate-900">
          Admissions & Registration
        </h2>
        <p className="text-lg md:text-xl max-w-2xl mx-auto text-center text-gray-500 mb-12">
          Simple enrollment process — start learning Russian in 4 easy steps
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {steps.map((step) => (
            <div
              key={step.title}
              className="bg-white rounded-2xl border border-gray-200 p-6 flex flex-col items-center text-center hover:shadow-lg transition-all duration-300"
            >
              <div className="w-16 h-16 rounded-full flex items-center justify-center bg-linear-to-br from-[#474661] to-[#c7564a] text-white text-3xl mb-4">
                {step.icon}
              </div>
              <span className="block text-xs font-bold bg-[#e45944] text-white rounded-full px-3 py-1 mb-2">
                {step.num}
              </span>
              <h3 className="text-lg font-semibold mb-4 text-slate-900">
                {step.title}
              </h3>
              <p className="text-gray-500 text-sm">{step.desc}</p>
            </div>
          ))}
        </div>
        {/* Lower Info Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Placement Test */}
          <div className="bg-white border border-[#e45944] rounded-2xl p-6">
            <h4 className="text-2xl font-semibold text-slate-900 mb-1">
              Free Placement Test
            </h4>
            <div className="text-slate-500 mb-6 text-sm">
              Determine your Russian level in 20 minutes
            </div>
            <div className="mb-4 text-gray-600">
              Our comprehensive online test evaluates your reading, listening,
              grammar, and vocabulary to place you in the right level group.
            </div>
            <div className="mb-3 text-sm space-y-2">
              <p>
                <span className="font-bold">Levels tested:</span> A1 (Beginner)
                → C2 (Advanced)
              </p>

              <p>
                {" "}
                <span className="font-bold">Duration:</span> 15-20 minutes
              </p>
              <p>
                <span className="font-bold">Format:</span> Online, multiple
                choice + short answers
              </p>
            </div>
            <button className="bg-[#e45944] text-white font-semibold px-6 py-3 rounded-lg w-full mt-3 hover:bg-red-600 transition-all duration-300 cursor-pointer">
              Take Placement Test
            </button>
          </div>
          {/* Trial Lesson */}
          <div className="bg-white border border-[#e45944] rounded-2xl p-6">
            <h4 className="text-2xl font-semibold text-slate-900 mb-1">
              Free Trial Lesson
            </h4>
            <div className="text-slate-500 mb-6 text-sm">
              Experience our teaching method firsthand
            </div>
            <div className="mb-4 text-gray-600">
              Join a real group lesson or schedule a one-on-one trial session
              with our teachers before committing to a full course.
            </div>
            <div className="mb-3 text-sm space-y-2">
              <p>
                <span className="font-bold">Duration:</span> 45 minutes
              </p>
              <p>
                <span className="font-bold">Format:</span> In-person or online
                (your choice)
              </p>{" "}
              <p>
                <span className="font-bold">Cost:</span> Completely free, no
                obligation
              </p>
            </div>
            <button className="bg-white border border-gray-300 font-semibold px-6 py-3 rounded-lg w-full mt-3 hover:bg-[#e45944] hover:text-white transition-all duration-300 cursor-pointer">
              Book Trial Lesson
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
