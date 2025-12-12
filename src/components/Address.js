"use client";

import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaTelegramPlane,
  FaWhatsapp,
} from "react-icons/fa";
import { AnimatePresence, motion } from "framer-motion";
import { RxCross1 } from "react-icons/rx";
import ApplyForm from "./ApplyForm";

// inside the same file

const YandexMap = ({ center, zoom, language }) => {
  const mapRef = useRef(null);
  const mapInstanceRef = useRef(null);
  const { t } = useTranslation();

  // Load script only once
  useEffect(() => {
    if (typeof window === "undefined") return;

    const existingScript = document.querySelector(
      'script[src^="https://api-maps.yandex.ru/2.1/"]'
    );

    if (existingScript) {
      // Script already on page, init map after API is ready
      if (window.ymaps) {
        initMap();
      } else {
        existingScript.addEventListener("load", initMap);
      }
      return;
    }

    const script = document.createElement("script");
    script.src = `https://api-maps.yandex.ru/2.1/?apikey=YOUR_API_KEY&lang=${language}`;
    script.async = true;
    script.onload = () => initMap();
    document.head.appendChild(script);

    return () => {
      if (script) {
        script.onload = null;
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // load script once

  // Recreate map when language/center/zoom change,
  // but do NOT re-add the script
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.ymaps) {
      initMap();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [language, center, zoom]);

  const initMap = () => {
    const ymaps = window.ymaps;
    if (!ymaps || !mapRef.current) return;

    ymaps.ready(() => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.destroy();
      }

      const map = new ymaps.Map(mapRef.current, {
        center,
        zoom,
        controls: ["zoomControl"],
      });

      map.panes.get("ground").getElement().style.filter =
        "grayscale(1) sepia(0.01) brightness(0.98)";

      const placemark = new ymaps.Placemark(
        [55.80653, 37.504681],
        {
          balloonContentHeader: `<div style="font-weight: bold; font-size: 24px; color: #1e3a8a; margin-bottom: 8px;">${t(
            "address.clinicName"
          )}</div>`,
          balloonContentBody: `
              <div style="padding: 5px; font-size: 14px; color: #374151;">
                <p style="margin: 5px 0;"><strong>📍 ${t(
                  "address.addressTitle"
                )}:</strong> ${t("address.fullAddress")}</p>
                <p style="margin: 5px 0;"><strong>📞 ${t(
                  "address.phoneTitle"
                )}:</strong> <a href="tel:1234567890" style="color: #2563eb; text-decoration: none;">${t(
            "address.phoneDisplay"
          )}</a></p>
              </div>
            `,
          hintContent: t("address.clinicName"),
        },
        {
          iconLayout: "default#image",
          iconImageHref: "/map-marker.png",
          iconImageSize: [65, 70],
          iconImageOffset: [-29, -73],
        }
      );

      map.geoObjects.removeAll();
      map.geoObjects.add(placemark);

      mapInstanceRef.current = map;
    });
  };

  return <div ref={mapRef} style={{ width: "100%", height: "100%" }} />;
};

const Address = () => {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language;
  const mapLang = currentLang === "ru" ? "ru_RU" : "en_US";
  const [showPopup, setShowPopup] = useState(false);

  return (
    <section id="contact" className="w-full bg-[#fafbfc] py-20">
      <div className="max-w-[87rem] text-center mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-10 text-slate-900">
          {t("address.title")}
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left: contact info */}
          <div className="bg-white rounded-xl shadow p-6 md:p-8 flex flex-col gap-3">
            <div className="flex items-start text-left gap-2 text-black text-lg mb-1">
              <FaMapMarkerAlt className="mt-1.5 text-[#274268]" />
              <div>
                <h4 className="font-medium ">{t("address.clinicName")}</h4>
                <p
                  className="text-[#274268] "
                  dangerouslySetInnerHTML={{ __html: t("address.fullAddress") }}
                ></p>
              </div>
            </div>

            <div className="flex text-black gap-2 mb-1">
              <FaPhoneAlt className="text-[#274268] mt-1.5" />
              <div>
                <a
                  href="tel:1234567890"
                  className="font-semibold hover:text-[#274268] transition-all duration-300 base-text"
                >
                  {t("address.phoneDisplay")}
                </a>
                <div className="mt-2 flex items-center gap-3 min-w-0">
                  <a
                    href="https://wa.me/1234567890"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-500 text-xl hover:scale-125 transition-all duration-300"
                    aria-label="WhatsApp"
                  >
                    <FaWhatsapp />
                  </a>
                  <a
                    href="https://t.me/medclinic"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sky-500 text-xl hover:scale-125 transition-all duration-300"
                    aria-label="Telegram"
                  >
                    <FaTelegramPlane />
                  </a>
                  <a
                    href=""
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-500 text-lg xl:text-2xl hover:scale-125 transition-all duration-300"
                    aria-label="Max"
                  >
                    <img src="/max.png" alt="Max" className="w-5" />
                  </a>
                </div>
              </div>
            </div>

            <button
              type="button"
              onClick={() => setShowPopup(true)}
              className="mt-8 px-5 py-3 text-lg rounded-lg cursor-pointer font-semibold shadow bg-[#e45944] hover:bg-[#d94c2e] text-white transition"
            >
              {t("programs.applyNow")}
            </button>
          </div>

          {/* Right: map */}
          <div className="bg-white rounded-xl overflow-hidden shadow min-h-[260px]">
            <YandexMap
              center={[55.80653, 37.504681]}
              zoom={17}
              language={mapLang}
            />
          </div>
        </div>
      </div>

      <AnimatePresence>
        {showPopup && (
          <motion.div
            className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className="bg-white rounded-xl shadow-lg max-w-3xl w-full mx-4 p-4 md:p-6 pt-10 md:pt-12 relative overflow-hidden"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <button
                className="absolute top-4 z-50 right-4 text-brand1 cursor-pointer text-2xl"
                onClick={() => setShowPopup(false)}
                aria-label="Close"
              >
                <RxCross1 />
              </button>
              <div className="max-h-[80vh] overflow-y-scroll">
                <ApplyForm />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Address;
