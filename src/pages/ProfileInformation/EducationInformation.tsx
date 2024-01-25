import React, { useState } from "react";
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
  isContinue: boolean;
}

export default function EducationInformation({}: Props) {
  const [startYear, setStartYear] = useState<Date | null>(null);
  const [graduationYear, setGraduationYear] = useState<Date | null>(null);
  const [isGraduated, setIsGraduated] = useState(false);

  const initialValues: EducationInformationForm = {
    status: "",
    university: "",
    department: "",
    startYear: "",
    graduationYear: "",
    isGraduated: false,
    isContinue: false,
  };

  const validationSchema = Yup.object({});

  return (
    <>
      <div className="container p-5">
        <div className="row">
          <div className="col-12 col-lg-3 mb-8 mb-lg-0">
            <SidebarProfileInformation />
          </div>
          <div className="col-12 col-lg-9">
            <Formik
              validationSchema={validationSchema}
              initialValues={initialValues}
              onSubmit={async (values) => {
                console.log(values);
              }}
            >
              {({ values }) => (
                <Form>
                  <div className="row">
                    <div className="col-12 col-md-6">
                      <FormikInput name="status" label="Eğitim Durumu*" />
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
                            htmlFor="isContinue"
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
          </div>
        </div>
      </div>
    </>
  );
}
