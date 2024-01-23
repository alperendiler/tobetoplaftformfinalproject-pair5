import React from 'react';
import PackageCard from './PackageCard';

type Props = {
};

const PackageCardsRow = ({}: Props) => {
  return (
    <div>
        <div className='row'>
        <PackageCard route='/personal-information' title="Profilini oluştur"/>
        <PackageCard route='/evaluations' title="Kendini değerlendir"/>
        <PackageCard route='/platform-egitimler' title="Öğrenmeye başla"/>
        </div>
    </div>
  )
}

export default PackageCardsRow;