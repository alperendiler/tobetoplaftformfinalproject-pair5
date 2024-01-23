import React from "react";
import "../../../styles/MyProfileStyles/profilePicture.css";

type Props = {};
function ProfileCard({}: Props) {
  return (
    <div>
      <div className="shadow mb-3 bg-white rounded">
        <div className="profilePicture">
          <div>
            <img
              src="https://assets.practice365.co.uk/wp-content/uploads/sites/1005/2023/03/Default-Profile-Picture-Transparent.png"
              className="profileImage"
            />
          </div>
        </div>
        <div className="p-3">
          <div className="row">
            <div className="col-2">
              <img src="https://tobeto.com/cv-name.svg" />
            </div>
            <div className="col-10">
              <div>Ad Soyad</div>
              <div className="fw-bold">Özlem Belörenoğlu</div>
            </div>
          </div>
          <div className="row">
            <div className="col-2">
              <img src="https://tobeto.com/cv-date.svg" />
            </div>
            <div className="col-10">
              <div>Doğum Tarihi</div>
              <div className="fw-bold">10.06.1992</div>
            </div>
          </div>
          <div className="row">
            <div className="col-2">
              <img src="https://tobeto.com/cv-mail.svg" />
            </div>
            <div className="col-10">
              <div>E-Posta Adresi</div>
              <div className="fw-bold">ozlemm.belorenoglu@gmail.com</div>
            </div>
          </div>
          <div className="row">
            <div className="col-2">
              <img src="https://tobeto.com/cv-phone.svg" />
            </div>
            <div className="col-10">
              <div>Telefon Numarası</div>
              <div className="fw-bold">0555555555</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileCard;
