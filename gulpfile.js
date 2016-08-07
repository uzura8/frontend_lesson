var gulp = require('gulp');

// sass compiler
var sass = require('gulp-sass');

// add vender prifix
var autoprefixer = require('gulp-autoprefixer');

// css minify
var cleanCSS = require('gulp-clean-css');

// for webpack
var webpack = require('gulp-webpack');;
var webpackConfig = require('./webpack.config.js');

gulp.task('bootstrap', function() {
  gulp.src('src/sass/bootstrap-custom.scss')
   .pipe(sass({
      includePaths: ['node_modules/bootstrap-sass/assets/stylesheets']
    }).on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(cleanCSS())
    .pipe(gulp.dest('./public/assets/css'));
});

gulp.task('webpack', function () {
  gulp.src(['./src/js/*.js'])
    .pipe(webpack(webpackConfig))
    .pipe(gulp.dest('./public/assets/js'));
});

gulp.task('watch', function() {/*scssを監視*/
    gulp.watch('./*.scss', ['sass']);
    /*拡張子がscssのファイルに変更があれば、gulp.task('sass')を実行*/
});

gulp.task('default', ['webpack', 'bootstrap']);
