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
      jobTitle: 'Software Engineer',
      url: 'https://nathansamson.dev',
    },
    publisher: {
      '@type': 'Person',
      name: 'Nathan Samson',
    },
    ...(type === 'person' && {
      jobTitle: 'Software Engineer',
      knowsAbout: [
        'Full Stack Development',
        'Project Management',
        'AI Systems',
        'Platform Architecture',
        'Systems Architecture',
        'Distributed Systems',
        'Cloud Computing',
        'Microservices',
      ],
      alumniOf: {
        '@type': 'EducationalOrganization',
        name: 'Addis Ababa Science and Technology University',
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
