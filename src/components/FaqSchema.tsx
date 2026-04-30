export default function FaqSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What is AI Overview optimization?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'AI Overview optimization (also called Answer Engine Optimization or AEO) is the practice of structuring a website so that Google\'s AI-powered Overview feature recommends it when answering user questions. This involves using clear content structure, local schema markup, and authoritative city-specific pages that signal relevance to AI crawlers.',
        },
      },
      {
        '@type': 'Question',
        name: 'How long does it take to show up in Google\'s AI answers?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Most clients see initial indexing and early AI Overview appearances within 4–8 weeks of launch, depending on competition in the local market. Our case study with Screen Fix Pro showed results within weeks of going live — with zero paid advertising.',
        },
      },
      {
        '@type': 'Question',
        name: 'How much does a local SEO website cost?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Surfaced Digital builds fixed-price websites starting at $1,500. Every project includes AEO-optimized content, local city-page architecture, and ongoing support as AI search evolves. You know the cost upfront — no retainers, no surprises.',
        },
      },
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
