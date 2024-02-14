import React, { useState, useEffect } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import "../../styles/personalInformation.css";
import FormikInput from "../../components/FormikInput/FormikInput";
import authService from "../../services/authService";
import { UpdatePasswordRequest } from "../../models/requests/auth/UpdatePasswordRequest";
import { toast,ToastContainer  } from "react-toastify";


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

  const handleSubmit = async (passwordRequest: SettingForm) => {
    const userId = localStorage.getItem("userId")!;

    const response = await authService.updatePassword({userId: userId,
      password: passwordRequest.password,
      newPassword: passwordRequest.newPassword,
      ReNewPassword: passwordRequest.reNewPassword});
      console.log(response);
      if (response.status==200) {
        toast.success("Şifre başarıyla değiştirildi", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          theme:"colored"
        });
    
      } 
      // else {
      //   toast.error("Şifre değiştirme başarısız", {
      //     position: "top-right",
      //     autoClose: 5000, 
      //     hideProgressBar: false,
      //     closeOnClick: true,
      //     pauseOnHover: true,
      //     draggable: true,
      //     progress: undefined,
      //     theme:"colored"
      //   });
      // }
  };

  const validationSchema = Yup.object().shape({
    password: Yup.string().required("Eski Şifre gereklidir"),
    newPassword: Yup.string().required("Yeni Şifre gereklidir"),
    reNewPassword: Yup.string()
      .oneOf([Yup.ref("newPassword"), ""], "Yeni şifreler eşleşmiyor")
      .required("Yeni Şifre Tekrar gereklidir")
  });

  return (
    <>
    <ToastContainer/>
      <Formik
        validationSchema={validationSchema}
        initialValues={initialValues}
        onSubmit={async (values) => {
          handleSubmit(values);
        }}
      >
        <Form>
          <div className="row form-text-style">
            <div className="col-12 col-md-4">
              <FormikInput
                name="password"
                label="Eski Şifre*"
                placeholder="Eski Şifre"
              />
            </div>
            <div className="col-12 col-md-4">
              <FormikInput
                name="newPassword"
                label="Yeni Şifre*"
                placeholder="Yeni Şifre"
              />
            </div>
            <div className="col-12 col-md-4">
              <FormikInput
                name="reNewPassword"
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
