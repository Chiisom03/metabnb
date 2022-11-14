/** @type {import('tailwindcss').Config} */
const defalutFont = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screen: {
      sm: "320px",
    },
    extend: {
      fontFamily: {
        sans: [...defalutFont.fontFamily.sans],
        mono: [...defalutFont.fontFamily.mono],
        rose: ['"Red Rose"', ...defalutFont.fontFamily.sans],
      },
      fontSize: {
        "sm-15": "0.9375rem", //15px
        dxs: ["1.5rem", { lineHeight: "2rem" }],
        dsm: ["1.875rem", { lineHeight: "2.375rem" }],
        dmd: ["2.25rem", { lineHeight: "2.75rem" }],
        dlg: ["3rem", { lineHeight: "3.75rem" }],
        dxl: ["3.75rem", { lineHeight: "4.5rem" }],
        d2xl: ["4.5rem", { lineHeight: "5.625rem" }],
      },
      colors: {
        major: "#A02279",
        white: "#F5F5F5",
        metablack: "#434343",
      },
    },
  },
  plugins: [],
};
