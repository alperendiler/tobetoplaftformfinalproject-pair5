import React from 'react'
import "bootstrap/dist/css/bootstrap.css";
import Navbar from '../components/Navbar';
import Welcome from '../components/Welcome';
import Main from '../components/Main';

type Props = {}

export default function HomePage({}: Props) {
  return (
    <>
     <Navbar/>
    <div className='container col-md-6 text-center'>
       
     <Welcome/>
     <Main/>
  </div>
    </>
  )
}