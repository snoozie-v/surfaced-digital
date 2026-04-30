export default function CaseStudy() {
  return (
    <section className="bg-white px-6 py-24 border-b border-slate-100">
      <div className="max-w-4xl mx-auto w-full">
        <p className="text-blue-600 font-semibold text-sm tracking-widest uppercase mb-4">Case Study</p>
        <h2 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight mb-4">
          Screen Fix Pro
        </h2>
        <p className="text-slate-500 text-lg mb-16 max-w-2xl">
          A local screen repair business in the Minneapolis–St. Paul metro. No website. No online presence. We changed that.
        </p>

        {/* Timeline */}
        <div className="grid sm:grid-cols-3 gap-6 mb-20">
          <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
            <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Before</p>
            <p className="text-slate-900 font-semibold text-lg">October 2024</p>
            <p className="text-slate-500 mt-1">No website. Zero online presence. Not indexed anywhere.</p>
          </div>
          <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
            <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">What We Built</p>
            <p className="text-slate-900 font-semibold text-lg">AEO-First Architecture</p>
            <p className="text-slate-500 mt-1">Local SEO structure with 8 city pages optimized for AI Overview from day one.</p>
          </div>
          <div className="bg-blue-600 rounded-xl p-6">
            <p className="text-xs font-bold text-blue-200 uppercase tracking-widest mb-2">Timeline</p>
            <p className="text-white font-semibold text-lg">Weeks, Not Months</p>
            <p className="text-blue-100 mt-1">Site built, indexed, and ranking across the Twin Cities metro.</p>
          </div>
        </div>

        {/* AI Overview Screenshot — centerpiece */}
        <div className="mb-20">
          <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">
            Google AI Overview — Live Result
          </p>
          <div className="rounded-2xl border-2 border-slate-200 overflow-hidden shadow-lg">
            <img
              src="/ai-overview.png"
              alt="Google AI Overview showing Screen Fix Pro named alongside competitors for screen door rescreening in Lakeville"
              className="w-full block"
            />
            <p className="text-xs text-slate-400 italic px-6 py-4 bg-white border-t border-slate-100">
              Live Google AI Overview result — Screen Fix Pro named alongside established competitors with zero ad spend.
            </p>
          </div>
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
            <p className="text-5xl font-black text-slate-900 mb-2">$130</p>
            <p className="text-slate-600 font-medium">First job booked from organic search — zero ad spend</p>
          </div>
        </div>
      </div>
    </section>
  )
}
