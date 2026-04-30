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
            <div className="bg-slate-100 px-4 py-3 flex items-center gap-2 border-b border-slate-200">
              <div className="w-3 h-3 rounded-full bg-red-400" />
              <div className="w-3 h-3 rounded-full bg-yellow-400" />
              <div className="w-3 h-3 rounded-full bg-green-400" />
              <div className="ml-4 bg-white rounded px-3 py-1 text-xs text-slate-500 font-mono flex-1 max-w-md">
                google.com/search?q=where+can+I+get+my+screen+door+rescreened+in+Lakeville
              </div>
            </div>
            <div className="bg-white p-8 sm:p-12">
              <div className="flex items-start gap-3 mb-4">
                <div className="w-5 h-5 mt-0.5 flex-shrink-0">
                  <svg viewBox="0 0 24 24" className="w-5 h-5">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93s3.05-7.44 7-7.93v15.86zm2-15.86c1.03.13 2 .45 2.87.93H13v-.93zM13 7h5.24c.25.31.48.65.68 1H13V7zm0 3h6.74c.08.33.15.66.19 1H13v-1zm0 9.93V19h2.87c-.87.48-1.84.8-2.87.93zM18.24 17H13v-1h5.92c-.2.35-.43.69-.68 1zm1.5-3H13v-1h6.93c-.04.34-.11.67-.19 1z" fill="#4285F4"/>
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-slate-400 font-medium mb-1">AI Overview</p>
                  <p className="text-slate-700 text-sm leading-relaxed mb-3">
                    For screen door rescreening in Lakeville, MN, several local businesses can help. <strong>Screen Fix Pro</strong> offers professional rescreening services throughout the Minneapolis–St. Paul metro area, including Lakeville and surrounding suburbs...
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-blue-50 text-blue-700 text-xs px-2 py-1 rounded font-medium">Screen Fix Pro ✓</span>
                    <span className="bg-slate-100 text-slate-600 text-xs px-2 py-1 rounded">Competitor A</span>
                    <span className="bg-slate-100 text-slate-600 text-xs px-2 py-1 rounded">Competitor B</span>
                  </div>
                </div>
              </div>
              <p className="text-xs text-slate-400 italic mt-4">
                Screenshot from Google AI Overview — Screen Fix Pro surfaced alongside established competitors with zero paid ads.
              </p>
            </div>
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
