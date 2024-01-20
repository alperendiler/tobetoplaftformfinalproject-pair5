import React, { useState } from 'react';

interface CalendarProps {
  year: number;
  month: number;
}

const CalendarList: React.FC<CalendarProps> = ({ year, month }) => {
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const firstDayOfMonth = new Date(year, month, 1).getDay();

  const [selectedDate, setSelectedDate] = useState<number | null>(null);

  const handleDateClick = (day: number) => {
    setSelectedDate(day);
  };

  const renderDays = () => {
    const days = [];

    for (let i = 1; i <= daysInMonth; i++) {
      const isCurrentDay = i === selectedDate;
      days.push(
        <div
          key={i}
          onClick={() => handleDateClick(i)}
          style={{
            cursor: 'pointer',
            padding: '10px',
            border: '1px solid #ccc',
            backgroundColor: isCurrentDay ? '#aaf' : 'transparent',
          }}
        >
          {i}
        </div>
      );
    }

    return days;
  };

  return (
    <div>
      <h2>{`${year}-${month + 1}`}</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)' }}>
        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
          <div key={day} style={{ textAlign: 'center', padding: '10px' }}>
            {day}
          </div>
        ))}
      </div>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: `repeat(7, 1fr)`,
          gap: '5px',
        }}
      >
        {[...Array(firstDayOfMonth).fill(null), ...renderDays()]}
      </div>
    </div>
  );
};


export default CalendarList;
