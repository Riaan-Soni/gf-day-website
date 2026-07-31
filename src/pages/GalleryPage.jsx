import React, { useState } from 'react';
import { Camera, X, Plus, Heart, Tag } from 'lucide-react';
import { relationshipData } from '../data/relationshipData';

export default function GalleryPage() {
  const [galleryList, setGalleryList] = useState(relationshipData.gallery);
  const [activePhoto, setActivePhoto] = useState(null);
  const [showAddModal, setShowAddModal] = useState(false);
  const [newTitle, setNewTitle] = useState('');
  const [newCaption, setNewCaption] = useState('');
  const [newImage, setNewImage] = useState('');

  const handleAddMemory = (e) => {
    e.preventDefault();
    if (!newTitle || !newCaption) return;

    const newItem = {
      id: Date.now(),
      title: newTitle,
      caption: newCaption,
      image: newImage || '/assets/hero_art.jpg',
      date: 'Just Now',
      tags: ['Custom', 'Love']
    };

    setGalleryList([newItem, ...galleryList]);
    setNewTitle('');
    setNewCaption('');
    setNewImage('');
    setShowAddModal(false);
  };

  return (
    <div className="page-fade-in">
      <div style={{ textAlign: 'center', marginBottom: '32px' }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 900 }}>
          Polaroid <span className="script-font" style={{ fontSize: '3rem' }}>Memory Vault</span> 📸
        </h1>
        <p style={{ color: '#636e72', fontSize: '1.1rem' }}>
          Snaps of our sweetest smiles and favorite moments together.
        </p>

        <button 
          className="btn-primary" 
          style={{ marginTop: '16px' }}
          onClick={() => setShowAddModal(true)}
        >
          <Plus size={18} />
          <span>Add Custom Memory</span>
        </button>
      </div>

      {/* Gallery Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '28px' }}>
        {galleryList.map((item) => (
          <div 
            key={item.id} 
            className="polaroid-card"
            style={{ cursor: 'pointer' }}
            onClick={() => setActivePhoto(item)}
          >
            <img src={item.image} alt={item.title} className="polaroid-img" />
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <h3 className="polaroid-title">{item.title}</h3>
              <span style={{ fontSize: '0.8rem', color: '#ff4757', fontWeight: 700 }}>
                {item.date}
              </span>
            </div>
            <p className="polaroid-caption">"{item.caption}"</p>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {activePhoto && (
        <div className="lightbox-overlay" onClick={() => setActivePhoto(null)}>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button 
              style={{ position: 'absolute', top: '16px', right: '16px', border: 'none', background: '#fff0f3', width: '36px', height: '36px', borderRadius: '50%', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#ff4757' }}
              onClick={() => setActivePhoto(null)}
            >
              <X size={20} />
            </button>
            <img src={activePhoto.image} alt={activePhoto.title} className="lightbox-img" />
            <div style={{ marginTop: '16px', textAlign: 'center' }}>
              <h2 style={{ fontSize: '1.5rem', fontWeight: 800 }}>{activePhoto.title}</h2>
              <p className="script-font" style={{ fontSize: '2rem', color: '#ff4757' }}>
                "{activePhoto.caption}"
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Add Memory Modal */}
      {showAddModal && (
        <div className="lightbox-overlay" onClick={() => setShowAddModal(false)}>
          <div className="lightbox-content" style={{ maxWidth: '500px' }} onClick={(e) => e.stopPropagation()}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
              <h2 style={{ fontSize: '1.4rem', fontWeight: 800 }}>Add a Sweet Memory 💕</h2>
              <button 
                style={{ border: 'none', background: 'transparent', cursor: 'pointer' }}
                onClick={() => setShowAddModal(false)}
              >
                <X size={20} />
              </button>
            </div>

            <form onSubmit={handleAddMemory} style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              <div>
                <label style={{ fontSize: '0.85rem', fontWeight: 700, display: 'block', marginBottom: '4px' }}>Memory Title</label>
                <input 
                  type="text"
                  placeholder="e.g., Ice Cream Date"
                  value={newTitle}
                  onChange={(e) => setNewTitle(e.target.value)}
                  style={{ width: '100%', padding: '10px 14px', borderRadius: '12px', border: '1px solid #ffccd5', outline: 'none' }}
                  required
                />
              </div>

              <div>
                <label style={{ fontSize: '0.85rem', fontWeight: 700, display: 'block', marginBottom: '4px' }}>Cute Caption</label>
                <input 
                  type="text"
                  placeholder="e.g., You got chocolate on your nose!"
                  value={newCaption}
                  onChange={(e) => setNewCaption(e.target.value)}
                  style={{ width: '100%', padding: '10px 14px', borderRadius: '12px', border: '1px solid #ffccd5', outline: 'none' }}
                  required
                />
              </div>

              <div>
                <label style={{ fontSize: '0.85rem', fontWeight: 700, display: 'block', marginBottom: '4px' }}>Image URL / Asset Path</label>
                <input 
                  type="text"
                  placeholder="e.g., /assets/beach_sunset.jpg"
                  value={newImage}
                  onChange={(e) => setNewImage(e.target.value)}
                  style={{ width: '100%', padding: '10px 14px', borderRadius: '12px', border: '1px solid #ffccd5', outline: 'none' }}
                />
              </div>

              <button type="submit" className="btn-primary" style={{ width: '100%', marginTop: '10px', justifyContent: 'center' }}>
                <Heart size={18} fill="white" />
                <span>Save Memory</span>
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
