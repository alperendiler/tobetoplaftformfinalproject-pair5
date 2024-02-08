import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useEffect, useState } from "react";
import "../../styles/personalInformation.css";
import "../../styles/MyProfileStyles/experienceInformation.css"
import React from "react";
import FormikInput from "../../components/FormikInput/FormikInput";
import ReactDatePicker from "react-datepicker";
import experienceService from "../../services/experienceService";
import studentService from "../../services/studentService";
import { jwtDecode } from "jwt-decode";
import { GetAllExperienceResponse } from "../../models/responses/experience/getAllExperienceResponse";
import ExperienceDetailModal from "../../components/Content/ProfileInformation/ExperienceDetailModal";
import { toast } from "react-toastify";

type Props = {};


   
interface ExperienceForm {
  companyName: string;
  sector: string;
  position: string;
  isContinued:boolean ,
  jobDescription: string;
  startDate: Date | null ;
  endDate: Date | null;
  studentId:string ;
  city:string ;
}
export default function ExperienceInformation({}: Props) {
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedjobDescription, setJobDescription] = useState<string >('');

  const handleOpenModal = (jobDescription:string) => {
    setJobDescription(jobDescription);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };
  const [studentId, setStudentId] = useState<string  >("");
  const [experiences, setExperiences] = useState<GetAllExperienceResponse [] >([]);

  useEffect(() => {
   
    const getStudentId = async () => {
      const token = localStorage.getItem("user");

      const decodedToken: any = token ? jwtDecode(token) : null;
  
      const userId =
        decodedToken[
          "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier"
        ];
  
      const student = await studentService.getByUserId(userId);
      setStudentId(student.data.id);
      const response = await experienceService.getListStudentId(0, 111,student.data.id);
      setExperiences(response.data.items);

    };
    getStudentId();

  }, []); 

const addExperience = async (values: ExperienceForm) => {
    await experienceService.add(values);
    toast.success("Kayıt Başarılı", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme:"colored"
    });
    const response = await experienceService.getListStudentId(0, 11, studentId);
    setExperiences(response.data.items);
}; 

 const deleteExperience= async(experienceId:any)=>{
      await experienceService.delete(experienceId)
      const response = await experienceService.getListStudentId(0, 11, studentId);
      setExperiences(response.data.items);
 }
  const initialValues: ExperienceForm = {
    companyName: "",
    sector: "",
    position: "",
    isContinued: false,
    jobDescription: "",
    startDate: null ,
    endDate: null,
    studentId: "",
    city:"" 

  };

  const validationSchema = Yup.object({
    companyName: Yup.string()
      .required("Doldurulması zorunlu alan*")
      .matches(/^[a-zA-ZğüşıöçĞÜŞİÖÇ]+$/, "Geçersiz karakter girişi*")
      .min(2, "En az 2 haneden oluşmalıdır.")
      .max(100, "En fazla 100 karakter girebilirsiniz"),
    sector: Yup.string()
      .required("Doldurulması zorunlu alan*")
      .matches(/^[a-zA-ZğüşıöçĞÜŞİÖÇ]+$/, "Geçersiz karakter girişi*")
      .min(2, "En az 2 haneden oluşmalıdır.")
      .max(100, "En fazla 200 karakter girebilirsiniz"),
    position: Yup.string()
      .required("Doldurulması zorunlu alan*")
      .matches(/^[a-zA-ZğüşıöçĞÜŞİÖÇ]+$/, "Geçersiz karakter girişi*")
      .min(2, "En az 2 haneden oluşmalıdır.")
      .max(100, "En fazla 200 karakter girebilirsiniz"),
    city: Yup.string().required("Doldurulması zorunlu alan*"),
    jobDescription: Yup.string().max(
      300,
      "En fazla 300 karakter girebilirsiniz"
    ),
  });
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setFinishDate] = React.useState<Date | null>(null);

  return (
    <>
      {isModalOpen && (
        <ExperienceDetailModal jobDescription={selectedjobDescription} onClose={handleCloseModal} />
      )}
      <Formik
        validationSchema={validationSchema}
        initialValues={initialValues}
        onSubmit={(values,actions) => {
          values.startDate = startDate;
          values.endDate = endDate;
          values.studentId = studentId;
          addExperience(values)
          actions.resetForm()

        } 
      }
      >
        <Form>
          <div className="row">
            <div className="col-12 col-md-6">
              <FormikInput
                name="companyName"
                label="Kurum Adı*"
                placeholder="Kampüs 365"
              />
            </div>
            <div className="col-12 col-md-6">
              <FormikInput
                name="position"
                label="Pozisyon*"
                placeholder="Front-End Developer"
              />
            </div>
            <div className="col-12 col-md-6">
              <FormikInput
                name="sector"
                label="Sektör*"
                placeholder="Yazılım"
              />
            </div>
            <div className="col-12 col-md-6">
              <label className="form-label">Şehir Seçiniz*</label>
              <Field
                label="Şehir*"
                name="city"
                as="select"
                className=" form-control form-select"
              >
                <option value={0}>İl Seçiniz</option>
                <option value={"Isparta"}>Isparta</option>
              </Field>
            </div>
            <div className="col-12 col-md-6">
              <label className="input-label-text">İş Başlangıcı*</label>
              <br />
              <div className="react-datepicker-wrapper">
                <div className="react-datepicker__input-container">
                  <span
                    role="alert"
                    aria-live="polite"
                    className="react-datepicker__aria-live"
                  ></span>
                  <ReactDatePicker
                    placeholderText="gg.aa.yyyy"
                    name="startDate"
                    className="form-control tobeto-input react-datepicker-ignore-onclickoutside"
                    selected={startDate}
                    onChange={(date) => {
                      setStartDate(date);
                    }}
                    dateFormat="dd.MM.yyyy"
                  />
                </div>
              </div>
            </div>

            <div className="col-12 col-md-6">
              <label className="input-label-text">İş Bitişi*</label>
              <br />
              <div className="react-datepicker-wrapper">
                <div className="react-datepicker__input-container">
                  <span
                    role="alert"
                    aria-live="polite"
                    className="react-datepicker__aria-live"
                  ></span>
                  <ReactDatePicker
                    name="endDate"
                    placeholderText="gg.aa.yyyy"
                    className="form-control tobeto-input react-datepicker-ignore-onclickoutside"
                    selected={endDate}
                    onChange={(date) => setFinishDate(date)}
                    dateFormat="dd.MM.yyyy"
                  />
                </div>
              </div>
              <label>
                <Field name="isContinued"  type="checkbox" />
                &nbsp;Çalışmaya hala devam ediyorum.
              </label>{" "}
            </div>

            <div className="col-12 col-md-12 mb-6">
              <FormikInput
                className="no-resize"
                as="textarea"
                name="jobDescription"
                label="İş Açıklaması"
              />
            </div>

            <button type="submit"  className="btn btn-personal-information">
              Kaydet
            </button>
          </div>
        </Form>
      </Formik>
      <div className="col-12">
      {experiences && experiences.length > 0 ? (
  experiences.map((experience) => ( 
        <div key={experience.id} className="my-grade">
          <div className="grade-header">
            <span className="grade-date">{experience.startDate} - {experience.endDate} </span>
          </div>
          <div className="grade-details">
            <div className="grade-details-col">
              <div className="grade-details-header">
                Kurum Adı
              </div>
              <div className="grade-details-content">
                {experience.companyName}
              </div>
            </div>
            <div className="grade-details-col">
              <div className="grade-details-header">Pozisyon</div>
              <div className="grade-details-content">{experience.position}</div>
              </div>
              <div className="grade-details-col">
              <div className="grade-details-header">Sektör</div>
              <div className="grade-details-content">{experience.sector}</div>
              </div>
              <div className="grade-details-col">
              <div className="grade-details-header">Şehir</div>
              <div className="grade-details-content">{experience.city}</div>
              </div>
              <div><span onClick={()=>deleteExperience(experience.id)} className=" grade-delete"></span><span onClick={()=>handleOpenModal(experience.jobDescription)} className=" grade-info"></span></div>
             </div>

  </div>

   ))
   ) : (
    <div></div>
   )}  
      </div>
      
    </>
  );
}
