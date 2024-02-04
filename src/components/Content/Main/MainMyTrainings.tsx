import { Link } from "react-router-dom";
import "./mainMyTrainings.css"
import React, { useEffect, useState } from 'react'
import { GetAllCourseResponse } from "../../../models/responses/course/getAllCourseResponse";
import courseService from "../../../services/courseService";

type Props = {
   
}

export default function MainMyTrainings({}: Props) {
  const [courses, setCourses] =  useState<GetAllCourseResponse [] >([]);

  useEffect(() => {
    fetchCourses();
  }, []); 
  const fetchCourses = async () => {
  
      const response = await courseService.getAll(0, 4);
      setCourses(response.data.items);
    
  }
  return (
    <>
    <div className='row'>

        {courses && courses.length > 0 ? (
  courses.map((course) => ( 
    
    <div key={course.id} className='col-md-3 col-12 mb-4'>
      <div className="corp-edu-card">
      <div className="card-img" style={{ backgroundImage: `url(${course.imageUrl})` }}></div>
      <div className="card-content">
        <div className="d-flex flex-column">
    
          <span>{course.name}   </span>
          <span className="platform-course-date">{course.estimatedTime}</span>
        </div>
        <Link  className="apply-btn" to={"/courses/" + course.id}>Eğitime Git</Link>
      </div>
    </div>
    </div>
  ))
  ) : (
    <p>Başvurular bulunamadı.</p>
  )}  

    
    </div>
  </>
  )
}