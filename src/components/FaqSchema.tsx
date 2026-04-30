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
        name: 'What is the difference between SEO and AEO?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Traditional SEO focuses on ranking a webpage in the standard blue-link results. AEO (Answer Engine Optimization) focuses on getting your business cited directly in Google\'s AI-generated answers, like the AI Overview that appears above search results. For local service businesses, AEO is increasingly important because AI Overview answers questions like "who does roofing in Minneapolis" before a user ever clicks a link.',
        },
      },
      {
        '@type': 'Question',
        name: 'What kinds of businesses do you work with?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Surfaced Digital works with contractors and trades businesses — roofing companies, HVAC contractors, plumbers, electricians, landscapers, and other local service providers. These businesses typically rely on word of mouth and want to build a reliable online presence that generates inbound leads without ongoing ad spend.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do you work with businesses outside the Twin Cities?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. While Chris Kimble is based in the Twin Cities and has deep familiarity with the Minneapolis and St. Paul metro market, Surfaced Digital works with contractors and trades businesses across Minnesota and nationally. Local SEO and AEO principles apply in any market.',
        },
      },
      {
        '@type': 'Question',
        name: 'How long does it take to show up in Google\'s AI answers?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Most clients see initial indexing and early AI Overview appearances within 4 to 8 weeks of launch, depending on competition in the local market. Our case study with Screen Fix Pro showed results within weeks of going live with zero paid advertising.',
        },
      },
      {
        '@type': 'Question',
        name: 'How much does a local SEO website cost?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Surfaced Digital projects start with a $2,000 website build, followed by $500 per month for ongoing optimization on a six-month minimum engagement. The total minimum engagement is $5,000. Every project includes AEO-first architecture, local city-page structure, schema markup, and monthly reporting so you see exactly what moved.',
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
