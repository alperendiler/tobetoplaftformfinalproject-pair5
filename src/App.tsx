import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Navbar from './components/Navbar';
import Login from './pages/Login';
import Register from './pages/Register';
import HomePage from './pages/HomePage';
import "bootstrap/dist/css/bootstrap.css";
import UserProfile from './pages/UserProfile';

function App() {
  return (
    <>
    
    <Navbar/>
    
   <Routes>
    <Route path='/' element={<HomePage/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/register' element={<Register/>}/>
    <Route path='/profile' element={<UserProfile/>}/>
   </Routes>
  
  </>
  );
}

export default App;
