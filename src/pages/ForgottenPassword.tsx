import React from "react";
import FormikInput from "../components/FormikInput/FormikInput";
import * as Yup from "yup";
import { Formik, Form } from "formik";
import "../styles/forgottenPassword.css";
import Chatbot from "../components/Common/Chatbot";

type Props = {};

interface ForgottenPasswordForm {
  email: string;
}

export default function ForgottenPassword({}: Props) {
  const initialValues: ForgottenPasswordForm = {
    email: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string()
      .required("Doldurulması zorunlu alan*")
      .email("Geçerli bir e-posta adresi giriniz"),
  });

  return (
    <>
      <div className="container p-5 ">
        <div className="row d-flex justify-content-center ">
            
          <div className="col-12 col-md-6 reset-password shadow-lg p-4 mb-5 bg-body rounded mt-3">
            <Formik
              validationSchema={validationSchema}
              initialValues={initialValues}
              onSubmit={async (values) => {
                console.log(values);
              }}
            >
              <Form>
                <h1 className="d-flex justify-content-center mb-4 mt-5"><b>Şifre Sıfırlama</b></h1>
                  <FormikInput name="email"  placeholder="Şifre sıfırlama linki için e-posta adresinizi giriniz" />
                    <button type="submit" className="btn btn-personal-information-second mb-5">
                  Gönder
                </button>
              </Form>
            </Formik>
          </div>
        </div>
        <Chatbot/>
      </div>
    </>
  );
}
