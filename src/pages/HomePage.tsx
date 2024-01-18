import React from 'react'
import "bootstrap/dist/css/bootstrap.css";
import Welcome from '../components/Welcome';
import Main from '../components/Main';
import PackageCardsRow from '../components/PackageCardsRow';

type Props = {}

export default function HomePage({}: Props) {
  return (
    <>
    <div className='container col-md-7 text-center'>
       
     <Welcome/>
     <Main/>
     <PackageCardsRow/>
     
  </div>
  
    </>
  )
}