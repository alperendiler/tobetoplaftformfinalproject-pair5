import React from 'react'
import CourseDetailHeader from '../components/Content/Courses/CourseDetailHeader'
import "../styles/courseDetail.css"
import CourseDetailTab from '../components/Content/Courses/CourseDetailTab'
type Props = {}

export default function Courses({}: Props) {
  return (
    <>
        <div className='wrapper without-slide'>
            <div className='content'>
                <div className='page-content activity-detail'> 
                    <CourseDetailHeader/>
                    <CourseDetailTab/>
                </div>
            </div>
        </div>
    </>
  )
}