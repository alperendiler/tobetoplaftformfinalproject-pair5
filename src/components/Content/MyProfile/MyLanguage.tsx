import React, { useEffect, useState } from 'react';
import LanguageCard from "./LanguageCard";
import { GetLanguageResponse } from '../../../models/responses/language/getLanguageResponse';
import languageService from '../../../services/languageService';
import studentLanguageService from '../../../services/studentLanguageService';
import { GetStudentLanguageResponse } from '../../../models/responses/studentLanguage/getStudentLanguageResponse';

type Language = {
  title: string;
  level: string;
};

function MyLanguage() {
  const [languages, setLanguages] = useState<GetStudentLanguageResponse[]>([]);
  useEffect(() => {
    getLanguages();
  }, []);
  const getLanguages = async () => {
    const studentId = localStorage.getItem("studentId")!;

    const response = await studentLanguageService.GetListByStudent(
      0,
      10,
      studentId
    );
    setLanguages(response.data.items);
  };

  return (
    <div>
      <div className="shadow mb-3 bg-white rounded p-3">
        <div className="fw-bold h5">Yabancı Dillerim</div>
        <hr />
        <div className="p-2">
          
            {languages && languages.length > 0 ? (
  languages.map((language) => ( 
              
    <div key={language.id} className="p-2">
            <LanguageCard key={language.id} title={language.languageName} level={language.languageLevel} />
  </div>
  ))
  ) : (
    <div  className="fw-bold">
      Henüz bir dil eklemediniz
    </div>
  )}   
        </div>
      </div>
    </div>
  );
}

export default MyLanguage;