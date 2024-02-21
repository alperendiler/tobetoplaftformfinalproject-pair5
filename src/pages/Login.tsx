import "../styles/login.css";
import LoginForm from "../components/Login/LoginForm";
import { toast } from "react-toastify";
import Chatbot from "../components/Common/Chatbot";


const Login = () => {
  const onRegisterSuccess =()=>{
    toast.success("Kayıt Başarılı", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme:"colored"
    });

  }
  return (
    <main>
      <div className="container ">
        <section className="section register min-vh-100 d-flex flex-column align-items-center justify-content-center py-4">
          <div className="container">
            <div className="row equal-col d-flex justify-content-center">

              <div className="col-lg-4 col-md-6 d-flex flex-column align-items-center justify-content-center">
                <div className="card ">
                  <div className="card-body">
                    <div className="d-flex justify-content-center py-4  d-flex align-items-center w-auto">
                      <img
                        className="login-logo"
                        src="https://tobeto.com/_next/static/media/tobeto-logo.29b55e1c.svg"
                        alt=""
                      />
                    </div>
                    <LoginForm />
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 d-flex flex-column align-items-center justify-content-center">
                <div className="card container pt-3 pb-1">
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
      <Chatbot/>
    </main>
  );
};

export default Login;
