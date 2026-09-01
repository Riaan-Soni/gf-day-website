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
  9: { title: "Day 9", image: "", caption: "", longText: "In your light I learn how to love. In your beauty, how to make poems. You dance inside my chest where no-one sees you, but sometimes I do, and that sight becomes this art. — Rumi" },
  10: { title: "Day 10", image: "", caption: "", longText: "Shall I compare thee to a summer's day? Thou art more lovely and more temperate... — William Shakespeare (Sonnet 18)" },
  11: { title: "Day 11", image: "", caption: "", longText: "Unke dekhe se jo aa jaati hai munh par raunaq, Woh samajhte hain ki beemar ka haal achha hai. (The radiance that lights up my face upon seeing her, Makes her believe that the sick man is recovering.) — Mirza Ghalib" },
  12: { title: "Day 12", image: "", caption: "", longText: "Reason is powerless in the expression of Love. — Rumi" },
  13: { title: "Day 13", image: "", caption: "", longText: "Love alters not with his brief hours and weeks, But bears it out even to the edge of doom. — William Shakespeare (Sonnet 116)" },
  14: { title: "Day 14", image: "", caption: "", longText: "Tere waade par jiye hum, to yeh jaan jhooth jaana, Ke khushi se mar na jaate, agar aitbaar hota. (If I lived on your promise, know it was a lie, For I would have died of joy, had I truly believed it.) — Mirza Ghalib" },
  15: { title: "Day 15", image: "", caption: "", longText: "Lovers don't finally meet somewhere. They're in each other all along. — Rumi" },
  16: { title: "Day 16", image: "", caption: "", longText: "Doubt thou the stars are fire; Doubt that the sun doth move; Doubt truth to be a liar; But never doubt I love. — William Shakespeare" },
  17: { title: "Day 17", image: "", caption: "", longText: "Ishq ne ghalib nikamma kar diya, Varna hum bhi aadmi the kaam ke. (Love has made me worthless, Ghalib, Otherwise, I too was a man of some use.) — Mirza Ghalib" },
  18: { title: "Day 18", image: "", caption: "", longText: "Let yourself be silently drawn by the stronger pull of what you really love. — Rumi" },
  19: { title: "Day 19", image: "", caption: "", longText: "My bounty is as boundless as the sea, My love as deep; the more I give to thee, The more I have, for both are infinite. — William Shakespeare" },
  20: { title: "Day 20", image: "", caption: "", longText: "I need you to sit with me. Just sit. Don't speak. Don't look away. Don't do that thing you do where you shrink into yourself because you think you're taking up too much space. You're not. You're taking up exactly the right amount of space. You're taking up all the space in my head, in my chest, in every quiet moment I've had since the day I first saw you. So just... sit. And let me tell you everything. Because I've been dying with this inside me, and I can't do it anymore. I'm shaking right now. It's not cold. It's not nerves. It's you. It's always you. Every time you walk into a room, my body reacts before my mind even catches up. My pulse spikes. My chest tightens. My hands start to tremble because they're not touching you. And I have to sit there, in class, pretending I'm fine. Pretending I'm not cracking pens and bouncing my knee and grinding my teeth just to keep from getting on my knees and let me love you out loud. Do you know what that's like? To want someone so much it physically hurts? To sit in a room full of people and feel completely alone because the only person who matters is too far away to touch? That's my life now. That's what you've done to me. And I'm not complaining. God, I'm not complaining. I'd rather shake every day for the rest of my life than go back to the numbness I felt before you. Because before you, I didn't know what it meant to be alive. I didn't know that a person could walk into your life and rewrite everything you thought you knew about yourself. And now I know. I know because you exist. Because you're real. Because you're sitting there with your soft arms and your thick thighs and your stomach that you hate so much, and you have no idea—no idea—that you're the most beautiful thing I've ever seen. Not despite everything you think is wrong with you. Because of it. Because every mark, every scar, every inch of softness is proof that you're not a fantasy. You're real. You're here. And you're mine. But it's not just those parts. It's everything. It's the way your nose scrunches. The way you bite your lip. The way your eyes go distant when you're lost in thought, like you've disappeared into a world I'd kill to visit. The way your eyebrows furrow. The way your mouth curves into a half-smile. I see all of it. I've been seeing all of it. And every day I find something new to love about you. Something new to obsess over. Something new that makes me think: there she is. There's the woman I'm going to spend the rest of my life trying to deserve. I love your hands. God, your hands. The way they move when you talk, like they're painting pictures in the air. The way they look when you're holding a pen, so precise, so focused. The way they feel when they brush against mine, even by accident, even for a second. I've memorized the shape of your fingers. The way your knuckles look when you're anxious and you're wringing them together. The way your palms feel when you're warm and relaxed. I want to hold them. I want to kiss them. I want to press them against my chest so you can feel what you do to my heart.I love your wrists. The delicate bones under the skin. The way they look when your sleeves ride up. The way they feel when I wrap my fingers around them—not hard, just enough to feel your pulse. That pulse. It tells me you're alive. It tells me you're here. It tells me that for all the times you've felt like you're disappearing, you're still fighting. Still beating. Still real. And I'm so grateful for that. I'm so grateful for you. I love your elbows. The way they bend when you rest your chin on your hand. The way the skin is slightly darker there, slightly rougher. The way they look when you're lying down and your arm is stretched above your head. I want to kiss them. I want to trace the creases with my thumb. I want to learn every line, every fold, every inch of skin that makes up the woman I can't stop thinking about. I love your shoulders. The way they carry so much weight. The way they tense up when you're stressed. The way they relax when you finally let out a breath you've been holding for too long. The way they look in a tank top, bare and soft and so fucking beautiful I lose my train of thought. I want to massage them when you've had a long day. I want to press my lips to them when you're falling asleep. I want to be the one who takes the weight off them, even if it's just for a little while. I love your neck. The curve of it. The way it looks when you tilt your head back and laugh. The way it looks when you're reading and you tilt your head to the side, exposing a stretch of skin I want to mark with my mouth. The hollow at the base of your throat. The way your pulse flutters there when you're nervous or excited or turned on. I want to bury my face there. I want to breathe you in. I want to feel your heartbeat against my lips and know that I'm the one causing it to race. I love your back. The way it curves when you bend over to pick something up. The way your spine looks when you're stretching. The way the skin dimples at the small of your back. The way your shoulder blades move when you reach for something. I want to run my hands down your back. I want to kiss every vertebra. I want to memorize the geography of your body like a map I'll never stop exploring. I love your waist. The softness there. The way it dips and swells. The way it feels under my hands when I pull you close. The way the skin dimples slightly when you sit. The way your saree blouse hugs it, leaving that strip of bare skin that drives me insane every time I see it. I want to trace it with my fingers. I want to kiss it. I want to whisper against it all the things I'm too afraid to say out loud. I love your hips. The width of them. The way they move when you walk. The way they feel when I imagine my hands gripping them. The way they look in tight jeans or flowing skirts or nothing at all. The way they'd feel under me, around me, pressed against me. I want to hold them. I want to bruise them with my fingers. I want to worship them with my mouth until you forget every cruel thing anyone ever said about your body. I love your thighs. God, your thighs. The thickness of them. The way they rub together when you walk. The way they look in shorts, in leggings, in nothing. The way they'd feel wrapped around my waist, around my head, around my hand. The heat between them. The softness of the skin. The way they tremble when you're turned on and trying to hide it. I want to live between them. I want to die there. I want to spend the rest of my life with my head resting on them, listening to you breathe. I love your knees. The way they look when you're sitting cross-legged. The way they feel when I touch them. The way the skin is slightly rougher there, slightly darker. The way they bend when you're lying down, when you're walking, when you're pulling your legs up to your chest because you're trying to make yourself smaller. I want to kiss them. I want to press my thumbs into the hollows behind them. I want to tell you that every part of you—even the parts you never think about—is beautiful to me. I love your calves. The shape of them. The way they look when you're wearing heels. The way they flex when you stand on your toes. The way they feel under my hands when I'm massaging your legs after a long day. I love your ankles. The delicate bones there. The way they look crossed beneath the desk in class. The way they'd look hooked over my shoulders. I love your feet. The way they look in sandals, in socks, bare on my lap. The way you tuck them under yourself when you're sitting. The way they'd feel pressed against my thighs when we're lying in bed together. I love your face. Not just the parts you show the world. The parts you try to hide. The pimple on your chin that you're always trying to cover. The dark circles under your eyes that appear when you've been overthinking again. The slight asymmetry of your lips. The way your cheeks flush when you're embarrassed. The way your eyes water when you're trying not to cry. All of it. Every single detail. Because those details are what make you human. They're what make you real. And I'm so tired of a world that wants you to hide your humanity. I love your hair. The way it falls across your face when you're reading. The way it looks when it's messy in the morning. The way it smells after you've washed it. The way it feels between my fingers. I want to brush it. I want to braid it. I want to pull it—gently at first, then harder—when you're under me and gasping my name. I want to bury my face in it and breathe you in until I can't tell where I end and you begin. I love your mouth. The shape of it. The way it moves when you talk. The way you bite your lip. The way you purse it. The way it looks when you're sleeping, slightly open, soft and unguarded. I cant imagine the way it tastes. The way it feels against mine. The sounds it makes when you're laughing, when you're moaning, when you're whispering my name like a prayer. I want to spend the rest of my life learning every sound that mouth can make. I love your voice. The way it changes when you're excited. The way it drops when you're tired. The way it shakes when you're about to cry. The way it sounds when you're talking about something you love. The way it sounds when you're moaning. The way it sounds when you say my name. I want to record it. I want to play it back on my worst days. I want to fall asleep to the sound of you talking, breathing, existing. I love your laugh. The real one. The one that bursts out of you when you're not thinking about how you look. The one that makes your whole body shake. The one that fills a room with warmth. I want to be the reason for that laugh. I want to spend the rest of my life trying to hear it. I want to bottle it and keep it in my chest for the days when everything feels heavy. I love your scars. Not just the ones on your arms and legs. The ones I can't see. The ones you carry inside you. The ones that make you flinch when someone gets too close. The ones that make you push people away before they can hurt you. I love them because they're part of you. And I want to be the one who holds them. Who soothes them. Who proves to you—slowly, patiently—that not everyone will use them against you. I love your flaws. The ones you think make you unlovable. The ones you've been trying to fix your whole life. The ones that keep you up at night. I love them because they're real. Because they're yours. Because they're the reason you're not like everyone else. And I'm so tired of everyone else. I'm so tired of plastic smiles and filtered photos and people pretending to be something they're not. You're real. You're messy. You're complicated. And you're the only thing that's ever made me feel like I'm not drowning. I love your strength. The way you keep going even when you're running on empty. The way you show up for everyone even when you're falling apart. The way you carry the weight of the world on your shoulders and still find the energy to ask if I'm okay. That strength is the most beautiful thing about you. And I want to be the one who finally lets you rest. I want to be the one who says: you don't have to be strong anymore. Not with me. I want to be the one who holds you while you fall apart. I want to catch every tear and kiss every wound and tell you over and over that you're safe. You're home. And I know you're scared. I know you're waiting for the other shoe to drop. I know you've been hurt before—by people who said they loved you and then left. By people who made you feel like you were too much. By people who made you feel like you had to earn love. I'm not those people. I'm never going to be those people. Because I'm not here to fix you. I'm not here to save you. I'm here to love you. All of you. The good. The bad. The ugly. The beautiful. The parts you show and the parts you hide. I want all of it. I want all of you. And I know that's scary. I know that's overwhelming. But I need you to understand something. I'm not going anywhere. I'm not going to wake up one day and realize I could do better. There is no better. There's only you. There's only ever been you. And I'll spend every day of my life proving it to you. In the way I look at you. In the way I touch you. In the way I hold your hand in public and kiss your forehead in private and tell you—every single day—that you're the most beautiful thing that's ever happened to me. So when I ask you to send me pictures—of everything, of anything, of the parts you're still learning to love—it's not because I'm trying to control you. It's because I need you. I need to see you. I need to know that you trust me enough to share the things you hide from everyone else. I need to catalogue every version of you. The glasses. The button-downs. The sarees with your waist showing. The shorts that ride up your thighs. The bras. The panties. The dresses you're not supposed to wear. The white shirt hanging open. The messy hair. The morning face. The legs. The stomach. The arms. The scars. All of it. Because every version of you is a gift I haven't finished unwrapping. And I want to dress you up. Not to change you. To frame you. I want to see you in everything. Glasses sliding down your nose while you read. Soft sweaters that slip off one shoulder. My shirt at 2 am. Sarees that show your waist. Shorts that cling to your thighs. Nothing at all. I want to watch you exist in a hundred different versions of yourself and find every single one of them beautiful. Because you are. You're beautiful in everything. You're beautiful in nothing. You're beautiful in the moments when you forget to perform and just... exist. And when we're together, when you see me shaking in class, just put your hand on my knee under the desk. Hold it there. Remind my body that you're real. That you're here. That you're not going anywhere. And when we're alone, let me hold you. Let me press my lips to every scar and every mark and every inch of softness you've been taught to hate. Let me show you—with my hands and my mouth and my whole trembling body—that you're not hard to love. You're impossible not to. Because this is how you bring me peace when we're together. This is how you keep me from falling apart. This is how you love me the way I've been dying to be loved. Just... don't stop. Don't ever stop. Because I don't think I'd survive it. I don't think I'd survive losing the only person who's ever made me feel like I'm not alone in the world. I love you. Every part of you. Every version of you. Every scar, every mark, every softness, every flaw. I love you in ways I didn't know I was capable of. I love you so much it scares me. And I'm done being scared. I'm done hiding. I'm done pretending I'm not completely, irrevocably, desperately in love with every single part of you—even the parts you can't love yourself. Especially those parts. Because those are the parts that make you real. Those are the parts that make you mine." },
  21: { title: "Day 21", image: "", caption: "ntgg special i loveeee uuuuuuu", longText: "(cute kisses sent ur way)" },
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
