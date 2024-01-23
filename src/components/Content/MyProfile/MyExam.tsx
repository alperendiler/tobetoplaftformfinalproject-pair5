import React from "react";
import "../../../styles/MyProfileStyles/myExam.css"
import ExamCard from "./ExamCard";

type Props = {};

const MyExam = ({}: Props) => {
  return (
    <div>
      <div className="row shadow mb-3 bg-white rounded p-3">
        <div className="col-11 fw-bold h5">Tobeto Seviye Testlerim</div>
        <hr />
        <div className="row">
            <ExamCard/>
        </div>
      </div>
    </div>
  );
};

export default MyExam;
