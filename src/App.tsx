import { useState, useEffect } from 'react';
import apex2Logo from './assets/images/apex2_logo_1779731043219.png';
import gold1Logo from './assets/images/gold1_cyber_logo_1779791672230.png';
import goldBanner from './assets/images/gold_banner_1779792034681.png';
import { 
  ShieldCheck, 
  Cpu, 
  Users, 
  Mail,
  FileText,
  X
} from 'lucide-react';

export default function App() {
  // Simple client-side routing state
  const [currentPath, setCurrentPath] = useState(() => {
    const path = window.location.pathname.toLowerCase();
    const hash = window.location.hash.toLowerCase();
    if (path.includes('apex2') || hash.includes('apex2')) {
      return '/apex2';
    }
    if (path.includes('gold1') || hash.includes('gold1')) {
      return '/gold1';
    }
    return '/';
  });

  useEffect(() => {
    const handleLocationChange = () => {
      const path = window.location.pathname.toLowerCase();
      const hash = window.location.hash.toLowerCase();
      if (path.includes('apex2') || hash.includes('apex2')) {
        setCurrentPath('/apex2');
      } else if (path.includes('gold1') || hash.includes('gold1')) {
        setCurrentPath('/gold1');
      } else {
        setCurrentPath('/');
      }
    };
    window.addEventListener('popstate', handleLocationChange);
    window.addEventListener('hashchange', handleLocationChange);
    
    // Intercept programmatic navigation
    const originalPushState = window.history.pushState;
    const originalReplaceState = window.history.replaceState;
    
    window.history.pushState = function(...args) {
      originalPushState.apply(this, args);
      handleLocationChange();
    };
    window.history.replaceState = function(...args) {
      originalReplaceState.apply(this, args);
      handleLocationChange();
    };
    
    return () => {
      window.removeEventListener('popstate', handleLocationChange);
      window.removeEventListener('hashchange', handleLocationChange);
      window.history.pushState = originalPushState;
      window.history.replaceState = originalReplaceState;
    };
  }, []);

  // Set the document title dynamically based on the current page
  useEffect(() => {
    if (currentPath === '/apex2') {
      document.title = "JungleHaan Rewards - APEX2 Special";
    } else {
      document.title = "JungleHaan Rewards - Play & Win Daily";
    }
  }, [currentPath]);

  // Simulator timer starts at 197 seconds (03:17)
  const [timeLeft, setTimeLeft] = useState(197);
  const [activePlayers, setActivePlayers] = useState(3105);

  // Determine register URL by path (customizable in the future)
  const getRegisterUrl = () => {
    if (currentPath === '/apex2') {
      return 'https://telegram.me/+vUVbLckE0yo4Yzc1';
    }
    if (currentPath === '/gold1') {
      return 'https://www.rummyreturn.vip/?dl=45rxoo';
    }
    return 'https://www.rummyguru.top/share/9IaPqxy?share_type=3';
  };

  const registerUrl = getRegisterUrl();

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

  if (currentPath === '/apex2') {
    return (
      <div 
        className="min-h-screen bg-[#030508] font-sans text-slate-100 antialiased flex flex-col items-center justify-between py-8 px-4 relative overflow-hidden select-none" 
        id="apex2-page-root"
      >
        {/* Subtle radial glow matching reference */}
        <div className="absolute top-[45%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[520px] h-[520px] bg-[#00ffcc]/10 rounded-full blur-[120px] pointer-events-none"></div>

        {/* Main Body Content */}
        <div className="flex-grow flex flex-col items-center justify-center max-w-sm w-full space-y-7 z-10" id="signals-center-apex2">
          
          {/* Top Header Row */}
          <div className="w-full flex items-center justify-between border-b border-white/5 pb-4 mb-2" id="apex2-header">
            <div className="flex items-center gap-1.5">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
              </span>
              <span className="text-[10px] sm:text-[11px] font-black font-mono tracking-wider text-slate-400 uppercase select-none">
                SYSTEM NODE LIVE: APEX1-B9
              </span>
            </div>
            <div className="border border-[#00ffcc]/20 rounded-lg px-2 py-0.5 bg-[#00ffcc]/5">
              <span className="text-[9px] font-black font-mono tracking-widest text-[#00ffcc] uppercase select-none">
                VERIFIED SOFTWARE TERMINAL
              </span>
            </div>
          </div>

          {/* Main Title Headings with slanted italic styling */}
          <h1 className="text-[28px] sm:text-[34px] font-black font-display text-center uppercase leading-none italic tracking-wider select-none space-y-1 py-1">
            <span className="block text-[#00ffcc]" style={{ textShadow: '0 0 12px rgba(0, 255, 204, 0.35)' }}>
              INDIA'S MOST
            </span>
            <span className="block text-white" style={{ textShadow: '0 0 8px rgba(255, 255, 255, 0.15)' }}>
              DEMANDING CHANNEL
            </span>
          </h1>

          {/* Avatar Circle */}
          <div className="relative group cursor-pointer my-2">
            {/* Cyber-cyan Outer Radial Aura Glow */}
            <div className="absolute inset-x-0 inset-y-0 rounded-full blur-2xl bg-[#00ffcc]/30 opacity-90 transition-all duration-300"></div>

            {/* Glowing ring bezel */}
            <div 
              className="relative w-56 h-56 rounded-full bg-gradient-to-tr from-[#00ffcc] via-emerald-400 to-[#00ffcc]/65 p-1 border border-black/80"
              style={{
                boxShadow: '0 0 32px rgba(0, 255, 204, 0.45)'
              }}
            >
              {/* Inner graphic with Mascot */}
              <div className="w-full h-full rounded-full bg-[#030508] border border-black/40 flex items-center justify-center relative overflow-hidden">
                <img 
                  src={apex2Logo} 
                  alt="Apex2 Cyber Mascot" 
                  className="w-full h-full object-cover scale-[1.05] pointer-events-none"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>

          {/* Primary Action Button */}
          <div className="w-full relative group pt-2" id="apex2-primary-btn-wrapper">
            <div className="absolute -inset-1 rounded-3xl bg-[#00ffcc] blur-md opacity-35"></div>
            <a 
              href={registerUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="relative block w-full text-center bg-[#00ffcc] text-[#040811] font-black uppercase rounded-3xl py-4.5 transition-all duration-300 hover:scale-[1.01] select-none decoration-transparent cursor-pointer"
              style={{
                boxShadow: '0 0 22px rgba(0, 255, 204, 0.45)'
              }}
            >
              <span className="block text-2xl tracking-wider font-extrabold font-display leading-none">
                JOIN TELEGRAM
              </span>
              <span className="block text-[11px] font-bold tracking-widest text-[#040811]/90 mt-1.5 font-mono">
                ⚡ DEMANDING CHANNEL SIGNAL
              </span>
            </a>
          </div>

          {/* SYSTEM RESET COUNTER PILL */}
          <div className="bg-[#0b1019]/80 border border-white/5 py-3 px-8 rounded-full flex items-center justify-center shadow-md relative min-w-[260px] my-1" id="apex2-reset-timer">
            <span className="text-[13px] font-black font-mono uppercase tracking-widest text-[#94a3b8]">
              SYSTEM RESET IN: <span className="text-white font-black font-mono ml-0.5">{formatTime(timeLeft)}</span>
            </span>
          </div>

          {/* 3 GRID HOVER STATUS BOXES */}
          <div className="grid grid-cols-3 gap-3.5 w-full pt-2 font-display">
            
            {/* Box 1 (STATUS SECURE) */}
            <div className="bg-[#0b1019] border border-white/5 p-4 rounded-2xl flex flex-col items-center justify-center text-center transition-all duration-300 relative overflow-hidden h-[95px]">
              <ShieldCheck className="h-5 w-5 mb-1.5 text-[#00ffcc] animate-pulse" />
              <span className="text-[9.5px] text-slate-500 font-bold uppercase tracking-widest leading-none">STATUS</span>
              <p className="text-[11px] text-white font-black uppercase tracking-widest mt-1.5 font-mono leading-none flex items-center justify-center gap-1">
                <span className="inline-block w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse"></span>
                SECURE
              </p>
              {/* Glowing bottom line */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#00ffcc]"></div>
            </div>

            {/* Box 2 (AI BOT V9.0) */}
            <div className="bg-[#0b1019] border border-white/5 p-4 rounded-2xl flex flex-col items-center justify-center text-center transition-all duration-300 relative overflow-hidden h-[95px]">
              <Cpu className="h-5 w-5 mb-1.5 text-[#00ffcc]" />
              <span className="text-[9.5px] text-slate-500 font-bold uppercase tracking-widest leading-none">AI BOT</span>
              <p className="text-[11px] text-white font-black uppercase tracking-widest mt-1.5 font-mono leading-none">V9.0</p>
              {/* Glowing bottom line */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#00ffcc]"></div>
            </div>

            {/* Box 3 (ACTIVE USERS 3,105) */}
            <div className="bg-[#0b1019] border border-white/5 p-4 rounded-2xl flex flex-col items-center justify-center text-center transition-all duration-300 relative overflow-hidden h-[95px]">
              <Users className="h-5 w-5 mb-1.5 text-[#00ffcc]" />
              <span className="text-[9.5px] text-slate-500 font-bold uppercase tracking-widest leading-none">ACTIVE</span>
              <p className="text-[11px] text-[#00ffcc] font-black uppercase tracking-widest mt-1.5 font-mono leading-none">{activePlayers.toLocaleString()}</p>
              {/* Glowing bottom line */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#00ffcc]"></div>
            </div>

          </div>

          {/* MANAGED BY - APEX AD WORKS */}
          <div className="w-full flex justify-center pt-4" id="apex2-managed-by">
            <a 
              href="https://t.me/tech_apex"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[10px] sm:text-[11px] font-black font-mono tracking-widest text-[#00ffcc] uppercase py-1.5 px-6 rounded-full border border-[#00ffcc]/20 bg-[#00ffcc]/5 hover:bg-[#00ffcc]/15 transition-all duration-300 decoration-transparent cursor-pointer"
            >
              MANAGED BY - APEX AD WORKS (@tech_apex)
            </a>
          </div>

          {/* POLICIES & RULES SECTION */}
          <div className="w-full space-y-2 border-t border-white/5 pt-4" id="apex2-policies-section">
            <div className="flex items-center justify-between text-[11px] font-black uppercase tracking-widest text-slate-400 px-1">
              <span>Policies & Rules</span>
            </div>

            <div className="grid grid-cols-3 gap-2.5">
              <button
                onClick={() => setActiveModal('privacy')}
                className="bg-[#080d1a] border border-white/5 hover:border-[#00ffcc]/30 py-2.5 px-1.5 rounded-xl text-center text-[10px] font-bold text-slate-300 hover:text-white transition-all flex flex-col items-center justify-center gap-1 font-mono uppercase cursor-pointer"
              >
                <FileText className="h-3.5 w-3.5 text-slate-400" />
                Privacy
              </button>
              <button
                onClick={() => setActiveModal('terms')}
                className="bg-[#080d1a] border border-white/5 hover:border-[#00ffcc]/30 py-2.5 px-1.5 rounded-xl text-center text-[10px] font-bold text-slate-300 hover:text-white transition-all flex flex-col items-center justify-center gap-1 font-mono uppercase cursor-pointer"
              >
                <FileText className="h-3.5 w-3.5 text-slate-400" />
                Terms
              </button>
              <button
                onClick={() => setActiveModal('license')}
                className="bg-[#080d1a] border border-white/5 hover:border-[#00ffcc]/30 py-2.5 px-1.5 rounded-xl text-center text-[10px] font-bold text-slate-300 hover:text-white transition-all flex flex-col items-center justify-center gap-1 font-mono uppercase cursor-pointer"
              >
                <FileText className="h-3.5 w-3.5 text-slate-400" />
                License
              </button>
            </div>
          </div>

          {/* CORPORATE CONTACT */}
          <div className="w-full bg-[#080d1a] border border-white/5 rounded-2xl p-4 flex flex-col items-center justify-center gap-1 text-center shadow-lg" id="apex2-corporate-contact-section">
            <span className="text-[9px] font-mono font-bold tracking-widest text-[#00ffcc] uppercase">
              Corporate Contact
            </span>
            <a 
              href="mailto:support@magicclick365.site" 
              className="text-xs font-mono font-bold text-slate-200 hover:text-[#00ffcc] transition-all flex items-center gap-1.5 mt-1 select-all hover:underline"
            >
              <Mail className="h-3.5 w-3.5" />
              support@magicclick365.site
            </a>
          </div>

          {/* FORMAL COMPLIANCE DISCLAIMER */}
          <div className="w-full bg-[#080d1a]/40 border border-white/5 p-4 rounded-xl text-center shadow-md select-text" id="apex2-compliance-disclaimer-section">
            <p className="text-[9.5px] font-bold font-mono tracking-widest text-slate-400 uppercase mb-2">
              FORMAL COMPLIANCE DISCLAIMER
            </p>
            <p className="text-[9.5px] font-semibold text-slate-500 leading-relaxed uppercase tracking-wider text-justify">
              This platform serves strictly for scientific modeling, information distribution, and statistical modeling analysis of sequence structures. The Millionx Predictors System does not promote, host, direct, or facilitate wagering, predictions, casino gaming, color gaming, gambling, betting, or financial speculation. Subscribing to telemetry streams is intended purely for statistics logging and sports biomechanics research.
            </p>
          </div>

        </div>

        {/* Footer copyright block matching reference */}
        <footer className="text-center w-full z-10 pt-4 pb-2 cursor-default">
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
                className="absolute top-4 right-4 text-slate-400 hover:text-white p-1 hover:bg-white/5 rounded-full transition-all cursor-pointer"
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
                className="w-full py-3 bg-[#00ffcc] text-[#040811] font-black uppercase text-xs tracking-widest rounded-2xl hover:brightness-110 active:scale-[0.98] transition-all cursor-pointer"
              >
                ACKNOWLEDGE LOG
              </button>
            </div>
          </div>
        )}

      </div>
    );
  }

  return (
    <div 
      className="min-h-screen bg-[#05070b] font-sans text-slate-100 antialiased flex flex-col justify-between items-center py-10 px-4 relative overflow-hidden select-none" 
      id="landing-page-root"
    >
      
      {/* Subtle futuristic background glow */}
      <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] rounded-full blur-[140px] pointer-events-none pulsing-bg ${
        currentPath === '/gold1' ? 'bg-[#ffdd00]/10' : 'bg-cyber-cyan/10'
      }`}></div>

      {/* Main Body Centered Content */}
      <div className="flex-grow flex flex-col items-center justify-center max-w-sm w-full space-y-6 z-10" id="signals-center">
        
        {/* Title: JUNGLE HAAN */}
        {currentPath !== '/gold1' && (
          <h1 className="text-3xl font-black tracking-widest font-display text-center uppercase leading-tight select-none">
            <span className="text-cyber-cyan cyan-text-glow">JUNGLE</span>{' '}
            <span className="text-white text-shadow-white">HAAN</span>
            {currentPath === '/apex2' && (
              <span className="block text-[11px] text-[#00ffcc] font-mono tracking-widest mt-2.5 font-black animate-pulse bg-[#00ffcc]/10 py-1 px-4 rounded-full border border-[#00ffcc]/20 w-fit mx-auto">
                📡 APEX2 ACTIVE
              </span>
            )}
          </h1>
        )}

        {/* HIGH-FIDELITY AVATAR CIRCLE OR RECTANGULAR BANNER */}
        {currentPath === '/gold1' ? (
          <div className="relative group cursor-pointer w-full max-w-[280px] sm:max-w-[320px]" id="gold1-banner-container">
            {/* Golden Outer Radial Aura Glow */}
            <div className="absolute inset-x-0 inset-y-0 rounded-2xl blur-3xl bg-[#ffdd00]/25 opacity-90 transition-all duration-300"></div>

            {/* Glowing ring bezel */}
            <div 
              className="relative w-full aspect-square rounded-2xl bg-[#ffdd00]/15 p-1 border border-[#ffdd00]/35 transition-all duration-300 hover:border-[#ffdd00]/65"
              style={{
                boxShadow: '0 0 28px rgba(255, 221, 0, 0.35)'
              }}
            >
              {/* Inner Banner Container */}
              <div className="w-full h-full rounded-xl bg-dark-950 flex items-center justify-center relative overflow-hidden">
                <img 
                  src={goldBanner} 
                  alt="New games 2026 Free 2000" 
                  className="w-full h-full object-cover pointer-events-none rounded-xl"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>
        ) : (
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
        )}

        {/* REPLICA PRIMARY BUTTON "REGISTER NOW" */}
        <div className="w-full">
          <a 
            href={registerUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full text-center text-[#040811] font-black uppercase rounded-2xl p-4.5 transition-all hover:brightness-110 cursor-pointer select-none decoration-transparent"
            style={{
              background: currentPath === '/gold1' ? '#ffdd00' : '#00ffcc',
              boxShadow: currentPath === '/gold1' ? '0 0 24px rgba(255, 221, 0, 0.5)' : '0 0 24px rgba(0, 255, 204, 0.45)'
            }}
          >
            <span className="block text-xl tracking-widest font-black font-display leading-none">
              REGISTER NOW
            </span>
            {currentPath !== '/gold1' ? (
              <span className="block text-[11px] font-black tracking-widest text-[#040811]/90 mt-1.5 font-mono">
                ⚡ JUNGLE HAAN
              </span>
            ) : (
              <span className="block text-[11px] font-black tracking-widest text-[#040811]/90 mt-1.5 font-mono">
                ⚡ NEW LOBBY GAMES
              </span>
            )}
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
            <ShieldCheck className={`h-5 w-5 mb-2 animate-pulse ${currentPath === '/gold1' ? 'text-[#ffdd00]' : 'text-cyber-cyan'}`} />
            <span className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">STATUS</span>
            <p className="text-[11.5px] text-white font-black uppercase tracking-widest mt-1 font-mono">SECURE</p>
          </div>

          {/* Box 2 (AI BOT V9.0) */}
          <div className="bg-[#0b1019] border border-white/5 p-4 rounded-2xl flex flex-col items-center justify-center text-center transition-all duration-300 relative overflow-hidden">
            <Cpu className={`h-5 w-5 mb-2 ${currentPath === '/gold1' ? 'text-[#ffdd00]' : 'text-cyber-cyan'}`} />
            <span className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">AI BOT</span>
            <p className="text-[11.5px] text-white font-black uppercase tracking-widest mt-1 font-mono">V9.0</p>
          </div>

          {/* Box 3 (ACTIVE USERS 3,105) */}
          <div className="bg-[#0b1019] border border-white/5 p-4 rounded-2xl flex flex-col items-center justify-center text-center transition-all duration-300 relative overflow-hidden">
            <Users className={`h-5 w-5 mb-2 ${currentPath === '/gold1' ? 'text-[#ffdd00]' : 'text-cyber-cyan'}`} />
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
            className={`inline-flex items-center gap-2 text-[10px] sm:text-[11px] font-black font-mono tracking-widest text-slate-400 transition-all uppercase select-none active:scale-[0.98] py-1 px-3 rounded-full hover:bg-white/[0.02] border border-transparent hover:border-white/5 ${
              currentPath === '/gold1' ? 'hover:text-[#ffdd00]' : 'hover:text-[#00ffcc]'
            }`}
          >
            <span className="relative flex h-2 w-2">
              <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${
                currentPath === '/gold1' ? 'bg-[#ffdd00]' : 'bg-[#00ffcc]'
              }`}></span>
              <span className={`relative inline-flex rounded-full h-2 w-2 ${
                currentPath === '/gold1' ? 'bg-[#ffdd00]' : 'bg-[#00ffcc]'
              }`}></span>
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
