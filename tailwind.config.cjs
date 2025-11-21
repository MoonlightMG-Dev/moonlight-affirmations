module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        'moon-500': '#6B7AD5',
        'moon-600': '#5863C9',
        'midnight-900': '#0b1020',
        'lilac-400': '#A78BFA',
        'glow': '#9AE6B4'
      },
      boxShadow: {
        glow: '0 6px 18px rgba(99,102,241,0.25)',
      }
    },
  },
  plugins: [],
}
