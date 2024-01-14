import React from 'react'
import './navbar.css';

type Props = {}

export default function Navbar({}: Props) {

  return (
<>
<nav className="navbar position-relative navbar-expand-xxl navbar-large bg-white">
  <div className="container-fluid">
    <a className="navbar-brand" href="/">
      <img src='https://tobeto.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ftobeto-logo.409772fc.png&w=256&q=75'/></a>
    
  
    <div >
        <div className="btn-group">
          <div className="circle-container">
            <button type="button" className="btn oval-button dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
              <span className="profile-picture-container">
                <img src={"https://tobeto.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimages.19a45d39.png&w=48&q=75"} alt={`${"user.name"}'s profile picture`} className="profile-picture" />
              </span>
              <span className="user-name">{"user.name"}</span>
            </button>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="#">Action</a></li>
              <li><a className="dropdown-item" href="#">Another action</a></li>
              <li><a className="dropdown-item" href="#">Something else here</a></li>
              <li>
                <hr className="dropdown-divider" />
              </li>
              <li><a className="dropdown-item" href="#">Separated link</a></li>
            </ul>
          </div>
        </div>
      </div>
  </div>
</nav>
</>

  )
}