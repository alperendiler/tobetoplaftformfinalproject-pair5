import React from "react";
import { Topic } from "../../../../models/responses/course/getCourseDetailResponse";
import { format } from "date-fns";
import { Link } from "react-router-dom";

type Props = {};

export default function SyncCourse(props: { topic?: Topic }) {
  return (
    <>
      <div className="unit-detail-session-row LXP-Collapse">
        <div className="session-title">Oturumlar</div>
        {props.topic?.virtualClasses
        .slice()
        .sort((a, b) => (a.name > b.name ? 1 : -1))
        .map((item, index) => (
          <div className="session-detail">
            <p className="d-inline-flex gap-1">
              <div
                className="collapse-inline"
                data-bs-toggle="collapse"
                data-bs-target="#collapseExample"
                aria-expanded="true"
                aria-controls="collapseExample"
              >
                <div className="collapse-expand-icon">
                  <span
                    role="img"
                    aria-label="right"
                    className="anticon anticon-right ant-collapse-arrow"
                  >
                    <svg
                      viewBox="64 64 896 896"
                      focusable="false"
                      data-icon="right"
                      width="1em"
                      height="1em"
                      fill="currentColor"
                      aria-hidden="true"
                      style={{ transform: "rotate(90deg)" }}
                    >
                      <path d="M765.7 486.8L314.9 134.7A7.97 7.97 0 00302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.96 31.96 0 000-50.4z"></path>
                    </svg>
                  </span>
                </div>
                <span className="collapse-header-text">
                  <span className="collapse-panel-title">{item.name}</span>
                  <div className="class-status text-green">
                    <span
                      role="img"
                      aria-label="check-circle"
                      className="anticon anticon-check-circle"
                    >
                      <svg
                        viewBox="64 64 896 896"
                        focusable="false"
                        className=""
                        data-icon="check-circle"
                        width="1em"
                        height="1em"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm193.5 301.7l-210.6 292a31.8 31.8 0 01-51.7 0L318.5 484.9c-3.8-5.3 0-12.7 6.5-12.7h46.9c10.2 0 19.9 4.9 25.9 13.3l71.2 98.8 157.2-218c6-8.3 15.6-13.3 25.9-13.3H699c6.5 0 10.3 7.4 6.5 12.7z"></path>
                      </svg>
                    </span>
                    Katıldın
                  </div>
                </span>
              </div>
            </p>
            <div className="collapse" id="collapseExample">
              <div className="card-body">
                <div className="row">
                  <div className="col-lg-3 col-md-4 col-sm-3 col-xs-6">
                    <i className="sg-icon sg-oven"></i>
                    <span>Başlangıç</span>
                  </div>
                  <div className="col-lg-9 col-md-8 col-sm-9 col-xs-6">
                    {format(new Date(item.startTime), "dd/MM/yyyy")}
                  </div>
                  <div className="col-lg-3 col-md-4 col-sm-3 col-xs-6">
                    <span className="last-title">Bitiş</span>
                  </div>
                  <div className="col-lg-9 col-md-8 col-sm-9 col-xs-6">
                    {format(new Date(item.finishTime), "dd/MM/yyyy")}
                  </div>
                </div>
                <div className="instructors-list">
                  <div className="row">
                    <div className="col-lg-3 col-md-4 col-sm-3 col-xs-6">
                      <i className="sg-icon sg-user"></i>
                      <span>Eğitmen</span>
                    </div>
                    <div className="col-lg-9 col-md-8 col-sm-9 col-xs-6">
                      <span>
                        <a className="user-name">Ahmet Çetinkaya</a>
                      </span>
                      <span>
                        <a className="user-name">Engin Demiroğ</a>
                      </span>
                      <span>
                        <a className="user-name">Halit Enes Kalaycı</a>
                      </span>
                      <span>
                        <a className="user-name">Ali Seyhan</a>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="row no-bottom-line">
                  <div className="col-xs-12">
                    <i className="sg-icon sg-video"></i>
                    <span>Oturum Kayıtları</span>
                    <div className="session-record">
                      Oturumlara ilişkin kayıtlar, canlı oturumlar
                      tamamlandıktan sonra izlenebilir.
                    </div>
                  </div>
                </div>
                <div className="unit-session-list">
                  <div className="row middle-xs">
                    <div className="col-lg-9 col-md-8 col-sm-9 col-xs-12">
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-3 col-xs-12 text-lg-center text-sm-center text-md-center text-xs-left">
                      <Link
                        to={item.recordLink}
                        type="button"
                        target="_blank"
                        className="ant-btn ant-btn-default btn"
                      >
                        <span>KAYDI AÇ</span>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="bottom-line m-t-10"></div>{" "}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
