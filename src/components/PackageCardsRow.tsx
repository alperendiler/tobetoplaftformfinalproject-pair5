import React from 'react';
import PackageCard from './PackageCard';

type Props = {
};

const PackageCardsRow = ({}: Props) => {
  return (
    <div>
        <div className='row'>
        <PackageCard title="Profilini oluştur"/>
        <PackageCard title="Kendini değerlendir"/>
        <PackageCard title="Öğrenmeye başla"/>
        </div>
    </div>
  )
}

export default PackageCardsRow;