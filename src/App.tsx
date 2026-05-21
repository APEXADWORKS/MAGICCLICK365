import { useState, useMemo } from 'react';
import Header from './components/Header';
import PetCompanionCenter from './components/PetCompanionCenter';
import HeroBlog from './components/HeroBlog';
import BlogGrid from './components/BlogGrid';
import VetDirectory from './components/VetDirectory';
import BlogDetailModal from './components/BlogDetailModal';
import { PET_BLOGS } from './data/petData';
import { BlogPost } from './types';
import { Award, Sparkles, Filter, Bookmark, Heart, ShieldCheck, Mail, ArrowUpRight } from 'lucide-react';

export default function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedBlog, setSelectedBlog] = useState<BlogPost | null>(null);

  const categories = ['All', 'Dogs', 'Cats', 'Birds', 'Rabbits', 'Exotics', 'Veterinary References'];

  // Filter blogs by search term and tab selection
  const filteredBlogs = useMemo(() => {
    return PET_BLOGS.filter((blog) => {
      // 1. Tab category Filter
      if (selectedCategory !== 'All' && selectedCategory !== 'Veterinary References') {
        if (blog.category !== selectedCategory) return false;
      }
      
      // If "Veterinary References" is selected, we render ONLY the directory
      if (selectedCategory === 'Veterinary References') {
        return false;
      }

      // 2. Search Term query
      if (searchTerm.trim() !== '') {
        const query = searchTerm.toLowerCase();
        const matchesTitle = blog.title.toLowerCase().includes(query);
        const matchesBrief = blog.brief.toLowerCase().includes(query);
        const matchesContent = blog.content.toLowerCase().includes(query);
        const matchesTags = blog.tags.some((t) => t.toLowerCase().includes(query));
        const matchesAuthor = blog.author.toLowerCase().includes(query);
        return matchesTitle || matchesBrief || matchesContent || matchesTags || matchesAuthor;
      }

      return true;
    });
  }, [selectedCategory, searchTerm]);

  // Establish feature article
  const heroBlog = useMemo(() => {
    if (searchTerm.trim() !== '') return null;

    if (selectedCategory === 'All') {
      return PET_BLOGS.find((b) => b.featured) || PET_BLOGS[0];
    } else {
      return PET_BLOGS.find((b) => b.category === selectedCategory) || null;
    }
  }, [selectedCategory, searchTerm]);

  // Feed selection (filter out hero)
  const gridBlogs = useMemo(() => {
    if (!heroBlog) return filteredBlogs;
    return filteredBlogs.filter((b) => b.id !== heroBlog.id);
  }, [filteredBlogs, heroBlog]);

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800 antialiased" id="root-portal">
      {/* Global Branding Header */}
      <Header
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        selectedCategory={selectedCategory}
        setSelectedCategory={(cat) => {
          setSelectedCategory(cat);
          setSearchTerm(''); // Flush search when switching views
        }}
        categories={categories}
      />

      <main className="mx-auto max-w-7xl px-4 py-6 space-y-8 md:px-8 md:py-8" id="primary-content-frame">
        {/* Companion Interactive Tracker Ribbon - Hide if looking exclusively at directories */}
        {selectedCategory !== 'Veterinary References' && (
          <section id="companion-tracker-section" className="space-y-3">
            <PetCompanionCenter />
          </section>
        )}

        {/* Specialized Notification Callout Badge */}
        {selectedCategory === 'Cats' && (
          <div className="rounded-2xl bg-gradient-to-r from-emerald-800 to-emerald-700 p-6 text-white shadow-xl border-b-4 border-amber-400 border-2 border-slate-800 text-left">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <div className="space-y-1">
                <span className="inline-flex items-center gap-1 rounded bg-slate-950/40 px-3 py-1 text-[10px] font-black uppercase tracking-widest text-amber-300">
                  <Sparkles className="h-3.5 w-3.5 text-amber-350" /> IMPORTANT VETERINARY HIGHLIGHTS
                </span>
                <h3 className="text-xl font-black uppercase tracking-tight md:text-2xl">
                  Deciphering Feline Hydration and Kidney Health?
                </h3>
                <p className="text-xs text-emerald-100 max-w-2xl leading-relaxed font-semibold">
                  Cats possess low biological thirst drives. We strongly recommend feeding moisture-rich formulas to safeguard against renal deposits. Read our full directory references below for specialized veterinary reviews.
                </p>
              </div>
              <button
                onClick={() => setSelectedCategory('Veterinary References')}
                className="rounded-xl bg-amber-400 px-5 py-2.5 text-xs font-black uppercase tracking-wider text-slate-950 shadow-md transition-all duration-200 hover:bg-amber-300 cursor-pointer self-start md:self-auto shrink-0 select-none"
              >
                Open Veterinary Directory
              </button>
            </div>
          </div>
        )}

        {/* Dynamic Route Rendering based on selections */}
        {selectedCategory === 'Veterinary References' ? (
          <section id="directory-exclusive-container">
            <VetDirectory />
          </section>
        ) : (
          <>
            {/* Featured Blog */}
            {heroBlog && (
              <section id="hero-feature-blog-section" className="transition-all duration-200">
                <HeroBlog blog={heroBlog} onReadMore={setSelectedBlog} />
              </section>
            )}

            {/* Standard Grid & Sidebar */}
            <section id="blogs-grid-section">
              <BlogGrid
                blogs={gridBlogs}
                onSelectBlog={setSelectedBlog}
                selectedCategory={selectedCategory}
              />
            </section>

            {/* If All is active, add inline-directory highlights for premium deep links structure */}
            {selectedCategory === 'All' && (
              <section id="all-directory-section" className="border-t-2 border-slate-200 pt-8 mt-12 bg-white rounded-2xl p-6 border-2 shadow-lg text-left">
                <div className="mb-4 flex items-center justify-between border-b border-slate-100 pb-3">
                  <div className="flex items-center gap-2">
                    <Bookmark className="h-6 w-6 text-amber-500 fill-amber-400/25" />
                    <h3 className="text-md font-black uppercase tracking-tight text-slate-900">
                      Top Verified Veterinary Directories
                    </h3>
                  </div>
                  <button
                    onClick={() => setSelectedCategory('Veterinary References')}
                    className="text-xs font-black uppercase tracking-wider text-emerald-700 hover:text-amber-500 cursor-pointer"
                  >
                    View Full Directory →
                  </button>
                </div>
                <p className="text-xs text-slate-500 font-semibold mb-4">
                  Require official genetic breed risks, toxic catalog indexes, or certified clinical dosage tools? Direct connect to world class associations:
                </p>
                <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
                  <a
                    href="https://www.avma.org"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between rounded-xl border-2 p-3 text-xs font-black text-slate-800 bg-slate-50 hover:bg-emerald-50 hover:border-emerald-600 hover:text-emerald-800 transition-all shadow-sm"
                  >
                    <span>AVMA Web</span>
                    <ArrowUpRight className="h-3.5 w-3.5 text-emerald-700 ml-1.5 shrink-0" />
                  </a>
                  <a
                    href="https://www.aspca.org"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between rounded-xl border-2 p-3 text-xs font-black text-slate-800 bg-slate-50 hover:bg-emerald-50 hover:border-emerald-600 hover:text-emerald-800 transition-all shadow-sm"
                  >
                    <span>ASPCA Rescue</span>
                    <ArrowUpRight className="h-3.5 w-3.5 text-emerald-700 ml-1.5 shrink-0" />
                  </a>
                  <a
                    href="https://www.petmd.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between rounded-xl border-2 p-3 text-xs font-black text-slate-800 bg-slate-50 hover:bg-emerald-50 hover:border-emerald-600 hover:text-emerald-800 transition-all shadow-sm"
                  >
                    <span>PetMD Clinic</span>
                    <ArrowUpRight className="h-3.5 w-3.5 text-emerald-700 ml-1.5 shrink-0" />
                  </a>
                  <a
                    href="https://www.rspca.org.uk"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between rounded-xl border-2 p-3 text-xs font-black text-slate-800 bg-slate-50 hover:bg-emerald-50 hover:border-emerald-600 hover:text-emerald-800 transition-all shadow-sm"
                  >
                    <span>RSPCA Standards</span>
                    <ArrowUpRight className="h-3.5 w-3.5 text-emerald-700 ml-1.5 shrink-0" />
                  </a>
                  <a
                    href="https://www.vet.cornell.edu"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between rounded-xl border-2 p-3 text-xs font-black text-slate-800 bg-slate-50 hover:bg-emerald-50 hover:border-emerald-600 hover:text-emerald-800 transition-all shadow-sm"
                  >
                    <span>Cornell Science</span>
                    <ArrowUpRight className="h-3.5 w-3.5 text-emerald-700 ml-1.5 shrink-0" />
                  </a>
                </div>
              </section>
            )}
          </>
        )}
      </main>

      {/* Popover Blog Detail Reader View */}
      <BlogDetailModal
        blog={selectedBlog}
        onClose={() => setSelectedBlog(null)}
      />

      {/* Global Footer in premium dark slate */}
      <footer className="mt-20 border-t-4 border-amber-400 bg-slate-950 text-white py-12" id="global-footer">
        <div className="mx-auto max-w-7xl px-4 md:px-8 text-left">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
            <div className="space-y-3">
              <h2 className="text-lg font-black tracking-tighter uppercase leading-none italic flex items-center gap-1">
                <Heart className="h-5 w-5 text-amber-400 fill-amber-400" /> PAWFECT<span className="text-amber-400">CARE</span>
              </h2>
              <p className="font-sans text-xs text-slate-400 leading-relaxed font-semibold">
                An expert-level journalistic blog, behavioral archive, and daily companion tracking module dedicated to standard-of-care guidelines for cats, dogs, rabbits, and exotic companions.
              </p>
            </div>
            
            <div>
              <h4 className="text-xs font-black uppercase tracking-wider text-amber-400">
                Veterinary Resources
              </h4>
              <ul className="mt-3 space-y-1.5 text-xs font-semibold">
                <li>
                  <a href="https://www.avma.org" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-amber-400 flex items-center gap-0.5 transition-colors">
                    AVMA Official <ArrowUpRight className="h-3.5 w-3.5" />
                  </a>
                </li>
                <li>
                  <a href="https://www.aspca.org" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-amber-400 flex items-center gap-0.5 transition-colors">
                    ASPCA Pet Safety <ArrowUpRight className="h-3.5 w-3.5" />
                  </a>
                </li>
                <li>
                  <a href="https://www.petmd.com" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-amber-400 flex items-center gap-0.5 transition-colors">
                    PetMD Veterinary <ArrowUpRight className="h-3.5 w-3.5" />
                  </a>
                </li>
                <li>
                  <a href="https://www.vet.cornell.edu" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-amber-400 flex items-center gap-0.5 transition-colors">
                    Cornell Feline Center <ArrowUpRight className="h-3.5 w-3.5" />
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-xs font-black uppercase tracking-wider text-amber-400">
                Companion Directories
              </h4>
              <ul className="mt-3 space-y-1.5 text-xs text-slate-400 font-semibold">
                <li className="cursor-pointer hover:text-amber-400" onClick={() => setSelectedCategory('Dogs')}>Canine (Dogs)</li>
                <li className="cursor-pointer hover:text-amber-400" onClick={() => setSelectedCategory('Cats')}>Felines (Cats)</li>
                <li className="cursor-pointer hover:text-amber-400" onClick={() => setSelectedCategory('Birds')}>Avian (Birds)</li>
                <li className="cursor-pointer hover:text-amber-400" onClick={() => setSelectedCategory('Rabbits')}>Lagomorphs (Rabbits)</li>
              </ul>
            </div>

            <div>
              <h4 className="text-xs font-black uppercase tracking-wider text-amber-400">
                Scientific Quality Assurance
              </h4>
              <p className="mt-3 font-sans text-xs text-slate-400 leading-relaxed font-semibold">
                All long-form advice materials are authored by certified herpetologists, feline behaviorists, and DVM experts. References are audited weekly.
              </p>
            </div>
          </div>

          <div className="mt-12 border-t border-slate-900 pt-6 text-center text-xs text-slate-500 font-bold uppercase tracking-wider">
            <p>© 2026 Pawperfect Media Group. All reviews are edited in compliance with Professional Veterinary Publishing Guidelines.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
