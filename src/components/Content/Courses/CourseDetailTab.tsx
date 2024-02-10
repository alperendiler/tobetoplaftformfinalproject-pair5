import React, { useState } from 'react'
import CourseDetailContent from './CourseDetailContent';
import "bootstrap-icons/font/bootstrap-icons.css";
import "./CourseDetailTab.css";




type Props = {}

export default function CourseDetailTab({}: Props) {
  
  return (
    <div>
        <ul className="nav  nav-underline mb-4" id="borderedTab" role="tablist">
          <li className="nav-item" role="presentation">
            <button className="nav-link link-secondary active" id="content-tab" data-bs-toggle="tab" data-bs-target="#bordered-content" type="button" role="tab" aria-controls="content" aria-selected="true">İçerik</button>
          </li>
          <li className="nav-item" role="presentation">
            <button className="nav-link link-secondary" id="about-tab" data-bs-toggle="tab" data-bs-target="#bordered-about" type="button" role="tab" aria-controls="about" aria-selected="false">Hakkında</button>
          </li>
         
        </ul>
        <div className="tab-content pt-2" id="borderedTabContent">

        <div className="tab-pane fade" id="bordered-content" role="tabpanel" aria-labelledby="content-tab">
            <CourseDetailContent/>
          </div>
          <div className="tab-pane fade" id="bordered-about" role="tabpanel" aria-labelledby="about-tab">
          <div className="tab-hakkında">
                  <div className="info-item row">
                    <div className="col-6">
                      <table>
                        <tr className="table-row">
                          <td>
                          <i className="bi bi-calendar-minus"></i>
                          </td>
                          <td className="first-cols">Başlangıç</td>
                          <td className="table-desc">01.01.2024</td>
                        </tr>

                        <tr className="table-row">
                          <td>
                          </td>
                          <td className="first-cols">Bitiş</td>
                          <td className="table-desc">01.02.2024</td>
                        </tr>

                        <tr className="table-row">
                          <td>
                          <i className="bi bi-stopwatch"></i>
                          </td>
                          <td className="first-cols">Geçirdiğin Süre</td>
                          <td className="table-desc">28 sa 28 dk</td>
                        </tr>
                        <tr>
                          <td>
                          <i className="bi bi-stopwatch"></i>
                          </td>
                          <td className="first-cols">Tahmini Süre</td>
                          <td className="table-desc">65 g 36 sa 30 dk</td>
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
                          <td>
                            
                          </td>
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
  )
}