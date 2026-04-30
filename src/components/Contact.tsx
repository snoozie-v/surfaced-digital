import { useState } from 'react'
import type { FormEvent } from 'react'

type FormState = 'idle' | 'submitting' | 'success' | 'error'

export default function Contact() {
  const [status, setStatus] = useState<FormState>('idle')

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('submitting')
    const form = e.currentTarget
    const data = Object.fromEntries(new FormData(form))

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: { 'Content-Type': 'application/json' },
      })
      if (res.ok) {
        setStatus('success')
        form.reset()
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="bg-slate-900 px-6 py-24">
      <div className="max-w-4xl mx-auto w-full">
        <div className="max-w-xl">
          <p className="text-blue-400 font-semibold text-sm tracking-widest uppercase mb-4">Contact</p>
          <h2 className="text-4xl sm:text-5xl font-black text-white tracking-tight mb-4">
            Let's talk about your business
          </h2>
          <p className="text-slate-400 text-lg mb-12">
            Tell me where you're at and what you're after. I'll take a look and come back with honest feedback on what's possible.
          </p>

          {status === 'success' ? (
            <div className="bg-blue-600 rounded-xl p-8 text-center">
              <p className="text-white text-xl font-semibold mb-2">Message received.</p>
              <p className="text-blue-100">I'll be in touch within 1 business day.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">
                    Name <span className="text-blue-400">*</span>
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    className="w-full bg-slate-800 border border-slate-700 text-white placeholder-slate-500 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
                    Email <span className="text-blue-400">*</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="w-full bg-slate-800 border border-slate-700 text-white placeholder-slate-500 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                    placeholder="you@company.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-slate-300 mb-2">
                  Phone <span className="text-slate-500 text-xs">(optional)</span>
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  className="w-full bg-slate-800 border border-slate-700 text-white placeholder-slate-500 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                  placeholder="(612) 555-0100"
                />
              </div>

              <div>
                <label htmlFor="business_type" className="block text-sm font-medium text-slate-300 mb-2">
                  What kind of business do you run? <span className="text-blue-400">*</span>
                </label>
                <input
                  id="business_type"
                  name="business_type"
                  type="text"
                  required
                  className="w-full bg-slate-800 border border-slate-700 text-white placeholder-slate-500 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                  placeholder="e.g. Roofing contractor, HVAC, plumber..."
                />
              </div>

              <div>
                <label htmlFor="challenge" className="block text-sm font-medium text-slate-300 mb-2">
                  What's your biggest challenge with getting found online? <span className="text-slate-500 text-xs">(optional)</span>
                </label>
                <textarea
                  id="challenge"
                  name="challenge"
                  rows={4}
                  className="w-full bg-slate-800 border border-slate-700 text-white placeholder-slate-500 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition resize-none"
                  placeholder="Tell me what's not working..."
                />
              </div>

              {status === 'error' && (
                <p className="text-red-400 text-sm">Something went wrong. Please try again or email me directly.</p>
              )}

              <button
                type="submit"
                disabled={status === 'submitting'}
                className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 disabled:opacity-60 text-white font-semibold text-lg px-10 py-4 rounded-lg transition-colors duration-200"
              >
                {status === 'submitting' ? 'Sending...' : 'Send Message'}
              </button>

              <p className="text-slate-500 text-sm mt-4">I respond within 1 business day.</p>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
