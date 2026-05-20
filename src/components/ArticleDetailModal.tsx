import { Article } from '../types';
import { X, Calendar, User, Clock, CheckCircle, ExternalLink, Bookmark } from 'lucide-react';

interface ArticleDetailModalProps {
  article: Article | null;
  onClose: () => void;
}

export default function ArticleDetailModal({ article, onClose }: ArticleDetailModalProps) {
  if (!article) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 p-4 backdrop-blur-sm transition-all duration-300 overflow-y-auto"
      id="article-detail-overlay"
      onClick={onClose}
    >
      <div
        className="relative my-8 w-full max-w-4xl rounded-2xl bg-white shadow-2xl border-2 border-slate-800 transition-transform duration-300 md:p-2"
        onClick={(e) => e.stopPropagation()}
        id="article-detail-modal"
      >
        {/* Modal Header Actions in broadcast slate theme */}
        <div className="flex items-center justify-between border-b-2 border-slate-100 p-4 md:px-6 bg-slate-50 rounded-t-2xl">
          <div className="flex items-center space-x-2">
            <span className="rounded bg-yellow-400 px-3 py-1 text-xs font-black text-slate-950 uppercase tracking-wider">
              {article.category} ANALYSIS
            </span>
            <span className="hidden text-xs text-slate-400 md:inline">|</span>
            <span className="hidden items-center gap-1 text-xs font-black text-slate-500 uppercase tracking-widest md:flex">
              <Clock className="h-4 w-4 text-blue-700" />
              {article.readTime}
            </span>
          </div>
          <button
            onClick={onClose}
            className="rounded-xl bg-slate-200 p-2 text-slate-700 hover:bg-slate-900 hover:text-white focus:outline-none transition-colors cursor-pointer"
            id="close-article-modal"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Modal Scrollable Scroll Wrapper Area */}
        <div className="max-h-[75vh] overflow-y-auto p-4 md:p-8">
          {/* Cover image banner */}
          <div className="relative mb-6 h-64 overflow-hidden rounded-xl bg-slate-900 md:h-96 border-2 border-slate-200 shadow-md">
            <img
              src={article.image}
              alt={article.title}
              className="h-full w-full object-cover object-center"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent"></div>
          </div>

          {/* Title Block */}
          <div className="space-y-4">
            <h2 className="text-2xl font-black uppercase tracking-tight text-slate-900 md:text-3xl lg:text-4xl leading-tight">
              {article.title}
            </h2>

            {/* Editor profile banner */}
            <div className="flex flex-wrap items-center gap-4 border-y border-slate-100 py-3.5 text-xs text-slate-600 font-semibold uppercase tracking-wider">
              <div className="flex items-center gap-2">
                <div className="h-8 w-8 rounded-full bg-blue-700 flex items-center justify-center font-black text-white uppercase text-xs">
                  {article.author.charAt(0)}
                </div>
                <div>
                  <p className="font-black text-slate-950">{article.author}</p>
                  <p className="text-[10px] text-slate-500 tracking-widest uppercase">Senior Analyst</p>
                </div>
              </div>
              <span className="text-slate-300">•</span>
              <div className="flex items-center gap-1">
                <Calendar className="h-3.5 w-3.5 text-blue-700" />
                <span>{article.date}</span>
              </div>
              <span className="text-slate-300">•</span>
              <div className="flex items-center gap-1">
                <Clock className="h-3.5 w-3.5 text-blue-700" />
                <span>{article.readTime}</span>
              </div>
            </div>

            {/* Editorial Standfirst/Brief with left borders */}
            <p className="font-sans text-base md:text-lg font-bold text-slate-800 leading-relaxed border-l-4 border-l-blue-700 pl-4 py-1 bg-slate-50 pr-2 rounded">
              {article.brief}
            </p>
          </div>

          {/* Main Article Body Elements */}
          <div
            className="mt-6 font-sans text-sm md:text-base leading-relaxed text-slate-700 space-y-6 pb-6 border-b border-slate-100"
            dangerouslySetInnerHTML={{ __html: article.content }}
          />

          {/* Referenced Web Links Panel - highly tailored to user requests */}
          {article.links && article.links.length > 0 && (
            <div className="mt-8 rounded-xl bg-blue-50/50 border-2 border-slate-200 p-5 md:p-6" id="article-links-panel">
              <div className="flex items-center gap-2">
                <Bookmark className="h-5 w-5 text-blue-700 fill-blue-700/20" />
                <h4 className="text-md font-black uppercase tracking-tight text-slate-900">
                  Journalistic References & Recommended Portals
                </h4>
              </div>
              <p className="mt-1.5 text-xs text-slate-600 font-semibold">
                To cross-reference this article's raw scorecard data, player statistics, or to learn more about the tournament formats, visit our recommended outbound matches index:
              </p>

              <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {article.links.map((lnk, idx) => (
                  <a
                    key={idx}
                    href={lnk.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between rounded-xl bg-white border-2 border-slate-150 p-3.5 shadow-sm transition-all duration-200 hover:border-blue-600 hover:bg-blue-50/10 hover:shadow"
                  >
                    <span className="text-xs font-black text-slate-800 uppercase tracking-wide">
                      {lnk.text}
                    </span>
                    <ExternalLink className="h-4 w-4 text-blue-750 text-blue-700" />
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Modal sticky footer container in slate-50 */}
        <div className="rounded-b-2xl bg-slate-50 px-6 py-4 flex flex-col sm:flex-row justify-between items-center gap-3 border-t border-slate-150">
          <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">
            © 2026 APEX Sports Hub. All Rights Reserved.
          </p>
          <button
            onClick={onClose}
            className="rounded-xl bg-blue-700 text-white px-5 py-2.5 text-xs font-black uppercase tracking-wider transition-all duration-150 hover:bg-yellow-400 hover:text-slate-950 cursor-pointer shadow-md"
          >
            Finished Reading
          </button>
        </div>
      </div>
    </div>
  );
}
