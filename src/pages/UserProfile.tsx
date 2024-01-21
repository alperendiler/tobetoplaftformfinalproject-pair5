import React from "react";
import { Link } from "react-router-dom";
import "../assets/vendor/bootstrap/css/bootstrap.min.css";
import "../assets/vendor/boxicons/css/boxicons.min.css";
import "../assets/vendor/quill/quill.snow.css";
import "../assets/vendor/quill/quill.bubble.css";
import "../assets/vendor/remixicon/remixicon.css";
import "../assets/vendor/simple-datatables/style.css";
import "../assets/img/apple-touch-icon.png";
import "../assets/css/style.css";
import ProfileCard from "../components/MyProfile/ProfileCard";
import AboutMe from "../components/MyProfile/AboutMe";
import MyCompetence from "../components/MyProfile/MyCompetence";
import MyLanguage from "../components/MyProfile/MyLanguage";
import MyCertificate from "../components/MyProfile/MyCertificate";
import MyMedia from "../components/MyProfile/MyMedia";
import SuccessModel from "../components/MyProfile/SuccessModel";
import MyExam from "../components/MyProfile/MyExam";
import MyBadge from "../components/MyProfile/MyBadge";
import MyActivityMap from "../components/MyProfile/MyActivityMap";

type Props = {};

export default function UserProfile({}: Props) {
  return (
    <>
      <div className="container p-5">
        <div className="text-end mb-3">
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              fill="currentColor"
              className="bi bi-pencil-square"
              viewBox="0 0 16 16"
            >
              <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
              <path
                fill-rule="evenodd"
                d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"
              />
            </svg>
          </span>
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              fill="currentColor"
              className="bi bi-share ms-3"
              viewBox="0 0 16 16"
            >
              <path d="M13.5 1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3M11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.5 2.5 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5m-8.5 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m11 5.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3" />
            </svg>
          </span>
        </div>
        <div className="row">
          <div className="col-md-4 col-12">
            <ProfileCard />
            <AboutMe />
            <MyCompetence />
            <MyLanguage />
            <MyCertificate />
            <MyMedia />
          </div>
          <div className="col-md-8 col-12">
            <SuccessModel />
            <MyExam/>
            <MyBadge/>
            <MyActivityMap/>
          </div>
        </div>
      </div>
    </>
  );
}
