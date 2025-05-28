import React from 'react';
import healthCards from '../../data/healthCards';
import './HealthStatusCards.css';

function HealthStatusCards() {
  return (
    <section className="health-status-cards">
      {healthCards.map((card, index) => (
        <div key={index} className="status-card">
          <h3>{card.title}</h3>
          <p>Status: <span className={card.status.toLowerCase()}>{card.status}</span></p>
          <p>Date: {card.date}</p>
        </div>
      ))}
    </section>
  );
}

export default HealthStatusCards;