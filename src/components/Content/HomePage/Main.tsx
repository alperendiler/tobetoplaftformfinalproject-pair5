import React, { useState,useEffect } from 'react'
import "../../../styles/style.css";
import "../../../styles/mainFormCard.css";
import MainMyTrainings from '../Main/MainMyTrainings';
import "../../../styles/main.css";
import { Link } from 'react-router-dom';
import AnnouncementAndNews from './AnnouncementAndNews';
import Surveys from './Surveys';
import Applications from './Applications';

type Props = {

  
}

export default function Main({}: Props) {

 

  return (
    <>
      <div className="main-card ">
            <div className="card-body">
            <div className='container'>
        <div className='d-flex justify-content-center py-4 istanbul-main-logo  w-auto'>
        <img  src="https://tobeto.com/_next/static/media/ik-logo-dark.7938c0de.svg" alt="" />
        </div>
        <div className='mt-2 d-flex flex-column justify-content-center px-10 text-center'>
        <p className='fs-4 fw-medium'>Ücretsiz eğitimlerle, geleceğin mesleklerinde sen de yerini al.</p>
        <p className='fs-2 fw-bold'>Aradığın  <span className="quot">&nbsp;“</span>İş<span className="quot">“</span>  Burada!</p>
        </div>
        <div className="card border-light">

      <div className="card-body  ">

        {/* Bordered Tabs */}
          <ul className="nav  nav-underline mb-4" id="borderedTab" role="tablist">
            <li className="nav-item" role="presentation">
              <button className="nav-link link-secondary active" id="home-tab" data-bs-toggle="tab" data-bs-target="#bordered-home" type="button" role="tab" aria-controls="application" aria-selected="true">Başvurularım</button>
            </li>
            <li className="nav-item" role="presentation">
              <button className="nav-link link-secondary" id="profile-tab" data-bs-toggle="tab" data-bs-target="#bordered-profile" type="button" role="tab" aria-controls="education" aria-selected="false">Eğitimlerim</button>
            </li>
            <li className="nav-item" role="presentation">
              <button className="nav-link link-secondary" id="contact-tab" data-bs-toggle="tab" data-bs-target="#bordered-contact" type="button" role="tab" aria-controls="announcementandnews" aria-selected="false">Duyuru Ve Haberlerim</button>
            </li>
            <li className="nav-item" role="presentation">
              <button className="nav-link link-secondary" id="surveys-tab" data-bs-toggle="tab" data-bs-target="#bordered-surveys" type="button" role="tab" aria-controls="surveys" aria-selected="false">Anketlerim</button>
            </li>
          </ul>
     
    
        <div className="tab-content pt-2" id="borderedTabContent">
          <div className="tab-pane fade show active" id="bordered-home" role="tabpanel" aria-labelledby="applications-tab">
            <Applications/>
          </div>
          <div className="tab-pane fade" id="bordered-profile" role="tabpanel" aria-labelledby="educations-tab">
                    <div className='row'>
     
         <MainMyTrainings  />
  
           <Link to={"/education"}><div className="showMoreBtn">Daha Fazla Göster</div></Link>
            </div>



          </div>
          <div className="tab-pane fade" id="bordered-contact" role="tabpanel" aria-labelledby="announcementandnews-tab">
            <AnnouncementAndNews/>
            <Link to={"/announcements"}><div className="showMoreBtn">Daha Fazla Göster</div></Link>

          </div>
          <div className="tab-pane fade" id="bordered-surveys" role="tabpanel" aria-labelledby="surveys-tab">
           <Surveys/>
           
          </div>
        </div>{/* End Bordered Tabs */}
      </div>
    </div>
        </div>
            </div>
          </div>
   
        </>
  )
}