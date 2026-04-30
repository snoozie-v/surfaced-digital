export default function WhatYouGet() {
  const deliverables = [
    {
      number: '01',
      title: 'A professionally built website optimized for AI search from day one',
      detail: 'Fast, mobile-first, and structured the way Google\'s AI wants to read it. Not a template. Built for your market.',
    },
    {
      number: '02',
      title: 'Local city-page architecture designed to surface in Google\'s AI Overview',
      detail: 'Each page targets a specific service area. More pages means more chances to appear when someone nearby searches.',
    },
    {
      number: '03',
      title: 'Ongoing support and optimization as AI search evolves',
      detail: 'AI search is moving fast. You get a partner who stays on top of it, not a vendor who disappears after launch.',
    },
  ]

  return (
    <section className="bg-slate-50 px-6 py-24">
      <div className="max-w-4xl mx-auto w-full">
        <p className="text-blue-600 font-semibold text-sm tracking-widest uppercase mb-4">What You Get</p>
        <h2 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight mb-16">
          Three Deliverables. No Fluff. Built for Local Search.
        </h2>

        <div className="space-y-6 mb-16">
          {deliverables.map((item) => (
            <div key={item.number} className="bg-white rounded-xl p-8 border border-slate-200 flex gap-6 items-start">
              <span className="text-3xl font-black text-slate-200 leading-none flex-shrink-0 w-12">{item.number}</span>
              <div>
                <p className="text-slate-900 font-semibold text-lg leading-snug mb-2">{item.title}</p>
                <p className="text-slate-500 leading-relaxed">{item.detail}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="border border-slate-200 rounded-2xl overflow-hidden">
          <div className="bg-slate-900 px-8 py-6">
            <p className="text-blue-400 font-semibold text-sm tracking-widest uppercase mb-1">Pricing</p>
            <p className="text-white text-2xl font-black">A complete engagement, not a one-time build.</p>
          </div>

          <div className="divide-y divide-slate-100">
            <div className="bg-white px-8 py-8 flex flex-col sm:flex-row sm:items-start gap-4">
              <div className="flex-shrink-0 sm:w-48">
                <p className="text-slate-900 font-black text-xl">Website Build</p>
                <p className="text-blue-600 font-black text-2xl mt-1">$2,000</p>
              </div>
              <p className="text-slate-500 leading-relaxed">
                Full site with AEO-first architecture, local city-page structure, schema markup, and market research to position you correctly from day one. You'll know exactly what you're getting before we start.
              </p>
            </div>

            <div className="bg-white px-8 py-8 flex flex-col sm:flex-row sm:items-start gap-4">
              <div className="flex-shrink-0 sm:w-48">
                <p className="text-slate-900 font-black text-xl">Monthly Optimization</p>
                <p className="text-blue-600 font-black text-2xl mt-1">$500<span className="text-base font-semibold text-slate-400">/mo</span></p>
                <p className="text-slate-400 text-xs mt-1">6-month minimum</p>
              </div>
              <p className="text-slate-500 leading-relaxed">
                Each month has a defined scope: new pages, schema updates, GSC reporting, content additions. No vague "we're working on it." You see exactly what was done and what moved.
              </p>
            </div>

            <div className="bg-slate-50 px-8 py-6 flex flex-col sm:flex-row sm:items-center gap-4">
              <div className="flex-shrink-0 sm:w-48">
                <p className="text-slate-500 text-sm font-semibold uppercase tracking-wide">Minimum engagement</p>
                <p className="text-slate-900 font-black text-2xl mt-1">$5,000</p>
              </div>
              <p className="text-slate-500 text-sm leading-relaxed">
                No retainers that run forever with nothing to show. After six months you own a site that ranks, a GSC history that proves it, and the choice to continue or not.
              </p>
            </div>
          </div>

          <div className="bg-blue-600 px-8 py-6 text-center">
            <a
              href="#contact"
              className="inline-block bg-white text-blue-600 font-semibold text-lg px-8 py-4 rounded-lg hover:bg-blue-50 transition-colors duration-200"
            >
              Get a Free Assessment
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
