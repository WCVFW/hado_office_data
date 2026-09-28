/** @type {import('postcss-load-config').Config} */
// IMPORTANT: Use CommonJS syntax (module.exports) for .cjs files.
module.exports = {
  plugins: {
    // This plugin processes your Tailwind directives in index.css
    tailwindcss: {},
    // This plugin adds necessary vendor prefixes for better browser compatibility
    autoprefixer: {},
  },
};
