import React, { useState } from "react";
import RegisterForm from "../components/Register/RegisterForm";
import RegisterApplication from "../components/Register/RegisterApplication";
import "../components/Register/register.css"
const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [acceptTerms, setAcceptTerms] = useState(false);

  const handleSubmit = () => {
    // Handle form submission here
  };

  return (
    <>
      <section className="position-relative py-lg-20 bg-light-light py-sm-10">
        <div className="container ">
          <div className="row equal-col mt-3">
            <RegisterForm />
            <RegisterApplication />
          </div>
        </div>
      </section>
    </>
  );
};

export default Register;
