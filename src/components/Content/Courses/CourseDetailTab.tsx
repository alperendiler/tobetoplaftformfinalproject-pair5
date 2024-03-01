import React, { useEffect, useState } from "react";
import CourseDetailContent from "./CourseDetailContent";
import "bootstrap-icons/font/bootstrap-icons.css";
import "../../../styles/Courses/courseDetailTab.css";
import { GetCourseResponse } from "../../../models/responses/course/getCourseResponse";
import { GetCourseDetailResponse, Topic } from "../../../models/responses/course/getCourseDetailResponse";
import SyncCourseDetailContent from "./SyncCourse/SyncCourseDetailContent";

type Props = {};

export default function CourseDetailTab(props:{ courseDetail?:GetCourseDetailResponse}) {
  const { courseDetail } = props;
  const [course, setCourse] = useState<GetCourseResponse | any>();

  const formatDate = (isoDate: string): string => {
    // Gelen ISO 8601 formatındaki tarihi JavaScript Date nesnesine dönüştür
    const date = new Date(isoDate);
  
    // YYYY-MM-DD formatında tarihi elde et
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Ayı 2 haneli olarak al, başında sıfır varsa ekle
    const day = date.getDate().toString().padStart(2, '0'); // Günü 2 haneli olarak al, başında sıfır varsa ekle
  
    // MM/DD/YYYY formatında tarihi oluştur
    return `${month}/${day}/${year}`;
  };

  return (
    <div>
      <ul className="nav  nav-underline mb-4" id="borderedTab" role="tablist">
        <li className="nav-item" role="presentation">
          <button
            className="nav-link link-secondary active"
            id="content-tab"
            data-bs-toggle="tab"
            data-bs-target="#bordered-content"
            type="button"
            role="tab"
            aria-controls="content"
            aria-selected="true"
          >
            İçerik
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className="nav-link link-secondary"
            id="about-tab"
            data-bs-toggle="tab"
            data-bs-target="#bordered-about"
            type="button"
            role="tab"
            aria-controls="about"
            aria-selected="false"
          >
            Hakkında
          </button>
        </li>
      </ul>
      <div className="tab-content pt-2" id="borderedTabContent">
        <div
          className="tab-pane fade show active"
          id="bordered-content"
          role="tabpanel"
          aria-labelledby="content-tab"
        >
          <CourseDetailContent courseDetail={courseDetail} />
        </div>
        <div
          className="tab-pane fade"
          id="bordered-about"
          role="tabpanel"
          aria-labelledby="about-tab"
        >
          <div className="tab-hakkında">
            <div className="info-item row">
              <div className="col-6">
                <table>
                  <tr className="table-row">
                    <td>
                      <i className="bi bi-calendar-minus"></i>
                    </td>
                    <td className="first-cols">Başlangıç</td>
                    <td className="table-desc">{formatDate(courseDetail?.startDate!)}</td>
                  </tr>

                  <tr className="table-row">
                    <td></td>
                    <td className="first-cols">Bitiş</td>
                    <td className="table-desc">{formatDate(courseDetail?.endDate!)}</td>
                  </tr>

                  <tr className="table-row">
                    <td>
                      <i className="bi bi-stopwatch"></i>
                    </td>
                    <td className="first-cols">Geçirdiğin Süre</td>
                    <td className="table-desc">{formatDate(courseDetail?.spentTime!)}</td>
                  </tr>
                  <tr>
                    <td>
                      <i className="bi bi-stopwatch"></i>
                    </td>
                    <td className="first-cols">Tahmini Süre</td>
                    <td className="table-desc">{formatDate(courseDetail?.estimatedTime!)}</td>
                  </tr>

                  <tr>
                    <td>
                      <i className="bi bi-tag"></i>
                    </td>
                    <td className="first-cols">Kategori</td>
                    <td className="table-desc">Genel</td>
                  </tr>

                  <tr>
                    <td>
                      <i className="bi bi-file-earmark-text"></i>
                    </td>
                    <td className="first-cols">İçerik</td>
                    <td className="table-desc">290</td>
                  </tr>

                  <tr>
                    <td></td>
                    <td>Video</td>
                    <td className="table-desc">225</td>
                  </tr>

                  <tr>
                    <td>
                      <i className="bi bi-briefcase"></i>
                    </td>
                    <td className="first-cols">Üretici Firma</td>
                    <td className="table-desc2">Enocta</td>
                  </tr>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
