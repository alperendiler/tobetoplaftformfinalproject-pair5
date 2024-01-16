import React from 'react'
import './navbar.css';

type Props = {}

export default function Navbar({}: Props) {

  return (
<>
<nav className="navbar    navbar-expand-xxl  bg-white ">
  <div className="container-fluid">
  <button className="navbar-toggler  d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
    <a className="navbar-brand" href="/">
      <img className="navbar-logo" src='https://tobeto.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ftobeto-logo.409772fc.png&w=256&q=75'/>
      </a>
   
      <ul className="d-none d-xxl-flex navbar-nav">
      <li className="nav-item nav-active  fw-bold flex-grow-5 me-4"><a className="nav-link nav-active" href="#">Ana Sayfa</a></li>
      <li className="nav-item fw-bold me-4" ><a className="nav-link c-gray-3" href="#">Profilim</a></li>
      <li className="nav-item fw-bold me-4"><a className="nav-link c-gray-3" href="#">Değerlendirmeler</a></li>
      <li className="nav-item fw-bold me-4"><a className="nav-link c-gray-3" href="#">Katalog</a></li>
      <li className="nav-item fw-bold me-4"><a className="nav-link c-gray-3" href="#">Takvim</a></li>
      <li className="nav-item fw-bold me-4"><a className="nav-link c-gray-3" href="#">İstanbul Kodluyor</a></li>

    </ul>
    <div className="btn-group navbar-text">
  
  <div className=" ">
    
    <button type="button" className="btn  oval-button  dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
      <span className="profile-picture-container  me-2">
        <img src="https://tobeto.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimages.19a45d39.png&w=48&q=75" alt="user's profile picture" className="profile-picture" />
      </span>
      <span className="user-name link-secondary me-2">Alperen Diler</span>
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none" ><path d="M6 9L12 15L18 9" stroke="#828282" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
    </button>
    <ul className="dropdown-menu">
      <li><a className="dropdown-item" href="#">Profil Bilgileri</a></li>
      <li><a className="dropdown-item" href="#">Çıkış Yap</a></li>
    
    </ul>
  </div>
  
</div>
  </div>
</nav>
</>

  )
}