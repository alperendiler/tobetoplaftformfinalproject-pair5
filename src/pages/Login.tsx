import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { useState } from "react";
import FormikInput from "../components/FormikInput/FormikInput";
import * as Yup from "yup";
import { passwordRule } from "../utils/validations/customValidationRules";
import { Route } from "react-router-dom";

const Login = () => {
  interface LoginForm {
    email: string;
    password: string;
  }
  const initialValues: LoginForm = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    title: Yup.string()
      .required("Başlık alanı zorunludur.")
      .min(2, "Başlık en az 2 haneden oluşmalıdır.")
      .max(50)
      .test(
        "is-strong",
        "Bu alan en az 1 büyük, 1 küçük harf ve 1 numerik değer içermelidir",
        passwordRule
      ),
    description: Yup.string().required().min(5).max(300),
    price: Yup.number().min(1),
    stock: Yup.number().min(1).integer(),
    colorId: Yup.number().min(1),
  });

  return (
    <main>
      <div className="container ">
        <section className="section register min-vh-100 d-flex flex-column align-items-center justify-content-center py-4">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-4 col-md-6 d-flex flex-column align-items-center justify-content-center">
                <div className="card mb-3">
                  <div className="card-body">

                  <div className="d-flex justify-content-center py-4  d-flex align-items-center w-auto" >
                    <img className='login-logo' src="https://tobeto.com/_next/static/media/tobeto-logo.29b55e1c.svg" alt="" />
                </div>
                <Formik
				validationSchema={validationSchema}
				initialValues={initialValues}
				onSubmit={values => {
					console.log(values);
				}}>
                <Form className='row g-3 '>
                <div className="col-12 mt-3">
                <FormikInput placeholder="E-Posta" name="email" />
                </div>
                <div className="col-12 mt-2">
					<FormikInput placeholder="Şifre" name="password"  />
				
          </div>
				
					<ErrorMessage name="colorId"></ErrorMessage>

					<button type="submit" className="btn fw-bold btn-login btn-primary w-100">
						Giriş Yap
					</button>
<div className="col-12 ">
                      <p className="  mt-2 d-block"> <a className='link-secondary' href="pages-register.html">Şifremi Unuttum</a></p>
                    </div>
                    <label><small>Henüz üye değil misin?
                      <a className="text-decoration-none text-muted fw-bold" href="/kayit-ol"> Kayıt Ol</a>
                      </small></label>
                      </Form>
                    </Formik>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 d-flex flex-column align-items-center justify-content-center">
                <div className="card mb-3 container ">
                  <div className="card-body ">
                    <div className="mx-auto text-center col-md-6 col-12">
                      <div className="ik-banner-big h-100">
                        <img
                          className="login-logo-istanbul"
                          src="https://tobeto.com/_next/static/media/ik-logo-dark.7938c0de.svg"
                          alt=""
                        />
                      </div>

                      <span className="greenLine2"></span>
                      <p className="text-blue fw-bold">
                        Aradığın<span className="quot">&nbsp;“</span>İş
                        <span className="quot">“</span> Burada!
                      </p>

                      <div className="d-flex w-100 flex-column justify-content-center align-items-center">
                        <button className="btn fw-semibold istanbul-kodluyor-submit-btn d-md-inline-block mt-5 btn-dark">
                          Başvur
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Login;
