import React, { useState } from "react";
import "../../../styles/Courses/offCanvas.css";
import ReactDOM from "react-dom";
import { CourseTopicTitle } from "../../../models/responses/course/getCourseDetailResponse";


const Overlay = ({ isShowing, toggle }: any) => {
  const overlayRoot = document.getElementById("overlay-root");

  return isShowing && overlayRoot
    ? ReactDOM.createPortal(
      <div className="overlay" onClick={toggle}></div>,
      overlayRoot
    )
    : null;
};


// OffCanvas bileşeni
const OffCanvas = (props:{title?:CourseTopicTitle, image?:string}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [liked, setLiked] = useState(false);
  const togglePanel = () => {
    setIsOpen(!isOpen);
  };
  const toggleLike = () => {
    setLiked(!liked);
  };
  return (
    <>
      <button className="detail-button" onClick={togglePanel}>
        DETAY
      </button>
      <Overlay isShowing={isOpen} toggle={togglePanel} />
      <div className={`off-canvas-panel ${isOpen ? "open" : ""}`}>
        {isOpen && (
          <>
            <div className="close-button-con">
              <button className="close-button" onClick={togglePanel}>
                ×
              </button>
            </div>



            <div className="row-all">
              <div className="space-left"></div>
              <div className="image-canvas" style={{ width: " 160px" }}>
                <img
                  src={props.image}
                  className="edu-img-c"
                  alt="Eğitim Resmi"
                />
              </div>
              <div className="col-left">

                <div className="  edu-title-c">
                  <div
                    className="row"
                    style={{
                      marginTop: "25px",
                      marginLeft: "20px",
                      fontSize: "16px",
                      fontWeight: "bold",
                      width: "400px",
                    }}
                  >
                    {props.title?.name}
                  </div>
                  <div className="row edu-detail-row-c">
                    <div
                      className="row"
                      style={{
                        marginTop: "8px",
                        marginLeft: "20px",
                        fontSize: "14px",
                        fontWeight: "bold",
                        width: "75px",
                      }}
                    >
                      <div className="video-detail-btn-c ">VİDEO</div>
                    </div>

                    <div
                      className="row "
                      style={{
                        marginTop: "7px",
                        marginLeft: "0px",
                        fontSize: "15px",
                        fontWeight: "bold",
                        width: "45px",
                        paddingTop: "4px",
                        paddingRight: "35px"
                      }}
                    >
                      <i className="bi bi-stopwatch "

                      ></i>
                    </div>
                    <div
                      className="row  time-c"
                      style={{
                        paddingTop: "4px",
                        marginTop: "8px",
                        marginLeft: "0px",
                        fontSize: "14px",
                        fontWeight: "bold",
                        width: "35px",
                        paddingRight: "5px"

                      }}
                    >
                      {props.title?.videoTime}
                    </div>
                    <div
                      className="row  time-c"
                      style={{
                        paddingTop: "4px",
                        marginTop: "8px",
                        marginLeft: "3px",
                        fontSize: "15px",
                        fontWeight: "bold",
                        width: "40px",
                      }}
                    >
                      {" "}
                      <i className="bi bi-eye"></i>
                    </div>
                    <div
                      className="row  time-c "
                      style={{
                        paddingTop: "4px",
                        marginTop: "8px",
                        marginLeft: "3px",
                        fontSize: "14px",
                        fontWeight: "bold",
                        width: "45px",
                      }}
                    >
                      157
                    </div>
                  </div>

                  <div className="col-5 row-button-heart">
                    <button
                      className={`like-button ${liked ? "liked" : ""}`}
                      onClick={toggleLike}
                    >
                      <span className="heart-icon  col">{liked ? "❤️" : "🤍"}</span>
                      <span className="like-count col">{liked ? 51 : 50}</span>
                    </button>
                  </div>

                </div>

              </div>
              <div className="col-right">
                <div className="go-edu-area col " >
                  <a className="go-edu-btn col" href="http://localhost:3000/course/:id" role="button">EĞİTİME GİT</a>
                  <div className="dots " >
                    <i className="bi bi-three-dots"></i>
                  </div>
                </div>
                <div className="col-all2 row " style={{ marginTop: "6px" }}>
                  <div className="edu-time-detail row">
                    <div className="ok-icon row ">
                      <div className="ok-icon-space  col-2"></div>
                      <div className="congrulations col-7  ">
                      <i className="bi bi-hand-thumbs-up"></i>
                      Tebrikler,&nbsp;&nbsp;tamamladın!
                      </div>

                      <div className="col-score col-3 ">{props.title?.point}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col">
                <div className="c-edu-detail-cont  row">
                  <table>
                    <tr>
                      <td>
                        <i className="bi bi-tag"></i>
                      </td>
                      <td>Kategori</td>
                      <td className="c-edu-detail">
                        Yazılım
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <i className="bi bi-globe"></i>
                      </td>
                      <td>Dili</td>
                      <td className="c-edu-detail">Türkçe</td>
                    </tr>
                    <tr>
                      <td>
                        <i className="bi bi-boxes"></i>
                      </td>
                      <td>Alt Tip</td>
                      <td className="c-edu-detail">{props.title?.subtype}</td>
                    </tr>
                    <tr>
                      <td>
                        <i className="bi bi-briefcase"></i>
                      </td>
                      <td>Üretici Firma</td>
                      <td className="c-edu-detail">Enocta</td>
                    </tr>
                  </table>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="row" style={{ paddingTop:"10px",
                paddingLeft: "60px", fontWeight: "bold", fontFamily: "'Poppins', sans-serif",
                fontSize: "15px"
              }}>
                İçerik
              </div>
              <div className="row"
                style={{
                  paddingLeft: "60px",
                  paddingTop: "10px",
                  textAlign: "left",
                  fontFamily: "'Poppins', sans-serif",
                  fontSize: "14px"
                }}
              >
                {props.title?.description}
              </div>
            </div>

          </>
        )}
      </div>

    </>
  );
};

export default OffCanvas;