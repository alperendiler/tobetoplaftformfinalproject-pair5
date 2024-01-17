import React from 'react'
import './navbar.css';
import "../styles/btn-rainbow.css"

type Props = {}

export default function NavbarLogin({}: Props) {
  return (
    <>
    <nav className="navbar    navbar-expand-xxl  bg-black ">
  <div className="container-fluid">
  <button className="navbar-toggler  d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
    <a className="navbar-brand" href="/">
      <img className="navbar-logo" src='https://tobeto.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FTebeto-logo-yatay-beyaz.8c2d6927.png&w=384&q=75'/>
      </a>
    






      <ul className="d-none d-xxl-flex navbar-nav">
      <li className="nav-item nav-active  fw-bold flex-grow-5 me-4"><a className="nav-link text-light nav-active" href="#">  Biz Kimiz?</a></li>
      <li className="nav-item fw-bold me-4" ><a className="nav-link text-light c-gray-3" href="#">Neler Sunuyoruz?</a></li>
      <li className="nav-item fw-bold me-4"><a className="nav-link text-light c-gray-3" href="#">Katalog</a></li>
      <li className="nav-item fw-bold me-4"><a className="nav-link text-light c-gray-3" href="#">Codecademy</a></li>
      <li className="nav-item fw-bold me-4"><a className="nav-link text-light c-gray-3" href="#">Tobeto'da Bu Ay</a></li>

    </ul>
    <div className="btn-group navbar-text">
  
  <div className="navbar-brand ">
    
    <button type="button" className="btn fw-bold login-button text-light  " aria-expanded="false">
     Giriş Yap
    </button>
    
   
  
    </div>

    <button type="button" className=" button-rainbow    fw-bold login-button text-light  " aria-expanded="false">
     Ücretsiz Üye Ol
    </button>
    </div>


  </div>
</nav>
    </>
  )
}