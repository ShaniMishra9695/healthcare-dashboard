import React from 'react';
import './ActivityFeed.css';

function ActivityFeed() {
  return (
    <section className="activity-feed">
      <h2>Activity</h2>
      <p>3 appointments this week</p>
      <div className="bar-chart">
        <div className="bar" style={{ height: '40%' }}></div>
        <div className="bar" style={{ height: '60%' }}></div>
        <div className="bar" style={{ height: '30%' }}></div>
        <div className="bar" style={{ height: '70%' }}></div>
        <div className="bar" style={{ height: '90%' }}></div>
        <div className="bar" style={{ height: '20%' }}></div>
        <div className="bar" style={{ height: '50%' }}></div>
      </div>
    </section>
  );
}

export default ActivityFeed;