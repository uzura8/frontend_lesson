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

gulp.task('css', function() { 
  gulp.src('src/sass/style.scss')
    .pipe(sass({
      style: 'compressed',
      loadPath: [
        'src/sass',
        'node_modules/bootstrap-sass/assets/stylesheets',
        'node_modules/font-awesome/scss',
      ]
    }).on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(cleanCSS())
    .pipe(gulp.dest('./public/assets/css'));
});

//gulp.task('icons', function() {
//  gulp.src([
//      'node_modules/font-awesome/fonts/**.*',
//      'node_modules/bootstrap-sass/assets/fonts/bootstrap/**.*'
//    ])
//    .pipe(gulp.dest('./public/assets/fonts'));
//});

gulp.task('webpack', function () {
  gulp.src(['./src/js/*.js'])
    .pipe(webpack(webpackConfig))
    .pipe(gulp.dest('./public/assets/js'));
});

gulp.task('watch', function() {/*scssを監視*/
    gulp.watch('./*.scss', ['sass']);
    /*拡張子がscssのファイルに変更があれば、gulp.task('sass')を実行*/
});

gulp.task('default', ['webpack', 'css']);
