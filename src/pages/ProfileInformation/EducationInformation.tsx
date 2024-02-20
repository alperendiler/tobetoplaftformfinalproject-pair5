import React, { useState, useEffect } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import FormikInput from "../../components/FormikInput/FormikInput";
import "react-phone-number-input/style.css";
import * as Yup from "yup";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "../../styles/MyProfileStyles/profilePicture.css";
import "../../styles/personalInformation.css";
import educationService from "../../services/educationService";
import { AddEducationRequest } from "../../models/requests/education/addEducationRequest";
import { GetAllEducationResponse } from "../../models/responses/education/getAllEducationResponse";

type Props = {};

interface EducationInformationForm {
  studentId: string | null;
  educationalStatus: string;
  university: string;
  department: string;
  startYear: Date | null;
  graduationYear: Date | null;
  isContinued: boolean;
}

const EducationInformation: React.FC = ({}: Props) => {
  const [startYear, setStartYear] = useState<Date | null>(null);
  const [graduationYear, setGraduationYear] = useState<Date | null>(null);
  const [isContinued, setIsGraduated] = useState(false);
  const [selectForDeleteId, setSelectForDeleteId] = useState<string>("");

  const addEducation = async (values: AddEducationRequest) => {
    await educationService.add(values);
    const response = await educationService.getListStudentId(0, 11, studentId);
    setEducations(response.data.items);
  };
  const deleteEducation = async (experienceId: any) => {
    await educationService.delete(experienceId);
    const response = await educationService.getListStudentId(0, 11, studentId);
    setEducations(response.data.items);
  };
  const [educations, setEducations] = useState<GetAllEducationResponse[]>([]);

  const [studentId, setStudentId] = useState<string | null>("");

  useEffect(() => {
    const getStudentId = async () => {
      const token = localStorage.getItem("studentId");

      setStudentId(token);
      const response = await educationService.getListStudentId(0, 11, token);
      setEducations(response.data.items);
    };

    getStudentId();
  }, []);
  const initialValues: EducationInformationForm = {
    studentId: "",
    educationalStatus: "",
    university: "",
    department: "",
    startYear: null,
    graduationYear: null,
    isContinued: false,
  };

  const validationSchema = Yup.object({
    university: Yup.string()
      .required("Doldurulması zorunlu alan*")
      .matches(/^[a-zA-ZğüşıöçĞÜŞİÖÇ\s]{2,}$/, "Geçersiz karakter girişi*")
      .min(2, "En az 2 haneden oluşmalıdır.")
      .max(100, "En fazla 100 karakter girebilirsiniz"),
    department: Yup.string()
      .required("Doldurulması zorunlu alan*")
      .matches(/^[a-zA-ZğüşıöçĞÜŞİÖÇ\s]{2,}$/, "Geçersiz karakter girişi*")
      .min(2, "En az 2 haneden oluşmalıdır.")
      .max(100, "En fazla 100 karakter girebilirsiniz"),
  });

  return (
    <>
      <Formik
        validationSchema={validationSchema}
        initialValues={initialValues}
        onSubmit={async (values, actions) => {
          actions.setSubmitting(false);
          values.startYear = startYear;
          values.graduationYear = graduationYear;
          values.studentId = studentId;
          console.log(values);
          addEducation(values);
          actions.resetForm();
        }}
      >
        <Form>
          <div className="row">
            <div className="col-12 col-md-6">
              <label className="form-label">Eğitim Durumu*</label>
              <Field
                name="educationalStatus"
                as="select"
                className="form-control form-select"
              >
                <option value="">Seviye Seçiniz*</option>
                <option value="Önlisans">Önlisans</option>
                <option value="Lisans">Lisans</option>
                <option value="Yüksek Lisans">Yüksek Lisans</option>
                <option value="Doktora">Doktora</option>
              </Field>
              <FormikInput
                name="department"
                label="Bölüm*"
                placeholder="Yazılım"
              />
              <div className="mb-3">
                <label className="form-label">Mezuniyet Yılı*</label>
                <br />
                <DatePicker
                  className="date-picker"
                  selected={graduationYear}
                  onChange={(date) => {
                    if (date === null) {
                      setGraduationYear(null);
                    } else {
                      setGraduationYear(date);
                      setIsGraduated(true); // veya gerekli işlem
                    }
                  }}
                  disabled={!startYear}
                  placeholderText="Mezuniyet Yılınızı seçiniz"
                />
                <div className="form-check mt-2">
                  <Field
                    type="checkbox"
                    className="form-check-input"
                    id="isContinued"
                    name="isContinued"
                    checked={isContinued}
                    onChange={() => setIsGraduated(!isContinued)}
                  />
                  <label htmlFor="isContinued" className="form-check-label">
                    Devam Ediyor
                  </label>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6">
              <FormikInput
                name="university"
                label="Üniversite*"
                placeholder="Kampüs 365"
              />
              <div className="mb-3">
                <label className="form-label">Başlangıç Yılı*</label>
                <br />
                <DatePicker
                  className="date-picker"
                  selected={startYear}
                  onChange={(date) => setStartYear(date)}
                  placeholderText="Başlangıç Yılınızı seçiniz"
                />
              </div>
            </div>
          </div>
          <button type="submit" className="btn btn-personal-information">
            Kaydet
          </button>
        </Form>
      </Formik>
      <div className="row  mt-3">
        {educations && educations.length > 0 ? (
          educations.map((education) => (
            <div key={education.id} className="my-grade">
              <div className="grade-header">
                <span className="grade-date">
                  {new Date(education.startYear).getFullYear()} -{" "}
                  {new Date(education.graduationYear).getFullYear()}{" "}
                </span>
                <span className="grade-degree">
                  {education.educationalStatus}
                </span>
              </div>
              <div className="grade-details">
                <div className="grade-details-col">
                  <div className="grade-details-header">Üniversite</div>
                  <div className="grade-details-content">
                    {education.university}
                  </div>
                </div>
                <div className="grade-details-col">
                  <div className="grade-details-header">Bölüm</div>
                  <div className="grade-details-content">
                    {education.department}
                  </div>
                </div>

                <div>
                  <span
                    className=" grade-delete"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                    onClick={() => {
                      setSelectForDeleteId(education.id);
                    }}
                  ></span>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div></div>
        )}
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
                  <b>Seçilen eğitimi silmek istediğinize emin misiniz?</b>
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
                  onClick={() => deleteEducation(selectForDeleteId)}
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

export default EducationInformation;
