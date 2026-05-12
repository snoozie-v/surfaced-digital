export default function CaseStudy() {
  return (
    <section className="bg-white px-6 py-24 border-b border-slate-100">
      <div className="max-w-4xl mx-auto w-full">
        <p className="text-blue-600 font-semibold text-sm tracking-widest uppercase mb-4">Case Study</p>
        <h2 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight mb-4">
          Screen Fix Pro: Local SEO Case Study
        </h2>
        <p className="text-slate-500 text-lg mb-16 max-w-2xl">
          A local screen repair business in the Minneapolis–St. Paul metro. No website. No online presence. We changed that.
        </p>

        {/* Timeline */}
        <div className="grid sm:grid-cols-3 gap-6 mb-20">
          <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
            <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Before</p>
            <p className="text-slate-900 font-semibold text-lg">August 2025</p>
            <p className="text-slate-500 mt-1">No website. Zero online presence. Not indexed anywhere.</p>
          </div>
          <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
            <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">What We Built</p>
            <p className="text-slate-900 font-semibold text-lg">AEO-First Architecture</p>
            <p className="text-slate-500 mt-1">City-page structure built for local search, expanded to multi-market targeting, then layered with AEO optimization.</p>
          </div>
          <div className="bg-blue-600 rounded-xl p-6">
            <p className="text-xs font-bold text-blue-200 uppercase tracking-widest mb-2">Timeline</p>
            <p className="text-white font-semibold text-lg">Built to Compound</p>
            <p className="text-blue-100 mt-1">Organic visibility grows month over month. A long-term asset that gets stronger over time.</p>
          </div>
        </div>

        {/* AI Overview Screenshots — multi-city grid */}
        <div className="mb-20">
          <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-6">
            Google AI Overview: Ranking Across the Metro
          </p>
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              { src: '/ai-overview-apple-valley.png', city: 'Apple Valley' },
              { src: '/ai-overview-bloomington.png', city: 'Bloomington' },
              { src: '/ai-overview-eagan.png', city: 'Eagan' },
            ].map(({ src, city }) => (
              <div key={city} className="rounded-xl border border-slate-200 overflow-hidden shadow-sm">
                <div className="bg-slate-50 px-4 py-2 border-b border-slate-200">
                  <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">{city}</p>
                </div>
                <img
                  src={src}
                  alt={`Google AI Overview showing Screen Fix Pro named for window screen repair in ${city}, MN`}
                  className="w-full block"
                />
              </div>
            ))}
          </div>
          <p className="text-xs text-slate-400 italic mt-4">
            Screen Fix Pro named in Google AI Overview across multiple Twin Cities suburbs. Zero ad spend.
          </p>
        </div>

        {/* Results */}
        <div className="grid sm:grid-cols-3 gap-6">
          <div className="text-center p-6">
            <p className="text-5xl font-black text-slate-900 mb-2">8</p>
            <p className="text-slate-600 font-medium">city pages indexed and ranking in the Twin Cities metro</p>
          </div>
          <div className="text-center p-6 border-x border-slate-100">
            <p className="text-5xl font-black text-blue-600 mb-2">#1</p>
            <p className="text-slate-600 font-medium">Named in Google AI Overview alongside established competitors</p>
          </div>
          <div className="text-center p-6">
            <p className="text-5xl font-black text-slate-900 mb-2">$0</p>
            <p className="text-slate-600 font-medium">Ad spend. Every lead generated through organic search, not paid advertising.</p>
          </div>
        </div>

        <div className="mt-16 pt-16 border-t border-slate-100">
          <p className="text-slate-600 text-lg leading-relaxed max-w-3xl">
            Every site we build is structured from day one for AI Overview visibility — not retrofitted for it later. That's why businesses show up in Google's AI answers while competitors who've had websites for years don't.
          </p>
        </div>
      </div>
    </section>
  )
}
