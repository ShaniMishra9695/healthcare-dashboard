import React from 'react';
import anatomyData from '../../data/anatomyData';
import './AnatomySection.css';

function AnatomySection() {
  return (
    <section className="anatomy-section">
      <img src="https://images.vexels.com/media/users/3/141930/isolated/preview/2ed42771cb75bb544a24633f91e33e16-muscular-system-anatomy-human-body.png" alt="Human Anatomy" className="anatomy-image" />
      <div className="anatomy-indicators">
        {anatomyData.map((item, index) => (
          <div key={index} className={`indicator ${item.status.toLowerCase()}`}>
            {item.label}
          </div>
        ))}
      </div>
    </section>
  );
}

export default AnatomySection;