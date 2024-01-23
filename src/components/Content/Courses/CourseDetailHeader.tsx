import React from 'react'
import "./courseDetailHeader.css"
type Props = {}

export default function CourseHeader({}: Props) {
  return (
    <>
        <div className='activity-detail-header'>
        <div className="row">
      <div className="col-lg-1 col-md-1 col-sm-2 col-xs-12 show-text-lg show-text-md show-text-sm hidden-text-xs">
        <img className="activity-image" src="https://lms.tobeto.com/tobeto/eep/common_show_picture_cached.aspx?pQS=eaAjNZ0uaOEJMI14cKs7Ww%3d%3d" alt="Softskill: İş Becerileri" />
      </div>
      <div className="col-lg-11 col-md-11 col-sm-10 col-xs-12">
        <div className="row">
          <div className="col-xs-12">
            <div className="row">
              <div className="col-lg-7 col-md-7 col-sm-4 col-xs-12">
                <div
                  className="activity-info"
                  data-gtm-vis-first-on-screen103964688_7="910"
                  data-gtm-vis-recent-on-screen103964688_7="50818"
                  data-gtm-vis-total-visible-time103964688_7="100"
                  data-gtm-vis-has-fired103964688_7="1"
                >
                  <h3>Softskill: İş Becerileri</h3>
                  
                  <div className="date-info-container">
                    <span>
                      <div className="date-info text-green">
                        <i className="ss-icon ss-like"></i> <span>Başardın</span>
                      </div>
                      <span
                        role="img"
                        aria-label="question-circle"
                        id="info-text-question"
                        className="anticon anticon-question-circle"
                      >
                        {/* SVG içeriği */}
                      </span>
                    </span>
                  </div>
                </div>
              </div>
              <div className="activity-process col-lg-5 col-md-5 col-sm-8 col-xs-12 text-lg-right text-md-right text-sm-right text-xs-center">
                <div className="ant-space ant-space-horizontal ant-space-align-center" style={{ gap: '8px' }}>
                  <div className="ant-space-item" >
                    <div className="activity-score text-white background-green">
                      <span className="account-balance">100</span> PUAN
                    </div>
                  </div>
                  <div className="ant-space-item" ></div>
                  <div className="ant-space-item" >
                    <div className="like">
                      <div className="like-area">
                        <span className="like-button">
                          <div id="main-content">
                            <div id="sub-content">
                              <input type="checkbox" id="checkbox" />
                              <label id="checkbox-label" htmlFor="checkbox">
                                {/* SVG içeriği */}
                              </label>
                            </div>
                          </div>
                        </span>
                        <span className="like-text">
                          <span>104</span>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="ant-space-item" >
                    <div className="activity-favorite">
                      <span className="add-favorite"></span>
                    </div>
                  </div>
                  <div className="ant-space-item"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xs-12">
            <div className="activity-progress-bar">
              <div className="ant-progress ant-progress-line ant-progress-status-active ant-progress-show-info ant-progress-default" role="progressbar">
                <div className="ant-progress-outer" style={{ width: '100%', height: '3px' }}>
                  <div className="ant-progress-inner">
                    <div className="ant-progress-bg" style={{ width: '100%', height: '3px' }}></div>
                  </div>
                </div>
                <span className="ant-progress-text" title="100%">
                  100%
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
         </div>
    </>
  )
}