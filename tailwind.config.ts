/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Primary brand tokens
        'brand-blue':  '#0066FF',  // Electric blue — primary CTA, accents
        'brand-navy':  '#030D1F',  // Deep navy — hero, dark sections
        // Corporate aliases
        'corp-navy':   '#071427',
        'corp-blue':   '#1D4ED8',
        'corp-slate':  '#334155',
      },
      fontFamily: {
        sans: [
          'var(--font-inter)',
          'Inter',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'sans-serif',
        ],
      },
      fontSize: {
        // Corporate type scale
        'display': ['3.75rem', { lineHeight: '1.08', letterSpacing: '-0.02em', fontWeight: '700' }],
        'h1':      ['3rem',    { lineHeight: '1.1',  letterSpacing: '-0.02em', fontWeight: '700' }],
        'h2':      ['2.25rem', { lineHeight: '1.2',  letterSpacing: '-0.015em', fontWeight: '700' }],
        'h3':      ['1.25rem', { lineHeight: '1.4',  fontWeight: '600' }],
        'body-lg': ['1.0625rem', { lineHeight: '1.75' }],
        'body':    ['0.9375rem', { lineHeight: '1.7' }],
        'label':   ['0.6875rem', { lineHeight: '1.5', letterSpacing: '0.08em', fontWeight: '600' }],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '26': '6.5rem',
      },
      maxWidth: {
        'content': '75rem',  // 1200px — enterprise content width
      },
      boxShadow: {
        'card':  '0 1px 2px 0 rgb(0 0 0 / 0.04), 0 1px 3px 0 rgb(0 0 0 / 0.04)',
        'panel': '0 4px 24px -4px rgb(0 0 0 / 0.08), 0 2px 8px -2px rgb(0 0 0 / 0.04)',
      },
      borderRadius: {
        DEFAULT: '0.25rem',  // 4px — sharper corners, more corporate
      },
    },
  },
  plugins: [],
}
