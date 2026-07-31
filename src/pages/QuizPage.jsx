import React, { useState } from 'react';
import { HelpCircle, Lock, Unlock, CheckCircle, Sparkles, Award, Key } from 'lucide-react';
import confetti from 'canvas-confetti';
import { relationshipData } from '../data/relationshipData';

export default function QuizPage() {
  const [userAnswers, setUserAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);
  const [passcode, setPasscode] = useState('');
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [passError, setPassError] = useState(false);

  const handleSelectOption = (qIdx, optIdx) => {
    setUserAnswers({ ...userAnswers, [qIdx]: optIdx });
  };

  const submitQuiz = () => {
    setShowResults(true);
    try {
      confetti({
        particleCount: 80,
        spread: 100,
        origin: { y: 0.5 }
      });
    } catch (e) {}
  };

  const handleUnlockVault = (e) => {
    e.preventDefault();
    if (passcode.trim().toUpperCase() === relationshipData.secretVault.passcode) {
      setIsUnlocked(true);
      setPassError(false);
      try {
        confetti({
          particleCount: 120,
          spread: 120,
          origin: { y: 0.4 }
        });
      } catch (e) {}
    } else {
      setPassError(true);
    }
  };

  return (
    <div className="page-fade-in">
      <div style={{ textAlign: 'center', marginBottom: '36px' }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 900 }}>
          Relationship <span className="script-font" style={{ fontSize: '3rem' }}>Quiz & Secret Vault</span> 🎁
        </h1>
        <p style={{ color: '#636e72', fontSize: '1.1rem' }}>
          Test how well you know us & unlock the secret Girlfriend Day gift!
        </p>
      </div>

      {/* Mini Quiz Section */}
      <section className="glass-card" style={{ padding: '32px', marginBottom: '40px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#ff4757', marginBottom: '20px' }}>
          <HelpCircle size={26} />
          <h2 style={{ fontSize: '1.6rem', fontWeight: 800 }}>How Well Do You Know Us?</h2>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          {relationshipData.quiz.map((q, qIdx) => (
            <div key={qIdx} style={{ background: 'white', padding: '20px', borderRadius: '16px', border: '1px solid #ffccd5' }}>
              <h3 style={{ fontSize: '1.15rem', fontWeight: 800, marginBottom: '14px', color: '#2d3436' }}>
                {qIdx + 1}. {q.question}
              </h3>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '10px' }}>
                {q.options.map((opt, optIdx) => {
                  const isSelected = userAnswers[qIdx] === optIdx;
                  return (
                    <button
                      key={optIdx}
                      style={{
                        padding: '12px 18px',
                        borderRadius: '12px',
                        border: isSelected ? '2px solid #ff4757' : '1px solid #e2e8f0',
                        background: isSelected ? '#fff0f3' : '#f8fafc',
                        color: isSelected ? '#ff4757' : '#475569',
                        fontWeight: isSelected ? '700' : '600',
                        textAlign: 'left',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justify: 'space-between'
                      }}
                      onClick={() => handleSelectOption(qIdx, optIdx)}
                    >
                      <span>{opt}</span>
                      {isSelected && <CheckCircle size={18} color="#ff4757" />}
                    </button>
                  );
                })}
              </div>

              {showResults && (
                <div style={{ marginTop: '12px', padding: '10px 14px', borderRadius: '10px', background: '#f0fdf4', color: '#166534', fontSize: '0.9rem', fontWeight: '600' }}>
                  ✨ {q.explanation}
                </div>
              )}
            </div>
          ))}
        </div>

        <div style={{ marginTop: '24px', textAlign: 'center' }}>
          {!showResults ? (
            <button className="btn-primary" onClick={submitQuiz}>
              <Sparkles size={18} />
              <span>Submit Quiz Answers</span>
            </button>
          ) : (
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: '#22c55e', fontWeight: 800, fontSize: '1.2rem' }}>
              <Award size={24} />
              <span>Score: 100/100! You are the absolute best! 💕</span>
            </div>
          )}
        </div>
      </section>

      {/* Secret Passcode Vault */}
      <section className="glass-card" style={{ padding: '36px', textAlign: 'center' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', color: '#a855f7', marginBottom: '16px' }}>
          {isUnlocked ? <Unlock size={32} /> : <Lock size={32} />}
          <h2 style={{ fontSize: '1.8rem', fontWeight: 800 }}>Secret Girlfriend Day Gift Vault</h2>
        </div>

        {!isUnlocked ? (
          <form onSubmit={handleUnlockVault} style={{ maxWdith: '400px', margin: '0 auto' }}>
            <p style={{ color: '#636e72', marginBottom: '16px' }}>
              Enter the secret passcode to reveal your Girlfriend Day gift!
            </p>
            <p style={{ fontSize: '0.85rem', color: '#a855f7', fontWeight: '700', marginBottom: '14px' }}>
              {relationshipData.secretVault.passcodeHint}
            </p>

            <div style={{ display: 'flex', gap: '10px', justifyContent: 'center', maxWidth: '360px', margin: '0 auto 12px auto' }}>
              <input 
                type="text"
                placeholder="Enter passcode..."
                value={passcode}
                onChange={(e) => setPasscode(e.target.value)}
                style={{ padding: '10px 16px', borderRadius: '50px', border: '2px solid #e056fd', outline: 'none', textAlign: 'center', fontWeight: '800', letterSpacing: '2px', textTransform: 'uppercase' }}
              />
              <button type="submit" className="btn-primary">
                <Key size={18} />
                <span>Unlock</span>
              </button>
            </div>

            {passError && (
              <p style={{ color: '#ef4444', fontSize: '0.85rem', fontWeight: 700 }}>
                Oops! Incorrect passcode. Try typing "LOVE"! 💕
              </p>
            )}
          </form>
        ) : (
          <div style={{ background: 'linear-gradient(135deg, #f3e8ff, #fff0f3)', padding: '28px', borderRadius: '20px', border: '2px dashed #a855f7' }}>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#a855f7', marginBottom: '8px' }}>
              {relationshipData.secretVault.secretTitle}
            </h3>
            <p style={{ color: '#4b5563', fontSize: '1.05rem', lineHeight: '1.6', marginBottom: '16px' }}>
              {relationshipData.secretVault.secretMessage}
            </p>
            <div style={{ background: 'white', display: 'inline-block', padding: '10px 24px', borderRadius: '50px', fontWeight: 900, color: '#ff4757', border: '2px solid #ff4757', letterSpacing: '1px' }}>
              VOUCHER CODE: {relationshipData.secretVault.giftCode}
            </div>
          </div>
        )}
      </section>
    </div>
  );
}
