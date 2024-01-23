import React from "react";
import "../../../styles/MyProfileStyles/successModel.css"

type Props={}


const SuccessModel = ({}:Props) => {
  return (
    <div>
      <div className="row shadow mb-3 bg-white rounded p-3">
        <div className="col-md-11 fw-bold h5">Tobeto İşte Başarı Modelim</div>
        <div className="col-1">
          <a href="#" className="eyeLink">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              fill="currentColor"
              className="bi bi-eye"
              viewBox="0 0 16 16"
            >
              <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8M1.173 8a13 13 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5s3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5s-3.879-1.168-5.168-2.457A13 13 0 0 1 1.172 8z" />
              <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0" />
            </svg>
          </a>
        </div>
        <hr />
        <div className="row p-2"></div>
        <div className="col-6">
            <img src="https://i.ibb.co/drMg3Cp/ability.png"/> 
        </div>
        <div className="col-6">
            <p><span className="badge colorgrey">4.7</span>Yeni dünyaya hazırlanıyorum</p>
            <p><span className="badge colorgreen"> 5</span>Profesyonel duruşumu geliştiriyorum</p>
            <p><span className="badge coloryellow"> 5</span>Kendimi tanıyor ve yönetiyorum</p>
            <p><span className="badge colorpurple"> 5</span>Yaratıcı ve doğru çözümler geliştiriyorum</p>
            <p><span className="badge colorpink"> 5</span>Kendimi sürekli geliştiriyorum</p>
            <p><span className="badge colorbrown"> 5</span>Başkaları ile birlikte çalışıyorum</p>
            <p><span className="badge colorred"> 5</span>Sonuç ve başarı odaklıyım</p>
            <p><span className="badge colororange"> 5</span>Anlıyorum ve anlaşılıyorum</p>
       </div>
      </div>
    </div>
  );
};

export default SuccessModel;
