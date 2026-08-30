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
    caption: "weird reference but thats us",
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
    longText: "now tbh idk either why u were making that face but it looks like a woman who has seen the childish side of her man and said \"yeah so i wont be able to take him shopping he'll get the useless stuff first just because i either sent a reel abt it or he is seeing it for the first time\""
  },
  6: {
    title: "Day 6",
    image: "assets/p4.jpg",
    caption: "my sleepy babyy", 
    longText: "so this was one of the times u slept on vc and istg u looked so cutee. i wanted to come through the screen and hold u until u woke up naturally, no tension no worries, just my baby sleeping w a huge smile on her face and thumb in your mouth"
  },  7: {
    title: "Day 7",
    image: "assets/d7.jpg",
    caption: "my parasite attacking at her fav food given by the host", 
    longText: "so i kinda knew chocolate will have a positive effect but damn this?? my love u were a baby while eating it. and heres the rest of the part i didnt tell u. i was staring at u every last second. like aww thats my babyyyy" 
  },
  8: {
    title: "Day 8",
    longText: "It's late now, and I know you're probably lying down or still moving through the last bits of your day. But I need you to hear this before sleep takes you.I've been watching you. Not with my eyes—with everything else. And I saw it all today. The way you woke up and started giving before you'd even had a moment for yourself. The drinks you made for your parents. The medicines you kept on time. The rotis—imperfect circles, but made with your own hands, with that stubborn love you never see in yourself. The washing. The folding. The endless small errands. You did it all while feeling like your head might spin, and you still kept going.\nYou didn't stop. You didn't complain. You just carried the whole house on your back like you always do, like it's breathing, like it's not a weight that would break most people. And you did it while still showing up for me. Still talking. Still letting me in between the tasks. Still being soft when you had every right to be sharp. I don't say this enough. I see you. Not just as my girlfriend. As a daughter. As a sister. As the woman holding her family together when no one asked her to. You're not doing nothing, Tisha. You're doing everything. And most of it goes unacknowledged. Unnoticed. Unpaid. But it's not invisible to me. And it's not just about today. It's the pattern of you. The way you love people with your hands and your time and your body, even when your own tank is empty. That's not weakness. That's a kind of strength most people don't have. The kind that gives until there's nothing left and then gives a little more. But here's what I want you to hear tonight, not as a compliment, but as a truth: you deserve to be taken care of too. Not at the end of some future when everything settles. Now. Today. In the middle of the mess. You deserve someone who sees the effort and doesn't just thank you for it, but steps in. Lifts half the weight without being asked. Stays up with you when you're too tired to sleep. Puts a hand on your back when you finally sit down and says, 'Rest. I've got it from here.' I'm not there to do that in person tonight. But if I was, I wouldn't just tell you you're doing enough. I'd pull you into me and let you go quiet. I'd take the mental load for an hour so you didn't have to think. I'd make you sleep, not because you're weak, but because you've been strong long enough. You spend so much time being everyone's anchor. Tonight, just for a few minutes, let me be yours. Not because you need saving. Because you deserve rest. Because you deserve to feel held. Because you keep the world spinning for everyone else, and someone should hold it still for you. I'm proud of you. I'm in awe of you. And I don't just love the girl who smiles and jokes and keeps things light. I love the one who makes rotis when she's dizzy, folds clothes when she's exhausted, and still finds time to check on me. That's the woman I'm staying for. That's the woman I'll keep showing up for. Now close your eyes. You've done enough. More than enough. And if you wake up tired again tomorrow, I'll remind you again. As many times as you need." 
  },
  9: { title: "Day 9", image: "", caption: "", longText: "" },
  10: { title: "Day 10", image: "", caption: "", longText: "" },
  11: { title: "Day 11", image: "", caption: "", longText: "" },
  12: { title: "Day 12", image: "", caption: "", longText: "" },
  13: { title: "Day 13", image: "", caption: "", longText: "" },
  14: { title: "Day 14", image: "", caption: "", longText: "" },
  15: { title: "Day 15", image: "", caption: "", longText: "" },
  16: { title: "Day 16", image: "", caption: "", longText: "" },
  17: { title: "Day 17", image: "", caption: "", longText: "" },
  18: { title: "Day 18", image: "", caption: "", longText: "" },
  19: { title: "Day 19", image: "", caption: "", longText: "" },
  20: { title: "Day 20", image: "", caption: "", longText: "" },
  21: { title: "Day 21", image: "", caption: "", longText: "" },
  22: { title: "Day 22", image: "", caption: "", longText: "" },
  23: { title: "Day 23", image: "", caption: "", longText: "" },
  24: { title: "Day 24", image: "", caption: "", longText: "" },
  25: { title: "Day 25", image: "", caption: "", longText: "" },
  26: { title: "Day 26", image: "", caption: "", longText: "" },
  27: { title: "Day 27", image: "", caption: "", longText: "" }
};

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
          
          {data.image && (
            <div className="polaroid-card" style={{ margin: '0 auto', maxWidth: '500px', width: '100%' }}>
              <img src={getAssetPath(data.image)} alt={data.title} className="polaroid-img" style={{ height: 'auto', maxHeight: '400px' }} />
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <h3 className="polaroid-title">{data.title}</h3>
              </div>
              {/* Short Caption inside polaroid */}
              {data.caption && <p className="polaroid-caption" style={{ fontSize: '1.4rem' }}>"{data.caption}"</p>}
            </div>
          )}

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
