export default function WhatYouGet() {
  const deliverables = [
    {
      number: '01',
      title: 'A site built around what you want to be known for',
      detail: 'Before anything gets built, we figure out how your market searches and where you can win. The site gets built around that — not a template dropped on your business.',
    },
    {
      number: '02',
      title: 'You show up when people nearby are ready to hire',
      detail: 'Each page targets a specific service area. The more ground you cover, the more often Google\'s AI recommends you when someone nearby is searching.',
    },
    {
      number: '03',
      title: 'A partner who keeps pushing while you focus on the work',
      detail: 'AI search is moving fast. You get someone watching it for you, making adjustments, and showing you what\'s working — not a vendor who disappears after launch.',
    },
  ]

  return (
    <section className="bg-slate-50 px-6 py-24">
      <div className="max-w-4xl mx-auto w-full">
        <p className="text-blue-600 font-semibold text-sm tracking-widest uppercase mb-4">What You Get</p>
        <h2 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight mb-16">
          What working together actually looks like.
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
            <p className="text-blue-400 font-semibold text-sm tracking-widests uppercase mb-1">How It Works</p>
            <p className="text-white text-2xl font-black">A complete engagement, not a one-time build.</p>
          </div>

          <div className="divide-y divide-slate-100">
            <div className="bg-white px-8 py-8 flex flex-col sm:flex-row sm:items-start gap-4">
              <div className="flex-shrink-0 sm:w-48">
                <p className="text-slate-900 font-black text-xl">Discovery + Build</p>
              </div>
              <p className="text-slate-500 leading-relaxed">
                You tell us what you want to be known for and where you want to work. We handle the research and strategy. By the time we launch, every page has a clear purpose — and you'll know exactly what it is before we build it.
              </p>
            </div>

            <div className="bg-white px-8 py-8 flex flex-col sm:flex-row sm:items-start gap-4">
              <div className="flex-shrink-0 sm:w-48">
                <p className="text-slate-900 font-black text-xl">Monthly Progress</p>
              </div>
              <p className="text-slate-500 leading-relaxed">
                Each month you get a clear picture of what was done, what moved, and what's next. No agency jargon. No wondering if it's working.
              </p>
            </div>

            <div className="bg-slate-50 px-8 py-6 flex flex-col sm:flex-row sm:items-center gap-4">
              <div className="flex-shrink-0 sm:w-48">
                <p className="text-slate-500 text-sm font-semibold uppercase tracking-wide">The commitment</p>
              </div>
              <p className="text-slate-500 text-sm leading-relaxed">
                No retainers that run forever with nothing to show. After, you own a site that ranks and the choice to continue or not.
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
