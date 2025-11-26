import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: {
          DEFAULT: '#0a0a0f',
          secondary: '#111118',
          tertiary: '#1a1a24',
        },
        foreground: {
          DEFAULT: '#e4e4e7',
          muted: '#a1a1aa',
        },
        accent: {
          DEFAULT: '#00f5ff',
          secondary: '#7c3aed',
          tertiary: '#ec4899',
        },
        border: {
          DEFAULT: '#27272a',
          light: '#3f3f46',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-jetbrains)', 'monospace'],
      },
      animation: {
        'glow': 'glow 2s ease-in-out infinite alternate',
        'slide-in': 'slideIn 0.3s ease-out',
        'fade-in': 'fadeIn 0.5s ease-out',
      },
      keyframes: {
        glow: {
          '0%': { boxShadow: '0 0 5px #00f5ff, 0 0 10px #00f5ff, 0 0 15px #00f5ff' },
          '100%': { boxShadow: '0 0 10px #00f5ff, 0 0 20px #00f5ff, 0 0 30px #00f5ff' },
        },
        slideIn: {
          '0%': { transform: 'translateX(-100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      typography: {
        DEFAULT: {
          css: {
            color: '#e4e4e7',
            maxWidth: 'none',
            a: {
              color: '#00f5ff',
              textDecoration: 'none',
              '&:hover': {
                color: '#7c3aed',
                textDecoration: 'underline',
              },
            },
            h1: {
              color: '#e4e4e7',
              fontWeight: '700',
              fontSize: '2.5rem',
              lineHeight: '1.1',
            },
            h2: {
              color: '#e4e4e7',
              fontWeight: '600',
              fontSize: '2rem',
              lineHeight: '1.2',
            },
            h3: {
              color: '#e4e4e7',
              fontWeight: '600',
              fontSize: '1.5rem',
              lineHeight: '1.3',
            },
            h4: {
              color: '#e4e4e7',
              fontWeight: '600',
            },
            strong: {
              color: '#e4e4e7',
              fontWeight: '600',
            },
            code: {
              color: '#00f5ff',
              backgroundColor: '#0f0f0f',
              border: '1px solid #27272a',
              borderRadius: '0.375rem',
              padding: '0.125rem 0.375rem',
              fontSize: '0.875rem',
            },
            pre: {
              backgroundColor: '#0f0f0f',
              border: '1px solid #27272a',
              borderRadius: '0.5rem',
              padding: '1.5rem',
              overflow: 'auto',
            },
            blockquote: {
              color: '#a1a1aa',
              borderLeftColor: '#00f5ff',
              borderLeftWidth: '4px',
              backgroundColor: '#0f0f0f',
              padding: '1rem 1.5rem',
              margin: '2rem 0',
              borderRadius: '0 0.5rem 0.5rem 0',
            },
            ul: {
              listStyleType: 'none',
              paddingLeft: '0',
            },
            li: {
              position: 'relative',
              paddingLeft: '1.5rem',
              '&::before': {
                content: '""',
                position: 'absolute',
                left: '0',
                top: '0.5rem',
                width: '0.5rem',
                height: '0.5rem',
                backgroundColor: '#00f5ff',
                borderRadius: '50%',
              },
            },
            table: {
              borderColor: '#27272a',
              borderCollapse: 'collapse',
              width: '100%',
              margin: '2rem 0',
            },
            th: {
              border: '1px solid #27272a',
              padding: '0.75rem',
              textAlign: 'left',
              backgroundColor: '#0f0f0f',
              fontWeight: '600',
            },
            td: {
              border: '1px solid #27272a',
              padding: '0.75rem',
              backgroundColor: '#0a0a0f',
            },
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
export default config

