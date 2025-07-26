export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      spacing: {
        '35': '8.75rem',
      },
      colors: {
        'navy-blue-900': '#0D47A1',
        'navy-blue-800': '#2A56C6',
        'navy-blue-700': '#1A5FB4',
        'navbar-blue': '#1565C0',
      },
      fontFamily: {
        quicksand: ['Quicksand', 'sans-serif'],
        righteous: ['Righteous', 'sans-serif'],
        kanit: ['Kanit', 'sans-serif'],
      },
  },
  plugins: [],
  }
}