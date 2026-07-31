import React, { useState } from 'react';
import Navbar from './components/Navbar';
import FloatingHearts from './components/FloatingHearts';
import MusicPlayer from './components/MusicPlayer';
import HomePage from './pages/HomePage';
import OurStoryPage from './pages/OurStoryPage';
import GalleryPage from './pages/GalleryPage';
import LoveVaultPage from './pages/LoveVaultPage';
import QuizPage from './pages/QuizPage';

export default function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [heartsEnabled, setHeartsEnabled] = useState(true);

  return (
    <div>
      <FloatingHearts enabled={heartsEnabled} />

      <div className="app-container">
        <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />

        <main>
          {activeTab === 'home' && <HomePage setActiveTab={setActiveTab} />}
          {activeTab === 'story' && <OurStoryPage />}
          {activeTab === 'gallery' && <GalleryPage />}
          {activeTab === 'vault' && <LoveVaultPage />}
          {activeTab === 'quiz' && <QuizPage />}
        </main>

        <footer style={{ marginTop: '60px', textAlign: 'center', color: '#888', fontSize: '0.9rem' }}>
          Made with infinite ❤️ by Riaan for Tisha • National Girlfriend Day 💕
        </footer>
      </div>

      <MusicPlayer heartsEnabled={heartsEnabled} setHeartsEnabled={setHeartsEnabled} />
    </div>
  );
}
