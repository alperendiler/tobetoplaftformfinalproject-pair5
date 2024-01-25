import React from "react";
import Login from "./pages/Login";
import NavbarLogin from "./components/Navbar/NavbarLogin";
import "./styles/style.css";
import { Route, Routes } from "react-router-dom";
import Register from "./pages/Register";
import HomePage from "./pages/HomePage";
import FooterLogin from "./components/Footer/FooterLogin";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import UserProfile from "./pages/UserProfile";
import Catalog from "./pages/Catalog";
import Calendar from "./pages/Calendar";
import Evaluations from "./pages/Evaluations";
import ExamDetail from "./components/Content/HomePage/ExamDetail";
import Trainings from "./pages/Trainings";
import CourseDetail from "./pages/CourseDetail";
import PrivateRoot from "./components/PrivateRoot";
import ProfileInformation from "./pages/ProfileInformation/ProfileInformation";
import PersonalInformation from "./pages/ProfileInformation/PersonalInformation";
import EducationInformation from "./pages/ProfileInformation/EducationInformation";

interface Props {}
function App({}: Props) {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <NavbarLogin /> <Login /> <FooterLogin />
            </div>
          }
        />
        <Route
          path="/register"
          element={
            <div>
              <NavbarLogin /> <Register /> <FooterLogin />
            </div>
          }
        />
      </Routes>

      <PrivateRoot
        path="/home-page"
        element={
          <div>
            <Navbar />
            <HomePage />
            <Footer />
          </div>
        }
      />
      <PrivateRoot
        path="/user-profile"
        element={
          <div>
            <Navbar />
            <UserProfile />
            <Footer />
          </div>
        }
      />
      <PrivateRoot
        path="/catalog"
        element={
          <div>
            <Navbar />
            <Catalog />
            <Footer />
          </div>
        }
      />
      <PrivateRoot
        path="/calendar"
        element={
          <div>
            <Navbar />
            <Calendar />
            <Footer />
          </div>
        }
      />
      <PrivateRoot
        path="/evaluations"
        element={
          <div>
            <Navbar />
            <Evaluations />
            <Footer />
          </div>
        }
      />
      <PrivateRoot
        path="/education"
        element={
          <div>
            <Navbar />
            <Trainings />
            <Footer />
          </div>
        }
      />
      <PrivateRoot
        path="/course/:id"
        element={
          <div>
            <CourseDetail />
          </div>
        }
      />
      <PrivateRoot
        path="/profile-information"
        element={
          <div>
            <Navbar />
            <ProfileInformation />
            <Footer />
          </div>
        }
      />
      <PrivateRoot
        path="/personal-information"
        element={
          <div>
            <Navbar />
            <PersonalInformation />
            <Footer />
          </div>
        }
      />
      <PrivateRoot
        path="/education-information"
        element={
          <div>
            <Navbar />
            <EducationInformation />
            <Footer />
          </div>
        }
      />
    </>
  );
}

export default App;
