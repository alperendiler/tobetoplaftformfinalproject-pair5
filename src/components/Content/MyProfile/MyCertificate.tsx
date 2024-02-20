import React, { useEffect, useState } from 'react';
import CertificateCard from './CertificateCard';
import { GetCertificateResponse } from '../../../models/responses/certificate/getCertificateResponse';
import certificateService from '../../../services/certificateService';


type Certificate = {
    file: string;
  };
  function MyCertificate() {
   
    const [fileList, setFileList] = useState<GetCertificateResponse[]>([]);
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
  
  return (
    <div>
      <div className='shadow mb-3 bg-white rounded p-3'>
        <div className='fw-bold h5'>
          Sertifikalarım
        </div>
        <hr/>
        <div>
        {fileList.map((certificate, index) => (
            <CertificateCard key={index} certificate={certificate} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default MyCertificate;