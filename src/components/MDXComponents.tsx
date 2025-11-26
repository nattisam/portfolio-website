import type { MDXComponents } from 'mdx/types'
import { Card } from '@/ui/card'
import { Button } from '@/ui/button'

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // Layout components
    Card,
    Button,

    // Enhanced typography with neon accents
    h1: ({ children, ...props }) => (
      <h1
        className="text-4xl font-bold mb-6 text-gradient border-b border-accent/20 pb-2"
        {...props}
      >
        {children}
      </h1>
    ),

    h2: ({ children, ...props }) => (
      <h2
        className="text-3xl font-bold mb-4 text-foreground mt-12 border-l-4 border-accent pl-4"
        {...props}
      >
        {children}
      </h2>
    ),

    h3: ({ children, ...props }) => (
      <h3
        className="text-2xl font-semibold mb-3 text-foreground mt-8 text-accent"
        {...props}
      >
        {children}
      </h3>
    ),

    h4: ({ children, ...props }) => (
      <h4
        className="text-xl font-semibold mb-2 text-foreground mt-6"
        {...props}
      >
        {children}
      </h4>
    ),

    p: ({ children, ...props }) => (
      <p
        className="text-foreground-muted mb-6 leading-relaxed text-lg"
        {...props}
      >
        {children}
      </p>
    ),

    // Enhanced links
    a: ({ children, ...props }) => (
      <a
        className="text-accent hover:text-accent-secondary underline decoration-accent/30 hover:decoration-accent transition-all duration-200"
        {...props}
      >
        {children}
      </a>
    ),

    // Enhanced lists
    ul: ({ children, ...props }) => (
      <ul
        className="mb-6 space-y-2"
        {...props}
      >
        {children}
      </ul>
    ),

    li: ({ children, ...props }) => (
      <li className="flex items-start gap-3 text-foreground-muted">
        <span className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0"></span>
        <span className="leading-relaxed">{children}</span>
      </li>
    ),

    ol: ({ children, ...props }) => (
      <ol
        className="mb-6 space-y-2"
        {...props}
      >
        {children}
      </ol>
    ),

    // Enhanced code blocks
    code: ({ children, className, ...props }) => {
      const isInline = !className?.includes('language-')
      return isInline ? (
        <code
          className="px-2 py-1 rounded bg-background-tertiary text-accent font-mono text-sm border border-border/50"
          {...props}
        >
          {children}
        </code>
      ) : (
        <code className={className} {...props}>
          {children}
        </code>
      )
    },

    pre: ({ children, ...props }) => (
      <pre
        className="p-6 rounded-lg bg-background-secondary border border-border overflow-x-auto mb-6 shadow-lg"
        {...props}
      >
        {children}
      </pre>
    ),

    // Custom components for case studies
    blockquote: ({ children, ...props }) => (
      <blockquote
        className="border-l-4 border-accent bg-background-tertiary/50 p-6 rounded-r-lg mb-6 italic"
        {...props}
      >
        {children}
      </blockquote>
    ),

    // Table styling
    table: ({ children, ...props }) => (
      <div className="overflow-x-auto mb-6">
        <table className="w-full border-collapse border border-border bg-background-secondary rounded-lg" {...props}>
          {children}
        </table>
      </div>
    ),

    th: ({ children, ...props }) => (
      <th className="border border-border bg-background-tertiary px-4 py-3 text-left font-semibold text-foreground" {...props}>
        {children}
      </th>
    ),

    td: ({ children, ...props }) => (
      <td className="border border-border px-4 py-3 text-foreground-muted" {...props}>
        {children}
      </td>
    ),

    // Image wrapper for screenshots
    img: ({ alt, ...props }) => (
      <figure className="mb-6">
        <img
          className="w-full rounded-lg border border-border shadow-lg"
          alt={alt}
          {...props}
        />
        {alt && (
          <figcaption className="text-center text-sm text-foreground-muted mt-2 italic">
            {alt}
          </figcaption>
        )}
      </figure>
    ),

    ...components,
  }
}

