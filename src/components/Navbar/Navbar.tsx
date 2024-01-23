import React from "react";
import "../../styles/navbar.css";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { clearToken } from "../../store/auth/authSlice";

type Props = {};

export default function Navbar({}: Props) {
  const handleLogOut = () => {
    localStorage.clear();
  };
  return (
    <>
      <nav className="navbar    navbar-expand-xxl  bg-white ">
        <div className="container-fluid">
          <button
            className="navbar-toggler  d-lg-none"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <Link className="nav-link navbar-brand" to="/">
            <img
              className="navbar-logo"
              src="https://tobeto.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ftobeto-logo.409772fc.png&w=256&q=75"
            />
          </Link>

          <ul className="d-none d-xxl-flex navbar-nav">
            <li className="nav-item nav-active  fw-bold flex-grow-5 me-4">
              <Link className="nav-link nav-active" to="/home-page">
                Ana Sayfa
              </Link>
            </li>
            <li className="nav-item fw-bold me-4">
              <Link className="nav-link c-gray-3" to="/user-profile">
                Profilim
              </Link>
            </li>
            <li className="nav-item fw-bold me-4">
              <Link className="nav-link c-gray-3" to="/evaluations">
                Değerlendirmeler
              </Link>
            </li>
            <li className="nav-item fw-bold me-4">
              <Link className="nav-link c-gray-3" to="/catalog">
                Katalog
              </Link>
            </li>
            <li className="nav-item fw-bold me-4">
              <Link className="nav-link c-gray-3" to="/calendar">
                Takvim
              </Link>
            </li>
            <li className="nav-item fw-bold me-4">
              <Link className="nav-link c-gray-3" to="#">
                İstanbul Kodluyor
              </Link>
            </li>
          </ul>
          <div className="btn-group navbar-text">
            <div className=" ">
              <button
                type="button"
                className="btn  oval-button  dropdown-toggle-split"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <span className="profile-picture-container  me-2">
                  <img
                    src="https://tobeto.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimages.19a45d39.png&w=48&q=75"
                    alt="user's profile picture"
                    className="profile-picture"
                  />
                </span>
                <span className="user-name link-secondary me-2">
                  Alperen Diler
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <path
                    d="M6 9L12 15L18 9"
                    stroke="#828282"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </button>
              <ul className="dropdown-menu ">
                <li>
                  <span className=" nav-link dropdown-item p-2 ">
                    <Link className="nav-link" to="/personal-information">
                      Profil Bilgileri
                    </Link>
                  </span>
                </li>
                <li>
                  <span className=" nav-link dropdown-item p-2 ">
                  <Link
                    onClick={handleLogOut}
                    className=" nav-link dropdown-item"
                    to="/"
                  >
                    Oturumu Kapat
                  </Link>
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
