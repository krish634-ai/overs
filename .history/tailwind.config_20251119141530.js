export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#2563eb',
          dark: '#1e40af',
        },
      },
      boxShadow: {
        soft: '0 10px 30px -10px rgba(2, 6, 23, 0.6)',
      },
    },
  },
  plugins: [],
}