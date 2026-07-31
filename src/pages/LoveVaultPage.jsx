import React, { useState } from 'react';
import { Heart, Gift, Sparkles, CheckCircle2, RefreshCw } from 'lucide-react';
import confetti from 'canvas-confetti';
import { relationshipData } from '../data/relationshipData';

export default function LoveVaultPage() {
  const [currentReasonIndex, setCurrentReasonIndex] = useState(0);
  const [isLetterOpen, setIsLetterOpen] = useState(false);
  const [redeemedCoupons, setRedeemedCoupons] = useState({});

  const drawNewReason = () => {
    try {
      confetti({
        particleCount: 25,
        spread: 60,
        origin: { y: 0.7 }
      });
    } catch (e) {}

    const nextIndex = (currentReasonIndex + 1) % relationshipData.reasons.length;
    setCurrentReasonIndex(nextIndex);
  };

  const toggleCoupon = (id) => {
    const isRedeemed = !!redeemedCoupons[id];
    if (!isRedeemed) {
      try {
        confetti({
          particleCount: 50,
          spread: 70,
          origin: { y: 0.6 }
        });
      } catch (e) {}
    }
    setRedeemedCoupons({
      ...redeemedCoupons,
      [id]: !isRedeemed
    });
  };

  return (
    <div className="page-fade-in">
      <div style={{ textAlign: 'center', marginBottom: '36px' }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 900 }}>
          Sweet <span className="script-font" style={{ fontSize: '3rem' }}>Love Vault</span> 💌
        </h1>
        <p style={{ color: '#636e72', fontSize: '1.1rem' }}>
          Open heart notes, read my note to you & claim your vouchers!
        </p>
      </div>

      {/* Jar of Reasons Section */}
      <section className="glass-card reasons-jar-card" style={{ marginBottom: '40px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', color: '#ff4757' }}>
          <Gift size={24} />
          <h2 style={{ fontSize: '1.6rem', fontWeight: 800 }}>Reasons Why You're Amazing, Tisha</h2>
        </div>

        <div className="capsule-box">
          "{relationshipData.reasons[currentReasonIndex]}"
        </div>

        <button className="btn-primary" onClick={drawNewReason}>
          <RefreshCw size={18} />
          <span>Draw Another Capsule 💕</span>
        </button>
      </section>

      {/* Wax Envelope Digital Love Letter */}
      <section style={{ marginBottom: '48px' }}>
        <div className="envelope-wrapper" onClick={() => setIsLetterOpen(!isLetterOpen)}>
          <div className="envelope-card">
            <div className="wax-seal">
              <Heart size={32} fill="white" />
            </div>

            <h2 style={{ fontSize: '1.6rem', fontWeight: 800, marginTop: '8px' }}>
              {isLetterOpen ? 'A Note From Riaan To Tisha 💖' : 'Tap Seal to Open Riaan\'s Note 💌'}
            </h2>
            <p style={{ color: '#636e72', fontSize: '0.9rem', marginTop: '4px' }}>
              {relationshipData.loveLetter.date}
            </p>

            {isLetterOpen && (
              <div className="handwritten-paper" onClick={(e) => e.stopPropagation()}>
                <p style={{ fontWeight: 800, color: '#ff4757', marginBottom: '14px', fontSize: '1.2rem' }}>
                  {relationshipData.loveLetter.salutation}
                </p>
                
                <div className="handwritten-text">
                  {relationshipData.loveLetter.paragraphs.map((p, idx) => (
                    <p key={idx} style={{ marginBottom: '16px' }}>
                      {p}
                    </p>
                  ))}
                  <p style={{ textAlign: 'right', marginTop: '20px', color: '#ff4757', fontWeight: 'bold' }}>
                    {relationshipData.loveLetter.closing} <br />
                    {relationshipData.boyfriendName} 💕
                  </p>
                </div>

                <div className="handwritten-ps">
                  P.S. Sorry if my handwriting is messy haha, you know how I am! But I meant every single word. 🥰
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Redeemable Love Coupons */}
      <section>
        <div style={{ textAlign: 'center', marginBottom: '24px' }}>
          <h2 style={{ fontSize: '1.8rem', fontWeight: 800 }}>Tisha's Love Vouchers 🎟️</h2>
          <p style={{ color: '#636e72' }}>Click to redeem any voucher whenever you want!</p>
        </div>

        <div className="coupons-grid">
          {relationshipData.coupons.map((coupon) => {
            const isRedeemed = !!redeemedCoupons[coupon.id];
            return (
              <div 
                key={coupon.id} 
                className={`coupon-card ${isRedeemed ? 'redeemed' : ''}`}
              >
                {isRedeemed && <div className="coupon-stamp">REDEEMED ✓</div>}
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#ff4757', marginBottom: '8px' }}>
                  <Sparkles size={20} />
                  <span style={{ fontSize: '0.8rem', fontWeight: 800, textTransform: 'uppercase', background: '#fff0f3', padding: '2px 8px', borderRadius: '10px' }}>
                    {coupon.badge}
                  </span>
                </div>
                <h3 style={{ fontSize: '1.2rem', fontWeight: 800, marginBottom: '6px' }}>{coupon.title}</h3>
                <p style={{ color: '#636e72', fontSize: '0.9rem', marginBottom: '16px' }}>{coupon.description}</p>
                
                <button 
                  className={isRedeemed ? 'btn-secondary' : 'btn-primary'}
                  style={{ width: '100%', justifyContent: 'center', padding: '8px 16px', fontSize: '0.9rem' }}
                  onClick={() => toggleCoupon(coupon.id)}
                >
                  {isRedeemed ? (
                    <>
                      <CheckCircle2 size={16} />
                      <span>Claimed! (Tap to Undo)</span>
                    </>
                  ) : (
                    <>
                      <Heart size={16} fill="white" />
                      <span>Redeem Voucher</span>
                    </>
                  )}
                </button>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
