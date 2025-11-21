// components/BlogNews.js

const blogPosts = [
  {
    label: "Language Tips",
    title: "10 Essential Russian Phrases for Beginners",
    date: "March 15, 2024",
    read: "5 min read",
    link: "#",
  },
  {
    label: "Grammar",
    title: "Understanding Russian Cases: A Practical Guide",
    date: "March 10, 2024",
    read: "8 min read",
    link: "#",
  },
  {
    label: "Culture",
    title: "Celebrating Maslenitsa: Russian Pancake Week",
    date: "March 5, 2024",
    read: "6 min read",
    link: "#",
  },
];

export default function BlogNews() {
  return (
    <section id="blog" className="bg-white py-20">
      <div className="max-w-340 mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4 text-slate-900">
          Blog & News
        </h2>
        <p className="text-lg md:text-xl max-w-2xl mx-auto text-center text-gray-500 mb-12">
          Language learning tips, Russian culture insights, and school updates
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {blogPosts.map((post) => (
            <div
              key={post.title}
              className="bg-white border border-gray-200 rounded-2xl shadow-sm p-6 flex flex-col hover:shadow-lg transition"
            >
              <div>
                <span className="inline-block mb-4 bg-[#f0f2f5] text-gray-900 px-4 py-1 rounded-full text-xs font-medium">
                  {post.label}
                </span>
                <h3 className="font-semibold text-xl mb-2 text-slate-900">
                  {post.title}
                </h3>
                <div className="text-gray-500 text-xs mb-8">
                  {post.date} &bull; {post.read}
                </div>
              </div>
              <a
                href={post.link}
                className="w-full py-2.5 rounded-xl font-semibold text-slate-900 bg-white border border-gray-200 text-center text-sm cursor-pointer hover:bg-[#e45944] transition-all duration-300 hover:text-white"
              >
                Read Article
              </a>
            </div>
          ))}
        </div>
        <div className="flex justify-center">
          <a
            href="#"
            className="px-8 py-3 rounded-xl bg-[#e45944] cursor-pointer hover:bg-red-600 text-white font-semibold shadow transition-all duration-300"
          >
            View All Blog Posts
          </a>
        </div>
      </div>
    </section>
  );
}
