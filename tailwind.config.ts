import type { Config } from 'tailwindcss'

const config: Config = {
  // 1. تأكد من وجود هذا الجزء
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      // 2. وهذا الجزء
      colors: {
        'accent': '#f97116', 
      }
    },
  },
  plugins: [],
}
export default config