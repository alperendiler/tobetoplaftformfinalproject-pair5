import { ErrorMessage, Form, Formik } from "formik";
import * as Yup from "yup";
import FormikInput from "../FormikInput/FormikInput";
import { Link } from "react-router-dom";
import "./register.css";
import authService from "../../services/authService";
type Props = {};
interface RegisterForm {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}
export default function RegisterForm({}: Props) {
  const validationSchema = Yup.object({
    firstName: Yup.string().required("Doldurulması zorunlu alan*")
    .matches(/^[a-zA-ZğüşıöçĞÜŞİÖÇ]+$/, "Geçersiz karakter girişi*"),
    lastName: Yup.string().required("Doldurulması zorunlu alan*")
    .matches(/^[a-zA-ZğüşıöçĞÜŞİÖÇ]+$/, "Geçersiz karakter girişi*"),
    email: Yup.string().required("Doldurulması zorunlu alan*")
    .email("Geçersiz e-posta adresi*"),
    password: Yup.string()
      .required("Şifre alanı zorunludur")
      .min(6, "Şifre en az 6 karakter olmalıdır")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\W)/,
        "En az bir küçük harf, en az bir büyük harf ve en az bir özel karakter içermelidir"
      ),
    repassword: Yup.string()
      .required("Şifre tekrarı alanı zorunludur")
      .oneOf([Yup.ref("password")], "Şifreler uyuşmuyor"),
  });
  const initialValues: RegisterForm = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  };

  const handleRegister = async (values: RegisterForm) => {
    authService.register(values).then((response) => console.log(response));
  };
  return (
    <>
      <div className="col-md-6 col-12 btn-rainbow-card">
        <div>
        <div className=" text-center">
          <div className="cursor-pointer mb-5 register-form-dimension">
            <span>
              <img
                className="tobeto-logo-register"
                src="https://tobeto.com/_next/static/media/tobeto-logo.29b55e1c.svg"
                alt="tobeto Logo "
              />
            </span>
          </div>
          <h2 className="mt-3 mb-3">
            <b>Hemen Kayıt Ol</b>
          </h2>
          <Formik
            validationSchema={validationSchema}
            initialValues={initialValues}
            onSubmit={handleRegister}
            onError={(
              error: unknown,
              actions: { setSubmitting: (isSubmitting: boolean) => void }
            ) => {
              console.error(
                "İşlenmemiş Formik hatası:",
                (error as Error).message
              );
              actions.setSubmitting(false);
            }}
          >
            {({ isSubmitting }) => {
              return (
                <div>
                <Form className="row g-3 form-content-dimension">
                  <div className="col-12 mt-2">
                    <FormikInput placeholder="Ad" name="firstName" />
                  </div>
                  <div className="col-12 mt-2">
                    <FormikInput placeholder="Soyad" name="lastName" />
                  </div>
                  <div className="col-12 mt-2">
                    <FormikInput placeholder="E-Posta" name="email" />
                  </div>
                  <div className="col-12 mt-2">
                    <FormikInput
                      type="password"
                      placeholder="Şifre"
                      name="password"
                    />
                  </div>
                  <div className="col-12 mt-2">
                    <FormikInput
                      type="password"
                      placeholder="Şifre Tekrar"
                      name="repassword"
                    />
                  </div>
                  <ErrorMessage name="colorId"></ErrorMessage>

                  <button
                    type="submit"
                    className="btn fw-bold btn-login btn-primary w-100"
                  >
                    Kayıt Ol
                  </button>
                  <div className="col-12">
                    <label>
                      <small>
                        Zaten bir hesabın var mı?
                        <Link
                          className="text-decoration-none text-muted fw-bold"
                          to="/"
                        >
                          {" "}
                          Giriş Yap
                        </Link>
                      </small>
                    </label>
                  </div>
                </Form>
                </div>
              );
            }}
          </Formik>
        </div>
        </div>
        
      </div>
    </>
  );
}
