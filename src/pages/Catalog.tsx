import React from "react";
import "../styles/Catalog/catalog.css";
import Filters from "../components/Content/Catalog/CatalogFilter";
import CatalogList from "../components/Content/Catalog/CatalogList";
import Pagination from "../components/Common/Pagination";
type Props = {};

export default function Catalog({}: Props) {
  return (
    <>
      <div className="search-section container-fluid">
        <div className="container">
          <div className="row">
            <div className="col-md-9 col-12 search-container">
              <div className="education-count">
                <span className="text-light fw-bold">Öğrenmeye başla !</span>
              </div>
              <div className="search-box">
                <input
                  className="w-100"
                  type="text"
                  id="search"
                  placeholder="Eğitim arayın..."
                />
                <button className="">
                  <div>
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
            </div>
          </div>
        </div>
      </div>

      <div className="container mt-5 pb-20">
        <div className="row">
          <div className="col-lg-3 col-md-4 col-12 light">
            <div className="filter dm-none">
              <h2 className="fw-bold">Filtrele</h2>
              <hr className="mt-0" />
              <button
                className="mb-3 catolog-filter-btn w-100 fw-bold my-pravite-button"
                type="button"
                aria-expanded="false"
              >
                <div className="w-100">
                  <span>Bana Özel</span>
                </div>
              </button>
              <Filters />
            </div>
          </div>

          <div className="col-lg-9 col-md-8 col-12">
            <div className="row gy-6 gx-3">
              <CatalogList />
              <Pagination />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
