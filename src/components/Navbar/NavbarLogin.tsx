import React from "react";
import "../../styles/navbar.css";
import "../../styles/btn-rainbow.css";
import { Link } from "react-router-dom";

type Props = {};

export default function NavbarLogin({}: Props) {
  return (
    <>
      <nav className="navbar  fixed-top  navbar-expand-xxl  bg-black ">
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
          <a className="navbar-brand" href="/">
            <img
              className="navbar-logo"
              src="https://tobeto.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FTebeto-logo-yatay-beyaz.8c2d6927.png&w=384&q=75"
            />
          </a>
          <ul className="d-none d-xxl-flex navbar-nav">
            <li className="nav-item nav-active  fw-bold flex-grow-5 me-4">
              <Link className="nav-link text-light nav-active" to="#">
                {" "}
                Biz Kimiz?
              </Link>
            </li>
            <li className="nav-item fw-bold me-4">
              <Link className="nav-link text-light c-gray-3" to="#">
                Neler Sunuyoruz?
              </Link>
            </li>
            <li className="nav-item fw-bold me-4">
              <Link className="nav-link text-light c-gray-3" to="#">
                Katalog
              </Link>
            </li>
            <li className="nav-item fw-bold me-4">
              <Link className="nav-link text-light c-gray-3" to="/codecademy">
                Codecademy
              </Link>
            </li>
            <li className="nav-item fw-bold me-4">
              <Link className="nav-link text-light c-gray-3" to="#">
                Tobeto'da Bu Ay
              </Link>
            </li>
          </ul>
          <div className="btn-group navbar-text">
            <div className="navbar-brand ">
              <Link
                type="button"
                className="btn fw-bold login-button text-light  "
                aria-expanded="false"
                to="/"
              >
                Giriş Yap
              </Link>
            </div>

            <button
              type="button"
              className=" button-rainbow fw-bold login-button text-light  "
              aria-expanded="false"
            ><Link to="/register" className="text-decoration">
            Ücretsiz Üye Ol
            </Link>
              
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}
