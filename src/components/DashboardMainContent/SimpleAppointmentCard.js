import React from 'react';
import './SimpleAppointmentCard.css';

function SimpleAppointmentCard({ title, time }) {
  return (
    <div className="simple-appointment-card">
      <h4>{title}</h4>
      <p>{time}</p>
    </div>
  );
}

export default SimpleAppointmentCard;