import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import FormikInput from "../components/FormikInput/FormikInput";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import * as Yup from "yup";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

type Props = {};

interface PersonalInformationForm {
  name: string;
  surname: string;
  phoneNumber: string;
  birthDate: string;
  IdentityNumber: string;
  email: string;
  country: string;
  city: string;
  county: string;
  neighbourhood: string;
  street: string;
  about: string;
}

export default function PersonalInformation({}: Props) {
  const [value, setValue] = useState<string | undefined>(undefined);

  const initialValues: PersonalInformationForm = {
    name: "",
    surname: "",
    phoneNumber: "",
    birthDate: "",
    IdentityNumber: "",
    email: "",
    country: "",
    city: "",
    county: "",
    neighbourhood: "",
    street: "",
    about: "",
  };

  const validationSchema = Yup.object();

  return (
    <>
      <div className="container p-5">
        <div className="row">
          <div className="col-12 col-lg-3 mb-8 mb-lg-0">
            <div className="p-2 py-4 mobile-sidebar">
              <a
                className="btn mb-2 text-start w-100 sidebar-link active-edit"
                href="#"
              >
                <span className="personel-informations"></span>
                <span className="sidebar-text">Kişisel Bilgilerim</span>
              </a>
              <a className="btn mb-2 text-start w-100  sidebar-link " href="#">
                <span className="experience"></span>
                <span className="sidebar-text">Deneyimlerim</span>
              </a>
              <a className="btn mb-2 text-start w-100  sidebar-link " href="#">
                <span className="educations"></span>
                <span className="sidebar-text">Eğitim Hayatım</span>
              </a>
              <a className="btn mb-2 text-start w-100  sidebar-link " href="#">
                <span className="abilities"></span>
                <span className="sidebar-text">Yetkinliklerim</span>
              </a>
              <a className="btn mb-2 text-start w-100  sidebar-link " href="#">
                <span className="certificates"></span>
                <span className="sidebar-text">Sertifikalarım</span>
              </a>
              <a className="btn mb-2 text-start w-100  sidebar-link " href="#">
                <span className="languages"></span>
                <span className="sidebar-text">Medya Hesaplarım</span>
              </a>
              <a className="btn mb-2 text-start w-100  sidebar-link " href="#">
                <span className="languages2"></span>
                <span className="sidebar-text">Yabancı Dillerim</span>
              </a>
              <a className="btn mb-2 text-start w-100  sidebar-link " href="#">
                <span className="settings"></span>
                <span className="sidebar-text">Ayarlar</span>
              </a>
            </div>
          </div>
          <div className="col-12 col-lg-9">
            <Formik
              validationSchema={validationSchema}
              initialValues={initialValues}
              onSubmit={(values) => {}}
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
                      />
                    </div>
                  </div>
                  <div className="col-12 col-md-6">
                    <FormikInput name="name" label="Soyadınız*" />

                  </div>
                </div>

                <FormikInput name="description" label="Ürün Açıklaması" />
                <FormikInput name="price" label="Ürün Fiyatı" type="number" />
                <FormikInput name="stock" label="Ürün Stok" type="number" />

                <Field as="select" className="form-select" name="colorId">
                  <option value={0}>Bir renk seçin</option>
                  <option value={1}>Kırmızı</option>
                  <option value={2}>Siyah</option>
                  <option value={3}>Beyaz</option>
                </Field>
                <ErrorMessage name="colorId"></ErrorMessage>

                <button type="submit" className="btn btn-primary">
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
