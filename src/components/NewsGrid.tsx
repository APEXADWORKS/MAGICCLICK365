import { Article } from '../types';
import { Calendar, Clock, ArrowUpRight, ArrowRight, Star, Heart, MessageSquare } from 'lucide-react';
import { useState, FormEvent } from 'react';

interface NewsGridProps {
  articles: Article[];
  onSelectArticle: (article: Article) => void;
  selectedCategory: string;
}

export default function NewsGrid({ articles, onSelectArticle, selectedCategory }: NewsGridProps) {
  // Subscription form states
  const [subscribed, setSubscribed] = useState(false);
  const [email, setEmail] = useState('');

  // Interactive Poll States
  const [voted, setVoted] = useState(false);
  const [pollVotes, setPollVotes] = useState({
    india: 124,
    australia: 98,
    draw: 45
  });

  const handleSubscribe = (e: FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail('');
    }
  };

  const handleVote = (option: 'india' | 'australia' | 'draw') => {
    if (!voted) {
      setPollVotes(prev => ({
        ...prev,
        [option]: prev[option] + 1
      }));
      setVoted(true);
    }
  };

  const totalVotes = pollVotes.india + pollVotes.australia + pollVotes.draw;

  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-12" id="news-grid-module">
      {/* Primary Articles Column */}
      <div className="lg:col-span-8 space-y-6">
        <div className="flex items-center justify-between border-b-2 border-slate-350 pb-3">
          <h3 className="text-xl font-black uppercase tracking-tight text-slate-900 md:text-2xl">
            {selectedCategory === 'All' ? 'Latest Sports Reports' : `${selectedCategory} Commentary`}
          </h3>
          <span className="text-xs font-black uppercase text-slate-500 bg-slate-200 px-3 py-1 rounded-full">
            {articles.length} {articles.length === 1 ? 'article' : 'articles'}
          </span>
        </div>

        {articles.length === 0 ? (
          <div className="rounded-2xl border-2 border-dashed border-slate-300 p-12 text-center text-slate-500 bg-white">
            <p className="text-lg font-black uppercase text-slate-800">No articles match your parameters.</p>
            <p className="mt-1.5 text-xs text-slate-600 font-medium">Try selecting a different sports category or refining your search term.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {articles.map((item) => (
              <article
                key={item.id}
                className="group flex flex-col justify-between overflow-hidden rounded-2xl border-2 border-slate-200 bg-white transition-all duration-300 hover:scale-[1.01] hover:border-blue-600 hover:shadow-xl border-l-4 border-l-blue-600"
                id={`article-card-${item.id}`}
              >
                <div>
                  {/* Article Card Photo */}
                  <div className="relative h-48 w-full overflow-hidden bg-slate-900">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-3 left-3 rounded-md bg-blue-700 text-white font-black px-2.5 py-1 text-[9px] uppercase tracking-wider shadow">
                      {item.category}
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-5">
                    <div className="flex items-center space-x-2 text-[10px] font-black uppercase tracking-wider text-slate-400">
                      <span>{item.date}</span>
                      <span>•</span>
                      <span className="text-blue-600">{item.readTime}</span>
                    </div>

                    <h4 className="mt-2.5 text-lg font-black uppercase tracking-tight text-slate-900 line-clamp-2 transition-colors duration-200 group-hover:text-blue-700">
                      {item.title}
                    </h4>

                    <p className="mt-2 text-xs text-slate-600 leading-relaxed line-clamp-3 font-semibold">
                      {item.brief}
                    </p>

                    {/* Tag list */}
                    <div className="mt-4 flex flex-wrap gap-1">
                      {item.tags.map((tg) => (
                        <span
                          key={tg}
                          className="rounded bg-blue-50 text-blue-800 font-extrabold px-2 py-0.5 text-[9px] uppercase tracking-wide border border-blue-100"
                        >
                          {tg}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Action Foot */}
                <div className="border-t border-slate-100 p-5 pt-3 flex items-center justify-between bg-slate-50/50">
                  <span className="text-xs font-black uppercase text-slate-500">By {item.author}</span>
                  <button
                    onClick={() => onSelectArticle(item)}
                    className="flex items-center gap-1 text-xs font-black uppercase tracking-wider text-blue-700 hover:text-yellow-600 transition-colors"
                  >
                    Read Analysis →
                  </button>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>

      {/* Editorial & Community Interaction Sidebar */}
      <div className="lg:col-span-4 space-y-6">
        {/* Editor's Note / Stat Focus as Elite Blue Card */}
        <div className="rounded-2xl bg-blue-800 p-6 text-white shadow-xl border-b-4 border-yellow-400">
          <h2 className="text-lg font-black uppercase tracking-tight mb-4 flex items-center gap-2">
            <span className="w-2.5 h-6 bg-yellow-400 inline-block"></span>
            STATISTIC RADAR
          </h2>
          <h4 className="font-extrabold uppercase text-sm text-yellow-300">Why the Corner Three Rules the Modern Game</h4>
          <p className="mt-2.5 font-sans text-xs text-blue-100 leading-relaxed font-semibold">
            Data compiled across 10,000 professional basketball possessions shows that the corner three-pointer is converted at an elite <strong>38.4%</strong> clip, in comparison with 34.2% for above-the-break triples. This creates an effective yield that outperforms any shot except the uncontested layup!
          </p>
          <div className="mt-4 border-t border-blue-750 pt-3 flex items-center justify-between">
            <span className="font-mono text-[9px] text-blue-200 font-black uppercase tracking-wider">Source: Apex Analytics Team</span>
            <span className="text-[10px] bg-yellow-400 text-slate-900 font-black px-1.5 py-0.5 rounded">98.5% CONFIDENCE</span>
          </div>
        </div>

        {/* Dynamic Fan Forecast (Championship Card) */}
        <div className="rounded-2xl border-2 border-slate-200 bg-white p-5 shadow-lg border-l-4 border-l-red-655 border-l-red-600">
          <div className="flex items-center gap-2 border-b border-slate-100 pb-3">
            <Star className="h-5 w-5 text-yellow-500 fill-yellow-400" />
            <h4 className="font-serif text-sm font-black uppercase tracking-tight text-slate-900">Weekly Fan Forecast</h4>
          </div>
          <p className="mt-3 text-xs font-black text-slate-700 uppercase tracking-wide">
            Who will emerge victorious in the Border-Gavaskar Trophy Test Match clash in Melbourne?
          </p>

          <div className="mt-4 space-y-3">
            {/* Option A */}
            <button
              onClick={() => handleVote('india')}
              disabled={voted}
              className="w-full text-left"
            >
              <div className="flex items-center justify-between text-xs font-bold text-slate-800">
                <span className="uppercase">Team India</span>
                <span className="font-mono">{voted ? `${Math.round((pollVotes.india / totalVotes) * 100)}%` : `${pollVotes.india} votes`}</span>
              </div>
              <div className="mt-1 h-3 w-full rounded bg-slate-100 overflow-hidden border border-slate-200">
                <div
                  className="h-full bg-blue-600 transition-all duration-500"
                  style={{ width: `${(pollVotes.india / totalVotes) * 100}%` }}
                ></div>
              </div>
            </button>

            {/* Option B */}
            <button
              onClick={() => handleVote('australia')}
              disabled={voted}
              className="w-full text-left"
            >
              <div className="flex items-center justify-between text-xs font-bold text-slate-800">
                <span className="uppercase">Team Australia</span>
                <span className="font-mono">{voted ? `${Math.round((pollVotes.australia / totalVotes) * 100)}%` : `${pollVotes.australia} votes`}</span>
              </div>
              <div className="mt-1 h-3 w-full rounded bg-slate-100 overflow-hidden border border-slate-200">
                <div
                  className="h-full bg-yellow-400 transition-all duration-500"
                  style={{ width: `${(pollVotes.australia / totalVotes) * 100}%` }}
                ></div>
              </div>
            </button>

            {/* Option C */}
            <button
              onClick={() => handleVote('draw')}
              disabled={voted}
              className="w-full text-left"
            >
              <div className="flex items-center justify-between text-xs font-bold text-slate-800">
                <span className="uppercase">Match Ends in Draw</span>
                <span className="font-mono">{voted ? `${Math.round((pollVotes.draw / totalVotes) * 100)}%` : `${pollVotes.draw} votes`}</span>
              </div>
              <div className="mt-1 h-3 w-full rounded bg-slate-100 overflow-hidden border border-slate-200">
                <div
                  className="h-full bg-slate-400 transition-all duration-500"
                  style={{ width: `${(pollVotes.draw / totalVotes) * 100}%` }}
                ></div>
              </div>
            </button>
          </div>

          <p className="mt-4 text-center text-[10px] font-black tracking-widest text-slate-400 uppercase">
            {voted ? "YOUR VOTE HAS BEEN REGISTERED" : "CLICK ANY METRIC ABOVE TO VOTE NOW"}
          </p>
        </div>

        {/* VIP Newsletter Block in Elegant Slate 900 */}
        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 text-white shadow-xl">
          <h4 className="text-md font-black uppercase tracking-wider text-yellow-400">
            APEX TACTICAL BRIEFINGS
          </h4>
          <p className="mt-2 text-xs text-slate-300 leading-relaxed font-semibold">
            Get premium long-form analyses, bowling release calculations, and stadium weather radar delivered direct to your inbox twice a week. Perfect sports science briefings.
          </p>

          {subscribed ? (
            <div className="mt-4 rounded-xl bg-green-500/20 text-green-400 border border-green-500/30 p-3.5 text-center text-xs font-black uppercase tracking-wider">
              ✓ ENROLLED SUCCESSFULLY! WELCOME TO APEX
            </div>
          ) : (
            <form onSubmit={handleSubscribe} className="mt-4 space-y-2.5">
              <input
                type="email"
                required
                placeholder="YOUR NAME@HOST.COM"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-lg border-2 border-slate-850 bg-slate-850 px-3 py-2.5 text-xs text-white placeholder-slate-500 focus:border-yellow-400 focus:outline-none focus:ring-1 focus:ring-yellow-400 uppercase tracking-widest text-center"
              />
              <button
                type="submit"
                className="w-full rounded-lg bg-yellow-400 hover:bg-yellow-300 text-slate-950 py-2.5 text-xs font-black uppercase tracking-wider transition-all duration-150 shadow-lg cursor-pointer"
              >
                JOIN PREMIUM BRIEFING
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
