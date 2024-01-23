import React, { useState } from 'react'
import SearchBox from './SearchBox';
import SelectBox from './SelectBox';

type Props = {}
interface SearchBoxProps {
  onSearch: (value: string) => void;
}
export default function TrainingFilter({}: Props) {
  const [selectedOrganization, setSelectedOrganization] = useState('');
  const [selectedSort, setSelectedSort] = useState('name-asc');

  const handleOrganizationChange = (value: string) => {
    setSelectedOrganization(value);
  };

  const handleSortChange = (value: string) => {
    setSelectedSort(value);
  };

  const handleSearch = (searchValue: string) => {
    // Burada arama işlemlerini gerçekleştir
    console.log('Arama: ', searchValue);
  };
  return (
    <>
      <div className="filter-section mt-3">
      <div className="row">
        <SearchBox onSearch={handleSearch} />
        <SelectBox
          id="7"
          placeholder="Kurum Seçiniz"
          options={/* Kurum seçenekleri */["asdasda","asdasd"]}
          selectedValue={selectedOrganization}
          onSelectChange={handleOrganizationChange}
        />
        <SelectBox
          id="8"
          placeholder="Adına Göre (A-Z)"
          options={/* Sıralama seçenekleri */ []}
          selectedValue={selectedSort}
          onSelectChange={handleSortChange}
        />
        <div className="col-md-1 col-12 mb-4 d-flex justify-content-end"></div>
      </div>
    </div>
    </>
  )
}

