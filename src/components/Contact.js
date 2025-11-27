"use client";

import { useState } from "react";
import { FaRegClock, FaRegEnvelope } from "react-icons/fa";
import { FiPhone } from "react-icons/fi";
import { GrLocation } from "react-icons/gr";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    country: "",
    program: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: send to API / email service
    console.log("Form submitted", form);
  };

  return (
    <section id="contact" className="bg-[#274268] py-20">
      <div className="max-w-340 mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-10 items-stretch">
        {/* Left: Contact info */}
        <div className="text-white">
          <h2 className="text-4xl font-bold mb-6">Get in Touch</h2>
          <p className="text-lg md:text-xl max-w-2xl text-slate-100 mb-8">
            Ready to start your Russian language journey? Contact us today for a
            free consultation and placement test.
          </p>

          <div className="space-y-8 ">
            <div className="flex items-start gap-4">
              <span className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-2xl">
                <FaRegEnvelope />
              </span>
              <div className="">
                <div className="font-semibold ">Email</div>
                <div className="text-slate-300">info@ruslanguage.ru</div>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <span className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-2xl">
                <FiPhone />
              </span>
              <div>
                <div className="font-semibold">Phone / WhatsApp</div>
                <div className="text-slate-300">+7 (XXX) XXX-XX-XX</div>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <span className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-2xl">
                <GrLocation />
              </span>
              <div>
                <div className="font-semibold">Location</div>
                <div className="text-slate-300">Central Moscow, Russia</div>
                <div className="text-slate-300 text-xs">
                  Metro: Pushkinskaya / Tverskaya
                </div>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <span className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-2xl">
                <FaRegClock />
              </span>
              <div>
                <div className="font-semibold">Opening Hours</div>
                <div className="text-slate-300 ">
                  Mon–Fri: 9:00 – 19:00
                  <br />
                  Sat: 10:00 – 16:00
                  <br />
                  Sun: Closed
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Form card */}
        <div className="bg-white rounded-2xl shadow-xl p-6">
          <h3 className="text-2xl font-semibold mb-1 text-slate-900">
            Request Information
          </h3>
          <p className="text-sm text-gray-500 mb-6">
            Fill out the form and we&apos;ll get back to you within 24 hours
          </p>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Your name"
                className="w-full rounded-xl border border-gray-300 px-3 py-2  focus:outline-none focus:ring-2 focus:ring-red-400"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="your@email.com"
                className="w-full rounded-xl border border-gray-300 px-3 py-2  focus:outline-none focus:ring-2 focus:ring-red-400"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">
                Country
              </label>
              <input
                type="text"
                name="country"
                value={form.country}
                onChange={handleChange}
                placeholder="Your country"
                className="w-full rounded-xl border border-gray-300 px-3 py-2  focus:outline-none focus:ring-2 focus:ring-red-400"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">
                Interested In
              </label>
              <select
                name="program"
                value={form.program}
                onChange={handleChange}
                className="w-full rounded-xl border border-gray-300 px-3 py-2  bg-white focus:outline-none focus:ring-2 focus:ring-red-400"
              >
                <option value="">Select a program</option>
                <option value="intensive">Intensive Russian</option>
                <option value="evening">Evening Classes</option>
                <option value="online">Online Russian</option>
                <option value="private">Private Lessons</option>
                <option value="school">Summer School</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">
                Message
              </label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                rows={4}
                placeholder="Tell us about your goals..."
                className="w-full rounded-xl border border-gray-300 px-3 py-2  resize-none focus:outline-none focus:ring-2 focus:ring-red-400"
              />
            </div>

            <button
              type="submit"
              className="w-full  rounded-xl bg-[#e45944] hover:bg-[#d94c2e] text-white font-semibold py-3.5 cursor-pointer text-sm shadow-md transition-all duration-300"
            >
              Send Request
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
