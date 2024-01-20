import React from 'react'

type Props = {}

interface EventItemProps {
    time: string;
    title: string;
    instructor: string;
  }
  const EventItem: React.FC<EventItemProps> = ({ time, title, instructor }) => (
    <div className="fc-daygrid-event-harness fc-daygrid-event-harness-abs" style={{ visibility: 'hidden', top: '0px', left: '0px', right: '0px' }}>
      <a className="fc-event fc-event-start fc-event-end fc-event-past eventEnded fc-daygrid-event fc-daygrid-dot-event">
        <div className="d-flex flex-column ms-4 my-1">
          <span>{time}</span>
          <span className="text-truncate">{title}</span>
          <span className="text-truncate">{instructor}</span>
        </div>
      </a>
    </div>
  );
export default function CalendarEvent({}: Props) {
    const events: EventItemProps[] = [
        { time: '09:00', title: '.NET & React Fullstack - 1A', instructor: 'Ahmet Çetinkaya' },
        // Diğer etkinlikler buraya eklenebilir...
      ];
    
  return (
    <>
    <div className="fc-daygrid-day-events">
      {events.map((event, index) => (
        <EventItem key={index} {...event} />
      ))}
      <div className="fc-daygrid-day-bottom" style={{ marginTop: '0px' }}>
        <a tabIndex={0} title="+7 daha fazla" aria-expanded={false} aria-controls="" className="fc-daygrid-more-link fc-more-link">
          +7 daha fazla
        </a>
      </div>
    </div>
    </>
  )
}