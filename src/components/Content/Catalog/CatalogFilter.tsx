import React, { useState } from 'react';
import "../../../styles/Catalog/catalogFilter.css"
interface FilterOption {
  label: string;
  value: string;
  checked: boolean;
}

interface FilterProps {
  title: string;
  options: FilterOption[];
}

const Filter: React.FC<FilterProps> = ({ title, options }) => {
  const [search, setSearch] = useState<string>('');

  return (
    <>
       
    <div className=" " id={`accordion${title}`}>
      <div className="">
        <h2 className="" id={`heading${title}`}>
          <button className="accordion-button fw-bold " type="button" data-bs-toggle="collapse" data-bs-target={`#collapse${title}`} aria-expanded="true" aria-controls={`collapse${title}`}>
            <div className="title w-100">
              <span>{title}</span>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 7.5L10 12.5L15 7.5" stroke="#828282" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
              </svg>
            </div>
          </button>
        </h2>
        <div id={`collapse${title}`} className="accordion-collapse collapse" aria-labelledby={`heading${title}`} data-bs-parent={`#accordion${title}`}>
          <div className="accordion-body filter-accordion-body">
            <input 
              type="text"
              className="form-control fw-medium mb-3"
              placeholder="Arama"
              value={search}

              onChange={(e) => setSearch(e.target.value)}
            />
            <ul>
              {options
                .filter((option) => option.label.toLowerCase().includes(search.toLowerCase()))
                .map((option, index) => (
                  <li className="" key={index}>
                    <a>
                      <input
                        className="form-check-input "
                        type="radio"
                        name={title.toLowerCase()}
                        value={option.value}
                        checked={option.checked}
                      />{' '}
                      {option.label}
                    </a>
                  </li>
                ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
    
    </>
  );
};

const Filters: React.FC = () => {
  const filtersData: FilterProps[] = [
    { title: 'Kategori', options: [{ label: 'Tüm Eğitimler', value: '-1', checked: true },{ label: 'Ücretli Eğitimler', value: '-1', checked: true }, { label: 'Ücretsiz Eğitimler', value: '-1', checked: true },] },
    { title: 'Eğitimler', options: [{ label: 'Tüm Eğitimler', value: '-1', checked: true }, /* diğer seçenekler buraya eklenir */] },
    { title: 'Seviye', options: [{ label: 'Tüm Seviyeler', value: '', checked: true }, /* diğer seçenekler buraya eklenir */] },
    { title: 'Konu', options: [{ label: 'Tüm Konular', value: '', checked: true }, /* diğer seçenekler buraya eklenir */] },
    { title: 'Yazılım Dili', options: [{ label: 'Tüm Diller', value: '', checked: true }, /* diğer seçenekler buraya eklenir */] },
    { title: 'Eğitmen', options: [{ label: 'Tüm Eğitmenler', value: 'Tüm Eğitmenler', checked: true }, /* diğer seçenekler buraya eklenir */] },
    { title: 'Durum', options: [{ label: 'Tüm Eğitimler', value: '-1', checked: true }, /* diğer seçenekler buraya eklenir */] },
  ];

  return (
    <div>
      {filtersData.map((filter, index) => (
        <Filter key={index} title={filter.title} options={filter.options} />
      ))}
    </div>
  );
};

export default Filters;
