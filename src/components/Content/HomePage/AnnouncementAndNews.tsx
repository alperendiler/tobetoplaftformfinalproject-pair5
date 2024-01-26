import React, { useEffect, useState } from 'react'
import "./announcementAndNews.css"
import AnnouncementDetail from './AnnouncementDetail';
type Props = {}

export default function AnnouncementAndNews({}: Props) {
    const [announcementAndNews, setAnnouncementAndNews] = useState<{ id: number; title: string;type: string, date: string; company: string }[]>([]);
    const testAnnouncementAndNews = [
      {
        id: 1,
        title: 'İstanbul Kodluyor Bilgilendirme',
        type:"Duyuru",
        date: '11.11.1111 22.22', 
        company : "İstanbul Kodluyor",
      },
      {
        id: 2,
        title: 'İstanbul Kodluyor Bilgilendirme',
        type:"Haber",
        date: '11.11.1111 22.22', 
        company : "İstanbul Kodluyor",
      }
     
    ];
    useEffect(() => {
      const fetchData = async () => {
        try {
  
  
            setAnnouncementAndNews(testAnnouncementAndNews);
        } catch (error) {
          console.error("Error fetching products:", error);
        }
      };
  
      fetchData();
    }, []);
    const [isModalOpen, setModalOpen] = useState(false);

    const handleOpenModal = () => {
      setModalOpen(true);
    };
  
    const handleCloseModal = () => {
      setModalOpen(false);
    };
  return (
    <>
      {isModalOpen && (
        <AnnouncementDetail onClose={handleCloseModal} />
      )}
    <div className='row'>
       {announcementAndNews && announcementAndNews.length > 0 ? (
  announcementAndNews.map((announcementAndNew) => ( 
         <div key={announcementAndNew.id} className="col-md-4 col-12 my-4">
    <div className="notfy-card notify">
      <div className="d-flex flex-column">
        <div className="d-flex justify-content-between mb-4">
          <span className="type">{announcementAndNew.type}</span>
          <span className="corp-names type">{announcementAndNew.company}</span>
        </div>
        <span className="header">{announcementAndNew.title}</span>
      </div>
      <div className="d-flex justify-content-between">
        <span className="date">{announcementAndNew.date}</span>
        <span  onClick={handleOpenModal} className="read-more" >Devamını Oku</span>
      </div>            
    </div>
  </div>
   ))
   ) : (
     <p>Başvurular bulunamadı.</p>
   )}  
   </div>
    </>
  )
}