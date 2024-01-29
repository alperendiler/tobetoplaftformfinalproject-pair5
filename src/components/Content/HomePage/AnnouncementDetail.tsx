import React from 'react'
type Props = {
    onClose: () => void;
}

export default function AnnouncementDetail({onClose}: Props) {
  return (
    <>
        <div role="dialog" aria-modal="true" className="fade modal show" aria-labelledby="contained-modal-title-vcenter" style={{ display: 'block' }}>
    <div className="modal-dialog modal-lg modal-fullscreen-sm-down">
      <div className="modal-content">
        <div className="modal-header">
          <div className="d-flex flex-column">
            <span className="text-dark">11 Ocak Kampüs Buluşması</span>
          </div>
          <button type="button" className="btn-close" onClick={onClose}  aria-label="Close"></button>
        </div>
        <div className="news-body modal-body">
          <p>
            <strong>Herkes için Kodlama</strong> eğitimini bitiren kişilerin katılabileceği kampüs buluşmamız 11 Ocak 2024 tarihindedir. Discorddan form paylaşılmıştır. Bu katılım formunu doldurmayan arkadaşların doldurması önemlidir.
          </p>
          <p><br /></p>
          <p>
            Not: Henüz eğitime hiç başlamamış adayların buluşması, eğitimlerini bitirdikten sonra 20 Şubat 2024 tarihinde yapılacaktır.
          </p>
          <p><br /></p>
          <p>
            Sevgiler,
          </p>
        </div>
      </div>
    </div>
  </div>
    </>
  )
}