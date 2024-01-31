import React from 'react';
import "../styles/notFound.css"

type Props = {}

function NotFound({ }: Props) {
  return (
    <div className='container d-flex justify-content-center'>
      <div className='row text-center'>
        <div className='col-md-12 col-12 not-found-number '>
          404
        </div>
        <div className='col-md-12 col-12 not-found-text'>
          Sayfa Bulunamadı
        </div>
      </div>
    </div>
  );
}

export default NotFound;
