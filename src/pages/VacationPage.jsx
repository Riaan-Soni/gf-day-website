import React from 'react';

export default function VacationPage() {
  return (
    <div className="page-fade-in">
      <div style={{ textAlign: 'center', marginBottom: '32px' }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 900 }}>
          Our <span className="script-font" style={{ fontSize: '3rem' }}>Vacation</span> ✈️
        </h1>
        <p style={{ color: '#636e72', fontSize: '1.1rem' }}>
          Memories from our time away together...
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '28px' }}>
        <div className="polaroid-card">
          <img src="./assets/sky_day1.jpeg" alt="Vacation Day 1" className="polaroid-img" />
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <h3 className="polaroid-title">Day 1</h3>
          </div>
          <p className="polaroid-caption">"Saw this and thought of you. The sky clearly has good taste."</p>
        </div>
      </div>
    </div>
  );
}
