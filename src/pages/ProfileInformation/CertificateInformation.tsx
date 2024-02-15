import React, { ChangeEvent, FormEvent, useEffect, useState } from "react";
import "../../styles/personalInformation.css";
import axios from "axios";
import certificateService from "../../services/certificateService";
import { add } from "date-fns";
import { AddCertificateRequest } from "../../models/requests/certificate/addCertificateRequest";
import { GetCertificateResponse } from "../../models/responses/certificate/getCertificateResponse";


type Props = {};

export default function CertificateInformation({}: Props) {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [fileList, setFileList] = useState<GetCertificateResponse[]>([]);

  useEffect(() => {
    fetchCertificates();
  }, []);
  const fetchCertificates = async () => {
    const studentId = localStorage.getItem("studentId")!;

    const response = await certificateService.GetListByStudent(0, 10, studentId);
    console.log(response);
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

    const addCertificateRequest:AddCertificateRequest = {
      file : selectedFile,
      studentId : studentId
    }

    try {
      const response = await certificateService.UploadCertificate(addCertificateRequest);
      console.log(response);

      if (response.status === 200) {
        setFileList((fileList) => [...fileList, response.data])
      } else {
        console.error("Failed to upload PDF!");
      }
    } catch (error) {
      console.error("Error uploading PDF:", error);
    }
  };

  return (
    <>
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
                  <span>Dosya Yükle</span>
                  <button type="submit">Kaydet</button>
                </form>
              </div>
              <div>
                {fileList.map((file,index) => (
                  <div key={index}>
                    <p>Name: {file.fileName}</p>
                    <p>Ext: {file.fileExtension}</p>
                    <p>Path: {file.filePath}</p>
                    <p>Id: {file.id}</p>
                  </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
