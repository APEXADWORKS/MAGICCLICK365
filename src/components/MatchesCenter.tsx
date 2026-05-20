import { MatchScore } from '../types';
import { Calendar, Play, Radio, CheckCircle, MapPin, Award } from 'lucide-react';

interface MatchesCenterProps {
  scores: MatchScore[];
  selectedSportFilter: string;
}

export default function MatchesCenter({ scores, selectedSportFilter }: MatchesCenterProps) {
  const filteredScores = selectedSportFilter === 'All'
    ? scores
    : scores.filter(s => {
        if (selectedSportFilter === 'Cricket') return s.sport === 'Cricket';
        if (selectedSportFilter === 'Football') return s.sport === 'Football';
        if (selectedSportFilter === 'Basketball') return s.sport === 'Basketball';
        return true;
      });

  return (
    <div className="rounded-2xl border-2 border-slate-800 bg-slate-950 p-6 shadow-2xl" id="matches-center-module">
      <div className="mb-5 flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-center border-b border-slate-800 pb-4">
        <div>
          <h2 className="flex items-center gap-2 text-lg font-black uppercase tracking-tight text-white md:text-xl">
            <Radio className="h-5 w-5 animate-pulse text-yellow-400" />
            VIBRANT TICKER & SCOREBOARD
          </h2>
          <p className="text-xs text-slate-400 font-medium">Real-time stadium commentary and official frame listings</p>
        </div>
        <span className="rounded-full bg-red-600 px-3.5 py-1 text-xs font-black uppercase tracking-wider text-white animate-pulse">
          {scores.filter(s => s.status === 'LIVE').length} SESSIONS ACTIVE
        </span>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
        {filteredScores.map((match) => (
          <div
            key={match.id}
            className={`flex flex-col justify-between rounded-xl p-4 transition-all duration-300 hover:scale-[1.03] hover:shadow-lg ${
              match.status === 'LIVE'
                ? 'bg-blue-900/40 border-l-4 border-yellow-400 border-2 border-y-slate-800 border-r-slate-800'
                : 'bg-slate-900 border-l-4 border-blue-600 border-2 border-y-slate-850 border-r-slate-850'
            }`}
            id={`match-card-${match.id}`}
          >
            {/* League + Badge header */}
            <div>
              <div className="flex items-center justify-between text-[10px] font-black tracking-widest text-slate-400 uppercase">
                <span>{match.league}</span>
                <span className="text-yellow-400">{match.sport}</span>
              </div>

              {/* Status Pills */}
              <div className="my-2.5 flex items-center justify-between">
                <span
                  className={`inline-flex items-center gap-1 rounded-md px-2 py-0.5 text-[9px] font-black uppercase leading-none ${
                    match.status === 'LIVE'
                      ? 'bg-red-650 bg-red-600 text-white'
                      : match.status === 'FINISHED'
                      ? 'bg-slate-800 text-slate-300'
                      : 'bg-blue-600 text-white'
                  }`}
                >
                  {match.status === 'LIVE' && <span className="h-1.5 w-1.5 rounded-full bg-white animate-ping" />}
                  {match.status}
                </span>
                <span className="font-mono text-[10px] text-yellow-300 font-bold">{match.oversOrPeriod}</span>
              </div>

              {/* Teams & Scores */}
              <div className="space-y-2 py-1 border-t border-slate-800/60 mt-2 pt-2">
                <div className="flex items-center justify-between">
                  <span className="font-sans text-xs font-bold text-slate-200">{match.teamA}</span>
                  <span className="font-mono text-xs font-black text-white">{match.scoreA}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-sans text-xs font-bold text-slate-200">{match.teamB}</span>
                  <span className="font-mono text-xs font-black text-white">{match.scoreB}</span>
                </div>
              </div>
            </div>

            {/* Venue & Summary Footnote */}
            <div className="mt-3 border-t border-slate-850 pt-2.5">
              <p className="text-[11px] font-black text-yellow-400 leading-tight uppercase tracking-wider">
                {match.statusText}
              </p>
              {match.summary && (
                <p className="mt-1 font-sans text-[10px] font-semibold text-slate-400 line-clamp-2">
                  {match.summary}
                </p>
              )}
              <div className="mt-2.5 flex items-center gap-1 text-[9.5px] font-bold text-slate-500 uppercase">
                <MapPin className="h-3 w-3 inline text-slate-500 shrink-0" />
                <span className="truncate">{match.venue}</span>
              </div>
            </div>
          </div>
        ))}

        {filteredScores.length === 0 && (
          <div className="col-span-full py-8 text-center text-sm text-slate-400">
            No active scoreboard matches for this sport selection.
          </div>
        )}
      </div>
    </div>
  );
}
