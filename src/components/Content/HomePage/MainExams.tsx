import React, { useState } from 'react';
import "../../../styles/mainExams.css";
import ExamDetail from './ExamDetail';

type Props = {}

export default function MainExams({}: Props) {
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
        <ExamDetail onClose={handleCloseModal} />
      )}
<section className="my-2 pt-4">
      <div className="container">
        <div className="row cv-box cv-padding">
          <div className="col-12 position-relative">
            <span className="exams-header fw-bold ">Sınavlarım</span>
          </div>
          <div className="exams my-3">
            <div className="exam-card "  onClick={handleOpenModal}>
          
              <div className="exam-header">
                <span className="exam-name fw-bold ">Herkes için Kodlama 1B Değerlendirme Sınavı</span>
                
                <span className="lesson-name">Herkes İçin Kodlama - 1B</span>
              </div>
              <div className="exam-details">
                <div>
                  <span className="exam_time fw-bold">45 Dakika</span>
                </div>
              </div>
              <span className="status-done"></span>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}