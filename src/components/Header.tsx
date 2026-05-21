import { PawPrint, Search, Heart, Clock, ShieldCheck } from 'lucide-react';

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
  const formattedDate = new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <header className="border-b-4 border-amber-400 bg-emerald-700 text-white shadow-xl animate-fade-in" id="main-header">
      {/* Top Banner Bar with Date & Time Info in a dark high-contrast slot */}
      <div className="bg-slate-950 px-4 py-2.5 text-xs text-slate-300 md:px-8 border-b border-slate-800">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <div className="flex items-center space-x-4">
            <span className="flex items-center space-x-1.5 font-black text-amber-400 animate-pulse">
              <Heart className="h-4 w-4 text-red-500 fill-red-500" />
              <span className="tracking-wider text-[11px] uppercase">PAWFECT EXPERT ADVICE</span>
            </span>
            <span className="hidden text-slate-700 md:inline">|</span>
            <span className="hidden items-center space-x-1 text-slate-300 md:flex">
              <Clock className="h-3.5 w-3.5 text-amber-400" />
              <span>{formattedDate} • veterinary portal</span>
            </span>
          </div>
          <div className="flex items-center space-x-4 text-xs font-bold">
            <span className="text-slate-400 hidden sm:inline">Certified Veterinary Guides</span>
            <span className="bg-amber-500 text-slate-950 px-3 py-0.5 rounded-full text-[10px] font-black tracking-wider uppercase">
              100% EXPERT APPORTIONED
            </span>
          </div>
        </div>
      </div>

      {/* Main Branding Logo & Search Bar */}
      <div className="mx-auto max-w-7xl px-4 py-5 md:px-8">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          {/* Logo Group */}
          <div className="flex items-center space-x-4 cursor-pointer group" onClick={() => setSelectedCategory('All')}>
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-400 text-emerald-950 shadow-md group-hover:scale-105 transition-transform duration-200">
              <PawPrint className="h-7 w-7 stroke-[2.5]" id="logo-paw-icon" />
            </div>
            <div>
              <h1 className="text-3xl font-black tracking-tighter uppercase text-white leading-none">
                PAWFECT<span className="text-amber-400">CARE</span>
              </h1>
              <p className="font-sans text-[10px] font-black tracking-widest text-emerald-100 uppercase mt-1">
                Elite Pet Editorial & Companion Science
              </p>
            </div>
          </div>

          {/* Search Box */}
          <div className="relative w-full max-w-md">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 text-slate-350">
              <Search className="h-4.5 w-4.5 text-emerald-200" />
            </div>
            <input
              type="text"
              placeholder="Search pet health articles, care guides, species..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full rounded-lg border-2 border-emerald-800 bg-emerald-800/40 py-2.5 pl-10 pr-10 text-sm text-white placeholder-emerald-200 shadow-inner focus:border-amber-400 focus:bg-emerald-900 focus:outline-none focus:ring-1 focus:ring-amber-400 transition-all font-semibold"
              id="pet-search-input"
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm('')}
                className="absolute right-3 top-3 rounded-full bg-emerald-900/60 p-0.5 text-xs text-emerald-200 hover:text-white"
              >
                ✕
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Categories Navigation Bar */}
      <div className="bg-emerald-800 border-t border-emerald-950 px-4 md:px-8">
        <div className="mx-auto max-w-7xl">
          <nav className="flex flex-wrap items-center justify-between gap-2 py-3.5 scrollbar-none">
            <div id="category-selector-container" className="flex flex-wrap items-center gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`rounded-lg px-4 py-2 text-xs font-black tracking-wider uppercase transition-all duration-150 ${
                    selectedCategory === cat
                      ? 'bg-amber-400 text-slate-950 shadow-md transform scale-102 font-black'
                      : 'bg-emerald-700/60 text-white border border-emerald-900 hover:bg-amber-400 hover:text-slate-950'
                  }`}
                  id={`category-btn-${cat.toLowerCase().replace(/\s+/g, '-')}`}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div className="hidden lg:flex items-center space-x-2 text-xs font-bold text-emerald-100">
              <span className="font-sans text-amber-300">Welfare First Initiative</span>
              <span>|</span>
              <span className="flex items-center text-amber-300 font-black gap-1">
                <ShieldCheck className="h-4 w-4" /> CLINICALLY AUDITED
              </span>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
