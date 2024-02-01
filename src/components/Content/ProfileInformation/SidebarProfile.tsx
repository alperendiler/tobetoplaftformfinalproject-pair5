import React from 'react'
import { Link } from 'react-router-dom';
import EditProfile from '../../../pages/ProfileInformation/EditProfile';

type Props= {
  activeTab:string;
  setActiveTab: React.Dispatch<React.SetStateAction<string>>
}

function SidebarProfileInformation({activeTab, setActiveTab}:Props) {
  return (
    <div>
        <div className="p-2 py-4 mobile-sidebar  ">
              
              <button
                className="btn mb-2 text-start w-100 sidebar-link form-text-style active-edit"
                onClick={() => setActiveTab("PersonalInformation")}
              >
                <img src="https://tobeto.com/user.svg" className="me-2"/>
                <span className="personel-informations"></span>
                <span className="sidebar-text">Kişisel Bilgilerim</span>
              </button>
              <button className="btn mb-2 text-start w-100  sidebar-link form-text-style " onClick={()=>setActiveTab("ExperienceInformation")}>
                <img src="https://tobeto.com/business.svg" className="me-2"/>
                <span className="experience"></span>
                <span className="sidebar-text">Deneyimlerim</span>
              </button>
              <button className="btn mb-2 text-start w-100  sidebar-link form-text-style " onClick={()=>setActiveTab("EducationInformation")}>
              <img src="https://tobeto.com/book.svg" className="me-2"/>
                <span className="educations"></span>
                <span className="sidebar-text">Eğitim Hayatım</span>
              </button>
              <button className="btn mb-2 text-start w-100  sidebar-link form-text-style " onClick={()=>setActiveTab("CompetenceInformation")}>
              <img src="https://tobeto.com/award.svg" className="me-2"/>
                <span className="abilities"></span>
                <span className="sidebar-text">Yetkinliklerim</span>
              </button>
              <button className="btn mb-2 text-start w-100  sidebar-link form-text-style " onClick={()=>setActiveTab("CertificateInformation")}>
              <img src="https://tobeto.com/certificates.svg" className="me-2"/>
                <span className="certificates"></span>
                <span className="sidebar-text">Sertifikalarım</span>
              </button>
              <button className="btn mb-2 text-start w-100  sidebar-link form-text-style " onClick={()=>setActiveTab("MediaAccountInformation")}>
              <img src="https://tobeto.com/globe.svg" className="me-2"/>
                <span className="languages"></span>
                <span className="sidebar-text">Medya Hesaplarım</span>
              </button>
              <button className="btn mb-2 text-start w-100  sidebar-link form-text-style" onClick={()=>setActiveTab("LanguageInformation")}>
              <img src="https://tobeto.com/translate.svg" className="me-2"/>
                <span className="languages2"></span>
                <span className="sidebar-text">Yabancı Dillerim</span>
              </button>
              <button className="btn mb-2 text-start w-100  sidebar-link form-text-style " onClick={()=>setActiveTab("Setting")}>
              <img src="https://tobeto.com/settings.svg" className="me-2"/>
                <span className="settings"></span>
                <span className="sidebar-text">Ayarlar</span>
              </button>
              
            </div>
        
    </div>
  )
}

export default SidebarProfileInformation;