import { useState, useEffect } from 'react';
import { 
  ShieldCheck, 
  Cpu, 
  Users, 
  Timer,
  Zap
} from 'lucide-react';

export default function App() {
  // Simulator timer starts at 197 seconds (03:17)
  const [timeLeft, setTimeLeft] = useState(197);
  const [activePlayers, setActivePlayers] = useState(3105);
  const telegramUrl = 'https://t.me/chickenroadsignal_official';

  // Live timer tick-down
  useEffect(() => {
    const timerInterval = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          return 197; // reset back to 03:17 to match reference image cycle
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timerInterval);
  }, []);

  // Format MM:SS for countdown timer (e.g. 03:17)
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  // Fluctuates around 3,105 slightly for a live organic feel
  useEffect(() => {
    const playersInterval = setInterval(() => {
      setActivePlayers(prev => {
        const delta = Math.floor(Math.random() * 5) - 2; // +/- 2 players
        const nextVal = prev + delta;
        return nextVal < 3098 ? 3105 : nextVal > 3115 ? 3105 : nextVal;
      });
    }, 4000);

    return () => clearInterval(playersInterval);
  }, []);

  return (
    <div 
      className="min-h-screen bg-[#05070b] font-sans text-slate-100 antialiased flex flex-col justify-between items-center py-10 px-4 relative overflow-hidden select-none" 
      id="landing-page-root"
    >
      
      {/* Subtle futuristic background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-cyber-cyan/10 rounded-full blur-[140px] pointer-events-none pulsing-bg"></div>

      {/* Main Body Centered Content */}
      <div className="flex-grow flex flex-col items-center justify-center max-w-sm w-full space-y-6 z-10" id="signals-center">
        
        {/* Title: JUNGLE HAAN */}
        <h1 className="text-3xl font-black tracking-widest font-display text-center uppercase leading-tight select-none">
          <span className="text-cyber-cyan cyan-text-glow">JUNGLE</span>{' '}
          <span className="text-white text-shadow-white">HAAN</span>
        </h1>

        {/* HIGH-FIDELITY AVATAR CIRCLE */}
        <div className="relative group cursor-pointer">
          {/* Cyber-cyan Outer Radial Aura Glow */}
          <div className="absolute inset-x-0 inset-y-0 rounded-full blur-3xl bg-cyber-cyan/35 opacity-90 transition-all duration-300"></div>

          {/* Glowing ring bezel */}
          <div 
            className="relative w-52 h-52 rounded-full bg-gradient-to-tr from-cyber-cyan via-emerald-400 to-green-500 p-1.5 shadow-2xl transition-transform active:scale-95 duration-200 border-2 border-black/80"
            style={{
              boxShadow: '0 0 32px rgba(0, 255, 204, 0.4)'
            }}
          >
            {/* Inner Graphic Media Container with new Jungle Haan Logo */}
            <div className="w-full h-full rounded-full bg-dark-950 border border-black/40 flex flex-col items-center justify-center relative overflow-hidden shadow-inner">
              <img 
                src="/images/jungle_haan_logo.png" 
                alt="Jungle Haan Mascot" 
                className="w-full h-full object-cover rounded-full pointer-events-none scale-[1.01]"
                referrerPolicy="no-referrer"
              />
            </div>

          </div>
        </div>

      {/* REPLICA PRIMARY BUTTON "REGISTER NOW / ⚡ JUNGLE HAAN" */}
      <div className="w-full">
        <a 
          href={telegramUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full text-center bg-cyber-cyan text-[#040811] font-black uppercase rounded-2xl p-4.5 transition-all hover:brightness-110 pulsing-cyan-btn cursor-pointer select-none decoration-transparent"
          style={{
            background: '#00ffcc',
            boxShadow: '0 0 24px rgba(0, 255, 204, 0.45)'
          }}
        >
          <span className="block text-xl tracking-widest font-black font-display leading-none">
            REGISTER NOW
          </span>
          <span className="block text-[11px] font-black tracking-widest text-[#040811]/90 mt-1.5 font-mono">
            ⚡ JUNGLE HAAN
          </span>
        </a>
      </div>

      {/* SYSTEM RESET COUNTER CAPSULE PILL */}
      <div className="bg-[#0f141f] border border-white/5 py-3 px-8 rounded-full flex items-center justify-center shadow-lg relative min-w-[240px]">
        <span className="text-[13px] font-black font-mono uppercase tracking-widest text-slate-300">
          SYSTEM RESET IN: <span className="text-white font-black">{formatTime(timeLeft)}</span>
        </span>
      </div>

      {/* 3 GRID HOVER STATUS BOXES */}
      <div className="grid grid-cols-3 gap-3.5 w-full pt-1.5 font-display">
          
          {/* Box 1 (STATUS SECURE) */}
          <div className="bg-[#0b1019] border border-white/5 p-4 rounded-2xl flex flex-col items-center justify-center text-center transition-all duration-300 relative overflow-hidden">
            <ShieldCheck className="h-5 w-5 mb-2 text-cyber-cyan animate-pulse" />
            <span className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">STATUS</span>
            <p className="text-[11.5px] text-white font-black uppercase tracking-widest mt-1 font-mono">SECURE</p>
          </div>

          {/* Box 2 (AI BOT V9.0) */}
          <div className="bg-[#0b1019] border border-white/5 p-4 rounded-2xl flex flex-col items-center justify-center text-center transition-all duration-300 relative overflow-hidden">
            <Cpu className="h-5 w-5 mb-2 text-cyber-cyan" />
            <span className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">AI BOT</span>
            <p className="text-[11.5px] text-white font-black uppercase tracking-widest mt-1 font-mono">V9.0</p>
          </div>

          {/* Box 3 (ACTIVE USERS 3,105) */}
          <div className="bg-[#0b1019] border border-white/5 p-4 rounded-2xl flex flex-col items-center justify-center text-center transition-all duration-300 relative overflow-hidden">
            <Users className="h-5 w-5 mb-2 text-cyber-cyan" />
            <span className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">ACTIVE</span>
            <p className="text-[11.5px] text-white font-black uppercase tracking-widest mt-1 font-mono">{activePlayers.toLocaleString()}</p>
          </div>

        </div>

      </div>

      {/* Footer copyright block matching reference */}
      <footer className="text-center w-full z-10 pt-4 cursor-default">
        <p className="text-[10px] font-mono tracking-widest text-slate-600 uppercase font-semibold">
          © 2026 MILLIONX PREDICTORS SYSTEM
        </p>
      </footer>

    </div>
  );
}
