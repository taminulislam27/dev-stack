/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
      },
      colors: {
        ink: {
          950: '#0b0c14',
          900: '#12141f',
          800: '#1b1e2c',
        },
      },
      // Single source of truth for the brand gradient (orange -> pink -> violet).
      // Referenced by the `bg-brand-gradient` / `text-brand-gradient` utilities
      // defined in src/index.css, so re-theming means changing these 3 stops.
      backgroundImage: {
        'brand-gradient': 'linear-gradient(90deg, #FB923C 0%, #EC4899 55%, #8B5CF6 100%)',
      },
    },
  },
  plugins: [],
}
