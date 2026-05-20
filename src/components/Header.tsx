import { Trophy, Search, Clock, Award, Shield } from 'lucide-react';

interface HeaderProps {
  searchTerm: string;
  setSearchTerm: (val: string) => void;
  selectedCategory: string;
  setSelectedCategory: (cat: string) => void;
  categories: string[];
}

export default function Header({
  searchTerm,
  setSearchTerm,
  selectedCategory,
  setSelectedCategory,
  categories
}: HeaderProps) {
  const formattedDate = new Date("2026-05-20T15:34:04Z").toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <header className="border-b-4 border-yellow-400 bg-blue-700 text-white shadow-xl" id="main-header">
      {/* Top Banner Bar with Date & Time Info in a dark high-contrast slot */}
      <div className="bg-slate-950 px-4 py-2.5 text-xs text-slate-300 md:px-8 border-b border-slate-800">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <div className="flex items-center space-x-4">
            <span className="flex items-center space-x-1.5 font-black text-yellow-400">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-500 opacity-75"></span>
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-red-600"></span>
              </span>
              <span className="tracking-wider text-[11px] uppercase">LIVE NEWS STREAM</span>
            </span>
            <span className="hidden text-slate-700 md:inline">|</span>
            <span className="hidden items-center space-x-1 text-slate-300 md:flex">
              <Clock className="h-3.5 w-3.5 text-yellow-400" />
              <span>UTC May 20, 2026 • 15:34:04</span>
            </span>
          </div>
          <div className="flex items-center space-x-4 text-xs font-bold">
            <span className="text-slate-400 hidden sm:inline">Coverage: Global Sports & Cricket</span>
            <span className="bg-red-600 px-3 py-0.5 rounded-full text-[10px] font-black animate-pulse text-white">
              LIVE UPDATES
            </span>
          </div>
        </div>
      </div>

      {/* Main Branding Logo & Search Bar */}
      <div className="mx-auto max-w-7xl px-4 py-5 md:px-8">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          {/* Logo Group */}
          <div className="flex items-center space-x-4 cursor-pointer" onClick={() => setSelectedCategory('All')}>
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-yellow-400 text-blue-900 shadow-md">
              <Trophy className="h-7 w-7 stroke-[2.5]" id="logo-trophy-icon" />
            </div>
            <div>
              <h1 className="text-3xl font-black italic tracking-tighter uppercase text-white leading-none">
                APEX<span className="text-yellow-400">SPORTS</span>
              </h1>
              <p className="font-sans text-[10px] font-black tracking-widest text-blue-200 uppercase mt-1">
                Vibrant Sports Media Group
              </p>
            </div>
          </div>

          {/* Search Box */}
          <div className="relative w-full max-w-md">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 text-slate-300">
              <Search className="h-4.5 w-4.5" />
            </div>
            <input
              type="text"
              placeholder="Search major sports articles, team rosters..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full rounded-lg border-2 border-blue-800 bg-blue-800/60 py-2.5 pl-10 pr-10 text-sm text-white placeholder-blue-200 shadow-inner focus:border-yellow-400 focus:bg-blue-900 focus:outline-none focus:ring-1 focus:ring-yellow-400 transition-all"
              id="sport-search-input"
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm('')}
                className="absolute right-3 top-3 rounded-full bg-blue-900/60 p-0.5 text-xs text-blue-200 hover:text-white"
              >
                ✕
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Categories Navigation Bar */}
      <div className="bg-blue-800 border-t border-blue-950 px-4 md:px-8">
        <div className="mx-auto max-w-7xl">
          <nav className="flex flex-wrap items-center justify-between gap-2 py-3.5 scrollbar-none">
            <div id="category-selector-container" className="flex flex-wrap items-center gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`rounded-lg px-4 py-2 text-xs font-black tracking-wider uppercase transition-all duration-150 ${
                    selectedCategory === cat
                      ? 'bg-yellow-400 text-blue-950 shadow-md transform scale-102'
                      : 'bg-blue-700/60 text-white border border-blue-900 hover:bg-yellow-450 hover:bg-yellow-400 hover:text-blue-950'
                  }`}
                  id={`category-btn-${cat.toLowerCase().replace(/\s+/g, '-')}`}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div className="hidden lg:flex items-center space-x-2 text-xs font-bold text-blue-100">
              <span className="font-sans text-yellow-300">{formattedDate}</span>
              <span>|</span>
              <span className="flex items-center text-yellow-300 font-black gap-1">
                <Shield className="h-3.5 w-3.5" /> VERIFIED COVERAGE
              </span>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
