const postcss = require ('rollup-plugin-postcss');   
const typescript = require ("@rollup/plugin-typescript");
const url = require ('@rollup/plugin-url');
const svgr = require ('@svgr/rollup');

module.exports = {
  input: "src/index.ts",
  output: {
    file: 'dist/cjs/index.js',
    format: "cjs",
  },
  plugins: [
    typescript({
      tsconfig: "./tsconfig.json",
    }),
    postcss({
        extract: 'index.css',
        modules: true,
        use: ['sass'],
        minimize: true,
      }),
      url(), 
      svgr({icon : true}),
  ],
};
