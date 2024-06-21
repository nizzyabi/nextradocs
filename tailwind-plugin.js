const postcssImport = require("postcss-import");
const tailwindcss = require("tailwindcss");
const autoprefixer = require("autoprefixer");

function tailwindPlugin(context, options) {
  return {
    name: "tailwind-plugin",
    configurePostCss(postcssOptions) {
      postcssOptions.plugins = [postcssImport, tailwindcss, autoprefixer];
      return postcssOptions;
    },
  };
}

module.exports = tailwindPlugin;
