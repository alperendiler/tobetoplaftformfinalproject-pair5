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
  studentId: string|null;
  educationalStatus: string;
  university: string;
  department: string;
  startYear: Date | null;
  graduationYear: Date | null;
  isContinued: boolean;
}

const EducationInformation: React.FC = ({}:Props) => {

  const [startYear, setStartYear] = useState<Date | null>(null);
  const [graduationYear, setGraduationYear] = useState<Date | null>(null);
  const [isContinued, setIsGraduated] = useState(false);
  

 const addEducation =async(values:AddEducationRequest)=>{
   await educationService.add(values)
   const response = await educationService.getListStudentId(0,11,studentId)
   setEducations(response.data.items)
 }
 const deleteEducation= async(experienceId:any)=>{
  await educationService.delete(experienceId)
  const response = await educationService.getListStudentId(0, 11, studentId);
  setEducations(response.data.items);
}
 const [educations, setEducations] = useState<GetAllEducationResponse [] >([]);

 const [studentId, setStudentId] = useState<string |null >("");

 useEffect(() => {
   
  const getStudentId = async () => {
    const token = localStorage.getItem("studentId");

    setStudentId(token)
    const response = await educationService.getListStudentId(0,11,token)
    setEducations(response.data.items)
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
          values.studentId=studentId;
          console.log(values)
          addEducation(values)
          actions.resetForm()
          
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
                        <option value="Önlisans">
                          Önlisans
                        </option>
                        <option value="Lisans">
                          Lisans
                        </option>
                        <option value="Yüksek Lisans">
                          Yüksek Lisans
                        </option>
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
                          <label
                            htmlFor="isContinued"
                            className="form-check-label"
                          >
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
                  <button
                    type="submit"
                    className="btn btn-personal-information"
                  >
                    Kaydet
                  </button>
                </Form>
            </Formik>
            <div className="row  mt-3">
            {educations && educations.length > 0 ? (
  educations.map((education) => ( 
              
              
                
             
                <div key={education.id} className="my-grade">
          <div className="grade-header">
            <span className="grade-date">{new Date(education.startYear).getFullYear()} - {new Date(education.graduationYear).getFullYear()} </span>
            <span className="grade-degree">{education.educationalStatus}</span>
          </div>
          <div className="grade-details">
            <div className="grade-details-col">
              <div className="grade-details-header">
                Üniversite
              </div>
              <div className="grade-details-content">
              {education.university}
              </div>
            </div>
            <div className="grade-details-col">
              <div className="grade-details-header">Bölüm</div>
              <div className="grade-details-content">{education.department}</div>
              </div>
           
              <div><span onClick={()=>deleteEducation(education.id)} className=" grade-delete"></span></div>
             </div>


          </div>
         ))
         ) : (
          <div></div>
         )}  
      </div>
    </>
  );
};

export default EducationInformation;
