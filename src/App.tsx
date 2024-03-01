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
import Experience from "./pages/ProfileInformation/ExperienceInformation";
import Announcements from "./pages/Announcements";
import ForgottenPassword from "./pages/ForgottenPassword";
import NotFound from "./pages/NotFound";
import EditProfile from "./pages/ProfileInformation/EditProfile";
import Connection from "./pages/Connection";
import { ToastContainer } from 'react-toastify';
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import ConnectionSuccess from "./pages/ConnectionSuccess";
import OverloyLoader from "./components/Common/OverloyLoader";
 

interface Props { }
function App({ }: Props) {
  return (
    <>
      <ToastContainer />
      <OverloyLoader/>

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
         <Route
        path="/forgotPassword"
        element={
          <div>    <NavbarLogin />
          <ForgottenPassword/>
          <FooterLogin /></div>     
        }
      />
        <Route
          path="/home-page"
          element={
            <ProtectedRoute>
              <Navbar />
              <HomePage />
              <Footer />
            </ProtectedRoute>


        }
      />
          
      <Route
        path="/user-profile"
        element={
          <ProtectedRoute> 
            <Navbar />
          <UserProfile />
          <Footer />
          </ProtectedRoute>
        }
      />
      <Route
        path="/catalog"
        element={
          <ProtectedRoute> 
            <Navbar />
            <Catalog />
            <Footer />
          </ProtectedRoute> 
        }
      />
      <Route
        path="/calendar"
        element={
          <ProtectedRoute> 
            <Navbar />
            <Calendar />
            <Footer />
        </ProtectedRoute> 
        }
      />
      <Route
        path="/evaluations"
        element={
          <ProtectedRoute> 
            <Navbar />
            <Evaluations />
            <Footer />
          </ProtectedRoute> 
        }
      />
      <Route
        path="/education"
        element={
          <ProtectedRoute> 
            <Navbar />
            <Trainings />
            <Footer />
          </ProtectedRoute> 
        }
      />
      <Route
        path="/courses/:id"
        element={
          <ProtectedRoute> 
            <CourseDetail />
            </ProtectedRoute> 
        }
      />
      <Route
        path="/edit-profile/experience-information"
        element={
          <ProtectedRoute> 
            <Navbar />
            <Experience />
            <Footer />
            </ProtectedRoute> 
        }
      />
      <Route
        path="/edit-profile/personal-information"
        element={
          <ProtectedRoute> 
            <Navbar />
            <EditProfile/>
            <Footer />
          </ProtectedRoute> 
        }
        
      />
      
       <Route
        path="/announcements"
        element={
          <ProtectedRoute> 
            <Navbar />
            <Announcements />
            <Footer />
            </ProtectedRoute> 
        }
      />
       <Route
        path="/notFound"
        element={
          <ProtectedRoute> 
            <NotFound/>
          </ProtectedRoute> 
        }
      />
       <Route
        path="/connection"
        element={
          <div>
            <NavbarLogin />
            <Connection/>
            <FooterLogin />
          </div>
        }
      />
      <Route
        path="/connectionsuccess"
        element={
          <div>
            <NavbarLogin />
            <ConnectionSuccess/>
            <FooterLogin />
          </div>
        }
      />


      </Routes>
    </>

  );
}

export default App;
