import React from "react";
import CalendarHeatmap from "react-calendar-heatmap";
import "react-calendar-heatmap/dist/styles.css";
import "../../../styles/MyProfileStyles/myActivityMap.css";

function MyActivityMap() {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();

  // const startDate = new Date(currentYear, 0, 1);
  const endDate = new Date();
  const startDate = new Date();
  startDate.setDate(endDate.getDate()-365);
  //const endDate = new Date(currentYear, 11, 31);
  const values = [
    { date: "2024-01-01", count: 1 },
    { date: "2024-01-05", count: 3 },
    { date: "2024-01-12", count: 12 },
    { date: "2024-01-15", count: 15 },
    { date: "2024-01-17", count: 16 },
    { date: "2024-01-18", count: 25 },
    { date: "2024-01-21", count: 42 },
  ];

  return (
    <div>
      <div className=" row shadow mb-3 bg-white rounded p-3">
        <div className="fw-bold h5">Aktivite Haritam</div>
        <hr />
        <div />
        <CalendarHeatmap
          startDate={startDate}
          endDate={endDate}
          values={values}
          showMonthLabels={false}
          classForValue={(value) => {
            if (!value) {
              return "color-empty";
            } 
            else if (value.count > 0 && value.count < 10) {
              return `color-scale-1`;
            } 
            else if (value.count > 9 && value.count < 20) {
              return `color-scale-2`;
            } 
            else if (value.count > 19 && value.count < 30) {
              return `color-scale-3`;
            } 
            else {
              return `color-scale-4`;
            }
          }}
          titleForValue={(value) => `${value?.date} : ${value?.count} adet aktivite`}
        />
        <div className="mt-3 d-flex flex-row">
        <div className="square-empty me-1" data-bs-toggle="tooltip" data-bs-placement="bottom" title="0"></div>
        <div className="square-1 me-1" data-bs-toggle="tooltip" data-bs-placement="bottom" title="1-9"></div>
        <div className="square-2 me-1" data-bs-toggle="tooltip" data-bs-placement="bottom" title="10-19"></div>
        <div className="square-3 me-1" data-bs-toggle="tooltip" data-bs-placement="bottom" title="20-29"></div>
        <div className="square-4 me-1" data-bs-toggle="tooltip" data-bs-placement="bottom" title="30-Daha Fazlası"></div>
      </div>
      </div>
    </div>
  );
}

export default MyActivityMap;
