import { useState, useMemo } from 'react';
import Header from './components/Header';
import MatchesCenter from './components/MatchesCenter';
import HeroArticle from './components/HeroArticle';
import NewsGrid from './components/NewsGrid';
import CricketDirectory from './components/CricketDirectory';
import ArticleDetailModal from './components/ArticleDetailModal';
import { SPORTS_ARTICLES, LIVE_SCORES } from './data/newsData';
import { Article } from './types';
import { ExternalLink, Award, Sparkles, Filter, Bookmark, HelpCircle } from 'lucide-react';

export default function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);

  const categories = ['All', 'Cricket', 'Football', 'Tennis', 'Basketball', 'Cricket Web Directory'];

  // Filter articles by search term and category
  const filteredArticles = useMemo(() => {
    return SPORTS_ARTICLES.filter((article) => {
      // 1. Category Filter
      if (selectedCategory !== 'All' && selectedCategory !== 'Cricket Web Directory') {
        if (article.category !== selectedCategory) return false;
      }
      // If Cricket Web Directory is active, articles are hidden, directory is rendered
      if (selectedCategory === 'Cricket Web Directory') {
        return false;
      }

      // 2. Search Term Filter
      if (searchTerm.trim() !== '') {
        const query = searchTerm.toLowerCase();
        const matchesTitle = article.title.toLowerCase().includes(query);
        const matchesBrief = article.brief.toLowerCase().includes(query);
        const matchesContent = article.content.toLowerCase().includes(query);
        const matchesTags = article.tags.some((tag) => tag.toLowerCase().includes(query));
        const matchesAuthor = article.author.toLowerCase().includes(query);
        return matchesTitle || matchesBrief || matchesContent || matchesTags || matchesAuthor;
      }

      return true;
    });
  }, [selectedCategory, searchTerm]);

  // Determine the featured hero article to display at the top
  const heroArticle = useMemo(() => {
    // If search term is present, don't show hero layout (let search results show in grid)
    if (searchTerm.trim() !== '') return null;
    
    // Find the featured article of the current filter
    if (selectedCategory === 'All') {
      return SPORTS_ARTICLES.find((a) => a.featured) || SPORTS_ARTICLES[0];
    } else {
      return SPORTS_ARTICLES.find((a) => a.category === selectedCategory) || null;
    }
  }, [selectedCategory, searchTerm]);

  // Adjust remaining secondary grid articles (excluding current hero to avoid duplication)
  const gridArticles = useMemo(() => {
    if (!heroArticle) return filteredArticles;
    return filteredArticles.filter((a) => a.id !== heroArticle.id);
  }, [filteredArticles, heroArticle]);

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800 antialiased" id="root-portal">
      {/* Header element orchestrating global categories & queries */}
      <Header
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        selectedCategory={selectedCategory}
        setSelectedCategory={(cat) => {
          setSelectedCategory(cat);
          setSearchTerm(''); // Clear search when switching tabs
        }}
        categories={categories}
      />

      {/* Main Container */}
      <main className="mx-auto max-w-7xl px-4 py-6 space-y-8 md:px-8 md:py-8" id="primary-content-frame">
        {/* Live Matches Ribbon / Scores Panel - Hide if looking exclusively at directory */}
        {selectedCategory !== 'Cricket Web Directory' && (
          <section id="scores-section" className="space-y-3">
            <MatchesCenter scores={LIVE_SCORES} selectedSportFilter={selectedCategory} />
          </section>
        )}

        {/* Cricket Portals Sticky Information bar in broadcast style */}
        {selectedCategory === 'Cricket' && (
          <div className="rounded-2xl bg-gradient-to-r from-blue-800 to-blue-700 p-6 text-white shadow-xl border-b-4 border-yellow-400 border-2 border-slate-800">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <div className="space-y-1">
                <span className="inline-flex items-center gap-1 rounded bg-slate-950/40 px-3 py-1 text-[10px] font-black uppercase tracking-widest text-yellow-300">
                  <Sparkles className="h-3.5 w-3.5 inline text-yellow-300" /> QUICK NAVIGATION OPTIONS
                </span>
                <h3 className="text-xl font-black uppercase tracking-tight md:text-2xl">
                  Ball-by-Ball Livescore Commentary Guides?
                </h3>
                <p className="text-xs text-blue-100 max-w-2xl leading-relaxed font-semibold">
                  We've curated an outbound guide of the absolute best cricket portals across the web, featuring live scores like <strong>ESPNcricinfo</strong>, <strong>Cricbuzz</strong>, and <strong>ICC Official Hub</strong>. Filter by the directory tab or view below.
                </p>
              </div>
              <button
                onClick={() => setSelectedCategory('Cricket Web Directory')}
                className="rounded-xl bg-yellow-400 px-5  py-2.5 text-xs font-black uppercase tracking-wider text-slate-950 shadow-md transition-all duration-200 hover:bg-yellow-300 cursor-pointer self-start md:self-auto shrink-0"
              >
                Open Web Directory
              </button>
            </div>
          </div>
        )}

        {/* Layout Routing based on category selection */}
        {selectedCategory === 'Cricket Web Directory' ? (
          <section id="directory-exclusive-container">
            <CricketDirectory />
          </section>
        ) : (
          <>
            {/* Hero Featured news editorial card */}
            {heroArticle && (
              <section id="hero-feature-section" className="transition-all duration-200">
                <HeroArticle article={heroArticle} onReadMore={setSelectedArticle} />
              </section>
            )}

            {/* Standard Grid and Sidebar */}
            <section id="news-grid-section">
              <NewsGrid
                articles={gridArticles}
                onSelectArticle={setSelectedArticle}
                selectedCategory={selectedCategory}
              />
            </section>

            {/* If looking at Cricket, also render the Directory in-line at the bottom for completeness */}
            {selectedCategory === 'Cricket' && (
              <section id="inline-directory-section" className="border-t-2 border-slate-200 pt-8 mt-12">
                <div className="mb-4 flex items-center gap-2">
                  <Award className="h-6 w-6 text-blue-700" />
                  <span className="text-xs font-black text-slate-400 uppercase tracking-widest leading-none">
                    Scroll down for Cricket Portals Reference Chart
                  </span>
                </div>
                <CricketDirectory />
              </section>
            )}
            
            {/* If looking at All, render the Directory highlights too to provide maximum structural depth */}
            {selectedCategory === 'All' && (
              <section id="all-directory-section" className="border-t-2 border-slate-200 pt-8 mt-12 bg-white rounded-2xl p-6 border-2 shadow-lg">
                <div className="mb-4 flex items-center justify-between border-b border-slate-100 pb-3">
                  <div className="flex items-center gap-2">
                    <Bookmark className="h-6 w-6 text-yellow-500 fill-yellow-400" />
                    <h3 className="text-md font-black uppercase tracking-tight text-slate-900">
                      Top Outbound Cricket Platforms
                    </h3>
                  </div>
                  <button
                    onClick={() => setSelectedCategory('Cricket Web Directory')}
                    className="text-xs font-black uppercase tracking-wider text-blue-700 hover:text-yellow-500"
                  >
                    View Full Directory →
                  </button>
                </div>
                <p className="text-xs text-slate-500 font-semibold mb-4">
                  Need direct ball-by-ball match listings or tournament highlights? Connect to the world's most reputable outlets listed here:
                </p>
                <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
                  <a
                    href="https://www.espncricinfo.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between rounded-xl border-2 p-3 text-xs font-black text-slate-800 bg-slate-50 hover:bg-blue-50 hover:border-blue-600 hover:text-blue-800 transition-all"
                  >
                    <span>ESPNcricinfo</span>
                    <ExternalLink className="h-3.5 w-3.5 text-blue-700 ml-1.5 shrink-0" />
                  </a>
                  <a
                    href="https://www.cricbuzz.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between rounded-xl border-2 p-3 text-xs font-black text-slate-800 bg-slate-50 hover:bg-blue-50 hover:border-blue-600 hover:text-blue-800 transition-all"
                  >
                    <span>Cricbuzz</span>
                    <ExternalLink className="h-3.5 w-3.5 text-blue-700 ml-1.5 shrink-0" />
                  </a>
                  <a
                    href="https://www.icc-cricket.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between rounded-xl border-2 p-3 text-xs font-black text-slate-800 bg-slate-50 hover:bg-blue-50 hover:border-blue-600 hover:text-blue-800 transition-all"
                  >
                    <span>ICC Governance</span>
                    <ExternalLink className="h-3.5 w-3.5 text-blue-700 ml-1.5 shrink-0" />
                  </a>
                  <a
                    href="https://www.wisden.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between rounded-xl border-2 p-3 text-xs font-black text-slate-800 bg-slate-50 hover:bg-blue-50 hover:border-blue-600 hover:text-blue-800 transition-all"
                  >
                    <span>Wisden Almanac</span>
                    <ExternalLink className="h-3.5 w-3.5 text-blue-700 ml-1.5 shrink-0" />
                  </a>
                  <a
                    href="https://www.skysports.com/cricket"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between rounded-xl border-2 p-3 text-xs font-black text-slate-800 bg-slate-50 hover:bg-blue-50 hover:border-blue-600 hover:text-blue-800 transition-all"
                  >
                    <span>Sky Sports</span>
                    <ExternalLink className="h-3.5 w-3.5 text-blue-700 ml-1.5 shrink-0" />
                  </a>
                </div>
              </section>
            )}
          </>
        )}
      </main>

      {/* Popover Article Detail Reader Screen */}
      <ArticleDetailModal
        article={selectedArticle}
        onClose={() => setSelectedArticle(null)}
      />

      {/* Portal Global Footer copyright block styled in cosmic dark / bold yellow of Vibrant Palette */}
      <footer className="mt-20 border-t-4 border-yellow-400 bg-slate-950 text-white py-12" id="global-footer">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
            <div className="space-y-3">
              <h2 className="text-lg font-black tracking-tighter uppercase leading-none italic">
                APEX <span className="text-yellow-400">SPORTS</span>
              </h2>
              <p className="font-sans text-xs text-slate-400 leading-relaxed font-semibold">
                An premium journalistic sports commentary repository and digital guide dedicated to tactical analysis, ball mechanics, and official cricket directory indices.
              </p>
            </div>
            
            <div>
              <h4 className="text-xs font-black uppercase tracking-wider text-yellow-400">
                Cricket Reference Guides
              </h4>
              <ul className="mt-3 space-y-1.5 text-xs font-semibold">
                <li>
                  <a href="https://www.espncricinfo.com" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-yellow-400 flex items-center gap-0.5 transition-colors">
                    ESPNcricinfo Portal <ExternalLink className="h-3 w-3" />
                  </a>
                </li>
                <li>
                  <a href="https://www.cricbuzz.com" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-yellow-400 flex items-center gap-0.5 transition-colors">
                    Cricbuzz Commentary <ExternalLink className="h-3 w-3" />
                  </a>
                </li>
                <li>
                  <a href="https://www.icc-cricket.com" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-yellow-400 flex items-center gap-0.5 transition-colors">
                    ICC Official Standings <ExternalLink className="h-3 w-3" />
                  </a>
                </li>
                <li>
                  <a href="https://www.wisden.com" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-yellow-400 flex items-center gap-0.5 transition-colors">
                    Wisden Cricket Almanac <ExternalLink className="h-3 w-3" />
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-xs font-black uppercase tracking-wider text-yellow-400">
                Sports Categories
              </h4>
              <ul className="mt-3 space-y-1.5 text-xs text-slate-400 font-semibold">
                <li className="cursor-pointer hover:text-yellow-400" onClick={() => setSelectedCategory('Cricket')}>International Cricket</li>
                <li className="cursor-pointer hover:text-yellow-400" onClick={() => setSelectedCategory('Football')}>European Football</li>
                <li className="cursor-pointer hover:text-yellow-400" onClick={() => setSelectedCategory('Basketball')}>American Basketball</li>
                <li className="cursor-pointer hover:text-yellow-400" onClick={() => setSelectedCategory('Tennis')}>Grand Slams Tennis</li>
              </ul>
            </div>

            <div>
              <h4 className="text-xs font-black uppercase tracking-wider text-yellow-400">
                Editorial Integrity
              </h4>
              <p className="mt-3 font-sans text-xs text-slate-400 leading-relaxed font-semibold">
                All digital content is curated by a certified team of sports scientists. Indices and reference links are audited weekly to ensure perfect accessibility.
              </p>
            </div>
          </div>

          <div className="mt-12 border-t border-slate-900 pt-6 text-center text-xs text-slate-500 font-bold uppercase tracking-wider">
            <p>© 2026 Apex Sports Media Group. Curated in compliance with Sports Publication Guidelines. All registered imagery belongs to their respective hosts.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
