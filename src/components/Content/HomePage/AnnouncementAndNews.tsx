import React, { useEffect, useState } from 'react'
import "../../../styles/announcementAndNews.css"
import AnnouncementDetail from './AnnouncementDetail';
import { GetAllAnnouncementResponse } from '../../../models/responses/announcement/getAllAnnouncementResponse';
import announcementService from '../../../services/announcementService';
type Props = {
}

export default function AnnouncementAndNews({}: Props) {
  const [announcements, setAnnouncements] =  useState<GetAllAnnouncementResponse [] >([]);

  useEffect(() => {
    fetchApplications();

  }, []); 
  const fetchApplications = async () => {
   
     const response = await announcementService.getAll(0, 4);
     setAnnouncements(response.data.items);
  
 };
     
  
    const [isModalOpen, setModalOpen] = useState(false);
    const [selectedAnnouncementId, setSelectedAnnouncementId] = useState<string >('');
    const handleOpenModal = (announcementId: string ) => {
        setSelectedAnnouncementId(announcementId);
        setModalOpen(true);
      
    };
  
    const handleCloseModal = () => {
      setModalOpen(false);
    };
  return (
    <>
      {isModalOpen && (
        <AnnouncementDetail announcementId={selectedAnnouncementId} onClose={handleCloseModal} />
      )}
    <div className='row'>
       {announcements && announcements.length > 0 ? (
  announcements.map((announcement) => ( 
         <div key={announcement.id} className="col-md-4 col-12 my-4">
    <div className="notfy-card notify">
      <div className="d-flex flex-column">
        <div className="d-flex justify-content-between mb-4">
          <span className="type">{announcement.type}</span>
          <span className="corp-names type">{announcement.organization}</span>
        </div>
        <span className="header">{announcement.title}</span>
      </div>
      <div className="d-flex justify-content-between">
        <span className="date">{new Date(announcement.createdDate).getDate()}.{new Date(announcement.createdDate).getMonth()}.{new Date(announcement.createdDate).getFullYear()}</span>
        <span  onClick={() => handleOpenModal(announcement.id)}  className="read-more" >Devamını Oku</span>
      </div>            
    </div>
  </div>
   ))
   ) : (
     <p>Duyurular bulunamadı.</p>
   )}  
   </div>
    </>
  )
}