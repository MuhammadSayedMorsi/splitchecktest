module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      screens: {
        mobile: "100px",

        tablet: "640px",
        // => @media (min-width: 640px) { ... }

        laptop: "1024px",
        // => @media (min-width: 1024px) { ... }

        desktop: "1170px",
        // => @media (min-width: 1170px) { ... }
        "2xl": "1580px",
      },
      width: {
        "1/7": "1170px",
        "3/6": "360px",
        "1/5": "630px",
        "1/50": "650px",
      },
      colors: {
        default: "#35558f",
        black: {
          300: "#0b0212",
          400: "#212529",
          600: "#0b0212",
        },
        gray: {
          100: "#eef3fd",
          300: "#65696d",
        },
        blue: {
          300: "#274276",
          500: "rgba(53,85,143,.5)",
        },
        red: {
          200: "#fa0128",
        },
        yellow: {
          200: "#f77d0e",
        },
      },
      backgroundColor: {
        lightblue: "#f9fbff",
      },
      spacing: {
        psmall: "2px",
        15: "15px",
        14: "14px",
        20: "20px",
        30: "30px",
        530: "530px",
        40: "40px",
        48: "48px",
        70: "70px",
        64: "64px",
        100: "100px",
        120: "120px",
        285: "285px",
        140: "140px",
        160: "160px",
        220: "300px",
        180: "180px",
      },
      container: {
        center: true,
      },
    },
  },
  corePlugins: {
    container: false
  },
  variants: {
    extend: {},
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        '.container': {
          maxWidth: '100%',

          '@screen xl': {
            maxWidth: '1170px',
          },
        }
      })
    }
  ],
};
