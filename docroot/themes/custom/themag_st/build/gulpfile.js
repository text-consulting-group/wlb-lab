/**
 * @file
 * Gulp Tasks
 */

var gulp = require('gulp');
var notify = require('gulp-notify');
var sourcemaps = require('gulp-sourcemaps');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');


// Variables
// ------------------------------.
var vendor = '../../themag/themes/charm/vendor' ,
  themag = '../../themag/_src/',
  assets = '../assets',
  src = '../_src';

var config = {
  'scss': {
    'src': src + '/scss/**/*.scss',
    'watchDir': src + '/scss/**/*.*',
    'includePath': [vendor, themag],
    'sourcemaps': 'sourcemaps',
    'dest': assets + '/css'
  }
};

// Compile SCSS/SASS
// ------------------------------.
gulp.task('scss', function () {
  return gulp.src(config.scss.src)
    .pipe(sourcemaps.init())
    .pipe(sass({
      outputStyle: 'nested',
      includePaths: config.scss.includePath
    }))
    .on("error", notify.onError(function (error) {
      return "Error: " + error.message;
    }))
    .pipe(autoprefixer('last 2 version', 'ie 11'))
    .pipe(sourcemaps.write(config.scss.sourcemaps))
    .pipe(gulp.dest(config.scss.dest))
});


// Watch
// ------------------------------.
gulp.task('watch', function () {
  gulp.watch(config.scss.watchDir, ['scss']);
});
