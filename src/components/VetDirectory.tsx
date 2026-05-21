import { BookmarkCheck, ExternalLink, CheckCircle2 } from 'lucide-react';
import { VET_RESOURCES } from '../data/petData';

export default function VetDirectory() {
  return (
    <div className="rounded-2xl border-2 border-slate-200 bg-white p-6 md:p-8 shadow-xl" id="vet-directory-section">
      <div className="mb-6 flex flex-col justify-between gap-3 border-b-2 border-slate-150 pb-5 md:flex-row md:items-center">
        <div>
          <span className="rounded bg-amber-400 px-3 py-1 text-xs font-black text-slate-950 uppercase tracking-wider">
            Veterinary Standards
          </span>
          <h2 className="mt-2 text-2xl font-black uppercase tracking-tight text-slate-900 md:text-3xl">
            Verified Pet Care & Veterinary Directory
          </h2>
          <p className="text-sm text-slate-600 font-semibold mt-1">
            An audited guide to the world's most reputable pet health databases, rescue networks, and peer-reviewed feline and canine research centers.
          </p>
        </div>
        <div className="flex items-center gap-1.5 text-xs font-black uppercase text-slate-700 bg-slate-100 border-2 border-slate-200 rounded-lg px-3.5 py-1.5 shrink-0 self-start md:self-auto shadow-sm">
          <BookmarkCheck className="h-4 w-4 text-emerald-600" />
          <span>5 Verified Resources Placed</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
        {VET_RESOURCES.map((site) => (
          <div
            key={site.name}
            className="flex flex-col justify-between rounded-2xl border-2 border-slate-200 bg-slate-50/20 p-6 transition-all duration-300 hover:border-emerald-600 hover:bg-white hover:scale-[1.015] hover:shadow-xl border-l-4 border-l-emerald-700 shadow-sm"
            id={`directory-site-${site.name.toLowerCase().replace(/\s+/g, '-')}`}
          >
            <div>
              <div className="flex items-start justify-between gap-2 border-b border-slate-100 pb-3">
                <div>
                  <span className="rounded bg-emerald-50 border border-emerald-100 px-2.5 py-0.5 text-[10px] font-black uppercase tracking-wider text-emerald-800">
                    {site.badge}
                  </span>
                  <h3 className="mt-1.5 text-xl font-black uppercase tracking-tight text-slate-900 hover:text-emerald-700 transition-colors">
                    <a href={site.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1">
                      {site.name}
                      <ExternalLink className="h-4 w-4 inline shrink-0 text-emerald-600 cursor-pointer" />
                    </a>
                  </h3>
                </div>
                <a
                  href={site.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 rounded-xl bg-emerald-700 px-3.5 py-2 text-xs font-black uppercase tracking-wider text-white shadow hover:bg-amber-400 hover:text-slate-950 transition-all duration-150 shrink-0 select-none cursor-pointer"
                >
                  Visit <ExternalLink className="h-3 w-3" />
                </a>
              </div>

              <p className="mt-3.5 text-sm leading-relaxed text-slate-600 font-medium">
                {site.description}
              </p>

              <div className="mt-4 pt-3 border-t border-slate-100">
                <h4 className="text-[10px] font-black text-slate-550 text-slate-500 uppercase tracking-widest">
                  Key offerings & features:
                </h4>
                <ul className="mt-2 space-y-1.5">
                  {site.features.map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs text-slate-700 font-semibold leading-relaxed">
                      <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-emerald-600" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Recommendation foot */}
            <div className="mt-5 border-t-2 border-slate-100 pt-3 bg-slate-55 bg-slate-100 p-3 rounded-xl">
              <span className="text-[10px] font-black text-slate-500 uppercase tracking-wider block">
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
      <div className="mt-8 rounded-2xl bg-slate-900 text-white p-6 border-l-4 border-amber-400 shadow-xl">
        <h4 className="text-sm font-black uppercase tracking-wider text-amber-400">
          PRO-TIP FOR EMERGENCY PREPAREDNESS:
        </h4>
        <p className="mt-2 text-xs text-slate-300 leading-relaxed font-semibold">
          Always save your local 24-hour Vet ER hospital location and the ASPCA Poison Control Hotline numbers prominently on your fridge or phone contacts. During toxic ingestion emergencies, write down exactly what potential toxin of the list (like chocolate, onions, lilies, or synthetic sugars) your companion ate, their approximate weight, and terms of dosage before rushing into active clinical procedures.
        </p>
      </div>
    </div>
  );
}
