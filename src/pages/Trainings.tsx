import React, { useEffect, useState } from "react";
import "../styles/trainings.css";
import MainMyTrainings from "../components/Content/Main/MainMyTrainings";
import TrainingFilter from "../components/Content/Training/TrainingFilter";

type Props = {};

export default function ({}: Props) {
  const [myTrainings, setmMyTrainings] = useState<
    { id: number; title: string; date: string; thumbnail: string }[]
  >([]);
  const testMyTrainings = [
    {
      id: 1,
      title: "İstanbul Kodluyor Bilgilendirme",
      date: "11.11.1111 22.22",
      thumbnail: "https://tobeto.s3.cloud.ngn.com.tr/23_EAH_1_45f7232003.jpg",
    },
    {
      id: 2,
      title: "İstanbul Kodluyor Bilgilendirme",
      date: "11.11.1111 22.22",
      thumbnail: "https://tobeto.s3.cloud.ngn.com.tr/23_ENK_1_b4d858c1a9.jpg",
    },
  ];
  useEffect(() => {
    const fetchData = async () => {
      try {
        setmMyTrainings(testMyTrainings);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchData();
  }, []);
  return (
    <>
      <div className="container-fluid">
        <div className="page-banner-card">
          <div className="container">
            <div className="row">
              <span className="fw-bold">Eğitimlerim</span>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <TrainingFilter />
        <div></div>

        <div className="row mt-3">
          <div className="col-12 mb-4">
            <ul
              className="nav nav-tabs mainTablist d-flex justify-content-center"
              id="borderedTab"
              role="tablist"
            >
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link link-secondary active"
                  id="all-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#bordered-all"
                  type="button"
                  role="tab"
                  aria-controls="all"
                  aria-selected="true"
                >
                  Tüm Eğitimler
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link link-secondary"
                  id="continue-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#bordered-continue"
                  type="button"
                  role="tab"
                  aria-controls="continue"
                  aria-selected="false"
                >
                  Devam Ettiklerim
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link link-secondary"
                  id="complete-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#bordered-complete"
                  type="button"
                  role="tab"
                  aria-controls="complete"
                  aria-selected="false"
                >
                  Tamamladıklarım
                </button>
              </li>
            </ul>

            <div className="tab-content pt-2" id="borderedTabContent">
              <div
                className="tab-pane show active"
                id="bordered-all"
                role="tabpanel"
                aria-labelledby="all-tab"
              >
                <MainMyTrainings />
              </div>

              <div
                className="tab-pane fade"
                id="bordered-continue"
                role="tabpanel"
                aria-labelledby="surveys-tab"
              >
                <MainMyTrainings />
              </div>
              <div
                className="tab-pane fade"
                id="bordered-complete"
                role="tabpanel"
                aria-labelledby="surveys-tab"
              >
                <MainMyTrainings />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
