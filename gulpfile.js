var gulp = require("gulp");
var rollup = require("rollup");
var resolve = require("rollup-plugin-node-resolve");
var cjs = require("rollup-plugin-commonjs");

gulp.task("default", function () {
  // bundle files
  return rollup.rollup({
    // process our main file, including modules it depends on
    input: "./callback.js",
    // resolve plugin allows rollup to handle external modules (node_modules)
    // commonjs plugin allows rollup to handle files using `require`
    plugins: [
      resolve(),
      cjs()
    ]
  }).then(function(bundle) {
    // write file dist
    return bundle.write({
      file: "./dist/callback.js",
      // IIFE == Immediately Invoked Function Expression
      // this rollup output format includes dependencies instead of rewriting
      // the original to support different module formats
      format: "iife"
    })
  });
});
