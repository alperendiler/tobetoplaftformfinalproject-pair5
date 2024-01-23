import React, { useState, useEffect } from "react";
import CalendarFilter from "../components/Content/Calendar/CalendarFilter";
import CalendarList from "../components/Content/Calendar/CalendarList";
import { DateSelectArg } from "@fullcalendar/core/index.js";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import timeGridPlugin from "@fullcalendar/timegrid";
import trLocale from "@fullcalendar/core/locales/tr";
import "../styles/calendar.css";
type Props = {};

type Event = {
  time: string;
  className: string;
  instructor: string;
};

export default function Calendar({}: Props) {
  const [events, setEvents] = useState<
    {
      time: string;
      className: string;
      instructor: string;
    }[]
  >([]);

  const testEvents = [
    {
      time: "09.00",
      className: "iş analisti  ",
      instructor: "Alperen Diler",
    },
  ];
  useEffect(() => {
    const fetchData = async () => {
      try {
        setEvents(testEvents);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchData();
  }, []);
  const renderEventContent = () => {
    return (
      <>
        {events && events.length > 0 ? (
          events.map((event, index) => <b>{event.className} </b>)
        ) : (
          <p>Başvurular bulunamadı.</p>
        )}
      </>
    );
  };

  return (
    <>
      <div className="p-0 light-calendar container-fluid">
        <div className="row ">
          <div className="col-lg-3 col-md-4 col-12 mt-3  p-0">
            <CalendarFilter />
          </div>
          <div className="col-lg-9 col-md-8 col-12 mt-3  p-0">
            <div className="calendar-bg equal-box">
              <FullCalendar
                locales={[trLocale]}
                locale="tr"
                plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
                headerToolbar={{
                  left: "today prev,next",
                  center: "title",
                  right: "dayGridMonth,timeGridWeek,timeGridDay",
                }}
                initialView="dayGridMonth"
                editable={true}
                selectable={true}
                selectMirror={true}
                weekends={true}
                events={events}
                eventContent={renderEventContent}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
