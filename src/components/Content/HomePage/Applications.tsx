import React, { useEffect, useState } from "react";
import applicationService from "../../../services/applicationService";
import { GetAllApplicationResponse } from "../../../models/responses/application/getAllAplicationResponse";

type Props = {};

export default function Applications({}: Props) {
  const [applications, setApplications] = useState<GetAllApplicationResponse[]>(
    []
  );

  useEffect(() => {
    fetchApplications();
  }, []);
  const fetchApplications = async () => {
    const studentId = localStorage.getItem("studentId");
    const response = await applicationService.getListByStudentId(
      0,
      1,
      studentId
    );
    setApplications(response.data.items);
  };

  return (
    <>
      {applications && applications.length > 0 ? (
        applications.map((application) => (
          <div className="col-md-6 col-12 mt-2" key={application.id}>
            <div
              className={`status-card ${
                application.isAccepted ? "status_accepted" : ""
              }`}
            >
              <span className="form_name fw-bold">{application.title}</span>
              <span className="form_status"></span>
              <span className="pull_back pt-2"></span>
              <div>
                <div>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="green"
                      className="bi bi-check"
                      viewBox="0 0 16 16"
                    >
                      <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425z" />
                    </svg>{" "}
                    <span className="form_date">{application.description}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))
      ) : (
        <div>
          <p>henüz başvurunuz yok</p>
        </div>
      )}
    </>
  );
}
