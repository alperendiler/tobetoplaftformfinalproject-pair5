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
 
  };

  const validationSchema = Yup.object().shape({
    password: Yup.string().required("Eski Şifre gereklidir"),
    newPassword: Yup.string().required("Yeni Şifre gereklidir").min(6, "Şifre en az 6 karakter olmalıdır")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\W)/,
      "En az bir küçük harf, en az bir büyük harf ve en az bir özel karakter içermelidir"),
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
                data-bs-toggle="modal"
                            data-bs-target="#exampleModal"
              >
                Üyeliği Sonlandır
              </button>
              <div
                            className="modal fade"
                            id="exampleModal"
                            aria-labelledby="exampleModalLabel"
                            aria-hidden="true"
                          >
                            <div className="modal-dialog  modal-dialog-centered ">
                              <div className="modal-content">
                                <div className="modal-header">
                                  <img src="https://tobeto.com/_next/static/media/alert.309dc4c0.svg"></img>
                                  <br />
                                  <br />
                                  <h6 className="modal-title">
                                    <b>
                                    Hesabınızı silmek istediğinize emin misiniz?
                                    </b>
                                  </h6>
                                  <button
                                    type="button"
                                    className="btn-close"
                                    data-bs-dismiss="modal"
                                    aria-label="Close"
                                  ></button>
                                </div>
                                <div className="modal-body text-muted">
                                  <p>Hesabınızı silme işleminden sonrasında bilgileriniz geri alınamaz şekilde silinecektir.</p>
                                </div>
                                <div className=" modal-footer modal-footer-feature">
                                  <button
                                    type="button"
                                    className="btn btn-secondary"
                                    data-bs-dismiss="modal"
                                  >
                                    Hayır
                                  </button>

                                  <button
                                    type="button"
                                    className="btn btn-primary"
                                    data-bs-dismiss="modal"
                                   
                                  >
                                    Evet
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
            </div>
          </div>
        </Form>
      </Formik>
    </>
  );
}
