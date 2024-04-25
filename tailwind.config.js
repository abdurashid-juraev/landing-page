// /** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.html"],
  theme: {
    contaiener: {
      center: true,
    },
    screens: {
      xl: "1300px",
      lg: "1024px",
      md: "768px",
      sm: "320px",
    },

    extend: {
      width: {
        50: "198px",
        68: "68px",
        15: "60px",
      },
      height: {
        18: "72px",
        68: "68px",
        15: "60px",
      },
      fontSize: {
        h2: ["40px"],
        cardT: ["28px"],
      },
      colors: {
        main: "#110f0f",
        orange: "#ffa800",
        brzinc: "#a1aebf",
        mentorbg: "#1b1919",
      },
      backgroundImage: {
        quadro: "url('../images/svg/Vector.svg')",
      },
      fontFamily: {
        main: ["Agrandir", "sans-serif"],
        abel: ["Abel", "sans-serif"],
      },
      lineClamp: {
        3: "3",
      },
    },
  },
  plugins: [require("tailwind-hamburgers")],
};
