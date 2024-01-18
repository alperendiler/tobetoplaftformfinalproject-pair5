import React from 'react';
import Login from './pages/Login';
import NavbarLogin from './components/NavbarLogin';
import "./styles/style.css"
import { Route, Routes } from 'react-router-dom';
import Register from './pages/Register';
import Test from './pages/Test';
import HomePage from './pages/HomePage';
import FooterLogin from './components/FooterLogin';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
    <Routes>
    <Route path="/" element={<div><NavbarLogin/> <Login/> <FooterLogin/></div>}>
</Route>
    <Route path="/test" element={<Test/>}/>
    <Route path='kayit-ol' element={<Register/>}/>
    <Route path='home-page' element={<div><Navbar/><HomePage/><Footer/></div>}/>
    <Route path="/test" element={<Test/>}/>
    <Route path="/test" element={<Test/>}/>

    </Routes>
  
  </>
  );
}

export default App;
