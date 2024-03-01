import React, { useState, ChangeEvent } from 'react';
import "../../../styles/calendarFilter.css"
interface EgitimAramaProps {}

interface EduStatus {
  eventEnded: boolean;
  eventContinue: boolean;
  eventBuyed: boolean;
  eventNotStarted: boolean;
}

const CalendarFilter: React.FC<EgitimAramaProps> = () => {
  const [searchInput, setSearchInput] = useState<string>('');
  const [selectedEgitmen, setSelectedEgitmen] = useState<any | null>(null); // Burada 'any' yerine uygun bir tip kullanmalısınız
  const [eduStatus, setEduStatus] = useState<EduStatus>({
    eventEnded: false,
    eventContinue: false,
    eventBuyed: false,
    eventNotStarted: false,
  });

  const handleSearchInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value);
  };

  const handleEgitmenSelectChange = (selectedOption: any) => {
    setSelectedEgitmen(selectedOption);
  };

  const handleEduStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setEduStatus((prevStatus) => ({ ...prevStatus, [name]: checked }));
  };

  return (
    <div className="filter-left equal-box">
      <div className="d-flex flex-column">
        <div className="filter-header mb-2">
          <span>Eğitim Arama</span>
        </div>
        <input
          type="text"
          id="search-event"
          className="cal-filter-input"
          placeholder="Eğitim arayın..."
          value={searchInput}
          onChange={handleSearchInputChange}
        />
      </div>
      <div className="d-flex flex-column">
        <div className="filter-header mb-2">
          <span>Eğitmen</span>
        </div>
        
      </div>
      <div className="d-flex flex-column">
        <div className="filter-header mb-2">
          <span>Eğitim Durumu</span>
        </div>
        <div className="edu-status-filter">
          <span>
            <input
              className="form-check-input me-2 checkEventEnded"
              type="checkbox"
              name="eventEnded"
              checked={eduStatus.eventEnded}
              onChange={handleEduStatusChange}
            />
            Bitmiş Dersler
          </span>
          <span>
            <input
              className="form-check-input me-2 checkEventContinue"
              type="checkbox"
              name="eventContinue"
              checked={eduStatus.eventContinue}
              onChange={handleEduStatusChange}
            />
            Devam Eden Dersler
          </span>
          <span>
            <input
              className="form-check-input me-2 checkEventBuyed"
              type="checkbox"
              name="eventBuyed"
              checked={eduStatus.eventBuyed}
              onChange={handleEduStatusChange}
            />
            Satın Alınmış Dersler
          </span>
          <span>
            <input
              className="form-check-input me-2 checkEventNotStarted"
              type="checkbox"
              name="eventNotStarted"
              checked={eduStatus.eventNotStarted}
              onChange={handleEduStatusChange}
            />
            Başlamamış Dersler
          </span>
        </div>
      </div>
    </div>
  );
};

export default CalendarFilter;
