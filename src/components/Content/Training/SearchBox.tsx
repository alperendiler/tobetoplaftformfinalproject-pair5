import React, { useState } from 'react'

type Props = {
    onSearch: (value: string) => void;

}

export default function SearchBox({onSearch }: Props) {
    const [searchValue, setSearchValue] = useState('');

    const handleSearch = () => {
      onSearch(searchValue);
    };
  return (
    <div>
        <div className="col-md-5 col-12 mb-4">
      <div className="searchBox search-box">
        <input
          className="w-100"
          type="text"
          id="search"
          placeholder="Arama"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
        <button onClick={handleSearch}>
          <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'end' }}>
            <svg width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* SVG içeriği */}
            </svg>
          </div>
        </button>
      </div>
    </div>
    </div>
  )
}