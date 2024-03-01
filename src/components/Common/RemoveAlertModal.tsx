import React from 'react'
import "../../styles/removeAlertModal.css"
type Props = { onClose: () => void;}

export default function RemoveAlertModal({onClose }: Props) {
  
    
      const handleYesClick = () => {
        // Evet butonuna tıklandığında yapılacak işlemler
        console.log('Evet butonuna tıklandı');
      };
  return (
    <>
    
         <div role="dialog" aria-modal="true"  className="fade alert-modal modal show" aria-labelledby="contained-modal-title-vcenter">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-body">
            <div className="mw-xl mx-auto">
              <div className="bg-white shadow-lg">
                <div className="alert-header mx-3">
                  <span className="alert-icon"></span>
                  <span className="alert-close"></span>
                </div>
                <p className="alert-message mx-3">Seçilen yetkinliği silmek istediğinize emin misiniz?</p>
                <p className="alert-message-light mx-3">Daha sonra tekrardan listeden istediğiniz yetkinliği ekleyebilirsiniz.</p>
                <div className="alert-buttons">
                  <button className="btn btn-no my-3" onClick={onClose} >
                    Hayır
                  </button>
                  <button className="btn btn-yes my-3" onClick={handleYesClick}>
                    Evet
                  </button>
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