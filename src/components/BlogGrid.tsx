import React, { useState } from 'react';
import { Star, ShieldAlert, ArrowRight, ShieldCheck } from 'lucide-react';
import { BlogPost } from '../types';

interface BlogGridProps {
  blogs: BlogPost[];
  selectedCategory: string;
  onSelectBlog: (blog: BlogPost) => void;
}

export default function BlogGrid({
  blogs,
  selectedCategory,
  onSelectBlog
}: BlogGridProps) {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [pollVotes, setPollVotes] = useState({
    dog: 145,
    cat: 132,
    other: 48
  });
  const [voted, setVoted] = useState(false);

  const totalVotes = pollVotes.dog + pollVotes.cat + pollVotes.other;

  const handleVote = (option: 'dog' | 'cat' | 'other') => {
    if (voted) return;
    setPollVotes(prev => ({
      ...prev,
      [option]: prev[option] + 1
    }));
    setVoted(true);
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 animate-fade-in" id="blog-grid-module">
      {/* Primary Blogs Column */}
      <div className="lg:col-span-8 space-y-6">
        <div className="flex items-center justify-between border-b-2 border-slate-200 pb-3">
          <h3 className="text-xl font-black uppercase tracking-tight text-slate-900 md:text-2xl text-left">
            {selectedCategory === 'All' ? 'Latest Expert Blog Reports' : `${selectedCategory} Manuals`}
          </h3>
          <span className="text-xs font-black uppercase text-slate-500 bg-slate-200 px-3 py-1 rounded-full">
            {blogs.length} {blogs.length === 1 ? 'article' : 'articles'} found
          </span>
        </div>

        {blogs.length === 0 ? (
          <div className="rounded-2xl border-2 border-dashed border-slate-300 p-12 text-center text-slate-550 bg-white">
            <p className="text-lg font-black uppercase text-slate-800">No blogs match your filter metrics.</p>
            <p className="mt-1.5 text-xs text-slate-500 font-semibold">Try selecting another pet companion category or refining your search query above.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {blogs.map((item) => (
              <article
                key={item.id}
                className="group flex flex-col justify-between overflow-hidden rounded-2xl border-2 border-slate-200 bg-white shadow-sm transition-all duration-300 hover:scale-[1.015] hover:border-emerald-600 hover:shadow-xl border-l-4 border-l-emerald-600"
                id={`blog-card-${item.id}`}
              >
                <div className="text-left">
                  {/* Image cover header */}
                  <div className="relative h-48 w-full overflow-hidden bg-slate-900">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-3 left-3 rounded-md bg-emerald-700 text-white font-black px-2.5 py-1 text-[9px] uppercase tracking-wider shadow">
                      {item.category}
                    </div>
                  </div>

                  {/* Card Content body */}
                  <div className="p-5">
                    <div className="flex items-center space-x-2 text-[10px] font-black uppercase tracking-wider text-slate-400">
                      <span>{item.date}</span>
                      <span>•</span>
                      <span className="text-emerald-600">{item.readTime}</span>
                    </div>

                    <h4 className="mt-2.5 text-lg font-black uppercase tracking-tight text-slate-900 line-clamp-2 transition-colors duration-200 group-hover:text-emerald-700">
                      {item.title}
                    </h4>

                    <p className="mt-2 text-xs text-slate-550 leading-relaxed line-clamp-3 font-semibold text-slate-600">
                      {item.brief}
                    </p>

                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {item.tags.map((tg) => (
                        <span
                          key={tg}
                          className="rounded bg-emerald-50 text-emerald-800 font-extrabold px-2 py-0.5 text-[9px] uppercase tracking-wide border border-emerald-100"
                        >
                          #{tg}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Action Foot */}
                <div className="border-t border-slate-100 p-5 pt-3 flex items-center justify-between bg-slate-50/50">
                  <span className="text-xs font-black uppercase text-slate-500 truncate max-w-[120px]">By {item.author}</span>
                  <button
                    onClick={() => onSelectBlog(item)}
                    className="flex items-center gap-1 text-xs font-black uppercase tracking-wider text-emerald-700 hover:text-amber-500 transition-colors select-none cursor-pointer"
                  >
                    Read Blog →
                  </button>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>

      {/* Sidebar with interactive tools */}
      <div className="lg:col-span-4 space-y-6">
        {/* Stat / Alert Card (Elite Emerald Card) */}
        <div className="rounded-2xl bg-emerald-800 p-6 text-white shadow-xl border-b-4 border-amber-400 text-left">
          <h2 className="text-lg font-black uppercase tracking-tight mb-4 flex items-center gap-2">
            <span className="w-2.5 h-6 bg-amber-400 inline-block rounded-sm"></span>
            Toxic Alert Index
          </h2>
          <h4 className="font-extrabold uppercase text-xs text-amber-300 tracking-wider">The Lily Risk in Feline Households</h4>
          <p className="mt-2.5 font-sans text-xs text-emerald-100 leading-relaxed font-semibold">
            All plants of the Lilium species (Easter, Tiger, Asiatic, and Stargazer lilies) carry high toxicity hazards to domestic cats. Ingestion of even a single leaf or pollen dust can cause immediate, irreversible acute renal necrosis within 36 hours. If keeping indoor cats, protect them by maintaining a absolute 100% lily-free zone inside and outside the property boundary.
          </p>
          <div className="mt-4 border-t border-emerald-750 border-emerald-700 pt-3 flex items-center justify-between">
            <span className="font-mono text-[9px] text-emerald-200 font-black uppercase tracking-wider">Source: ASPCA Hotline</span>
            <span className="text-[10px] bg-amber-400 text-slate-900 font-black px-1.5 py-0.5 rounded shadow">CAT EXTREME RISK</span>
          </div>
        </div>

        {/* Dynamic Companion Poll */}
        <div className="rounded-2xl border-2 border-slate-200 bg-white p-5 shadow-lg border-l-4 border-l-amber-500 text-left">
          <div className="flex items-center gap-2 border-b border-slate-100 pb-3">
            <Star className="h-5 w-5 text-amber-500 fill-amber-400" />
            <h4 className="font-serif text-sm font-black uppercase tracking-tight text-slate-900">Current Companion Survey</h4>
          </div>
          <p className="mt-3 text-xs font-black text-slate-700 uppercase tracking-wide">
            What animal species do you currently care for or plan to welcome next?
          </p>

          <div className="mt-4 space-y-3">
            {/* Option A (Dog) */}
            <button
              onClick={() => handleVote('dog')}
              disabled={voted}
              className="w-full text-left"
            >
              <div className="flex items-center justify-between text-xs font-bold text-slate-800">
                <span className="uppercase">Canines (Dogs)</span>
                <span className="font-mono">{voted ? `${Math.round((pollVotes.dog / totalVotes) * 100)}%` : `${pollVotes.dog} votes`}</span>
              </div>
              <div className="mt-1 h-3 w-full rounded bg-slate-100 overflow-hidden border border-slate-200">
                <div
                  className="h-full bg-emerald-600 transition-all duration-500"
                  style={{ width: `${(pollVotes.dog / totalVotes) * 100}%` }}
                ></div>
              </div>
            </button>

            {/* Option B (Cat) */}
            <button
              onClick={() => handleVote('cat')}
              disabled={voted}
              className="w-full text-left"
            >
              <div className="flex items-center justify-between text-xs font-bold text-slate-800">
                <span className="uppercase">Felines (Cats)</span>
                <span className="font-mono">{voted ? `${Math.round((pollVotes.cat / totalVotes) * 100)}%` : `${pollVotes.cat} votes`}</span>
              </div>
              <div className="mt-1 h-3 w-full rounded bg-slate-100 overflow-hidden border border-slate-200">
                <div
                  className="h-full bg-amber-400 transition-all duration-500"
                  style={{ width: `${(pollVotes.cat / totalVotes) * 100}%` }}
                ></div>
              </div>
            </button>

            {/* Option C (Others) */}
            <button
              onClick={() => handleVote('other')}
              disabled={voted}
              className="w-full text-left"
            >
              <div className="flex items-center justify-between text-xs font-bold text-slate-800">
                <span className="uppercase">Small Mammals / Avian / Exotic</span>
                <span className="font-mono">{voted ? `${Math.round((pollVotes.other / totalVotes) * 100)}%` : `${pollVotes.other} votes`}</span>
              </div>
              <div className="mt-1 h-3 w-full rounded bg-slate-100 overflow-hidden border border-slate-200">
                <div
                  className="h-full bg-slate-400 transition-all duration-500"
                  style={{ width: `${(pollVotes.other / totalVotes) * 100}%` }}
                ></div>
              </div>
            </button>
          </div>

          <p className="mt-4 text-center text-[10px] font-black tracking-widest text-slate-400 uppercase">
            {voted ? "YOUR ANONYMOUS VOTE STORED" : "CLICK ANY OPTION TO VOTE INCIDENTALLY"}
          </p>
        </div>

        {/* Premium Newsletter Block */}
        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 text-white shadow-xl text-left">
          <h4 className="text-md font-black uppercase tracking-wider text-amber-400 flex items-center gap-1.5">
            <ShieldCheck className="h-5 w-5 text-amber-400" />
            Pawfect Veterinary Briefs
          </h4>
          <p className="mt-2 text-xs text-slate-300 leading-relaxed font-semibold">
            Get premium long-form veterinary guidelines, toxic plant registries, cage sizing charts, and behavior training tutorials delivered direct to your inbox twice a week. No spam.
          </p>

          {subscribed ? (
            <div className="mt-4 rounded-xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 p-3.5 text-center text-xs font-black uppercase tracking-wider">
              ✓ REGISTERED SUCCESSFULLY! WELCOME TO PAWFECT CARE
            </div>
          ) : (
            <form onSubmit={handleSubscribe} className="mt-4 space-y-2.5">
              <input
                type="email"
                required
                placeholder="YOUR.EMAIL@DOMAINE.COM"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-lg border-2 border-slate-800 bg-slate-800 px-3 py-2.5 text-xs text-white placeholder-slate-500 focus:border-amber-400 focus:outline-none focus:ring-1 focus:ring-amber-400 uppercase tracking-widest text-center font-bold"
              />
              <button
                type="submit"
                className="w-full rounded-lg bg-amber-400 hover:bg-amber-300 text-slate-950 py-2.5 text-xs font-black uppercase tracking-wider transition-all duration-150 shadow-lg cursor-pointer select-none"
              >
                JOIN NEWSLETTER LIST
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
