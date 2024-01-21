import React from 'react'
import "bootstrap/dist/css/bootstrap.css";
import Welcome from '../components/Welcome';
import Main from '../components/Main';
import PackageCardsRow from '../components/PackageCardsRow';
import MainExams from '../components/MainExams';

type Props = {}

export default function HomePage({}: Props) {
  return (
    <>
    <div className='container col-md-8 text-center'>
    
     <Welcome/>
     <Main/>
     <MainExams/>
     <PackageCardsRow/>
     
  </div>
  
    </>
  )
}