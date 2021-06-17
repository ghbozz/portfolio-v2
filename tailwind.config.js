/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */
module.exports = {
  theme: {
    extend: {},
    colors: {
      "primary-dark": "#2C2D3B",
      "secondary-dark": "#313142",
      "primary-light": "#ebf4f1",
      "secondary-light": "#d7e0dd",
      "primary-gray": "#b2b9b7",
      "secondary-gray": "#767a79",
      "primary-green": "#05a672",
      "primary-red": "#dc3d3b"
    },
    container: {
      padding: {
        DEFAULT: "1rem",
        sm: "1rem",
        lg: "2rem",
        xl: "3rem"
      }
    }
  },
  variants: {},
  plugins: [],
  purge: {
    enabled: process.env.NODE_ENV === "production",
    content: [
      "components/**/*.vue",
      "layouts/**/*.vue",
      "pages/**/*.vue",
      "plugins/**/*.js",
      "nuxt.config.js"
    ]
  }
};
