import React, { ChangeEvent, FormEvent, useEffect, useState } from "react";
import "../../styles/personalInformation.css";
import certificateService from "../../services/certificateService";
import { AddCertificateRequest } from "../../models/requests/certificate/addCertificateRequest";
import { GetCertificateResponse } from "../../models/responses/certificate/getCertificateResponse";
import "../../styles/certificate.css";
import { Link } from "react-router-dom";
import { format } from "date-fns";
import { ToastContainer } from "react-toastify";

type Props = {};

export default function CertificateInformation({}: Props) {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [fileList, setFileList] = useState<GetCertificateResponse[]>([]);
  const [selectForDeleteId, setSelectForDeleteId] = useState<string>("");

  useEffect(() => {
    fetchCertificates();
  }, []);
  const fetchCertificates = async () => {
    const studentId = localStorage.getItem("studentId")!;

    const response = await certificateService.GetListByStudent(
      0,
      10,
      studentId
    );
    setFileList(response.data.items);
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setSelectedFile(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const studentId = localStorage.getItem("studentId")!;

    if (!selectedFile) return;

    const addCertificateRequest: AddCertificateRequest = {
      file: selectedFile,
      studentId: studentId,
    };

    try {
      const response = await certificateService.UploadCertificate(
        addCertificateRequest
      );
      console.log(response);

      if (response.status === 200) {
        setFileList((fileList) => [...fileList, response.data]);
      } else {
        console.error("Failed to upload PDF!");
      }
    } catch (error) {
      console.error("Error uploading PDF:", error);
    }
  };

  const handleDelete = async (fileId: string) => {
    const response = await certificateService.delete(fileId);
    setFileList(fileList.filter((i) => i.id !== fileId));
  };

  return (
    <>
      <ToastContainer />
      <div className="row">
        <div className="section-header">
          <span className="header-text">Sertifikalarım</span>
        </div>
        <div className="">
          <div className="row">
            <div className="col-12 tobeto-light-bg ">
              <div className="upload-area">
                <div className="upload-svg">
                  <svg width="78" height="78" viewBox="0 0 78 78" fill="none">
                    <rect
                      x="2"
                      y="2"
                      width="74"
                      height="74"
                      rx="37"
                      fill="#F1E3FF"
                      stroke="#9933FF"
                    ></rect>
                    <path d="M47 45L40 37L33 45" stroke="#9933FF"></path>
                    <path d="M40 37V53" stroke="#9933FF"></path>
                    <path
                      d="M56.261 51C58.0342 50.0324 59.4349 48.5014 60.2422 46.6485C61.0495 44.7956 61.2173 42.7265 60.7191 40.7675C60.221 38.8086 59.0852 37.0715 57.4912 35.8304C55.8971 34.5892 53.9355 33.9148 51.9159 33.9135H49.6252C49.0749 31.7831 48.0493 29.8053 46.6254 28.1288C45.2015 26.4522 43.4164 25.1206 41.4044 24.234C39.3923 23.3474 37.2056 22.9289 35.0086 23.0099C32.8117 23.0909 30.6616 23.6693 28.7202 24.7018C26.7788 25.7342 25.0964 27.1937 23.7997 28.9705C22.5029 30.7474 21.6254 32.7953 21.2333 34.9605C20.8411 37.1256 20.9444 39.3515 21.5355 41.4709C22.1265 43.5904 23.1899 45.5481 24.6457 47.1969"
                      stroke="#9933FF"
                    ></path>
                  </svg>
                </div>
                <div className="cursor-pointer">
                  <label htmlFor="fileInput"></label>
                </div>
                <form onSubmit={handleSubmit}>
                  <input
                    type="file"
                    id="fileInput"
                    accept="application/pdf"
                    onChange={handleFileChange}
                  />

                  <button type="submit">Dosya Yükle</button>
                </form>
              </div>
              <div>
                <div className="row mt-4 mb-2 table-row-feature">
                  <div className="col-md-6 text-muted">Dosya Adı</div>
                  <div className="col-md-2 text-muted">Dosya Türü</div>
                  <div className="col-md-2 text-muted">Tarih</div>
                  <div className="col-md-2 text-muted">işlem</div>
                </div>

                {fileList.map((file, index) => (
                  <div key={index} className="row sub-table-row mt-1 mb-3">
                    <div className="col-md-6 mt-2"> {file.fileName}</div>
                    <div className="col-md-2 mt-2"> {file.fileExtension}</div>
                    <div className="col-md-2 mt-2">
                      {" "}
                      {format(new Date(file.createdDate), "dd/MM/yyyy")}
                    </div>
                    <div className="col-md-2 mt-2">
                      <div className="row">
                        <div className="col-md-6">
                          <a
                            href={file.filePath.split("public")[1]}
                            download
                            style={{ cursor: "pointer" }}
                            title="indirme"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="LightBlue"
                              className="bi bi-file-earmark-fill "
                              viewBox="0 0 16 16"
                            >
                              <path d="M4 0h5.293A1 1 0 0 1 10 .293L13.707 4a1 1 0 0 1 .293.707V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2m5.5 1.5v2a1 1 0 0 0 1 1h2z" />
                            </svg>
                          </a>
                        </div>
                        <div className="col-md-6">
                          <span
                            data-bs-toggle="modal"
                            data-bs-target="#exampleModal"
                            title="silme"
                            onClick={() => {
                              setSelectForDeleteId(file.id);
                            }}
                          >
                            <svg
                              xmlns="https://tobeto.com/trash.svg"
                              width="23"
                              height="23"
                              fill="red"
                              className="ms-1 mt-1"
                            >
                              <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z" />
                              <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z" />
                            </svg>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="modal fade"
        id="exampleModal"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog  modal-dialog-centered ">
          <div className="modal-content">
            <div className="modal-header">
              <img src="https://tobeto.com/_next/static/media/alert.309dc4c0.svg"></img>
              <br />
              <br />
              <h6 className="modal-title">
                <b>Seçilen sertifikayı silmek istediğinize emin misiniz?</b>
              </h6>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body text-muted">
              <p>Bu işlem geri alınamaz.</p>
            </div>
            <div className=" modal-footer modal-footer-feature">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Hayır
              </button>

              <button
                type="button"
                className="btn btn-primary"
                data-bs-dismiss="modal"
                onClick={() => handleDelete(selectForDeleteId)}
              >
                Evet
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
