import React, { useState,useEffect } from 'react'
import "../../../styles/style.css";
import "../../../styles/mainFormCard.css";
import MainMyTrainings from '../Main/MainMyTrainings';
import "../../../styles/main.css";
import { Link } from 'react-router-dom';

type Props = {

  
}

export default function Main({}: Props) {

  const [applications, setApplications] = useState<{ id: number; title: string; status: string; description: string; }[]>([]);

  const [myTrainings, setmMyTrainings] = useState<{ id: number; title: string; date: string; thumbnail: string; }[]>([]);
  const testMyTrainings = [
    {
      id: 1,
      title: 'İstanbul Kodluyor Bilgilendirme',
      date: '11.11.1111 22.22', 
      thumbnail: 'https://tobeto.s3.cloud.ngn.com.tr/23_EAH_1_45f7232003.jpg', 
    },
    {
      id: 2,
      title: 'İstanbul Kodluyor Bilgilendirme',
      date: '11.11.1111 22.22', 
      thumbnail: 'https://tobeto.s3.cloud.ngn.com.tr/23_ENK_1_b4d858c1a9.jpg', 
    }
   
  ];
  const testApplications = [
    {
      id: 1,
      title: 'İstanbul Kodluyor Bilgilendirme',
      status: 'Kabul edildi', 
      description: 'Lorem ipsum dolor sit a Lorem ipsum dolor sit aLorem ipsum dolor sit a', 
    },
    {
      id: 1,
      title: 'İstanbul Kodluyor Bilgilendirme',
      status: 'Kabul edildi', 
      description: 'Lorem ipsum dolor sit a Lorem ipsum dolor sit aLorem ipsum dolor sit a', 
    }
   
  ];
  useEffect(() => {
    const fetchData = async () => {
      try {


        setApplications(testApplications);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {


        setmMyTrainings(testMyTrainings);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchData();
  }, []);

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
              <button className="nav-link link-secondary" id="contact-tab" data-bs-toggle="tab" data-bs-target="#bordered-contact" type="button" role="tab" aria-controls="surveys" aria-selected="false">Anketlerim</button>
            </li>
          </ul>
     
    
        <div className="tab-content pt-2" id="borderedTabContent">
          <div className="tab-pane fade show active" id="bordered-home" role="tabpanel" aria-labelledby="applications-tab">
          {applications && applications.length > 0 ? (
  applications.map((application) => (
        <div className="col-md-6 col-12 mt-2" key={application.id}>
      <div className={`status-card ${application.status ? 'status_accepted' : ''}`}>
        <span className="form_name fw-bold">{application.title}</span>
        <span className="form_status"></span>
        <span className="pull_back"></span>
        <span className="form_name">Bilgilendirme</span>
        <div>
          <div>
            <div style={{ display: 'flex', alignItems: 'center' }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="green" className="bi bi-check" viewBox="0 0 16 16">
  <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425z"/>
</svg>              <span className="form_date">{application.description}</span>
            </div>
          </div>
          
        </div>
        <div>
          <div>
            <div style={{ display: 'flex', alignItems: 'center' }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="green" className="bi bi-check" viewBox="0 0 16 16">
  <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425z"/>
</svg>              <span className="form_date">{application.description}</span>
            </div>
          </div>
          
        </div>
      </div>
  </div>
  ))
  ) : (
    <p>Başvurular bulunamadı.</p>
  )}
          

          </div>
          <div className="tab-pane fade" id="bordered-profile" role="tabpanel" aria-labelledby="educations-tab">
                    <div className='row'>
     
    <MainMyTrainings  />
  
 <Link to={"/education"}><div className="showMoreBtn">Daha Fazla Göster</div></Link>
            </div>



          </div>
          <div className="tab-pane fade" id="bordered-contact" role="tabpanel" aria-labelledby="announcementandnews-tab">
            Saepe animi et soluta ad odit soluta sunt. Nihil quos omnis animi debitis cumque. Accusantium quibusdam perspiciatis qui qui omnis magnam. Officiis accusamus impedit molestias nostrum veniam. Qui amet ipsum iure. Dignissimos fuga tempore dolor.
          </div>
          <div className="tab-pane fade" id="bordered-contact" role="tabpanel" aria-labelledby="surveys-tab">
            Saepe animi et soluta ad odit soluta sunt. Nihil quos omnis animi debitis cumque. Accusantium quibusdam perspiciatis qui qui omnis magnam. Officiis accusamus impedit molestias nostrum veniam. Qui amet ipsum iure. Dignissimos fuga tempore dolor.
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