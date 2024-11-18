import React from 'react';
import './Performances.css';
import performances from '../../assets/performancesData.js';

const Performances = () => {
  return (
    <div id="performances" className="performances">
      <div className="title-box">
        <h1>Upcoming Performances</h1>
      </div>
      <div className="performances-container">
        {performances.map((performance, index) => (
          <div key={index} className="performance-card">
            <div className="performance-date">
            <span className="month">{performance.date.split(' ')[1]}</span>
              <span className="day">{performance.date.split(' ')[0]}</span>
              
            </div>
            <div className="performance-details">
              <h2 className="event-name">{performance.event}</h2>
              <p className="event-time">{performance.details}</p>
              <p className="event-location">{performance.location}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Performances;
