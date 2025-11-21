import { LuGlobe, LuUsers } from "react-icons/lu";
import { IoBookOutline } from "react-icons/io5";
import { FiCheckCircle } from "react-icons/fi";

export default function WhyChoose() {
  const features = [
    {
      title: "Expert Teachers",
      description:
        "Native speakers with international teaching experience and modern methodology",
      icon: <LuUsers className="text-2xl text-[#f6573f]" />,
    },
    {
      title: "Flexible Programs",
      description:
        "Intensive, evening, online, and private lessons tailored to your schedule",
      icon: <IoBookOutline className="text-2xl text-[#f6573f]" />,
    },
    {
      title: "Full Support",
      description:
        "Visa assistance, accommodation, airport pickup, and ongoing student care",
      icon: <LuGlobe className="text-2xl text-[#f6573f]" />,
    },
    {
      title: "Proven Results",
      description:
        "15+ years helping international students achieve fluency and cultural understanding",
      icon: <FiCheckCircle className="text-2xl text-[#f6573f]" />,
    },
  ];

  return (
    <section className="bg-white py-20" id="features">
      <div className="max-w-340 mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4 text-slate-900">
          Why Choose RusLanguage?
        </h2>
        <p className="text-lg md:text-xl max-w-2xl mx-auto text-center text-gray-500 mb-12">
          More than just language lessons — a complete cultural immersion
          experience
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-white border border-gray-200 rounded-xl shadow-sm p-8 flex flex-col items-start transition hover:shadow-lg"
            >
              <span className="mb-6 flex items-center justify-center w-12 h-12 rounded-lg bg-[#fceeec]">
                {feature.icon}
              </span>
              <h3 className="text-xl font-semibold mb-3 text-slate-900">
                {feature.title}
              </h3>
              <p className="text-gray-500">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
