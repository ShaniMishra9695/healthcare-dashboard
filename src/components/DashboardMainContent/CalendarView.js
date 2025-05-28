import React from 'react';
import calendarData from '../../data/calendarData';
import './CalendarView.css';

function CalendarView() {
  return (
    <section className="calendar-view">
      <h2>{calendarData.month}</h2>
      <div className="calendar-grid">
        {calendarData.appointments.map((appt, index) => (
          <div key={index} className="calendar-day">
            <strong>{appt.date}</strong>
            <ul>
              {appt.times.map((time, i) => (
                <li key={i}>{time}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="detailed-appointments">
        {calendarData.detailedAppointments.map((appt, index) => (
          <div key={index} className="appointment-card">
            <h4>{appt.title}</h4>
            <p>{appt.doctor}</p>
            <p>{appt.time}</p>
            <p>{appt.date}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default CalendarView;