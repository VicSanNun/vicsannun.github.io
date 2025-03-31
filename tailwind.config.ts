import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            maxWidth: 'none',
            color: '#000000',
            a: {
              color: '#2563eb',
              '&:hover': {
                color: '#1d4ed8',
              },
            },
            h1: {
              color: '#000000',
            },
            h2: {
              color: '#000000',
            },
            h3: {
              color: '#000000',
            },
            h4: {
              color: '#000000',
            },
            strong: {
              color: '#000000',
            },
            code: {
              color: '#000000',
            },
            p: {
              color: '#000000',
            },
            li: {
              color: '#000000',
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