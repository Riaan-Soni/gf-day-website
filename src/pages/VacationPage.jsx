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

      <div style={{ marginTop: '40px', padding: '24px', background: 'rgba(255,255,255,0.7)', borderRadius: '16px', border: '1px solid #ffccd5', boxShadow: '0 10px 25px rgba(255,107,129,0.1)' }}>
        <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#4a4a4a', fontStyle: 'italic', textAlign: 'center' }}>
          "Framed by the quiet edge of a window, the sky unfolds in a vast expanse of cool, muted violet and stormy grey. Soft clouds drift lazily above the horizon, blending the sky seamlessly into the hazy silhouette of distant city buildings. Below, lush green treetops stretch across the view, their leaves darkened by moisture, while patches of damp earth reflect the gentle light of a overcast day. The scene carries a peaceful, introspective stillness—a moment where nature and city meet under a calm, twilight canvas."
        </p>
      </div>
    </div>
  );
}
