import React, { useState,useEffect } from 'react'
import "../styles/style.css"

type Props = {}

export default function Main({}: Props) {

  const [applications, setapplications] = useState<{ id: number; title: string; status: string; description: string; }[]>([]);

  const testApplications = [
    {
      id: 1,
      title: 'İstanbul Kodluyor Bilgilendirme',
      status: 'Kabul edildi',
      description: 'Lorem ipsum dolor sit a',
    }
   
  ];
  useEffect(() => {
    const fetchData = async () => {
      try {


        setapplications(testApplications);
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
        <p className='fs-2 fw-bold'>Aradığın  <span className="quot">&nbsp;“</span>İş”  Burada!</p>
        </div>
        <div className="card border-light">

      <div className="card-body  ">

        {/* Bordered Tabs */}
        <ul className="nav  nav-underline" id="borderedTab" role="tablist">
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
          <div className="card application col-md-6 col-12 mt-2" key={application.id}>
      <div className="card-body ">
        <div className='row'>   
        <div className="card-title col"><b>{application.title}</b></div>
        <div className='confirm col'> 
        {application.status}
        </div>
      
      </div>
      <div className="card-description col-6"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="green" className="bi bi-check" viewBox="0 0 16 16">
  <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425z"/>
</svg>{application.description}</div>
      </div> 
     
         </div>
      ))
      ) : (
        <p>Başvurular bulunamadı.</p>
      )}
    
          

          </div>
          <div className="tab-pane fade" id="bordered-profile" role="tabpanel" aria-labelledby="educations-tab">
            Nesciunt totam et. Consequuntur magnam aliquid eos nulla dolor iure eos quia. Accusantium distinctio omnis et atque fugiat. Itaque doloremque aliquid sint quasi quia distinctio similique. Voluptate nihil recusandae mollitia dolores. Ut laboriosam voluptatum dicta.
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