import React from 'react'
import CourseDetailHeader from '../components/Courses/CourseDetailHeader'
import "./courseDetail.css"
import CourseDetailTab from '../components/Courses/CourseDetailTab'
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