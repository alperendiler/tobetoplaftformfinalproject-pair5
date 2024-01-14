import React from 'react'
import Welcome from '../components/Welcome'
import "bootstrap/dist/css/bootstrap.css";
import Main from '../components/Main';

type Props = {}

export default function HomePage({}: Props) {
  return (
    <>
    <div className='container'>
       <Welcome/>    
       <Main/>
  </div>
    </>
  )
}