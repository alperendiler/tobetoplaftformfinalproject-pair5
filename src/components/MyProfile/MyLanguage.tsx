import React from "react";
import LanguageCard from "./LanguageCard";

type Language = {
  title: string;
  level: string;
};

function MyLanguage() {
  const userLanguages: Language[] = [
    {
      title: 'İngilizce',
      level: 'İleri Seviye (C1, C2)',
    },
    {
      title: 'Almanca',
      level: 'Temel Seviye (B1, B2)',
    },
  ];

  return (
    <div>
      <div className="shadow mb-5 bg-white rounded p-3">
        <div className="fw-bold h5">Yabancı Dillerim</div>
        <hr />
        <div className="p-2">
          {userLanguages.map((language, index) => (
            <LanguageCard key={index} language={language} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default MyLanguage;