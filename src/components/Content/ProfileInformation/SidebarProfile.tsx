import React from 'react'
import { Link } from 'react-router-dom';

type Props= {}

function SidebarProfileInformation({}:Props) {
  return (
    <div>
        <div className="p-2 py-4 mobile-sidebar  ">
              <Link
                className="btn mb-2 text-start w-100 sidebar-link form-text-style active-edit"
                to="/edit-profile/personal-information"
              >
                <img src="https://tobeto.com/user.svg" className="me-2"/>
                <span className="personel-informations"></span>
                <span className="sidebar-text">Kişisel Bilgilerim</span>
              </Link>
              <Link className="btn mb-2 text-start w-100  sidebar-link form-text-style " to="/edit-profile/experience-information">
                <img src="https://tobeto.com/business.svg" className="me-2"/>
                <span className="experience"></span>
                <span className="sidebar-text">Deneyimlerim</span>
              </Link>
              <Link className="btn mb-2 text-start w-100  sidebar-link form-text-style " to="/edit-profile/education-information">
              <img src="https://tobeto.com/book.svg" className="me-2"/>
                <span className="educations"></span>
                <span className="sidebar-text">Eğitim Hayatım</span>
              </Link>
              <Link className="btn mb-2 text-start w-100  sidebar-link form-text-style " to="/edit-profile/competence-profile">
              <img src="https://tobeto.com/award.svg" className="me-2"/>
                <span className="abilities"></span>
                <span className="sidebar-text">Yetkinliklerim</span>
              </Link>
              <Link className="btn mb-2 text-start w-100  sidebar-link form-text-style " to="/edit-profile/certificate-information">
              <img src="https://tobeto.com/certificates.svg" className="me-2"/>
                <span className="certificates"></span>
                <span className="sidebar-text">Sertifikalarım</span>
              </Link>
              <Link className="btn mb-2 text-start w-100  sidebar-link form-text-style " to="/edit-profile/media-information">
              <img src="https://tobeto.com/globe.svg" className="me-2"/>
                <span className="languages"></span>
                <span className="sidebar-text">Medya Hesaplarım</span>
              </Link>
              <Link className="btn mb-2 text-start w-100  sidebar-link form-text-style" to="/edit-profile/language-information">
              <img src="https://tobeto.com/translate.svg" className="me-2"/>
                <span className="languages2"></span>
                <span className="sidebar-text">Yabancı Dillerim</span>
              </Link>
              <Link className="btn mb-2 text-start w-100  sidebar-link form-text-style " to="/edit-profile/setting">
              <img src="https://tobeto.com/settings.svg" className="me-2"/>
                <span className="settings"></span>
                <span className="sidebar-text">Ayarlar</span>
              </Link>
              
            </div>
        
    </div>
  )
}

export default SidebarProfileInformation;