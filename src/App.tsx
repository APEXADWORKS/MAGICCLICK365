import { useState, useEffect } from 'react';
import { 
  ShieldCheck, 
  Cpu, 
  Users, 
  Mail,
  FileText,
  X
} from 'lucide-react';

export default function App() {
  // Simulator timer starts at 197 seconds (03:17)
  const [timeLeft, setTimeLeft] = useState(197);
  const [activePlayers, setActivePlayers] = useState(3105);
  const registerUrl = 'https://www.junglehaan.vip/share/6IOe3xy=1542';

  const [activeModal, setActiveModal] = useState<'privacy' | 'terms' | 'license' | null>(null);

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
          href={registerUrl}
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

        {/* MANAGED BY - APEX AD WORKS */}
        <div className="w-full text-center py-2" id="managed-by-section">
          <a 
            href="https://t.me/tech_apex" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-flex items-center gap-2 text-[10px] sm:text-[11px] font-black font-mono tracking-widest text-slate-400 hover:text-[#00ffcc] transition-all uppercase select-none active:scale-[0.98] py-1 px-3 rounded-full hover:bg-white/[0.02] border border-transparent hover:border-white/5"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00ffcc] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00ffcc]"></span>
            </span>
            managed by - apex ad works
          </a>
        </div>

        {/* POLICIES & RULES SECTION */}
        <div className="w-full space-y-2 border-t border-white/5 pt-4" id="policies-section">
          <div className="flex items-center justify-between text-[11px] font-black uppercase tracking-widest text-slate-400 px-1">
            <span>Policies & Rules</span>
          </div>

          <div className="grid grid-cols-3 gap-2.5">
            <button
              onClick={() => setActiveModal('privacy')}
              className="bg-[#080d1a] border border-white/5 hover:border-[#00ffcc]/30 py-2.5 px-1.5 rounded-xl text-center text-[10px] font-bold text-slate-300 hover:text-white transition-all flex flex-col items-center justify-center gap-1 font-mono uppercase"
            >
              <FileText className="h-3.5 w-3.5 text-slate-400" />
              Privacy
            </button>
            <button
              onClick={() => setActiveModal('terms')}
              className="bg-[#080d1a] border border-white/5 hover:border-[#00ffcc]/30 py-2.5 px-1.5 rounded-xl text-center text-[10px] font-bold text-slate-300 hover:text-white transition-all flex flex-col items-center justify-center gap-1 font-mono uppercase"
            >
              <FileText className="h-3.5 w-3.5 text-slate-400" />
              Terms
            </button>
            <button
              onClick={() => setActiveModal('license')}
              className="bg-[#080d1a] border border-white/5 hover:border-[#00ffcc]/30 py-2.5 px-1.5 rounded-xl text-center text-[10px] font-bold text-slate-300 hover:text-white transition-all flex flex-col items-center justify-center gap-1 font-mono uppercase"
            >
              <FileText className="h-3.5 w-3.5 text-slate-400" />
              License
            </button>
          </div>
        </div>

        {/* CORPORATE CONTACT */}
        <div className="w-full bg-[#080d1a] border border-white/5 rounded-2xl p-4 flex flex-col items-center justify-center gap-1 text-center shadow-lg" id="corporate-contact-section">
          <span className="text-[9px] font-mono font-bold tracking-widest text-[#00ffcc] uppercase">
            Corporate Contact
          </span>
          <a 
            href="mailto:support@magicclick365.site" 
            className="text-xs font-mono font-bold text-slate-200 hover:text-[#00ffcc] transition-all flex items-center gap-1.5 mt-1 select-all"
          >
            <Mail className="h-3.5 w-3.5" />
            support@magicclick365.site
          </a>
        </div>

        {/* FORMAL COMPLIANCE DISCLAIMER */}
        <div className="w-full bg-[#080d1a]/40 border border-white/5 p-4 rounded-xl text-center shadow-md select-text" id="compliance-disclaimer-section">
          <p className="text-[9.5px] font-bold font-mono tracking-widest text-slate-400 uppercase mb-2">
            FORMAL COMPLIANCE DISCLAIMER
          </p>
          <p className="text-[9.5px] font-semibold text-slate-500 leading-relaxed uppercase tracking-wider text-justify">
            This platform serves strictly for scientific modeling, information distribution, and statistical modeling analysis of sequence structures. The Millionx Predictors System does not promote, host, direct, or facilitate wagering, predictions, casino gaming, color gaming, gambling, betting, or financial speculation. Subscribing to telemetry streams is intended purely for statistics logging and sports biomechanics research.
          </p>
        </div>

      </div>

      {/* Footer copyright block matching reference */}
      <footer className="text-center w-full z-10 pt-4 cursor-default">
        <p className="text-[10px] font-mono tracking-widest text-slate-600 uppercase font-semibold">
          © 2026 MILLIONX PREDICTORS SYSTEM
        </p>
      </footer>

      {/* LOCAL TEXT MODALS */}
      {activeModal && (
        <div className="fixed inset-0 bg-black/85 backdrop-blur-md flex items-center justify-center z-50 p-4 select-text">
          <div className="bg-[#080d1a] border border-[#00ffcc]/20 rounded-3xl max-w-sm w-full p-6 space-y-4 relative shadow-2xl">
            <button 
              onClick={() => setActiveModal(null)}
              className="absolute top-4 right-4 text-slate-400 hover:text-white p-1 hover:bg-white/5 rounded-full transition-all"
            >
              <X className="h-5 w-5" />
            </button>
            <div className="space-y-1">
              <span className="text-[10px] font-mono font-black text-[#00ffcc] tracking-widest uppercase block">
                POLICY DOCUMENT
              </span>
              <h4 className="text-lg font-black tracking-wider uppercase text-white font-display">
                {activeModal === 'privacy' && 'Privacy Statement'}
                {activeModal === 'terms' && 'Terms of Usage'}
                {activeModal === 'license' && 'Platform License'}
              </h4>
            </div>
            <div className="text-[11px] text-slate-300 leading-relaxed font-semibold font-mono bg-black/40 border border-white/5 rounded-2xl p-4 text-justify select-text">
              {activeModal === 'privacy' && 
                "Your telemetry connection and sequence configuration signatures are strictly kept client-side within local storage identifiers and encrypted telemetry streams. We collect no personal name, bank credentials, or location logs. Statistical sequence telemetry remains strictly anonymous."
              }
              {activeModal === 'terms' && 
                "The statistical modelling analysis modules, V9.0 neural engines, and system reset telemetry telemetry logs are published strictly for academic distribution, personal reference, and diagnostic verification study. Accessing signal data logs implies adherence to scientific licensing covenants."
              }
              {activeModal === 'license' && 
                "Millionx Predictors System Core V9.0 Engine. Academic Source License. Distribution or simulation of the sequence engines is granted under standard high-fidelity modeling research agreements."
              }
            </div>
            <button
              onClick={() => setActiveModal(null)}
              className="w-full py-3 bg-[#00ffcc] text-[#040811] font-black uppercase text-xs tracking-widest rounded-2xl hover:brightness-110 active:scale-[0.98] transition-all"
            >
              ACKNOWLEDGE LOG
            </button>
          </div>
        </div>
      )}

    </div>
  );
}
