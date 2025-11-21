// components/Hero.js

export default function Hero() {
  return (
    <section
      id="home"
      className="relative w-full min-h-[calc(100vh-4.5rem)] flex items-center"
      style={{
        backgroundImage: "url('/hero.jpg')", // Use your hero image path
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#274268]/80" />

      {/* Content */}
      <div className="relative z-10 max-w-340 w-full mx-auto  px-4 py-12 text-left">
        <span className="inline-block bg-yellow-300 text-slate-800 font-semibold rounded-full px-4 py-1 mb-4 text-sm shadow-md">
          Your Gateway to Russian Language & Culture
        </span>
        <h1 className="text-white text-5xl md:text-6xl font-bold mb-6  max-w-3xl">
          Master Russian in the Heart of Russia
        </h1>
        <p className="text-xl text-white/90 mb-10 max-w-2xl">
          Immersive language programs, experienced teachers, and full student
          support. From beginner to advanced, we help you achieve fluency.
        </p>
        <div className="flex flex-col sm:flex-row gap-5">
          <a
            href="#courses"
            className="bg-[#e45944] hover:bg-red-600 transition text-white font-semibold px-7 py-3 rounded-xl shadow text-lg"
          >
            Explore Courses
          </a>
          <a
            href="#contact"
            className="bg-white/20 hover:bg-white/30 transition text-white font-semibold px-7 py-3 rounded-xl shadow text-lg border border-white/50"
          >
            Book Free Consultation
          </a>
        </div>
      </div>
    </section>
  );
}
