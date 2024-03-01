import React from 'react'
import "../../../styles/experienceDetailModal.css"
type Props = {
    onClose: () => void;
    jobDescription:string;
}

export default function ExperienceDetailModal({onClose,jobDescription}: Props) {

  return (
    <>
<div role="dialog" aria-modal="true" className="fade modal show" tabIndex={-1} aria-labelledby="contained-modal-title-vcenter" style={{ paddingRight: '10px', display: 'block' }}>      <div className="modal-dialog modal-md modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <span className="grade-details-header">İş Açıklaması</span>
          </div>
          <div className="modal-body">
            <span className="grade-details-content" >{jobDescription}</span>
          </div>
          <div className="modal-footer">
            <button type="button" onClick={onClose} className="btn btn-primary">Kapat</button>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}