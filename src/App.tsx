import React from 'react';

import Login from './pages/Login';

import NavbarLogin from './components/NavbarLogin';
import "./styles/style.css"
import { Route, Routes } from 'react-router-dom';
import Register from './pages/Register';
import Test from './pages/Test';

function App() {
  return (
    <>
    <NavbarLogin/>
    <Routes>
    <Route path="/" element={<Login/>}/>
    <Route path="/test" element={<Test/>}/>
    <Route path='kayit-ol' element={<Register/>}/>
    </Routes>
  
  </>
  );
}

export default App;
