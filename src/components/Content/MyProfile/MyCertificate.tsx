import React from 'react';
import CertificateCard from './CertificateCard';


type Certificate = {
    file: string;
  };
  function MyCertificate() {
    const userCertificates: Certificate[] = [
      {
        file: 'Herkes için Kodlama.jpg',
      },
      {
        file: 'Veri Bilimine İlk Adım.jpg',
      },
    ];
  return (
    <div>
      <div className='shadow mb-3 bg-white rounded p-3'>
        <div className='fw-bold h5'>
          Sertifikalarım
        </div>
        <hr/>
        <div>
        {userCertificates.map((certificate, index) => (
            <CertificateCard key={index} certificate={certificate} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default MyCertificate;