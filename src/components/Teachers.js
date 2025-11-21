// components/Teachers.js

const teachers = [
  {
    name: "Elena Petrova",
    role: "Lead Instructor",
    experience: "12 years of experience",
    bio: "PhD in Russian Philology. Specializes in intensive programs and exam preparation. Former lecturer at Moscow State University.",
    tags: ["Grammar", "TORFL Prep", "Academic Russian"],
    image: "/teachers/1.jpg", // Change to your image path
  },
  {
    name: "Dmitri Sokolov",
    role: "Senior Teacher",
    experience: "15 years of experience",
    bio: "Master's in Russian Literature. Expert in conversation practice and cultural immersion. Published author on language pedagogy.",
    tags: ["Conversation", "Literature", "Business Russian"],
    image: "/teachers/2.jpg", // Change to your image path
  },
  {
    name: "Anna Volkova",
    role: "Online Program Director",
    experience: "8 years of experience",
    bio: "Certified TEFL/TESOL instructor. Specializes in online teaching methodology and beginner-level instruction.",
    tags: ["Beginners", "Online Teaching", "Phonetics"],
    image: "/teachers/3.jpg", // Change to your image path
  },
];

export default function Teachers() {
  return (
    <section id="teachers" className="bg-white py-20">
      <div className="max-w-340 mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4 text-slate-900">
          Meet Our Teachers
        </h2>
        <p className="text-lg md:text-xl max-w-2xl mx-auto text-center text-gray-500 mb-12">
          Experienced, certified instructors passionate about teaching Russian
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {teachers.map((teacher) => (
            <div
              key={teacher.name}
              className="bg-white border border-gray-200 rounded-2xl shadow-sm p-6 flex flex-col transition hover:shadow-lg"
            >
              {/* Image (replace with actual image) */}
              <div className="w-full aspect-square rounded-2xl overflow-hidden mb-6 bg-gray-100 flex items-center justify-center">
                <img
                  src={teacher.image}
                  alt={teacher.name}
                  className="object-cover w-full h-full"
                />
                {/* Optionally: Add a blur overlay for privacy */}
                {/* <div className="absolute inset-0 bg-gray-200 bg-opacity-70" /> */}
              </div>
              <h3 className="text-2xl font-semibold text-slate-900 mb-1">
                {teacher.name}
              </h3>
              <div className={`font-medium text-[#E87667] mb-1 text-sm`}>
                {teacher.role}
              </div>
              <div className="text-gray-500 text-sm mb-6">
                {teacher.experience}
              </div>
              <p className="text-gray-600 mb-4">{teacher.bio}</p>
              <div className="flex flex-wrap gap-2 mt-auto">
                {teacher.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-[#f3f4f7] rounded-full px-3 py-1 text-xs font-medium text-gray-800"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
