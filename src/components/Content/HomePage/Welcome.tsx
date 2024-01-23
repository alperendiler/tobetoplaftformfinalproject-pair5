import React from 'react'

type Props = {}            /*   <img className=' d-flex justify-content-end' src="https://tobeto.com/_next/static/media/dot-purple.e0e5c9d8.svg" alt="" />*/


export default function Welcome({}: Props){
  return (
    <>
    
          
             <section className="py-5">
      <div className="position-relative mt-12">
      <div className="container text-center">
        <div className="mw-5xl mx-auto">
            
                <span className="text-purple fs-1 fw-bold"> TOBETO</span>
                 <span className="fw-normal fs-1 text-dark-emphasis">'ya hoş geldin</span>
                 
                 <h2 className="fw-normal text-dark-emphasis mb-5">{"user.name"}</h2>
      <p className="fs-3 fw-normal">Yeni nesil öğrenme deneyimi ile Tobeto kariyer yolculuğunda senin yanında!</p></div></div>
       
      </div>
    </section>   
          
  
    </>
  )
}