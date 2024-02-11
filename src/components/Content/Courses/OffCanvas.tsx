import React, { useState } from "react";
import "./OffCanvas.css";
import ReactDOM from "react-dom";


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
const OffCanvas = () => {
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
            <div className="row-all">
              <div className="close-button-con">
                <button className="close-button" onClick={togglePanel}>
                  ×
                </button>
              </div>
              <div className=""></div>
              <div className="image-canvas" style={{ width: " 160px" }}>
                <img
                  src="https://lms.tobeto.com/tobeto/eep/common_show_picture_cached.aspx?pQS=DiBldjEKnwJCe69nG2MNIKN8WyVXbzKN"
                  className="edu-img-c"
                  alt="Eğitim Resmi"
                />
              </div>

              <div className="col-left ">

                <div className="  edu-title-c ">
                  <div
                    className="row "
                    style={{
                      marginTop: "25px",
                      marginLeft: "20px",
                      fontSize: "16px",
                      fontWeight: "bold",
                      width: "420px",
                    }}
                  >
                    Sözcük İşleyici (Word Processor / MS Word){" "}
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
                      <div className="video-detail-btn-c">VİDEO</div>
                    </div>

                    <div
                      className="row"
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
                      4dk
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
                    <button
                      className={`like-button ${liked ? "liked" : ""}`}
                      onClick={toggleLike}
                    >
                      <span className="heart-icon">{liked ? "❤️" : "🤍"}</span>
                      <span className="like-count">{liked ? 51 : 50}</span>
                    </button>
                  </div>
                </div>

              </div>
              <div className="col-right">
                <div className="go-edu-area  " >
                  <a className="go-edu-btn " href="http://localhost:3000/course/:id" role="button">EĞİTİME GİT</a>
                  <button className="dots" >
                    <i className="bi bi-three-dots" ></i>
                  </button>
                </div>

                <div className="col-all2 row bordered" style={{ marginTop: "6px" }}>
                  <div className="edu-time-detail col">
                    <div className="ok-icon row bordered">
                      <i className="bi bi-hand-thumbs-up col-1 bordered"></i>
                      Tebrikler,&nbsp;&nbsp;&nbsp;tamamladın!
                    
                      <div className="col-score col-5 bordered">100 PUAN</div>
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
                        İş'te Mükemmellik / Bilişim Teknolojileri / Office 2016
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
                      <td className="c-edu-detail">Konu Uzmanı Videosu</td>
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
              <div className="row" style={{
                paddingLeft: "80px", fontWeight: "bold", fontFamily: "'Poppins', sans-serif",
                fontSize: "14px"
              }}>
                İçerik
              </div>
              <div className="row"
                style={{
                  paddingLeft: "80px",
                  paddingTop: "20px",
                  textAlign: "left",
                  fontFamily: "'Poppins', sans-serif",
                  fontSize: "14px"
                }}
              >
                Bu videoda sözlük işleyici kavramından ve belge üretmek için kullanılan uygulamalardan bahsedilmiştir.
              </div>
            </div>

          </>
        )}
      </div>

    </>
  );
};

export default OffCanvas;