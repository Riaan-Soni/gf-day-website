import React, { useState, useRef, useEffect } from 'react';
import { Music, Volume2, VolumeX, Sparkles, Play, Pause } from 'lucide-react';
import { relationshipData } from '../data/relationshipData';

export default function MusicPlayer({ heartsEnabled, setHeartsEnabled }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.7);
  const audioRef = useRef(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

  const togglePlay = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play()
        .then(() => setIsPlaying(true))
        .catch((err) => {
          console.log("Audio play error, trying fallback stream", err);
          // If local perfect.mp3 is missing, try fallback online romantic stream
          if (relationshipData.bgMusic?.fallbackUrl) {
            audioRef.current.src = relationshipData.bgMusic.fallbackUrl;
            audioRef.current.play().then(() => setIsPlaying(true)).catch(() => {});
          }
        });
    }
  };

  return (
    <div className="music-bar" style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
      <audio 
        ref={audioRef} 
        src={relationshipData.bgMusic?.audioUrl || "/assets/perfect.mp3"} 
        loop
      />

      <button 
        className="btn-secondary"
        style={{ padding: '6px 14px', fontSize: '0.85rem' }}
        onClick={() => setHeartsEnabled(!heartsEnabled)}
      >
        <Sparkles size={16} color={heartsEnabled ? '#ff4757' : '#999'} />
        <span>{heartsEnabled ? 'Hearts ON' : 'Hearts OFF'}</span>
      </button>

      <button 
        className="btn-primary" 
        style={{ padding: '6px 18px', fontSize: '0.85rem' }}
        onClick={togglePlay}
      >
        {isPlaying ? <Pause size={16} /> : <Play size={16} />}
        <span>{isPlaying ? 'Playing: Perfect (Ed Sheeran) 🎶' : 'Play "Perfect" - Ed Sheeran 🎵'}</span>
        {isPlaying ? <Volume2 size={16} /> : <VolumeX size={16} />}
      </button>

      {isPlaying && (
        <input 
          type="range" 
          min="0" 
          max="1" 
          step="0.05" 
          value={volume}
          onChange={(e) => setVolume(parseFloat(e.target.value))}
          style={{ width: '70px', accentColor: '#ff4757', cursor: 'pointer' }}
          title="Volume"
        />
      )}
    </div>
  );
}
