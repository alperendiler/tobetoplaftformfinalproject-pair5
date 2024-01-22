import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import FormikInput from "../components/FormikInput/FormikInput";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import * as Yup from "yup";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "../styles/MyProfileStyles/profilePicture.css";
import "../styles/personalInformation.css";
import SidebarProfileInformation from "../components/SidebarProfileInformation/SidebarProfileInformation";

type Props = {};

interface PersonalInformationForm {
  name: string;
  surname: string;
  phoneNumber: string;
  birthDate: string;
  identityNumber: string;
  email: string;
  country: string;
  city: string;
  neighbourhood: string;
  about: string;
}

export default function PersonalInformation({}: Props) {
  const [value, setValue] = useState<string | undefined>(undefined);
  const [startDate, setStartDate] = useState(new Date());

  const initialValues: PersonalInformationForm = {
    name: "",
    surname: "",
    phoneNumber: "",
    birthDate: "",
    identityNumber: "",
    email: "",
    country: "",
    city: "",
    neighbourhood: "",
    about: "",
  };

  const validationSchema = Yup.object({
    name: Yup.string()
      .required("Doldurulması zorunlu alan*")
      .min(2, "En az 2 haneden oluşmalıdır.")
      .max(100, "En fazla 100 karakter girebilirsiniz"),
    surname: Yup.string()
      .required("Doldurulması zorunlu alan*")
      .min(2, "En az 2 haneden oluşmalıdır.")
      .max(100, "En fazla 200 karakter girebilirsiniz"),
    phoneNumber: Yup.string()
    .test({
      name: 'len',
      message: 'Telefon numarası en az 10 haneli olmalıdır.',
      test: (val) => {
        if (!val) return false; // Boşsa başarısız
        return val.replace(/\D/g, '').length >= 10; // Sayı karakterleri sayısını kontrol et
      },
    })
    .matches(/^[0-9]{10}$/, 'Geçerli bir telefon numarası girin'),
  });

  return (
    <>
      <div className="container p-5">
        <div className="row">
          <div className="col-12 col-lg-3 mb-8 mb-lg-0">
            <SidebarProfileInformation />
          </div>
          <div className="col-12 col-lg-9">
            <div className=" d-flex justify-content-center profile-picture-form">
              <img
                className="profile-picture-image"
                src="https://tobeto.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimages.19a45d39.png&w=384&q=75"
              />
            </div>
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
                    <FormikInput name="name" label="Adınız*" />
                    <div className="mb-3">
                      <label className="form-label">Telefon Numaranız*</label>
                      <PhoneInput
                        placeholder="5** *** ** **"
                        defaultCountry="TR"
                        value={value}
                        onChange={setValue}
                        name="phoneNumber"
                        limitMaxLength={true}
                      />
                      <ErrorMessage name="phoneNumber">
                        {(message) => <p className="text-danger">{message}</p>}
                      </ErrorMessage>
                    </div>

                    <div className="mt-3">
                      <FormikInput
                        name="identityNumber"
                        label="TC Kimlik No*"
                      />
                    </div>
                  </div>
                  <div className="col-12 col-md-6">
                    <FormikInput name="surname" label="Soyadınız*" />
                    <div className="mb-3">
                      <label className="form-label">Doğum Tarihiniz*</label>
                      <br />
                      <DatePicker
                        className="date-picker"
                        name="birthDate"
                        selected={startDate}
                        onChange={(date: Date) => setStartDate(date)}
                      />
                    </div>
                    <div>
                      <FormikInput name="email" label="E-posta" type="email" />
                    </div>
                  </div>
                </div>
                <div className="mb-3">
                  <label className="form-label">Ülke*</label>
                  <Field
                    label="Ülke*"
                    name="country"
                    as="select"
                    className=" form-control form-select"
                  >
                    <option value={0}>Bir ülke seçin</option>
                    <option value={1}>Türkiye</option>
                  </Field>
                </div>
                <div className="mb-3">
                  <label className="form-label">Şehir*</label>
                  <Field
                    label="Şehir*"
                    name="city"
                    as="select"
                    className=" form-control form-select"
                  >
                    <option value={0}>Bir şehir seçin</option>
                    <option value={1}>Ankara</option>
                    <option value={2}>İstanbul</option>
                    <option value={3}>İzmir</option>
                  </Field>
                </div>
                <FormikInput
                  className="no-resize"
                  name="neighbourhood"
                  label="Mahalle/Sokak"
                  as="textarea"
                  placeholder=""
                />

                <FormikInput
                  className="no-resize"
                  name="about"
                  label="Hakkımda"
                  as="textarea"
                  placeholder="Kendini kısaca tanıt"
                />
                <button type="submit" className="btn btn-personal-information">
                  Kaydet
                </button>
              </Form>
            </Formik>
          </div>
        </div>
      </div>
    </>
  );
}
