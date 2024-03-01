import React, { useEffect } from "react";
import "../../../styles/Courses/courseDetailContent.css";
import OffCanvas from "./OffCanvas";
import { useState } from "react";
import ButtonGroup from "antd/es/button/button-group";
import {
  CourseTopicTitle,
  CourseTopicVirtualClass,
  GetCourseDetailResponse,
} from "../../../models/responses/course/getCourseDetailResponse";
import { title } from "process";
import SyncCourseDetailContent from "./SyncCourse/SyncCourseDetailContent";
import { useParams } from "react-router-dom";
type Props = {};

export default function CourseDetailContent(props: {
  courseDetail?: GetCourseDetailResponse;
}) {
  useEffect(() => {
    SetContentType();
  }, [props]);
  const SetContentType = async () => {
    if (
      props.courseDetail &&
      props.courseDetail.courseTopics[0].topic.virtualClasses?.length > 0
    ) {
      setContentType("virtualClass");
    } else if (
      props.courseDetail &&
      props.courseDetail.courseTopics[0].topic.titles?.length > 0
    ) {
      setContentType("title");
      setSelectedTitle(props.courseDetail.courseTopics[0].topic.titles[0]);
      setShowImage(false);
      setShowVideo(true);
      setShowVideo2(false);
    }
  };

  const { courseDetail } = props;
  const [selectedTitle, setSelectedTitle] = useState<CourseTopicTitle>();
  const [contentType, setContentType] = useState<string>();

  const [showVideo, setShowVideo] = useState(false);
  const [showVideo2, setShowVideo2] = useState(false);
  const [showImage, setShowImage] = useState(true);

  const handleSelectTitle = (title: CourseTopicTitle) => {
    setSelectedTitle(title);
    setShowImage(false);
    setShowVideo(true);
    setShowVideo2(false);
  };

  const handleWordClick = () => {
    setShowImage(false);
    setShowVideo(true);
    setShowVideo2(false);
  };

  const handleWord2Click = () => {
    setShowImage(false);
    setShowVideo(false);
    setShowVideo2(true);
  };

  return (
    <>
      <div className="container-fluid " style={{ backgroundColor: "white" }}>
        <div
          className="container col-12  "
          style={{ backgroundColor: "white", minHeight: "1000px" }}
        >
          <div className="row ">
            <div className="container col-12 course-left col-lg-5  pt-0">
              <div className="activity-content-menu ">
                <div className="accordion" id="accordionExample">
                  {courseDetail?.courseTopics.map((item, index) => (
                    <div className="accordion-item">
                      <h2
                        className="accordion-header"
                        id={"heading" + item.topic.id}
                      >
                        <button
                          className="accordion-button collapsed button-feature"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target={"#collapse" + item.topic.id}
                          aria-expanded="false"
                          aria-controls={"collapse" + item.topic.id}
                        >
                          {item.topic.name}
                        </button>
                      </h2>
                      <div
                        id={"collapse" + item.topic.id}
                        className="accordion-collapse collapse"
                        aria-labelledby={"heading" + item.topic.id}
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                          {item.topic.titles.map((title, index) => (
                            <div
                              className="accordion-content-all col-12"
                              key={index}
                            >
                              <div className="accordion-content-two col-11">
                                <div
                                  className="accordion-content-title"
                                  onClick={() => handleSelectTitle(title)}
                                >
                                  {title.name}
                                </div>
                                <div className="accordion-timer">
                                  Video - {title.videoTime} dk
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            {contentType == "title" && (
              <div className="container col-12 course-rigth col-lg-7">
                <div className="activity-content-info ">
                  {showImage && (
                    <div className="imageWord " onClick={handleWordClick}>
                      <img
                        width="100%"
                        height="auto"
                        src="https://lms.tobeto.com/tobeto/eep/common_show_picture_cached.aspx?pQS=DiBldjEKnwJCe69nG2MNIKN8WyVXbzKN"
                      />
                    </div>
                  )}
                  {showVideo && (
                    <div className="video">
                      {/* Video buraya eklenebilir */}
                      <iframe
                        width="540"
                        height="400"
                        // src="https://www.youtube.com/embed/4iuC9Hcds8o?si=y_u-ELs3X8_azw24"
                        src={selectedTitle?.videoLink}
                        title="YouTube video player"
                      ></iframe>
                    </div>
                    // <div className="video">
                    //   {/* Video buraya eklenebilir */}
                    //   <video width="540" height="400" controls>
                    //     <source src="videos\testvideo.mp4" type="video/mp4" />
                    //     Your browser does not support the video tag.
                    //   </video>
                    // </div>
                  )}

                  {showVideo2 && (
                    <div className="video">
                      {/* Video buraya eklenebilir */}
                      <iframe
                        width="225%"
                        height="auto"
                        src="https://lms.tobeto.com/tobeto/eep/main/activity/896?isPopup=True&aActiveTab=content"
                        title="YouTube video player"
                      ></iframe>
                    </div>
                  )}

                  {/* 
                <div className="video">
                  <img width="540" height="400" src="https://lms.tobeto.com/tobeto/eep/common_show_picture_cached.aspx?pQS=DiBldjEKnwJCe69nG2MNIKN8WyVXbzKN" /> */}
                </div>
                <div className="content-video-detail ">
                  <div className="col-9">
                    {showImage && (
                      <div className="course-title  col-10">
                        {selectedTitle?.name}
                      </div>
                    )}
                    {showVideo && (
                      <div className="course-title  col-10 onClick={handleWordClick}">
                        {selectedTitle?.name}
                      </div>
                    )}
                    {showVideo2 && (
                      <div className="course-title  col-10 onClick={handleWord2Click}">
                        {" "}
                        Word'e Giriş / Word Arayüzü ve Temel Kavramlar
                      </div>
                    )}

                    <div className="sarma">
                      <div className="video-ml col-2.5 ">
                        {" "}
                        {selectedTitle &&
                          "video - " + selectedTitle?.videoTime + " dk"}{" "}
                      </div>
                      <div className="score col-2 ">
                        {selectedTitle && selectedTitle?.point + " puan"}
                      </div>
                      <div className="status-continue col-5 ">
                        {/* <i className="bi bi-hand-thumbs-up"></i>
                      &nbsp;Tebrikler,&nbsp;&nbsp;tamamladın! */}
                      </div>
                    </div>
                  </div>
                  <div className="col-3 button-detail-all ">
                    <div className="button-detail">
                      <OffCanvas title={selectedTitle} image={props.courseDetail?.imageUrl}/>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {contentType == "virtualClass" && (
              <div className="container col-12 course-rigth col-lg-7">
                <SyncCourseDetailContent
                  topic={props.courseDetail?.courseTopics[0].topic}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
