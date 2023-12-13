/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.{html,js}"],
  theme: {
    container: {
      padding: {
        DEFAULT: '15px',
      }
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '960px',
      xl: '1330px',
    },
    extend: {
      colors: {
        primary: '#242a2b',
        secondary: '#808080',
        accent: {
          DEFAULT: '#1cbccf',
          secondary: '#18abbc',
          tertiary: '#90c6cb',
        },
        grey: '#e8f0f1',
      },
      fontFamily: {
        primary: 'Poppins, sans-serif',
      },
      boxShadow: {
        custom1: '0px 2px 40px 0px rgba(8, 70, 78, 0.08)',
        custom2: '0px 0x 30px 0px rgba(8, 73, 81, 0.06)',
      },
      backgroundImage: {
        'services': 'url("/assets/img/services/services-bg.png")',
        'testimonials': 'url("/assets/img/testimonials/testimonials-bg.png")',
        'departments': 'url("/assets/img/departments/departments-bg.png")',
        'quoteLeft': 'url("/assets/icons/testimonials/quote-left.svg")',
        'quoteRight': 'url("/assets/icons/testimonials/quote-right.svg")',
      },
    },
  },
  plugins: [],
};