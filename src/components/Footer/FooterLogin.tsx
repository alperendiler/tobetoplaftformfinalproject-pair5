import React from 'react'
import "../../styles/footerLogin.css"


type Props = {}

export default function FooterLogin({}: Props) {
  return (
    <div>
       <footer className=" footerColor text-center text-lg-start">

  <div className="container p-4">
    <div className="row">
     
      <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
        <h5>Site Haritası</h5>
        <ul className="list-unstyled mb-0">
          <li>
            <a href="#!" className="text-footer ">Hakkımızda</a>
          </li>
          <li>
            <a href="#!" className="text-footer">Bireyler İçin</a>
          </li>
          <li>
            <a href="#!" className="text-footer">Kurumlar İçin</a>
          </li>
          <li>
            <a href="#!" className="text-footer">Kurumsal Kimlik</a>
          </li>
          <li>
            <a href="#!" className="text-footer">S.S.S.</a>
          </li>
          <li>
            <a href="#!" className="text-footer">Kurumsal Kimlik</a>
          </li>
        </ul>
      </div>
      <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
        <h5>Kaynaklar</h5>

        <ul className="list-unstyled">
          <li>
            <a href="#!" className="text-footer">Üyelik Sözleşmesi ve Kullanım Koşulları</a>
          </li>
          <li>
            <a href="#!" className="text-footer">KVKK Aydınlatma Metni</a>
          </li>
          <li>
            <a href="#!" className="text-footer">İlgili Kişi Başvuru Formu</a>
          </li>
          <li>
            <a href="#!" className="text-footer">Çerez Politikası</a>
          </li>
          <li>
            <a href="#!" className="text-footer">Cayma Formu</a>
          </li>
        </ul>
      </div>
      <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
        <h5>Eğitim Yolculukları</h5>

        <ul className="list-unstyled mb-0">
          <li>
            <a href="#!" className="text-footer">Front End</a>
          </li>
          <li>
            <a href="#!" className="text-footer">Full Stack</a>
          </li>
          <li>
            <a href="#!" className="text-footer">Web & Mobile</a>
          </li>
          <li>
            <a href="#!" className="text-footer">Veri Bilimi</a>
          </li>
          <li>
            <a href="#!" className="text-footer">Siber Güvenlik</a>
          </li>
          <li>
            <a href="#!" className="text-footer">UI / UX</a>
          </li>
        </ul>
      </div>

      <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
        <h5>Blog</h5>

        <ul className="list-unstyled">
          <li>
            <a href="#!" className="text-footer">Web API Nedir? Programlama Yazılımının Arayüzü Nasıl Çalışır?</a>
          </li>
          <li>
            <a href="#!" className="text-footer">Yapay Zeka Chatbot: İşte Geleceğin İletişim Aracı!</a>
          </li>
          <li>
            <a href="#!" className="text-footer">Yazılım Test Otomasyonu: İş Akışınızı Daha Verimli Hale Getirin!</a>
          </li>
          <li>
            <a href="#!" className="text-footer">Node.js Nedir ve Nasıl Kullanılır? İşte Sana Basit ve Etkili Kılavuz</a>
          </li>
          <li>
            <a href="#!" className="text-footer">Robotlar ve Yapay Zeka İçin Hangi Yazılım Dili Kullanılır?</a>
          </li>
        </ul>
      </div>
  
    </div>
  
  </div>
<div className='row offset-md-1 col-md-10'>
<hr/>
<br/>
<br/>
  <div className='col-md-3'>
    <img src='https://tobeto.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ftobeto-logo.409772fc.png&w=256&q=75' width={132} height={27}></img>
  </div>
  <div className="text-center p-3 col-md-6" >
    <a className="text-footer" href="#"> 2022 Tobeto I Her Hakkı Saklıdır</a>
  </div>
  <div className='col-md-3 socialMedia d-flex flex-row-reverse'>
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16 8C17.5913 8 19.1174 8.63214 20.2426 9.75736C21.3679 10.8826 22 12.4087 22 14V21H18V14C18 13.4696 17.7893 12.9609 17.4142 12.5858C17.0391 12.2107 16.5304 12 16 12C15.4696 12 14.9609 12.2107 14.5858 12.5858C14.2107 12.9609 14 13.4696 14 14V21H10V14C10 12.4087 10.6321 10.8826 11.7574 9.75736C12.8826 8.63214 14.4087 8 16 8V8Z" stroke="#A628FF" ></path></svg>
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M23 3C22.0424 3.67548 20.9821 4.19211 19.86 4.53C19.2577 3.83751 18.4573 3.34669 17.567 3.12393C16.6767 2.90116 15.7395 2.9572 14.8821 3.28445C14.0247 3.61171 13.2884 4.1944 12.773 4.95372C12.2575 5.71303 11.9877 6.61234 12 7.53V8.53C10.2426 8.57557 8.50127 8.18581 6.93101 7.39545C5.36074 6.60508 4.01032 5.43864 3 4C3 4 -1 13 8 17C5.94053 18.398 3.48716 19.0989 1 19C10 24 21 19 21 7.5C20.9991 7.22145 20.9723 6.94359 20.92 6.67C21.9406 5.66349 22.6608 4.39271 23 3V3Z" stroke="#A628FF" ></path></svg>
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17 2H7C4.23858 2 2 4.23858 2 7V17C2 19.7614 4.23858 22 7 22H17C19.7614 22 22 19.7614 22 17V7C22 4.23858 19.7614 2 17 2Z" stroke="#A628FF"></path></svg>
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18 2H15C13.6739 2 12.4021 2.52678 11.4645 3.46447C10.5268 4.40215 10 5.67392 10 7V10H7V14H10V22H14V14H17L18 10H14V7C14 6.73478 14.1054 6.48043 14.2929 6.29289C14.4804 6.10536 14.7348 6 15 6H18V2Z" stroke="#A628FF" ></path></svg>

  </div>
</div>
</footer>
    </div>
  )
}

