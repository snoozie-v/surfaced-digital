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
      detail: 'AI search is moving fast. You get a partner who stays on top of it — not a vendor who disappears after launch.',
    },
  ]

  return (
    <section className="bg-slate-50 px-6 py-24">
      <div className="max-w-4xl mx-auto w-full">
        <p className="text-blue-600 font-semibold text-sm tracking-widest uppercase mb-4">What You Get</p>
        <h2 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight mb-16">
          Three deliverables. No fluff.
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

        <div className="bg-blue-600 rounded-2xl p-8 sm:p-10 text-center">
          <p className="text-blue-100 text-sm font-semibold uppercase tracking-widest mb-3">Pricing</p>
          <p className="text-white text-3xl sm:text-4xl font-black mb-3">Fixed-price projects starting at $1,500</p>
          <p className="text-blue-200 text-lg max-w-xl mx-auto">
            You know exactly what you're paying before we start. No retainers, no scope creep, no surprises.
          </p>
          <a
            href="#contact"
            className="inline-block mt-8 bg-white text-blue-600 font-semibold text-lg px-8 py-4 rounded-lg hover:bg-blue-50 transition-colors duration-200"
          >
            Get a Free Assessment
          </a>
        </div>
      </div>
    </section>
  )
}
