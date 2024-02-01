import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useState } from "react";
import "../../styles/personalInformation.css";

import React from "react";
import FormikInput from "../../components/FormikInput/FormikInput";
import ReactDatePicker from "react-datepicker";

type Props = {};
interface ExperienceForm {
  company: string;
  sector: string;
  position: string;
  jobDescription: string;
  city: string;
  startDate: string;
  finishDate: string;
}
export default function ExperienceInformation({}: Props) {
  const initialValues: ExperienceForm = {
    company: "",
    sector: "",
    position: "",
    jobDescription: "",
    city: "",
    startDate: "",
    finishDate: "",
  };

  const validationSchema = Yup.object({
    company: Yup.string()
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
  const [finishDate, setFinishDate] = React.useState<Date | null>(null);

  return (
    <>
      <Formik
        validationSchema={validationSchema}
        initialValues={initialValues}
        onSubmit={async (values) => {
          console.log(values);
        }}
      >
        <Form>
          <div className="row">
            <div className="col-12 col-md-6">
              <FormikInput
                name="company"
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
                <option value={1}>Isparta</option>
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
                    onChange={(date) => setStartDate(date)}
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
                    name="finishDate"
                    placeholderText="gg.aa.yyyy"
                    className="form-control tobeto-input react-datepicker-ignore-onclickoutside"
                    selected={finishDate}
                    onChange={(date) => setFinishDate(date)}
                    dateFormat="dd.MM.yyyy"
                  />
                </div>
              </div>
              <label>
                <Field type="checkbox" name="checked" value="One" />
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

            <button type="submit" className="btn btn-personal-information">
              Kaydet
            </button>
          </div>
        </Form>
      </Formik>
    </>
  );
}
