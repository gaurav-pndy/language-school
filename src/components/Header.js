// components/Header.js
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Navigation links: section IDs must match your section element IDs
const navLinks = [
  { label: "Home", sectionId: "home" },
  { label: "About", sectionId: "about" },
  { label: "Courses", sectionId: "courses" },
  { label: "Teachers", sectionId: "teachers" },
  { label: "Services", sectionId: "services" },
  { label: "Admissions", sectionId: "admissions" },
  { label: "Visa", sectionId: "visa" },
  { label: "Living in Russia", sectionId: "living" },
  { label: "FAQ", sectionId: "faq" },
  { label: "Contact", sectionId: "contact" },
];

export default function Header() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Smooth scroll handler
  const handleNavClick = (e, sectionId) => {
    e.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setSidebarOpen(false); // Also close mobile sidebar
    }
  };

  return (
    <header className="w-full bg-gray-50 h- shadow-lg fixed  top-0 z-20">
      <nav className="max-w-340 mx-auto h-18 flex items-center justify-between px-4 py-4">
        {/* Logo */}
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, "home")}
          className="font-bold text-2xl text-[#274268]"
        >
          RusLanguage
        </a>

        {/* Desktop navigation */}
        <ul className="hidden xl:flex gap-8 items-center">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={`#${link.sectionId}`}
                onClick={(e) => handleNavClick(e, link.sectionId)}
                className="text-slate-700 hover:text-slate-950 transition text-sm font-medium"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href={`#apply`}
              onClick={(e) => handleNavClick(e, "apply")}
              className="bg-[#e45944] hover:bg-red-600 transition text-white font-semibold px-5 py-2 rounded-lg shadow"
            >
              Apply Now
            </a>
          </li>
        </ul>

        {/* Hamburger for mobile */}
        <button
          className="xl:hidden p-2 rounded transition hover:bg-gray-200"
          aria-label="Open sidebar"
          onClick={() => setSidebarOpen(true)}
        >
          {/* Hamburger icon */}
          <svg
            width="28"
            height="28"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M4 7h20M4 14h20M4 21h20" />
          </svg>
        </button>
      </nav>

      {/* Mobile sidebar navigation */}
      <AnimatePresence>
        {sidebarOpen && (
          <motion.aside
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed inset-0 z-30 bg-black/40 flex justify-end"
            onClick={() => setSidebarOpen(false)}
          >
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="w-80 bg-white h-full shadow-xl px-6 py-4 flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="self-end mb-8 text-4xl  hover:bg-gray-200 rounded"
                aria-label="Close sidebar"
                onClick={() => setSidebarOpen(false)}
              >
                &times;
              </button>
              <ul className="flex flex-col gap-6">
                {navLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={`#${link.sectionId}`}
                      onClick={(e) => handleNavClick(e, link.sectionId)}
                      className="text-slate-700 hover:text-slate-950 transition font-medium text-lg"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
                <li>
                  <a
                    href="#apply"
                    onClick={(e) => handleNavClick(e, "apply")}
                    className="bg-red-500 hover:bg-red-600 transition text-white font-semibold px-5 py-2 rounded-lg shadow text-center block"
                  >
                    Apply Now
                  </a>
                </li>
              </ul>
            </motion.div>
          </motion.aside>
        )}
      </AnimatePresence>
    </header>
  );
}
