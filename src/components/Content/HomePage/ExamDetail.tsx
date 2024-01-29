import React from 'react';
import "../../../styles/examDetail.css"

type Props = {
    onClose: () => void;

}

export default function ({onClose }: Props) {
  return (
    <>
     <div role="dialog" aria-modal="true" className="fade modal show" tabIndex={-1} aria-labelledby="contained-modal-title-vcenter" style={{ paddingRight: '10px', display: 'block' }}>
      <div className="modal-dialog modal-xl modal-dialog-centered modal-fullscreen-sm-down">
        <div className="modal-content">
          <div className="modal-body">
            <div className="quiz-screen">
              <div className="d-flex justify-content-between mb-8">
                <span className="quiz-details-header">Herkes için Kodlama 1B Değerlendirme Sınavı</span>
                <button type="button" className="btn-close" onClick={onClose} aria-label="Close"></button>
              </div>
              <div className="join-screen">
                <br />
              
                  <p>Sevgili Adayımız,</p>
                    <br />    
                  <p> 
                    <strong>Herkes için Kodlama Eğitimi</strong>'ni tamamladığınız için tebrik ederiz. Bu eğitim sonrası bir sonraki aşamaya geçiş için 25 sorudan oluşan bir değerlendirme sınavımız bulunmaktadır.&nbsp;
                  </p>
                  <p>Bu test her kullanıcı için sadece 1 kez sunulmakta olup 45 dakika içinde tamamlanması gerekmektedir.</p>
                  <p>&nbsp;</p>
                  <p>Tüm değerlendirme kriterleri sonrası <strong>Mesleki Gelişim Eğitimlerine</strong> geçişiniz ile ilgili bilgilendirileceksiniz.</p>
                  <p>&nbsp;</p>
                  <p>Sevgiler,</p>
                  <p>TOBETO</p>
                
                <br />
                <div>
                  <span>Sınav Süresi : 45 Dakika</span>
                  <span>Soru Sayısı : 25</span>
                  <span>Soru Tipi : Çoktan Seçmeli</span>
                </div>
                <div className="row">
                  <button className="btn btn-exam-detail text-light fw-bold mt-8 ms-auto me-auto" >Raporu Görüntüle</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}