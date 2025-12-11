module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'main-bg': "url('/src/assets/background.png')",
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
