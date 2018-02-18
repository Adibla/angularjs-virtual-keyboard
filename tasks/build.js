const sourcemaps = require('gulp-sourcemaps');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const gulp = require('gulp');
const gutil = require('gulp-util');
const babel = require('gulp-babel');
const embedTemplates = require('gulp-angular-embed-templates');
const rename = require("gulp-rename");

const build_js = () => {
    gulp.src([
        'src/js/components/keyboard/keyboardManager.js',
        'src/js/components/keyboard/keyboard.directive.js'
    ])
    .pipe(sourcemaps.init())
    .pipe(babel({
        presets: ['env']
    }))
    .pipe(embedTemplates())
    .pipe(concat('bundle.js'))
    .pipe(uglify()) 
    .pipe(sourcemaps.write())
    .pipe(rename('angularjs-virtual-keyboard.js'))
    .pipe(gulp.dest('dist'));
}

module.exports = build_js;