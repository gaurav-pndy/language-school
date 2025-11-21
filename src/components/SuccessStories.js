// components/StudentStories.js

import { FaStar } from "react-icons/fa";

const stories = [
  {
    name: "Maria Chen",
    country: "Taiwan",
    program: "Intensive Russian, 12 weeks",
    quote:
      "From zero Russian to B1 level in 3 months! The teachers are patient, the method works, and I made friends from around the world. The visa support made everything so easy.",
  },
  {
    name: "James Williams",
    country: "USA",
    program: "Private Lessons + Cultural Program",
    quote:
      "Flexible schedule, personalized attention, and they arranged amazing cultural excursions. My Russian improved dramatically, and I fell in love with the culture.",
  },
  {
    name: "Sophie Martin",
    country: "France",
    program: "Evening Classes, 6 months",
    quote:
      "Perfect for working in Russia! I could attend classes after work, and now I'm confident speaking Russian with colleagues and friends. Great community atmosphere.",
  },
];

export default function SuccessStories() {
  return (
    <section id="stories" className="bg-white py-20">
      <div className="max-w-340 mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4 text-slate-900">
          Student Success Stories
        </h2>
        <p className="text-lg md:text-xl max-w-2xl mx-auto text-center text-gray-500 mb-12">
          Hear from our international students
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stories.map((story) => (
            <div
              key={story.name}
              className="bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-lg p-6 flex flex-col transition-all duration-300"
            >
              {/* Stars */}
              <div
                className="mb-4 flex gap-1 text-yellow-400 text-lg"
                aria-label="5 stars"
              >
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className="" />
                ))}
              </div>
              <div className="font-semibold text-xl text-slate-900 mb-2">
                {story.name}
              </div>
              <div className="text-gray-500 mb-2">
                {story.country} &bull; {story.program}
              </div>
              <blockquote className="italic text-gray-600 mt-2">
                "{story.quote}"
              </blockquote>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
