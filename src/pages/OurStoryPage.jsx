import React, { useState } from 'react';
import { Sparkles, Heart, MapPin, Gift, Star, Calendar } from 'lucide-react';
import { relationshipData } from '../data/relationshipData';

export default function OurStoryPage() {
  const [selectedTag, setSelectedTag] = useState('All');

  const iconMap = {
    Sparkles: Sparkles,
    Heart: Heart,
    MapPin: MapPin,
    Gift: Gift
  };

  const tags = ['All', 'Beginning', 'Memorable', 'Sweet', 'Celebration'];

  const filteredMilestones = selectedTag === 'All'
    ? relationshipData.milestones
    : relationshipData.milestones.filter(m => m.tag === selectedTag);

  return (
    <div className="page-fade-in">
      <div style={{ textAlign: 'center', marginBottom: '36px' }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 900, color: '#2d3436' }}>
          Our Story & <span className="script-font" style={{ fontSize: '3rem' }}>Milestones</span> 💕
        </h1>
        <p style={{ color: '#636e72', fontSize: '1.1rem', maxWidth: '600px', margin: '8px auto 0 auto' }}>
          Every chapter of our story is filled with love, laughter, and unforgettable moments.
        </p>

        {/* Tag Filters */}
        <div style={{ display: 'flex', gap: '8px', justifyContent: 'center', flexWrap: 'wrap', marginTop: '20px' }}>
          {tags.map((tag) => (
            <button
              key={tag}
              className={`btn-secondary ${selectedTag === tag ? 'btn-primary' : ''}`}
              style={{ padding: '6px 18px', fontSize: '0.85rem' }}
              onClick={() => setSelectedTag(tag)}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>

      <div className="timeline-list">
        {filteredMilestones.map((item) => {
          const IconComponent = iconMap[item.icon] || Heart;
          return (
            <div key={item.id} className="timeline-item">
              <div className="timeline-badge">
                <IconComponent size={22} />
              </div>

              <div className="timeline-content">
                <div className="polaroid-card">
                  {item.photo && (
                    <img src={item.photo} alt={item.title} className="polaroid-img" />
                  )}
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
                    <span style={{ fontSize: '0.8rem', fontWeight: 800, color: '#ff4757', textTransform: 'uppercase' }}>
                      {item.tag}
                    </span>
                    <span style={{ fontSize: '0.85rem', color: '#636e72', display: 'flex', alignItems: 'center', gap: '4px' }}>
                      <Calendar size={14} />
                      {item.date}
                    </span>
                  </div>
                  <h3 className="polaroid-title">{item.title}</h3>
                  <p style={{ color: '#4a5568', fontSize: '0.95rem', marginTop: '8px', lineHeight: '1.5' }}>
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
