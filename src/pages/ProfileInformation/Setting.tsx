import React, { useState, useEffect } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import "../../styles/personalInformation.css";
import FormikInput from "../../components/FormikInput/FormikInput";

type Props = {};

interface SettingForm {
  password: string;
  newPassword: string;
  reNewPassword: string;
}

export default function Setting({}: Props) {
  const initialValues: SettingForm = {
    password: "",
    newPassword: "",
    reNewPassword: "",
  };

  const validationSchema = Yup.object();

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
                <div className="row form-text-style">
                  <div className="col-12 col-md-4">
                    <FormikInput
                      name="name"
                      label="Eski Şifre*"
                      placeholder="Eski Şifre"
                    />
                  </div>
                  <div className="col-12 col-md-4">
                    <FormikInput
                      name="name"
                      label="Yeni Şifre*"
                      placeholder="Yeni Şifre"
                    />
                  </div>
                  <div className="col-12 col-md-4">
                    <FormikInput
                      name="name"
                      label="Yeni Şifre Tekrar*"
                      placeholder="Yeni Şifre Tekrar"
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-12 col-md-6">
                    <button
                      type="submit"
                      className="btn btn-personal-information-second"
                    >
                      Şifre Değiştir
                    </button>
                  </div>
                  <div className="col-12 col-md-6">
                    <button
                      type="submit"
                      className="btn btn-personal-information-third"
                    >
                      Üyeliği Sonlandır
                    </button>
                  </div>
                </div>
              </Form>
            </Formik>
    </>
  );
}
