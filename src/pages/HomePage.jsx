import React, { useState, useEffect } from 'react';
import { Heart, Sparkles, Calendar, Clock, ArrowRight, Gift, Smile } from 'lucide-react';
import { relationshipData } from '../data/relationshipData';

export default function HomePage({ setActiveTab }) {
  const [timeTogether, setTimeTogether] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [activeCard, setActiveCard] = useState(null);

  // Live timer calculation
  useEffect(() => {
    const startDate = new Date(relationshipData.relationshipStartDate);

    const updateTimer = () => {
      const now = new Date();
      const diff = now - startDate;

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / 1000 / 60) % 60);
      const seconds = Math.floor((diff / 1000) % 60);

      setTimeTogether({ days, hours, minutes, seconds });
    };

    updateTimer();
    const interval = setInterval(updateTimer, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="page-fade-in">
      {/* Hero Banner */}
      <section className="glass-card hero-container">
        <div>
          <div className="hero-badge">
            <Sparkles size={16} />
            <span>National Girlfriend Day Special</span>
          </div>

          <h1 className="hero-title">
            Happy Girlfriend Day, <br />
            <span>{relationshipData.girlfriendName}! 💕</span>
          </h1>

          <p className="hero-description">
            "{relationshipData.heroQuote}"
          </p>

          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <button className="btn-primary" onClick={() => setActiveTab('vault')}>
              <Heart size={18} fill="white" />
              <span>Open Love Vault</span>
            </button>
            <button className="btn-secondary" onClick={() => setActiveTab('story')}>
              <span>Read Our Story</span>
              <ArrowRight size={18} />
            </button>
          </div>
        </div>

        <div className="hero-image-wrapper">
          <img 
            src={relationshipData.gallery[0]?.image || "/assets/hero_art.jpg"} 
            alt="Hero Romantic Art" 
          />
        </div>
      </section>

      {/* Live Love Counter */}
      <section className="glass-card counter-card">
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', color: '#ff4757' }}>
          <Clock size={24} />
          <h2 style={{ fontSize: '1.6rem', fontWeight: 800 }}>We've Been Together For</h2>
        </div>

        <div className="counter-grid">
          <div className="counter-box">
            <div className="counter-number">{timeTogether.days}</div>
            <div className="counter-label">Days</div>
          </div>
          <div className="counter-box">
            <div className="counter-number">{timeTogether.hours}</div>
            <div className="counter-label">Hours</div>
          </div>
          <div className="counter-box">
            <div className="counter-number">{timeTogether.minutes}</div>
            <div className="counter-label">Minutes</div>
          </div>
          <div className="counter-box">
            <div className="counter-number">{timeTogether.seconds}</div>
            <div className="counter-label">Seconds</div>
          </div>
        </div>

        <p style={{ marginTop: '16px', fontSize: '0.95rem', color: '#636e72', fontStyle: 'italic' }}>
          ...and every single second has been better than the last! 🥹
        </p>
      </section>

      {/* Quick Interactive Highlight Cards */}
      <section style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
        <div 
          className="glass-card" 
          style={{ padding: '24px', cursor: 'pointer', textAlign: 'center' }}
          onClick={() => setActiveTab('story')}
        >
          <div style={{ background: '#fff0f3', width: '56px', height: '56px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px auto', color: '#ff4757' }}>
            <Calendar size={28} />
          </div>
          <h3 style={{ fontSize: '1.25rem', fontWeight: 800, marginBottom: '8px' }}>Our Journey</h3>
          <p style={{ color: '#636e72', fontSize: '0.95rem' }}>
            Walk down memory lane and relive our favorite milestones together.
          </p>
        </div>

        <div 
          className="glass-card" 
          style={{ padding: '24px', cursor: 'pointer', textAlign: 'center' }}
          onClick={() => setActiveTab('gallery')}
        >
          <div style={{ background: '#f3e8ff', width: '56px', height: '56px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px auto', color: '#a855f7' }}>
            <Smile size={28} />
          </div>
          <h3 style={{ fontSize: '1.25rem', fontWeight: 800, marginBottom: '8px' }}>Polaroid Gallery</h3>
          <p style={{ color: '#636e72', fontSize: '0.95rem' }}>
            A cute collection of our sweet photos, warm giggles & sunsets.
          </p>
        </div>

        <div 
          className="glass-card" 
          style={{ padding: '24px', cursor: 'pointer', textAlign: 'center' }}
          onClick={() => setActiveTab('quiz')}
        >
          <div style={{ background: '#fff9db', width: '56px', height: '56px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px auto', color: '#fab005' }}>
            <Gift size={28} />
          </div>
          <h3 style={{ fontSize: '1.25rem', fontWeight: 800, marginBottom: '8px' }}>Surprise Quiz & Gift</h3>
          <p style={{ color: '#636e72', fontSize: '0.95rem' }}>
            Test how well you know us & unlock the secret Girlfriend Day gift!
          </p>
        </div>
      </section>
    </div>
  );
}
