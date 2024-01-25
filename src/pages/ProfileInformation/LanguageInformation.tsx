import React, { useState, useEffect } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

interface LanguageInformationForm {
  language: string;
  level: string;
}

const LanguageInformation: React.FC = () => {
  const [selectedLanguage, setSelectedLanguage] = useState("");
  const [selectedLevel, setSelectedLevel] = useState("");
  const [languagesList, setLanguagesList] = useState<
    Array<{ language: string; level: string }>
  >([]);

  const initialValues: LanguageInformationForm = {
    language: "",
    level: "",
  };

  const validationSchema = Yup.object({
    language: Yup.string().required("Dil seçimi zorunludur"),
    level: Yup.string().required("Seviye seçimi zorunludur"),
  });

  useEffect(() => {
    if (selectedLanguage && selectedLevel) {
      setLanguagesList((prevList) => [
        ...prevList,
        { language: selectedLanguage, level: selectedLevel },
      ]);
    }
  }, [selectedLanguage, selectedLevel]);

  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values, actions) => {
          setSelectedLanguage(values.language);
          setSelectedLevel(values.level);
          actions.setSubmitting(false);
        }}
      >
        <Form>
          <div className="row">
            <div className="col-12 col-md-6">
              <Field
                name="language"
                as="select"
                className="form-control form-select"
              >
                <option value="">Dil Seçiniz*</option>
                <option value="Almanca">Almanca</option>
                <option value="Arapça">Arapça</option>
                <option value="Çekçe">Çekçe</option>
                <option value="Çince">Çince</option>
                <option value="Danca">Danca</option>
                <option value="Fince">Fince</option>
                <option value="Fransızca">Fransızca</option>
                <option value="Hindi">Hindi</option>
                <option value="Hollandaca">Hollandaca</option>
                <option value="İbranice">İbranice</option>
                <option value="İngilizce">İngilizce</option>
                <option value="İspanyolca">İspanyolca</option>
              </Field>
            </div>
            <div className="col-12 col-md-6">
              <Field
                name="level"
                as="select"
                className="form-control form-select"
              >
                <option value="">Seviye Seçiniz*</option>
                <option value="Temel Seviye(A1,A2)">Temel Seviye(A1,A2)</option>
                <option value="Orta Seviye(B1,B2)">Orta Seviye(B1,B2)</option>
                <option value="İleri Seviye(C1,C2)">İleri Seviye(C1,C2)</option>
                <option value="Anadil">Anadil</option>
              </Field>
            </div>
          </div>
          <button type="submit" className="btn btn-personal-information">
            Kaydet
          </button>
        </Form>
      </Formik>
      <div className="row">
        <div className="col-md-4 ">
          {languagesList.map((item, index) => (
            <div key={index} className="language-item">
              <div>{item.language}</div>
              <div>{item.level}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default LanguageInformation;
