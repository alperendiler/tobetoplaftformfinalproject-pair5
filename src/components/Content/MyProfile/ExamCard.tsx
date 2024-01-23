import React from "react";

type Props = {};
function ExamCard({}: Props) {
  return (
    <div>
      <div className="col-6 shadow mb-3 bg-white rounded p-2 examResult">
        <div className="row">
          <div className="col-8">
            <p>Herkes için Kodlama 1C Değerlendirme Sınavı</p>
            <p>88.00</p>
          </div>
          <div className="col-4">11-10-2023</div>
        </div>
      </div>
    </div>
  );
}

export default ExamCard;
