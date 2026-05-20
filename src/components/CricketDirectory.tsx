import { CRICKET_SITES } from '../data/newsData';
import { ExternalLink, Star, Anchor, CheckCircle2, BookmarkCheck } from 'lucide-react';

export default function CricketDirectory() {
  return (
    <div className="rounded-2xl border-2 border-slate-200 bg-white p-6 md:p-8 shadow-xl" id="cricket-directory-section">
      <div className="mb-6 flex flex-col justify-between gap-3 border-b-2 border-slate-150 pb-5 md:flex-row md:items-center">
        <div>
          <span className="rounded bg-yellow-400 px-3 py-1 text-xs font-black text-slate-950 uppercase tracking-wider">
            SPECIALIST CURATIONS
          </span>
          <h2 className="mt-2 text-2xl font-black uppercase tracking-tight text-slate-900 md:text-3xl">
            ELITE CRICKET WEB DIRECTORY
          </h2>
          <p className="text-sm text-slate-600 font-semibold mt-1">
            A verified guide to the web's best cricket statistical databases, real-time commentary, and heritage journalism outlets.
          </p>
        </div>
        <div className="flex items-center gap-1.5 text-xs font-black uppercase text-slate-700 bg-slate-100 border-2 border-slate-200 rounded-lg px-3.5 py-1.5 shrink-0 self-start md:self-auto">
          <BookmarkCheck className="h-4 w-4 text-blue-600" />
          <span>5 Verified Resources Placed</span>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {CRICKET_SITES.map((site) => (
          <div
            key={site.name}
            className="flex flex-col justify-between rounded-xl border-2 border-slate-200 bg-slate-50/30 p-5 md:p-6 transition-all duration-300 hover:border-blue-600 hover:bg-white hover:scale-[1.015] hover:shadow-xl border-l-4 border-l-blue-700"
            id={`directory-site-${site.name.toLowerCase().replace(/\s+/g, '-')}`}
          >
            <div>
              {/* Badge & Title */}
              <div className="flex items-start justify-between gap-2 border-b border-slate-100 pb-3">
                <div>
                  <span className="rounded bg-blue-100 px-2.5 py-0.5 text-[10px] font-black uppercase tracking-wider text-blue-800">
                    {site.badge}
                  </span>
                  <h3 className="mt-1.5 text-xl font-black uppercase tracking-tight text-slate-900 hover:text-blue-700">
                    <a href={site.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1">
                      {site.name}
                      <ExternalLink className="h-4 w-4 inline shrink-0 text-blue-600 cursor-pointer" />
                    </a>
                  </h3>
                </div>
                {/* External Action Button */}
                <a
                  href={site.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 rounded-lg bg-blue-700 px-3.5 py-2 text-xs font-black uppercase tracking-wider text-white shadow transition-all duration-200 hover:bg-yellow-400 hover:text-slate-950"
                >
                  Visit <ExternalLink className="h-3 w-3" />
                </a>
              </div>

              {/* Description */}
              <p className="mt-3.5 text-sm leading-relaxed text-slate-600 font-medium">
                {site.description}
              </p>

              {/* List of features */}
              <div className="mt-4 pt-3 border-t border-slate-100">
                <h4 className="text-[10px] font-black text-slate-500 uppercase tracking-widest">
                  Key offerings & features:
                </h4>
                <ul className="mt-2 space-y-1.5">
                  {site.features.map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs text-slate-700 font-semibold">
                      <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-blue-600" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Recommendation foot */}
            <div className="mt-5 border-t-2 border-slate-100 pt-3 bg-slate-50 p-3 rounded-lg">
              <span className="text-[10px] font-black text-slate-400 uppercase tracking-wider block">
                Best Suited For:
              </span>
              <p className="text-xs font-black text-slate-800 uppercase mt-0.5">
                {site.recommendedFor}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Useful tips block in high-contrast slate */}
      <div className="mt-8 rounded-2xl bg-slate-900 text-white p-6 border-l-4 border-yellow-400 shadow-lg">
        <h4 className="text-sm font-black uppercase tracking-wider text-yellow-400">
          PRO-TIP FOR CRICKET RESEARCHERS:
        </h4>
        <p className="mt-2 text-xs text-slate-300 leading-relaxed font-semibold">
          Need complex data tables or older statistical matchups? Use <strong>ESPNcricinfo's StatsGuru</strong> engine with custom query parameters. For quick, live updates of multiple matches simultaneously, keep <strong>Cricbuzz's</strong> multi-panel score tracker loaded, and refer to the <strong>ICC Cricket</strong> portal for official team standings and tournament rosters.
        </p>
      </div>
    </div>
  );
}
