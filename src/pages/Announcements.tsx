import React from "react";
import AnnouncementAndNews from "../components/Content/HomePage/AnnouncementAndNews";
import Pagination from "../components/Common/Pagination";

type Props = {};

export default function Announcements({}: Props) {
  return (
    <>
      <div className="container-fluid">
        <div className="page-banner-card">
          <div className="container">
            <div className="row">
              <span>Duyurularım</span>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="responsive-flex mb-4 mt-2" style={{ gap: "1em" }}>
            <div className="searchBox search-box">
              <input
                className="w-100"
                type="text"
                id="search"
                placeholder="Arama"
                value=""
              />
              <button>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-around",
                    alignItems: "end",
                  }}
                >
                  <svg
                    width="33"
                    height="33"
                    viewBox="0 0 33 33"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15.125 26.125C21.2001 26.125 26.125 21.2001 26.125 15.125C26.125 9.04987 21.2001 4.125 15.125 4.125C9.04987 4.125 4.125 9.04987 4.125 15.125C4.125 21.2001 9.04987 26.125 15.125 26.125Z"
                      stroke="#828282"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                    <path
                      d="M28.8758 28.8748L22.8945 22.8936"
                      stroke="#828282"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                    <path
                      d="M28.8758 28.8748L22.8945 22.8936"
                      stroke="#828282"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                </div>
              </button>
            </div>

            <div className="dropdown">
              <button
                className="white-filter dropdown-toggle ms-0"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Tür
              </button>
              <ul className="dropdown-menu new-filter">
                <li className="filter-checkbox-item">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="typeNews"
                    />
                    <label className="form-check-label" htmlFor="typeNews">
                      Haber
                    </label>
                  </div>
                </li>
                <li className="filter-checkbox-item">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="typeAnnouncement"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="typeAnnouncement"
                    >
                      Duyuru
                    </label>
                  </div>
                </li>
              </ul>
            </div>

            <div className="rw-100 css-b62m3t-container">{/* ... */}</div>

            <div className="d-flex align-items-center rw-100 gap-3">
              <div className="dropdown">
                <button
                  className="white-filter dropdown-toggle"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Sıralama
                </button>
                <ul className="dropdown-menu new-filter">
                  <li>
                    <a className="dropdown-item createdAt active">
                      Tarihe Göre (Y-E)
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item createdAt ">
                      Tarihe Göre (E-Y)
                    </a>
                  </li>
                </ul>
              </div>
              <div className="readButton">
                <button className="read-hide"></button>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <AnnouncementAndNews />
          <Pagination />
        </div>
      </div>
    </>
  );
}
