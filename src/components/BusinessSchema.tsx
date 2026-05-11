export default function BusinessSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'Surfaced Digital',
    url: 'https://surfaceddigital.com',
    description: 'Web design and AEO optimization for contractors and trades businesses. We build websites that appear in Google\'s AI Overview.',
    areaServed: [
      { '@type': 'City', name: 'Minneapolis', containedInPlace: { '@type': 'State', name: 'Minnesota' } },
      { '@type': 'City', name: 'Saint Paul', containedInPlace: { '@type': 'State', name: 'Minnesota' } },
      { '@type': 'State', name: 'Minnesota' },
    ],
    serviceType: 'Web Design and Local SEO',
    knowsAbout: [
      'Answer Engine Optimization',
      'Local SEO',
      'Google AI Overview Optimization',
      'Web Design for Contractors',
      'AEO for Trades Businesses',
    ],
    founder: {
      '@type': 'Person',
      name: 'Chris Kimble',
      jobTitle: 'Web Developer and AEO Specialist',
      url: 'https://surfaceddigital.com',
      knowsAbout: [
        'Answer Engine Optimization',
        'Local SEO',
        'Google AI Overview',
        'Web Design',
      ],
      worksFor: { '@type': 'Organization', name: 'Surfaced Digital' },
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'AEO Web Design Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Website Build',
            description: 'Full website with AEO-first architecture, local city-page structure, schema markup, and market research.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Monthly SEO and AEO Optimization',
            description: 'Ongoing local SEO and AEO optimization with monthly deliverables and GSC reporting.',
          },
          eligibleDuration: { '@type': 'QuantitativeValue', value: 1, unitCode: 'MON' },
        },
      ],
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
