import type { MDXComponents } from 'mdx/types'
import { Card } from '@/ui/card'
import { Button } from '@/ui/button'

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    Card,
    Button,
    h1: ({ children, ...props }) => (
      <h1 className="text-4xl font-bold mb-6 text-gradient" {...props}>
        {children}
      </h1>
    ),
    h2: ({ children, ...props }) => (
      <h2 className="text-3xl font-bold mb-4 text-foreground mt-8" {...props}>
        {children}
      </h2>
    ),
    h3: ({ children, ...props }) => (
      <h3 className="text-2xl font-semibold mb-3 text-foreground mt-6" {...props}>
        {children}
      </h3>
    ),
    p: ({ children, ...props }) => (
      <p className="text-foreground-muted mb-4 leading-relaxed" {...props}>
        {children}
      </p>
    ),
    a: ({ children, ...props }) => (
      <a className="text-accent hover:text-accent-secondary underline" {...props}>
        {children}
      </a>
    ),
    ul: ({ children, ...props }) => (
      <ul className="list-disc list-inside mb-4 text-foreground-muted space-y-2" {...props}>
        {children}
      </ul>
    ),
    ol: ({ children, ...props }) => (
      <ol className="list-decimal list-inside mb-4 text-foreground-muted space-y-2" {...props}>
        {children}
      </ol>
    ),
    code: ({ children, ...props }) => (
      <code className="px-2 py-1 rounded bg-background-tertiary text-accent font-mono text-sm" {...props}>
        {children}
      </code>
    ),
    pre: ({ children, ...props }) => (
      <pre className="p-4 rounded-lg bg-background-secondary border border-border overflow-x-auto mb-4" {...props}>
        {children}
      </pre>
    ),
    ...components,
  }
}

