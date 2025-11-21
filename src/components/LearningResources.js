// components/LearningResources.js

import { IoDocumentTextOutline, IoVideocamOutline } from "react-icons/io5";
import { LuGraduationCap, LuHeadphones } from "react-icons/lu";

const resources = [
  {
    icon: <LuGraduationCap />,
    title: "Student Portal Access",
    desc: "24/7 access to course materials, homework assignments, and progress tracking",
    list: [
      "Digital workbooks",
      "Video lessons library",
      "Grammar exercises",
      "Progress reports",
    ],
  },
  {
    icon: <LuHeadphones />,
    title: "Audio & Pronunciation",
    desc: "Native speaker recordings for listening practice and accent training",
    list: [
      "Dialogue recordings",
      "Pronunciation guides",
      "Listening exercises",
      "Podcast series",
    ],
  },
  {
    icon: <IoVideocamOutline />,
    title: "Video Lessons",
    desc: "Supplementary video content covering grammar, culture, and everyday situations",
    list: [
      "Grammar tutorials",
      "Cultural insights",
      "Real-life scenarios",
      "Recorded lectures",
    ],
  },
  {
    icon: <IoDocumentTextOutline />,
    title: "Free Resources",
    desc: "Downloadable PDFs and materials for self-study",
    list: [
      "Vocabulary lists",
      "Grammar cheat sheets",
      "Sample lessons",
      "Practice tests",
    ],
  },
];

export default function LearningResources() {
  return (
    <section id="resources" className="bg-white py-20">
      <div className="max-w-340 mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4 text-slate-900">
          Learning Resources & Portal
        </h2>
        <p className="text-lg md:text-xl max-w-2xl mx-auto text-center text-gray-500 mb-12">
          Access comprehensive learning materials and join our online community
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {resources.map((item) => (
            <div
              key={item.title}
              className="bg-white border border-gray-200 rounded-xl shadow-sm p-6 flex flex-col hover:shadow-lg transition"
            >
              <span className="text-3xl text-[#f6573f] mb-6 flex items-center justify-center shrink-0 w-14 h-14 rounded-lg bg-[#fceeec]">
                {item.icon}
              </span>
              <h3 className="text-xl font-semibold mb-2 text-slate-900">
                {item.title}
              </h3>
              <div className="text-gray-500 text-sm mb-4">{item.desc}</div>
              <ul className=" text-gray-500 text-sm">
                {item.list.map((str) => (
                  <li key={str} className="flex items-center ">
                    <span
                      className="mr-2 text-[#e87f6a] text-lg"
                      aria-hidden="true"
                    >
                      •
                    </span>
                    {str}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
