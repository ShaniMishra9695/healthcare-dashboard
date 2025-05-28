import React from 'react';
import scheduleData from '../../data/scheduleData';
import SimpleAppointmentCard from './SimpleAppointmentCard';
import './UpcomingSchedule.css';

function UpcomingSchedule() {
  return (
    <section className="upcoming-schedule">
      <h2>The Upcoming Schedule</h2>
      {scheduleData.map((block, index) => (
        <div key={index} className="schedule-day">
          <h3>On {block.day}</h3>
          {block.appointments.map((appt, i) => (
            <SimpleAppointmentCard key={i} title={appt.title} time={appt.time} />
          ))}
        </div>
      ))}
    </section>
  );
}

export default UpcomingSchedule;