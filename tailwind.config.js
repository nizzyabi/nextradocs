/** @type {import('tailwindcss').Config} */
module.exports = {
  corePlugins: {
    preflight: false,
  },
  content: ["./src/**/*.{jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        xmd: "876px",
      },
      colors: {
        primary: {
          DEFAULT: "var(--ifm-color-primary)",
          border: "var(--ifm-color-primary-border)",
          "border-half": "var(--ifm-color-primary-border-half)",
          hover: "var(--ifm-color-primary-hover)",
          dark: "var(--ifm-color-primary-dark)",
          darker: "var(--ifm-color-primary-darker)",
          darkest: "var(--ifm-color-primary-darkest)",
          light: "var(--ifm-color-primary-light)",
          lighter: "var(--ifm-color-primary-lighter)",
          lightest: "var(--ifm-color-primary-lightest)",
        },
        background: "var(--ifm-background-color)",
      },
    },
  },
  plugins: [],
};
