import { Calendar, User, Clock, ArrowRight, ArrowUpRight } from 'lucide-react';
import { BlogPost } from '../types';

interface HeroBlogProps {
  blog: BlogPost;
  onReadMore: (blog: BlogPost) => void;
}

export default function HeroBlog({ blog, onReadMore }: HeroBlogProps) {
  return (
    <div
      className="overflow-hidden rounded-2xl border-2 border-slate-200 bg-white shadow-xl transition-all duration-300 hover:shadow-2xl border-l-8 border-l-emerald-700 animate-fade-in"
      id="hero-blog-component"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12">
        <div className="relative min-h-[300px] bg-slate-900 lg:col-span-12 xl:col-span-7">
          <img
            src={blog.image}
            alt={blog.title}
            className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-500 hover:scale-[1.02]"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-900/40 to-transparent"></div>
          <div className="absolute top-4 left-4 rounded-md bg-amber-400 text-slate-950 font-black px-4 py-1.5 text-[11px] uppercase tracking-wider shadow-lg border border-amber-300">
            ★ {blog.category} EXCLUSIVE BRIEF
          </div>
        </div>

        <div className="flex flex-col justify-between p-6 md:p-8 lg:col-span-12 xl:col-span-5 bg-white">
          <div className="space-y-4 text-left">
            <div className="flex flex-wrap items-center gap-3 text-[10px] text-slate-500 font-extrabold uppercase tracking-wider">
              <span className="flex items-center gap-1">
                <Calendar className="h-3.5 w-3.5 text-emerald-600" />
                {blog.date}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <User className="h-3.5 w-3.5 text-emerald-600" />
                Authored by {blog.author}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Clock className="h-3.5 w-3.5 text-emerald-600" />
                {blog.readTime}
              </span>
            </div>

            <h3 className="text-2xl font-black uppercase tracking-tight text-slate-900 md:text-3xl leading-tight">
              {blog.title}
            </h3>

            <p className="font-sans text-sm text-slate-600 leading-relaxed font-semibold">
              {blog.brief}
            </p>

            {/* Inbound references/outbound resources links */}
            {blog.links && blog.links.length > 0 && (
              <div className="rounded-xl bg-emerald-50/50 border-l-4 border-emerald-600 p-4">
                <p className="text-[10px] font-black text-emerald-900 uppercase tracking-widest flex items-center gap-1">
                  <ArrowUpRight className="h-4 w-4 text-emerald-700" /> Official Veterinary References:
                </p>
                <div className="mt-2 space-y-1.5">
                  {blog.links.map((lnk, idx) => (
                    <a
                      key={idx}
                      href={lnk.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-xs text-emerald-800 hover:text-amber-500 hover:underline font-bold transition-all duration-150"
                    >
                      ★ {lnk.text}
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="mt-6 pt-4 border-t border-slate-105 border-slate-100">
            <button
              onClick={() => onReadMore(blog)}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-700 text-white font-black uppercase text-xs tracking-wider px-6 py-3.5 shadow-lg transition-all duration-200 hover:bg-amber-400 hover:text-slate-950 hover:transform hover:translate-x-1 cursor-pointer select-none"
              id="hero-read-more-btn"
            >
              Read Full Veterinary Article
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
