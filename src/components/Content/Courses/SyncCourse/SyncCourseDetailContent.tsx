import React from 'react'
import Homework from './Homework'
import SyncCourse from './SyncCourse'
import "./SyncCourseDetailContent.css"
import { Topic } from '../../../../models/responses/course/getCourseDetailResponse'
type Props = {}

export default function SyncCourseDetailContent(props: {topic?:Topic}) {
  return (
    <>
<div className='row'>
    <div className='col-lg-12 col-md-12 col-sm-12 col-xs-12'>
         </div>
     
        <div className='col-lg-12 col-md-12 col-sm-12 col-xs-12'>
            <div className='activity-largeImageFileName no-video'>
                <div className='activity-largeImageFileName no-video'>
                    <img src="https://lms.tobeto.com/tobeto/eep/common_show_picture_cached.aspx?pQS=DiBldjEKnwKDQVcjzXYj%2bf53hQnzP5df" alt="" />
                </div>
                <div className='activity-unit-detail'>
                     <div className="row">
      <div className="col-lg-9 col-md-8 col-sm-9 col-xs-12">
        <div className="unit-detail-title">
          <div>{props.topic?.name}</div>
        </div>
        <div className="unit-detail-col unit-detail-col-default">Sanal Sınıf<span></span></div>
        <div className="unit-detail-col unit-detail-col-status last-child">
          <div className="unit-icon unit-ongoing"></div> Devam Ediyor
        </div>
      </div>
      <div className="col-lg-3 col-md-4 col-sm-3 col-xs-12">
        <div className="unit-box-actions text-lg-left text-md-left text-sm-left text-xs-center">
          <div className="ant-space ant-space-vertical" >
            <div className="ant-space-item"></div>
            <div className="ant-space-item">
              <button type="button" className="ant-btn ant-btn-default ant-btn-lg ant-btn-block btn">
                <span>DETAY</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <SyncCourse topic={props.topic}/>
    <Homework/>
                </div>

            </div>
        </div>
        </div>

    </>
  )
}