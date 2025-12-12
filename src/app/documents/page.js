"use client";

import React from "react";
import { useTranslation } from "react-i18next";
import {
  FaFileMedicalAlt,
  FaCheckCircle,
  FaCertificate,
  FaShieldAlt,
  FaDownload,
  FaFileAlt,
} from "react-icons/fa";

const DocumentsMenu = () => {
  const { t } = useTranslation();

  const documents = [
    {
      id: 1,
      url: "/docs/Об утверждении стоимости образовательных программ.pdf",
    },
    {
      id: 2,

      url: "/docs/План развития 2025-2030 гг..pdf",
    },
    {
      id: 3,
      url: "/docs/Положение  о специализ. структурном образовательном подразделении.pdf",
    },
    {
      id: 4,

      url: "/docs/Положение о комиссии по урегулированию споров.pdf",
    },
    {
      id: 5,

      url: "/docs/Положение о порядке обучения по индивидуальному учебному плану.pdf",
    },
    {
      id: 6,

      url: "/docs/Положение о порядке обучения слушателей по индивидуальному учебному плану ДПО.pdf",
    },
    {
      id: 7,

      url: "/docs/Положение о режиме занятий обучающихся.pdf",
    },
    {
      id: 8,

      url: "/docs/Положение о текущей, промежуточной и итоговой аттестации.pdf",
    },
    {
      id: 9,

      url: "/docs/Положение о языке.pdf",
    },
    {
      id: 10,

      url: "/docs/Положение об оказании платных образовательных услуг.pdf",
    },
    {
      id: 11,

      url: "/docs/Порядок и основания перевода и отчисления обучающихся.PDF",
    },
    {
      id: 12,

      url: "/docs/Порядок оформления, возникновения и прекращения отношений.pdf",
    },
    {
      id: 13,

      url: "/docs/Правила внутреннего распорядка обучающихся.pdf",
    },
    {
      id: 14,

      url: "/docs/Правила внутреннего трудового распорядка работников.pdf",
    },
    {
      id: 15,

      url: "/docs/Правила приема на обучение на программы ДПО.pdf",
    },
    {
      id: 16,

      url: "/docs/Правила приема на обучение по общеобразовательным программам.pdf",
    },
    {
      id: 17,

      url: "/docs/ПРИКАЗ об утверждении договора.pdf",
    },
    {
      id: 18,

      url: "/docs/Реестровая выписка.pdf",
    },
    {
      id: 19,

      url: "/docs/ТЗ для образовательного сайта АНО ЕАФО.pdf",
    },
  ];

  const getNameFromUrl = (url) => {
    const file = url.split("/").pop(); // get filename
    const withoutExt = file.replace(/\.[^/.]+$/, ""); // remove .pdf
    return withoutExt.replace(/_/g, " "); // replace underscores if any
  };

  return (
    <div className="py-20 bg-white">
      <div className="bg-white max-w-340 mx-auto px-4 ">
        <div className="flex flex-col md:flex-row md:items-center gap-4">
          <div className="flex-1">
            <h2 className="text-4xl font-bold text-center mb-4 text-slate-900">
              {t("documents.title")}
            </h2>
            <p className="text-lg md:text-xl max-w-2xl mx-auto text-center text-gray-500 mb-12">
              {t("documents.subtitle")}
            </p>
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-4 ">
          {documents.map((doc) => (
            <a
              key={doc.id}
              href={doc.url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-xl p-3 md:p-5 shadow-md border border-gray-200 hover:shadow-lg hover:border-brand3 transition-all group flex justify-between min-w-0"
            >
              <div className="flex items-center gap-4 min-w-0">
                {/* Icon */}
                <div className="flex-shrink-0 bg-[#274268]/20 p-3 rounded-lg group-hover:bg-[##274268]/40 transition-colors">
                  <FaFileAlt className="text-[#274268] text-2xl" />
                </div>

                {/* Content*/}
                <h3 className="font-semibold  base-text text-brand1 uppercase group-hover:text-brand3 transition-colors line-clamp-2">
                  {getNameFromUrl(doc.url)}
                </h3>
              </div>
              <div className="flex-shrink-0 ">
                <div className="w-10 h-10 bg-[#274268]/20 rounded-full flex items-center justify-center group-hover:bg-[#274268] transition-colors">
                  <FaDownload className="text-[#274268] text-xl group-hover:text-white transition-colors" />
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DocumentsMenu;
