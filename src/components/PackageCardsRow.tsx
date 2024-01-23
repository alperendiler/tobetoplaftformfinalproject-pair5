import React from 'react';
import PackageCard from './PackageCard';

type Props = {
};

const PackageCardsRow = ({}: Props) => {
  return (
    <div>
        <div className='row'>
        <PackageCard route='' title="Profilini oluştur"/>
        <PackageCard route='/evalations' title="Kendini değerlendir"/>
        <PackageCard route='/platform-egitimler' title="Öğrenmeye başla"/>
        </div>
    </div>
  )
}

export default PackageCardsRow;