import React from 'react';

import Login from './pages/Login';

import NavbarLogin from './components/NavbarLogin';
import "./styles/style.css"
import { Route, Routes } from 'react-router-dom';
import Register from './pages/Register';
import Test from './pages/Test';
import HomePage from './pages/HomePage';

function App() {
  return (
    <>
    <Routes>
    <Route path="/" element={<div><NavbarLogin/> <Login/> </div>}>
</Route>
    <Route path="/test" element={<Test/>}/>
    <Route path='kayit-ol' element={<Register/>}/>
    <Route path='home-page' element={<HomePage/>}/>
    <Route path="/test" element={<Test/>}/>
    <Route path="/test" element={<Test/>}/>

    </Routes>
  
  </>
  );
}

export default App;
