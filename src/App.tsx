import React from 'react';
import Login from './pages/Login';
import NavbarLogin from './components/NavbarLogin';
import "./styles/style.css"
import { Route, Routes } from 'react-router-dom';
import Register from './pages/Register';
import HomePage from './pages/HomePage';
import FooterLogin from './components/FooterLogin';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import UserProfile from './pages/UserProfile';
import Catalog from './pages/Catalog';
import Calendar from './pages/Calendar';
import Evaluations from './pages/Evaluations';
import PersonalInformation from './pages/PersonalInformation';
import ExamDetail from './components/ExamDetail';

function App() {
  return (
    <>
    <Routes>
    <Route path="/" element={<div><NavbarLogin/> <Login/> <FooterLogin/></div>}>
</Route>
    <Route path='kayit-ol' element={<Register/>}/>
    <Route path='home-page' element={<div><Navbar/><HomePage/><Footer/></div>}/>
    <Route path='user-profile' element={<div><Navbar/><UserProfile/><Footer/></div>}/>
    <Route path='catalog' element={<div><Navbar/><Catalog /><Footer/></div>}/>
    <Route path='calendar' element={<div><Navbar/><Calendar /><Footer/></div>}/>
    <Route path='evaluations' element={<div><Navbar/><Evaluations /><Footer/></div>}/>
    <Route path='personal-information' element={<div><Navbar/><PersonalInformation /><Footer/></div>}/>
    </Routes>
  
  </>
  );
}

export default App;
