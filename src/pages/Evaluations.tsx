import React from "react";
import "../styles/evaluations.css";
type Props = {};

export default function Evaluations({}: Props) {
  return (
    <>
      <section className="py-5">
        <div className="position-relative ">
          <div className="container text-center">
            <div className="mw-5xl mx-auto">
              <h1>
                <span className="text-purple"> Yetkinlik</span>
                <span className="fw-normal text-tobeto-black">lerini</span>
                <span className="fw-normal text-tobeto-black">
                  {" "}
                  ücretsiz ölç,
                </span>
                <span className="text-purple"> bilgi</span>
                <span className="fw-normal text-tobeto-black">lerini</span>
                <span className="fw-normal text-tobeto-black"> test et.</span>
              </h1>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-8">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-12 mb-5">
              <div className="evaluation-card">
                <span className="text-light fw-bold fs-2">
                  Tobeto İşte Başarı Modeli
                </span>
                <p className="text-light fw-bold fs-5">
                  80 soru ile yetkinliklerini <b>ölç,</b> önerilen eğitimleri{" "}
                  <b>tamamla,</b> rozetini <b>kazan.</b>
                </p>
                <a className="btn btn-evaluation text-light fw-bold" href="#">
                  Raporu Görüntüle
                </a>
              </div>
            </div>
            <div className="col-12 col-md-6 mb-8 d-none">
              <div className="evaluation-card2">
                <span>Kişisel Gelişim Envanteri</span>
                <p>
                  Kendin için en uygun kariyer alanlarını <b>keşfet</b>.
                </p>
                <span>YAKINDA</span>
                <label className="switch soon-shape mx-auto">
                  <span className="slider round"></span>
                </label>
              </div>
              <div className="w-100 d-flex justify-content-center"></div>
            </div>
            <div className="col-12 col-md-6 evaluation-container mb-8">
              <div className="evaluation-card1 equal-box">
                <span className="fw-bold fs-2 mt-2">
                  Yazılımda Başarı Testi
                </span>
                <p className="mt-2">
                  Çoktan seçmeli sorular ile teknik bilgini <b>test et.</b>
                </p>
                <label className="text-white mt-2">&gt;&gt;&gt;</label>
              </div>
            </div>
            <div className="col-12 col-md-6 mb-8">
              <div
                className="d-flex flex-column equal-box"
                style={{ gap: "14px" }}
              >
                <div className="evaluation-card-slim">
                  <div className="d-flex align-items-center">
                    <div className="platformIcon"></div>
                    <span className="text-light fw-medium">Front End</span>
                  </div>
                  <button className="btn btn-light fw-bold">Başla</button>
                </div>
                <div className="evaluation-card-slim">
                  <div className="d-flex align-items-center">
                    <div className="platformIcon"></div>
                    <span className="text-light fw-medium">Full Stack</span>
                  </div>
                  <button className="btn btn-light">Başla</button>
                </div>
                <div className="evaluation-card-slim">
                  <div className="d-flex align-items-center">
                    <div className="platformIcon"></div>
                    <span className="text-light fw-medium">Back End</span>
                  </div>
                  <button className="btn btn-light">Başla</button>
                </div>
                <div className="evaluation-card-slim">
                  <div className="d-flex align-items-center">
                    <div className="platformIcon"></div>
                    <span className="text-light fw-medium">
                      Microsoft SQL Server
                    </span>
                  </div>
                  <button className="btn btn-light">Başla</button>
                </div>
                <div className="evaluation-card-slim">
                  <div className="d-flex align-items-center">
                    <div className="platformIcon"></div>
                    <span className="text-light fw-medium">
                      Masaüstü Programlama
                    </span>
                  </div>
                  <button className="btn btn-light">Başla</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5">
        <div className="position-relative">
          <div className="gradient-line3 mt-5"></div>
          <div className="container text-center">
            <div className="mw-5xl mx-auto ">
              <h3>
                <span className="text-purple fs-1"> Aboneliğe özel </span>
                <span className="fw-normal text-tobeto-black fs-1">
                  değerlendirme araçları için{" "}
                </span>
              </h3>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-5">
        <div className="container mb-5 ">
          <div className="row">
            <div className="col-12 col-md-6 mb-8">
              <div className="evaluation-card4 equal-box">
                <span className="text-light fs-3 fw-bold">
                  Kazanım Odaklı Testler
                </span>
                <p className="">
                  Dijital gelişim kategorisindeki eğitimlere başlamadan önce
                  konuyla ilgili bilgin ölçülür ve seviyene göre
                  yönlendirilirsin.
                </p>
                <p></p>
              </div>
            </div>
            <div className="col-12 col-md-6 mb-8">
              <div className="evaluation-card4 equal-box">
                <span>
                  Huawei Talent Interview <br /> Teknik Bilgi Sınavı*
                </span>
                <p className="mt-4 ">
                  <b>
                    <i>Sertifika alabilmen için,</i>
                  </b>{" "}
                  eğitim yolculuğunun sonunda teknik yetkinliklerin ve kod
                  bilgin ölçülür.
                  <br />
                  <br />
                  4400+ soru | 30+ programlama dili <br />4 zorluk seviyesi
                </p>
                <small className="text-white">
                  *Türkiye Ar-Ge Merkezi tarafından tasarlanmıştır.
                </small>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
