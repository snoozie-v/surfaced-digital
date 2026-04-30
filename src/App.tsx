import Hero from './components/Hero'
import Problem from './components/Problem'
import CaseStudy from './components/CaseStudy'
import WhatYouGet from './components/WhatYouGet'
import About from './components/About'
import Contact from './components/Contact'
import FaqSchema from './components/FaqSchema'

export default function App() {
  return (
    <>
      <main>
        <Hero />
        <Problem />
        <CaseStudy />
        <WhatYouGet />
        <About />
        <Contact />
      </main>
      <FaqSchema />
    </>
  )
}
