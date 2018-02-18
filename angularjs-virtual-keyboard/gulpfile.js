const build = require('gulp-build');
const gulp = require('gulp');
const build_js = require('./tasks/build');

gulp.task('build-js', build_js);
