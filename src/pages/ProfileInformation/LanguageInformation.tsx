import React, { useState, useEffect } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "../../styles/personalInformation.css";
import { GetLanguageResponse } from "../../models/responses/language/getLanguageResponse";
import languageService from "../../services/languageService";
import { GetLanguageLevelResponse } from "../../models/responses/languageLevel/getLanguageLevelResponse";
import languageLevelService from "../../services/languageLevelService";
import { GetStudentLanguageResponse } from "../../models/responses/studentLanguage/getStudentLanguageResponse";
import studentLanguageService from "../../services/studentLanguageService";
import "../../styles/language.css";

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

  const [languages, setLanguages] = useState<GetLanguageResponse[]>([]);
  const [languageLevels, setLanguageLevels] = useState<
    GetLanguageLevelResponse[]
  >([]);
  const [studentLanguages, setStudentLanguages] = useState<
    GetStudentLanguageResponse[]
  >([]);
  const [selectForDeleteId, setSelectForDeleteId] = useState<string>("");

  useEffect(() => {
    fetchLanguages();
  }, []);
  const fetchLanguages = async () => {
    const response = await languageService.getAll(0, 50);
    setLanguages(response.data.items);
  };

  useEffect(() => {
    fetchLanguageLevels();
  }, []);
  const fetchLanguageLevels = async () => {
    const response = await languageLevelService.getAll(0, 50);
    setLanguageLevels(response.data.items);
  };

  useEffect(() => {
    fetchStudentLanguages();
  }, []);
  const fetchStudentLanguages = async () => {
    const studentId = localStorage.getItem("studentId")!;
    const response = await studentLanguageService.GetListByStudent(
      0,
      50,
      studentId
    );
    setStudentLanguages(response.data.items);
  };

  const handleDelete = async (studentLanguageId: string) => {
    const response = await studentLanguageService.delete(studentLanguageId);
    setStudentLanguages(
      studentLanguages.filter((i) => i.id !== studentLanguageId)
    );
  };

  const handleSubmit = async (language: string, level: string) => {
    const studentId = localStorage.getItem("studentId")!;
    const response = await studentLanguageService.add({
      studentId: studentId,
      languageId: language,
      languageLevelId: level,
    });
    setStudentLanguages((studentLanguages) => [
      ...studentLanguages,
      response.data,
    ]);
  };

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
        onSubmit={async (values, actions) => {
          setSelectedLanguage(values.language);
          setSelectedLevel(values.level);
          actions.setSubmitting(false);
          handleSubmit(values.language, values.level);
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
                {languages.map((item, index) => (
                  <option key={index} value={item.id}>
                    {item.name}
                  </option>
                ))}
              </Field>
              <ErrorMessage name="language">
                {(message) => <p className="text-danger">{message}</p>}
              </ErrorMessage>
            </div>
            <div className="col-12 col-md-6">
              <Field
                name="level"
                as="select"
                className="form-control form-select"
              >
                <option value="">Seviye Seçiniz*</option>
                {languageLevels && languageLevels.length > 0 ? (
                  languageLevels.map((languageLevel) => (
                    <option value={languageLevel.id}>
                      {languageLevel.level}
                    </option>
                  ))
                ) : (
                  <div></div>
                )}
              </Field>
              <ErrorMessage name="level">
                {(message) => <p className="text-danger">{message}</p>}
              </ErrorMessage>
            </div>
          </div>
          <button type="submit" className="btn btn-personal-information">
            Kaydet
          </button>
        </Form>
      </Formik>
      <div className="row  mt-3">
        {studentLanguages.map((item, index) => (
          <div key={index} className="col-md-4 language-item">
            <div className="row rounded-pill shadow mb-3 text-muted bg-white">
              <div className="col-md-2 pt-3 ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  fill="currentColor"
                  className="bi bi-globe2"
                  viewBox="0 0 16 16"
                >
                  <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m7.5-6.923c-.67.204-1.335.82-1.887 1.855q-.215.403-.395.872c.705.157 1.472.257 2.282.287zM4.249 3.539q.214-.577.481-1.078a7 7 0 0 1 .597-.933A7 7 0 0 0 3.051 3.05q.544.277 1.198.49zM3.509 7.5c.036-1.07.188-2.087.436-3.008a9 9 0 0 1-1.565-.667A6.96 6.96 0 0 0 1.018 7.5zm1.4-2.741a12.3 12.3 0 0 0-.4 2.741H7.5V5.091c-.91-.03-1.783-.145-2.591-.332M8.5 5.09V7.5h2.99a12.3 12.3 0 0 0-.399-2.741c-.808.187-1.681.301-2.591.332zM4.51 8.5c.035.987.176 1.914.399 2.741A13.6 13.6 0 0 1 7.5 10.91V8.5zm3.99 0v2.409c.91.03 1.783.145 2.591.332.223-.827.364-1.754.4-2.741zm-3.282 3.696q.18.469.395.872c.552 1.035 1.218 1.65 1.887 1.855V11.91c-.81.03-1.577.13-2.282.287zm.11 2.276a7 7 0 0 1-.598-.933 9 9 0 0 1-.481-1.079 8.4 8.4 0 0 0-1.198.49 7 7 0 0 0 2.276 1.522zm-1.383-2.964A13.4 13.4 0 0 1 3.508 8.5h-2.49a6.96 6.96 0 0 0 1.362 3.675c.47-.258.995-.482 1.565-.667m6.728 2.964a7 7 0 0 0 2.275-1.521 8.4 8.4 0 0 0-1.197-.49 9 9 0 0 1-.481 1.078 7 7 0 0 1-.597.933M8.5 11.909v3.014c.67-.204 1.335-.82 1.887-1.855q.216-.403.395-.872A12.6 12.6 0 0 0 8.5 11.91zm3.555-.401c.57.185 1.095.409 1.565.667A6.96 6.96 0 0 0 14.982 8.5h-2.49a13.4 13.4 0 0 1-.437 3.008M14.982 7.5a6.96 6.96 0 0 0-1.362-3.675c-.47.258-.995.482-1.565.667.248.92.4 1.938.437 3.008zM11.27 2.461q.266.502.482 1.078a8.4 8.4 0 0 0 1.196-.49 7 7 0 0 0-2.275-1.52c.218.283.418.597.597.932m-.488 1.343a8 8 0 0 0-.395-.872C9.835 1.897 9.17 1.282 8.5 1.077V4.09c.81-.03 1.577-.13 2.282-.287z" />
                </svg>
              </div>
              <div className="col-md-6">
                {item.languageName}
                <br />
                {item.languageLevel}
              </div>
              <div className="col-md-2 pt-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  fill="currentColor"
                  className="bi bi-house-door"
                  viewBox="0 0 16 16"
                >
                  <path d="M8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4.5a.5.5 0 0 0 .5-.5v-4h2v4a.5.5 0 0 0 .5.5H14a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293zM2.5 14V7.707l5.5-5.5 5.5 5.5V14H10v-4a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v4z" />
                </svg>
              </div>
              <div
                className="col-md-2 pt-3"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="23"
                  height="23"
                  fill="red"
                  className="bi bi-trash"
                  viewBox="0 0 16 16"
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    setSelectForDeleteId(item.id);
                  }}
                >
                  <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z" />
                  <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z" />
                </svg>
              </div>
            </div>
          </div>
        ))}
        <div
          className="modal fade"
          id="exampleModal"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog  modal-dialog-centered ">
            <div className="modal-content">
              <div className="modal-header">
                <img src="https://tobeto.com/_next/static/media/alert.309dc4c0.svg"></img>
                <br />
                <br />
                <h6 className="modal-title">
                  <b>Seçilen yabancı dili silmek istediğinize emin misiniz?</b>
                </h6>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body text-muted">
                <p>Bu işlem geri alınamaz.</p>
              </div>
              <div className=" modal-footer modal-footer-feature">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Hayır
                </button>

                <button
                  type="button"
                  className="btn btn-primary"
                  data-bs-dismiss="modal"
                  onClick={() => handleDelete(selectForDeleteId)}
                >
                  Evet
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LanguageInformation;
