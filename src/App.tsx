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
import Trainings from "./pages/Trainings";
import CourseDetail from "./pages/CourseDetail";
import PrivateRoot from "./components/PrivateRoot";
import Experience from "./pages/ProfileInformation/ExperienceInformation";
import Announcements from "./pages/Announcements";
import ForgottenPassword from "./pages/ForgottenPassword";
import NotFound from "./pages/NotFound";
import EditProfile from "./pages/ProfileInformation/EditProfile";



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
        path="/edit-profile/experience-information"
        element={
          <div>
            <Navbar />
            <Experience />
            <Footer />
          </div>
        }
      />
      <PrivateRoot
        path="/edit-profile/personal-information"
        element={
          <div>
            <Navbar />
            <EditProfile/>
            <Footer />
          </div>
        }
        
      />

      
       <PrivateRoot
        path="/announcements"
        element={
          <div>
            <Navbar />
            <Announcements />
            <Footer />
          </div>
        }
      />
      <PrivateRoot
        path="/forgotPassword"
        element={
          <div>
            <NavbarLogin />
            <ForgottenPassword/>
            <FooterLogin />
          </div>
        }
      />
       <PrivateRoot
        path="/notFound"
        element={
          <div>
            <NotFound/>
          </div>
        }
      />
    </>
    
  );
}

export default App;
