import { Link } from "react-router-dom";
import "./mainMyTrainings.css"
import React, { useEffect, useState } from 'react'

type Props = {
   
}

export default function MainMyTrainings({}: Props) {
  const [courses, setCourses] = useState<{ id: number; title: string; date: string; thumbnail: string; }[]>([]);
  const testCourses = [
    {
      id: 1,
      title: 'İstanbul Kodluyor Bilgilendirme',
      date: '11.11.1111 22.22', 
      thumbnail: 'https://tobeto.s3.cloud.ngn.com.tr/23_EAH_1_45f7232003.jpg', 
    },
    {
      id: 2,
      title: 'İstanbul Kodluyor Bilgilendirme',
      date: '11.11.1111 22.22', 
      thumbnail: 'https://tobeto.s3.cloud.ngn.com.tr/23_ENK_1_b4d858c1a9.jpg', 
    }
   
  ];
  useEffect(() => {
    const fetchData = async () => {
      try {


        setCourses(testCourses);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchData();
  }, []);
  return (
    <>
    <div className='row'>

        {courses && courses.length > 0 ? (
  courses.map((course) => ( 
    <div key={course.id} className='col-md-3 col-12 mb-4'>
      <div className="corp-edu-card">
      <div className="card-img" style={{ backgroundImage: `url(${course.thumbnail})` }}></div>
      <div className="card-content">
        <div className="d-flex flex-column">
          <span>{course.title}</span>
          <span className="platform-course-date">{course.date}</span>
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