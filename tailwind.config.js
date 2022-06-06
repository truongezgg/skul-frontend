module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        arima: ['Arima Madurai', 'Arial', 'sans-serif'],
      },
      colors: {
        violet100: '#7F3DFF',
      },
      spacing: {
        18: '4.5rem',
        22: '5.5rem',
        22.5: '5.625rem',
        25: '6.25rem',
        50: '12.5rem',
        75: '18.75rem',
        81: '20.25rem',
        84: '21rem',
        100: '25rem',
        104: '26rem',
        108: '27rem',
        112: '28rem',
        116: '29rem',
        120: '30rem',
        124: '31rem',
        128: '32rem',
        140: '35rem',
        148: '37rem',
        160: '40rem',
        180: '45rem',
        200: '50rem',
      },
      keyframes: {
        bounceX: {
          '0%': {
            transform: 'translateX(0)',
            'animation-timing-function': 'cubic-bezier(0.8, 0, 1, 1)',
          },
          '25%': {
            transform: 'translateX(-15%)',
            'animation-timing-function': 'cubic-bezier(0.8, 0, 1, 1)',
          },
          '50%': {
            transform: 'translateX(0)',
            'animation-timing-function': 'cubic-bezier(0, 0, 0.2, 1)',
          },
          '75%': {
            transform: 'translateX(15%)',
            'animation-timing-function': 'cubic-bezier(0.8, 0, 1, 1)',
          },
          '100%': {
            transform: 'translateX(0)',
            'animation-timing-function': 'cubic-bezier(0.8, 0, 1, 1)',
          },
        },
      },
    },
  },
  plugins: [],
};
