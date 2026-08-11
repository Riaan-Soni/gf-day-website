import React from 'react';
import { Heart, BookOpen, Image, Gift, HelpCircle, Plane } from 'lucide-react';

export default function Navbar({ activeTab, setActiveTab }) {
  const navItems = [
    { id: 'home', label: 'Home', icon: Heart },
    { id: 'story', label: 'Our Story', icon: BookOpen },
    { id: 'gallery', label: 'Gallery', icon: Image },
    { id: 'vault', label: 'Love Vault', icon: Gift },
    { id: 'vacation', label: 'Vacation', icon: Plane },
    { id: 'quiz', label: 'Quiz & Secret', icon: HelpCircle }
  ];

  return (
    <nav className="navbar">
      <div className="nav-brand" onClick={() => setActiveTab('home')}>
        <Heart className="w-6 h-6 text-pink-500 fill-current" size={24} color="#ff4757" fill="#ff4757" />
        <span>GF Day Special 💕</span>
      </div>

      <div className="nav-links">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;
          return (
            <button
              key={item.id}
              className={`nav-btn ${isActive ? 'active' : ''}`}
              onClick={() => setActiveTab(item.id)}
            >
              <Icon size={18} />
              <span>{item.label}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}
