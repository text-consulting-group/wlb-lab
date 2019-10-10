/**
 * @file
 * Gulp Tasks
 */

const { src, dest, series, parallel, watch} = require("gulp");
const sass = require('gulp-sass');
const sassLint = require('gulp-sass-lint');
const autoprefixer = require('gulp-autoprefixer');
const sourcemaps = require('gulp-sourcemaps');


// Variables
// ------------------------------.
const vendor = './../themes/charm/vendor' ,
      assets = './../assets',
      source = './../_src/themag';

const config = {
  'scss': {
    'src': source + '/scss/**/*.scss',
    'watchDir': source + '/scss/**/*.*',
    'includePath': vendor,
    'sourcemaps': 'sourcemaps',
    'dest': assets + '/css'
  },
  'js': {
    'src': src + '/js/**/*.js',
    'dest': {
      "src" : assets + "/js/src",
      "min" : assets + "/js"
    }
  }
};


function scssLint() {
  return src('./scss/**/*.s+(a|c)ss')
    .pipe(sassLint({
      configFile: 'sass-lint.yml'
    }))
    .pipe(sassLint.format())
    .pipe(sassLint.failOnError());
}


function scss() {
  sass.compiler = require('node-sass');
  return src(config.scss.src)
    .pipe(sourcemaps.init())
    .pipe(sass({
      outputStyle: 'expanded',
      includePaths: [config.scss.includePath]
    }).on('error', sass.logError))
    .pipe(autoprefixer('last 2 version', 'ie 11'))
    .pipe(sourcemaps.write(config.scss.sourcemaps))
    .pipe(dest(config.scss.dest));
}


function scssCompressed() {
  sass.compiler = require('node-sass');
  return src(config.scss.src)
    .pipe(sass({
      outputStyle: 'compressed',
      includePaths: [config.scss.includePath]
    }).on('error', sass.logError))
    .pipe(autoprefixer('last 2 version', 'ie 11'))
    .pipe(dest(config.scss.dest));
}


function watcher() {
  watch([config.scss.src], scssCompressed);
}


exports.scss = scss;
exports.scssCompressed = scssCompressed;
exports.scssLint = scssLint;

exports.watcher = watcher;
exports.default = scss;
