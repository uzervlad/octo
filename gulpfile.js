const { src, dest, series, parallel, watch } = require('gulp');
const minify = require('gulp-minify');
const sass = require('gulp-sass')(require('sass'));
const cleanCSS = require('gulp-clean-css');

function buildJavascript() {
  return src('src/script/*.js')
    .pipe(minify({ ext: { min: ".js" }, noSource: true }))
    .pipe(dest('public'));
}

function buildStyles() {
  return src('./src/style/*.scss')
    .pipe(sass())
    .pipe(cleanCSS())
    .pipe(dest('public'));
}

exports.default = parallel(
  buildJavascript,
  buildStyles
);

exports.watch = function() {
  watch('src/script/*', buildJavascript);
  watch('src/style/**/*.scss', buildStyles);
}