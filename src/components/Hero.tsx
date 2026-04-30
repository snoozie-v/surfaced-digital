export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center px-6 py-24 bg-white">
      <div className="max-w-4xl mx-auto w-full">
        <div className="inline-block bg-blue-50 text-blue-700 text-sm font-semibold tracking-wide uppercase px-3 py-1 rounded-full mb-8">
          AI Search Optimization for Local Businesses
        </div>
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-slate-900 leading-[1.05] tracking-tight mb-6">
          We build websites that Google's AI actually recommends.
        </h1>
        <p className="text-xl sm:text-2xl text-slate-500 font-normal leading-relaxed max-w-2xl mb-10">
          See how we took a local screen repair business from no website to the top of Google's AI Overview — in under 90 days.
        </p>
        <a
          href="#contact"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold text-lg px-8 py-4 rounded-lg transition-colors duration-200"
        >
          Get a Free Assessment
        </a>
      </div>
    </section>
  )
}
