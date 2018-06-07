var gulp = require("gulp");
var babel = require("gulp-babel");
var browserify = require("browserify");
var babelify = require("babelify");
var source = require("vinyl-source-stream");

// gulp.task("default", function () {
//   return gulp.src("callback.js")
//     .pipe(babel())
//     .pipe(gulp.dest("dist"));
// });

gulp.task("build", function () {
  return browserify("promise.js")
  	.transform(babelify)
  	.bundle()
    .pipe(source('bundle.js'))
    .pipe(gulp.dest("dist"));
});

gulp.task('watch', ['build'], function() {
	gulp.watch('promise.js', ['build']);
})

gulp.task('default', ['watch']);