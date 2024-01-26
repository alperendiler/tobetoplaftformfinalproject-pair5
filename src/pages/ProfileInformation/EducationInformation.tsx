import React, { useState,useEffect } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import FormikInput from "../../components/FormikInput/FormikInput";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import * as Yup from "yup";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "../../styles/MyProfileStyles/profilePicture.css";
import "../../styles/personalInformation.css";
import SidebarProfileInformation from "../../components/Content/ProfileInformation/SidebarProfile";

type Props = {};

interface EducationInformationForm {
  status: string;
  university: string;
  department: string;
  startYear: string;
  graduationYear: string;
  isGraduated: boolean;
}

const EducationInformation: React.FC = ({}:Props) => {
  const [selectedStatus, setSelectedStatus] = useState("");
  const [university, setUniversity] = useState("");
  const [department, setDepartment] = useState("");
  const [startYear, setStartYear] = useState<Date | null>(null);
  const [graduationYear, setGraduationYear] = useState<Date | null>(null);
  const [isGraduated, setIsGraduated] = useState(false);
  const [EducationList, setEducationList] = useState<
    Array<{ status: string; university: string; department: string;
      startYear: string;
      graduationYear: string; isGraduated: boolean;
     }>
  >([]);

 

  const initialValues: EducationInformationForm = {
    status: "",
    university: "",
    department: "",
    startYear: "",
    graduationYear: "",
    isGraduated: false,
  };

  const validationSchema = Yup.object({});
  useEffect(() => {
    if (selectedStatus && university  && department  && startYear  && graduationYear || isGraduated  ) {
      setEducationList((prevList) => [
        ...prevList,
        { status: selectedStatus, 
          university, 
          department, 
          startYear: startYear ? startYear.toISOString() : "", 
          graduationYear: graduationYear ? graduationYear.toISOString() : "", 
          isGraduated  },
      ]);
    }
  }, [selectedStatus, university, department, startYear, graduationYear, isGraduated]);

  return (
    <>
      <div className="container pt-5 profile-footer">
        <div className="row">
          <div className="col-12 col-lg-3 mb-8 mb-lg-0">
            <SidebarProfileInformation />
          </div>
          <div className="col-12 col-lg-9">
            <Formik
              validationSchema={validationSchema}
              initialValues={initialValues}
              onSubmit={async (values, actions) => {
                setSelectedStatus(values.status);
          setUniversity(values.university);
          setDepartment(values.department);
          setStartYear(values.startYear ? new Date(values.startYear) : null);
          setGraduationYear(values.graduationYear ? new Date(values.graduationYear) : null);
          setIsGraduated(values.isGraduated);
          actions.setSubmitting(false);
              
              }}
            >
              {({ values }) => (
                <Form>
                  <div className="row">
                    <div className="col-12 col-md-6">
                    <label className="form-label">Eğitim Durumu*</label>
                      <Field
                        name="status"
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
                          onChange={(date: Date | null) => {
                            setGraduationYear(date);
                            setIsGraduated(!!date);
                          }}
                          disabled={!startYear}
                          placeholderText="Mezuniyet Yılınızı seçiniz"
                        />
                        <div className="form-check mt-2">
                          <Field
                            type="checkbox"
                            className="form-check-input"
                            id="isGraduated"
                            name="isGraduated"
                            checked={isGraduated}
                            onChange={() => setIsGraduated(!isGraduated)}
                          />
                          <label
                            htmlFor="isGraduated"
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
                          onChange={(date: Date | null) => setStartYear(date)}
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
              )}
            </Formik>
            <div className="row  mt-3">
        {EducationList.map((item, index) => (
          <div key={index} className="col-md-4 language-item">
                {item.status}
                {item.university}
                {item.department}
                {item.startYear}
                {item.graduationYear}
                {item.isGraduated}
          </div>
        ))}
      </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default EducationInformation;