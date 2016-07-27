var gulp = require("gulp");

// sass compiler
var sass = require("gulp-sass");

// add vender prifix
var autoprefixer = require("gulp-autoprefixer");

// css minify
var cleanCSS = require('gulp-clean-css');

gulp.task("bootstrap", function() {
  gulp.src("src/sass/bootstrap/bootstrap.scss")
   .pipe(sass({
      includePaths: ["node_modules/bootstrap-sass/assets/stylesheets"]
    }).on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(cleanCSS())
    .pipe(gulp.dest("./public/assets/css"));
});
