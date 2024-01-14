import React from 'react'

type Props = {}

export default function Welcome({}: Props){
  return (
    <>
      <section className="py-5">
      <div className="position-relative mt-12">
      <div className="container text-center">
        <div className="mw-5xl mx-auto">
            <h3>
                <span className="text-secondary"> TOBETO</span>
                <span className="fw-normal text-info">'ya</span>
                 <span className="fw-normal text-info"> hoş geldin</span>
                 </h3>
                 <h4 className="fw-normal text-info mb-5">{"user.name"}</h4>
      <p className="tobeto-slogan">Yeni nesil öğrenme deneyimi ile Tobeto kariyer yolculuğunda senin yanında!</p></div></div>
       
      </div>
    </section>   
    </>
  )
}