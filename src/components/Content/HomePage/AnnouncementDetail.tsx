import React, { useEffect, useState } from 'react'
import announcementService from '../../../services/announcementService';
import { GetAnnouncementResponse } from '../../../models/responses/announcement/getAnnouncementResponse';
type Props = {
    onClose: () => void;
    announcementId: string  ;
}

export default function AnnouncementDetail({ onClose, announcementId}: Props) {
  const [announcement, setAnnouncements] =  useState<GetAnnouncementResponse  >();

  useEffect(() => {
    fetchApplications();

  }, []); 
  const fetchApplications = async () => {
   
     const response = await announcementService.getById(announcementId);
     setAnnouncements(response.data);
  
 };
     
  return (
    <>
   {announcement ? (
        <div  key={announcement.id} role="dialog" aria-modal="true" className="fade modal show" aria-labelledby="contained-modal-title-vcenter" style={{ display: 'block' }}>
    <div className="modal-dialog modal-lg modal-fullscreen-sm-down">
      <div className="modal-content">
        <div className="modal-header">
          <div className="d-flex flex-column">
            <span className="text-dark">{announcement.title}</span>
          </div>
          <button type="button" className="btn-close" onClick={onClose}  aria-label="Close"></button>
        </div>
        <div className="news-body modal-body">
        {announcement.description}
        </div>
      </div>
    </div>
  </div>
  ) : (
    <p>Duyurular bulunamadı.</p>
  )}
    </>
  )
}