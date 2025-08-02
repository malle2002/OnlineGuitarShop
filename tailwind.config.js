module.exports = {
  darkMode: 'class',
  content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        whatever: '#ff6428',
        primary: 'var(--primary)',
        'primary-content': 'var(--primary-content)',
        secondary: 'var(--secondary)',
        'secondary-content': 'var(--secondary-content)',
        accent: 'var(--accent)',
        'accent-content': 'var(--accent-content)',
        neutral: 'var(--neutral)',
        'neutral-content': 'var(--neutral-content)',
      },
    },
  },
  plugins: [],
};
