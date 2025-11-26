import { Metadata } from 'next'

interface StructuredDataProps {
  metadata: Metadata
  type?: 'website' | 'person' | 'organization'
}

export default function StructuredData({ metadata, type = 'website' }: StructuredDataProps) {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': type === 'person' ? 'Person' : type === 'organization' ? 'Organization' : 'WebSite',
    name: metadata.title,
    description: metadata.description,
    url: metadata.metadataBase?.toString() || 'https://nathansamson.dev',
    author: {
      '@type': 'Person',
      name: 'Nathan Samson',
      jobTitle: 'Systems Architect',
      url: 'https://nathansamson.dev',
    },
    publisher: {
      '@type': 'Person',
      name: 'Nathan Samson',
    },
    ...(type === 'person' && {
      jobTitle: 'Systems Architect',
      knowsAbout: [
        'Systems Architecture',
        'Distributed Systems',
        'Cloud Computing',
        'Software Engineering',
        'DevOps',
        'Microservices',
      ],
      alumniOf: {
        '@type': 'EducationalOrganization',
        name: 'Addis Ababa Institute of Technology',
      },
    }),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData),
      }}
    />
  )
}
