module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      primary: 'Arial',
    },
    container: {
      padding: {
        DEFAULT: '30px',
        lg: '0',
      },
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1440px',
    },
    extend: {
      colors: {
        primary: '#FFFFFF',
        secondary: '#16BBCE',
      },
      backgroundImage: {
        hero: "url('./images/theme2-2.svg')",
      },
    },
  },
  plugins: [],
};
