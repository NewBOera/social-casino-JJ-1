module.exports = {
  content: ['./src/**/*.{html,js}', './*.html'],
  theme: {
    extend: {
      colors: {
        golden: '#FEE299',
      },

      fontFamily: {
        Kulim: ['Kulim Park', 'sans-serif'],
      },
      screens: {
        lg: '1024px',
        xss: '460px',
        xs: '475px',
        '3xl': '1650px',
      },
    },
  },
  plugins: [],
};
