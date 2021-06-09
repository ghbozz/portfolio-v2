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
      "primary-dark": "#22262f",
      "secondary-dark": "#2a2e38",
      "primary-light": "#ebf4f1",
      "secondary-light": "#d7e0dd",
      "primary-grey": "#b2b9b7",
      "secondary-grey": "#767a79",
      "primary-green": "#05a672"
    }
  },
  variants: {},
  plugins: [],
  purge: {
    // Learn more on https://tailwindcss.com/docs/controlling-file-size/#removing-unused-css
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
