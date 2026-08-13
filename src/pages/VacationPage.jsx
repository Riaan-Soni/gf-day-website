import React, { useState } from 'react';

const vacationData = {
  1: {
    title: "Day 1",
    image: "assets/sky_day1.jpeg",
    caption: "Saw this and thought of you. The sky clearly has good taste.",
    longText: "Framed by the quiet edge of a window, the sky unfolds in a vast expanse of cool, muted violet and stormy grey. Soft clouds drift lazily above the horizon, blending the sky seamlessly into the hazy silhouette of distant city buildings. Below, lush green treetops stretch across the view, their leaves darkened by moisture, while patches of damp earth reflect the gentle light of a overcast day. The scene carries a peaceful, introspective stillness—a moment where nature and city meet under a calm, twilight canvas."
  },
  2: {
    title: "Day 2",
    image: "assets/day2.jpg",
    caption: "weird reference but thats us";
    longText: "hey this reminded me of us. now before u ask or say anything ik what ur thinking. \"riaan tf u mean by this i dont get shit\" and tbh ur not wrong its normal. but heres what i think. both are same and around each other and showing that were around each other, together. and the fact that theyre the same bike just diff manifacturing year, that just goes to show that we might not be same on the outside but same on the inside, feeling everything deeply and messy, and real. ofc its not beautfiul always but its us"
  },
  3: {
    title: "Day 3",
    image: "assets/P1.jpg",
    caption: "comfort pro maxxx", 
    longText: "this is just soo nostalgic uk. and tbh, at the time of seeing this, ull find out that im ill rn. so yes as much as i want ur lap, i cant risk infecting u. Just know that ur lap is my max comfort." 
  },
  4: {
    title: "Day 4",
    image: "assets/P2.jpg",
    caption: "blue and black", 
    longText: "the days of us, just sitting, laughing each other u being my baby, aww thats the most beautiful feeling. now ik nowadays stuff hass been hectic but these days, when u go to the out of network part, just take the pillow and imagine me. i want u to know that after everything, we've still a future to build.(also heres what u dont know. u told me u werer gonna wear black so i changed the buttons of my kurta to match ur black saree)" 
  },
  5: {
    title: "Day 5",
    image: "assets/P3.jpg",
    caption: "realising you are tired of me but still knowing u r loved",
    longText: "now tbh idk either why u were making that face but it looks like a woman who has seen the childish side of her man and said \"yeah so i wont be able to take him shopping he'll get the useless stuff first just because i either sent a reel abt it or he is seeing it for the first time\"";
  },
  6: {
    title: "Day 6",
    image: "assets/p4.jpg",
    caption: "my sleepy babyy", 
    longText: "so this was one of the times u slept on vc and istg u looked so cutee. i wanted to come through the screen and hold u until u woke up naturally, no tension no worries, just my baby sleeping w a huge smile on her face and thumb in your mouth"; 

export default function VacationPage() {
  const [selectedDay, setSelectedDay] = useState(1);
  const data = vacationData[selectedDay];

  // Helper to ensure correct path on GitHub Pages
  const getAssetPath = (path) => `${import.meta.env.BASE_URL}${path}`;

  return (
    <div className="page-fade-in">
      <div style={{ textAlign: 'center', marginBottom: '32px' }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 900 }}>
          Our <span className="script-font" style={{ fontSize: '3rem' }}>Vacation</span> ✈️
        </h1>
        <p style={{ color: '#636e72', fontSize: '1.1rem' }}>
          Something to make this vacation worthwhile for us
        </p>
      </div>

      <div style={{ display: 'flex', gap: '32px', flexWrap: 'wrap', alignItems: 'flex-start' }}>
        
        {/* Left Side: Dropdown Menu */}
        <div style={{ flex: '1 1 200px', background: 'rgba(255,255,255,0.8)', padding: '24px', borderRadius: '16px', border: '1px solid #ffccd5', boxShadow: '0 4px 15px rgba(255,107,129,0.1)' }}>
          <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '12px', color: '#ff4757' }}>
            Select Day:
          </label>
          <select 
            value={selectedDay}
            onChange={(e) => setSelectedDay(Number(e.target.value))}
            style={{ 
              width: '100%', 
              padding: '12px', 
              borderRadius: '8px', 
              border: '2px solid #ffccd5', 
              background: 'white',
              fontSize: '1.1rem',
              outline: 'none',
              cursor: 'pointer'
            }}
          >
            {Object.keys(vacationData).map(day => (
              <option key={day} value={day}>Day {day}</option>
            ))}
          </select>
        </div>

        {/* Right Side: Image and Content */}
        <div style={{ flex: '3 1 600px', display: 'flex', flexDirection: 'column', gap: '24px' }}>
          
          <div className="polaroid-card" style={{ margin: '0 auto', maxWidth: '500px', width: '100%' }}>
            <img src={getAssetPath(data.image)} alt={data.title} className="polaroid-img" style={{ height: 'auto', maxHeight: '400px' }} />
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <h3 className="polaroid-title">{data.title}</h3>
            </div>
            {/* Short Caption inside polaroid */}
            {data.caption && <p className="polaroid-caption" style={{ fontSize: '1.4rem' }}>"{data.caption}"</p>}
          </div>

          {/* Long Text Below Image (if any) */}
          {data.longText && (
            <div style={{ padding: '24px', background: 'rgba(255,255,255,0.7)', borderRadius: '16px', border: '1px solid #ffccd5', boxShadow: '0 10px 25px rgba(255,107,129,0.1)' }}>
              <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#4a4a4a', fontStyle: 'italic', textAlign: 'center' }}>
                "{data.longText}"
              </p>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
