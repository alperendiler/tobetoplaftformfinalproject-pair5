import React, { useState } from 'react'
import CourseDetailContent from './CourseDetailContent'

type Props = {}

export default function CourseDetailTab({}: Props) {
  
  return (
    <div>
        <ul className="nav  nav-underline mb-4" id="borderedTab" role="tablist">
          <li className="nav-item" role="presentation">
            <button className="nav-link link-secondary active" id="content-tab" data-bs-toggle="tab" data-bs-target="#bordered-content" type="button" role="tab" aria-controls="content" aria-selected="true">İçerik</button>
          </li>
          <li className="nav-item" role="presentation">
            <button className="nav-link link-secondary" id="about-tab" data-bs-toggle="tab" data-bs-target="#bordered-about" type="button" role="tab" aria-controls="about" aria-selected="false">Hakkıda</button>
          </li>
         
        </ul>
        <div className="tab-content pt-2" id="borderedTabContent">

        <div className="tab-pane fade" id="bordered-content" role="tabpanel" aria-labelledby="content-tab">
            <CourseDetailContent/>
          </div>
          <div className="tab-pane fade" id="bordered-about" role="tabpanel" aria-labelledby="about-tab">
            Saepe animi et soluta ad odit soluta sunt. Nihil quos omnis animi debitis cumque. Accusantium quibusdam perspiciatis qui qui omnis magnam. Officiis accusamus impedit molestias nostrum veniam. Qui amet ipsum iure. Dignissimos fuga tempore dolor.
          </div>
          </div>

    </div>
  )
}