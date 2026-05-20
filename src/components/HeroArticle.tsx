import { Article } from '../types';
import { Calendar, User, Clock, ArrowRight, Link as LinkIcon } from 'lucide-react';

interface HeroArticleProps {
  article: Article;
  onReadMore: (article: Article) => void;
}

export default function HeroArticle({ article, onReadMore }: HeroArticleProps) {
  return (
    <div
      className="overflow-hidden rounded-2xl border-2 border-slate-200 bg-white shadow-xl transition-all duration-300 hover:shadow-2xl border-l-8 border-l-blue-700"
      id="hero-article-component"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12">
        {/* Cover Image */}
        <div className="relative min-h-[300px] bg-slate-900 lg:col-span-7">
          <img
            src={article.image}
            alt={article.title}
            className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-500 hover:scale-[1.02]"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-900/40 to-transparent"></div>
          <div className="absolute top-4 left-4 rounded-md bg-yellow-400 text-slate-950 font-black px-4 py-1.5 text-[11px] uppercase tracking-wider shadow-lg border border-yellow-300">
            {article.category} EXCLUSIVE
          </div>
        </div>

        {/* Content Section */}
        <div className="flex flex-col justify-between p-6 md:p-8 lg:col-span-5 bg-white">
          <div className="space-y-4">
            <div className="flex flex-wrap items-center gap-3 text-[10px] text-slate-500 font-extrabold uppercase tracking-wider">
              <span className="flex items-center gap-1">
                <Calendar className="h-3.5 w-3.5 text-blue-600" />
                {article.date}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <User className="h-3.5 w-3.5 text-blue-600" />
                By {article.author}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Clock className="h-3.5 w-3.5 text-blue-600" />
                {article.readTime}
              </span>
            </div>

            <h3 className="text-2xl font-black uppercase tracking-tight text-slate-900 md:text-3xl leading-tight">
              {article.title}
            </h3>

            <p className="font-sans text-sm text-slate-600 leading-relaxed font-medium">
              {article.brief}
            </p>

            {/* References preview formatted in the Vibrant Slate visual pattern */}
            {article.links && article.links.length > 0 && (
              <div className="rounded-xl bg-blue-50/50 border-l-4 border-blue-600 p-4">
                <p className="text-[10px] font-black text-blue-900 uppercase tracking-widest flex items-center gap-1">
                  <LinkIcon className="h-3.5 w-3.5 text-blue-700" /> Elite Cricket References:
                </p>
                <div className="mt-2 space-y-1.5">
                  {article.links.map((link, idx) => (
                    <a
                      key={idx}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-xs text-blue-800 hover:text-yellow-500 hover:underline font-bold transition-all duration-150"
                    >
                      ★ {link.text}
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="mt-6 pt-4 border-t border-slate-100">
            <button
              onClick={() => onReadMore(article)}
              className="inline-flex items-center gap-2 rounded-xl bg-blue-700 text-white font-black uppercase text-xs tracking-wider px-5 py-3 shadow-lg transition-all duration-200 hover:bg-yellow-400 hover:text-slate-950 hover:transform hover:translate-x-1"
              id="hero-read-more-btn"
            >
              Read Full Analysis
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
