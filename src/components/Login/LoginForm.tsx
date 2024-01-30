import { ErrorMessage, Form, Formik } from "formik";
import React from "react";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import FormikInput from "../FormikInput/FormikInput";
import { useDispatch, useSelector } from "react-redux";
import authSlice, { setToken } from "../../store/auth/authSlice";
import { RootState } from "../../store/configureStore";
import authService from "../../services/authService";
import axiosInstance from "../../core/interceptors/axiosInterceptor";
import { useNavigate } from "react-router-dom";
import tokenService from "../../core/services/tokenService";
import "./loginForm.css"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

type Props = {};
interface LoginForm {
  email: string;
  password: string;
}
export default function LoginForm({}: Props) {

  const initialValues: LoginForm = {
    email: "",
    password: "",
  };
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const handleLogin = async (
    values: LoginForm,
    {
      setSubmitting,
      setErrors,
    }: {
      setSubmitting: (isSubmitting: boolean) => void;
      setErrors: (errors: Record<string, string>) => void;
    }
  ) => {
    try {
      const token = await authService.login(values);
    

    
      dispatch(setToken(token));
      localStorage.setItem("user", JSON.stringify(token));
      navigate("home-page");
   
    } catch (error) {

      console.error("Kimlik doğrulama hatası:", (error as Error).message);
      setErrors({ password: "Kimlik doğrulama hatası" }); 
      toast.error("E-posta veya şifre geçersiz", {
        position: "top-right",
        autoClose: 5000, // 5 saniye sonra otomatik olarak kapat
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme:"colored"
      });
    } finally {
      setSubmitting(false);
    }
  };

  const validationSchema = Yup.object({
    email: Yup.string().required("Doldurulması zorunlu alan*"),
    password: Yup.string().required("Doldurulması zorunlu alan*"),
  });

  return (
    <div>
      <Formik
        validationSchema={validationSchema}
        initialValues={initialValues}
        onSubmit={handleLogin}
        onError={(
          error: unknown,
          actions: { setSubmitting: (isSubmitting: boolean) => void }
        ) => {
          console.error("İşlenmemiş Formik hatası:", (error as Error).message);
          actions.setSubmitting(false);
        }}
      >
        {({ isSubmitting }) => {
          return (
            <Form className="row g-3">
              <div className="col-12 mt-3">
                <FormikInput placeholder="E-Posta" name="email" />
              </div>
              <div className="col-12 mt-2">
                <FormikInput
                  type="password"
                  placeholder="Şifre"
                  name="password"
                />
              </div>

              <ErrorMessage name="colorId"></ErrorMessage>

              <button
                type="submit"
                className="btn fw-bold btn-login btn-primary w-100"
              >
                Giriş Yap
              </button>
              <ToastContainer />
              <div className="col-12 ">
                <p className="  mt-2 d-block">
                  <Link
                    className="nav-link link-secondary center-footer"
                    to="/forgotPassword"
                  >
                    Şifremi Unuttum
                  </Link>
                </p>
              </div>
              <label className="center-footer">
                <small>
                  Henüz üye değil misin?
                  <Link
                    className="text-decoration-none text-muted fw-bold"
                    to="/register"
                  >
                    {" "}
                    Kayıt Ol
                  </Link>
                </small>
              </label>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
}
