var gulp = require('gulp');
var sourcemaps = require('gulp-sourcemaps');
var browserSync = require('browser-sync').create();
var nunjucksRender = require('gulp-nunjucks-render');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var rimraf = require('gulp-rimraf');
var jshint = require('gulp-jshint');
var data = require('gulp-data');

var config = require('./gulp.config');

gulp.task('nunjucks', function () {
    return gulp.src(config.layoutFiles)
        .pipe(data(function() {
            return require('./src/data.json')
        }))
        .pipe(nunjucksRender({
            path: ['./src/templates']
        }))
        .pipe(gulp.dest('./app'))
        .pipe(browserSync.stream());
});

gulp.task('js-lint', function () {
    return gulp
        .src(config.jsFiles)
        .pipe(jshint())
        .pipe(jshint.reporter());
});

gulp.task('sass', function () {
    return gulp
        .src(config.sassInput)
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(gulp.dest(config.outputCss))
        .pipe(browserSync.stream())
        .pipe(sourcemaps.write(config.outputCss));
});

gulp.task('watch', function () {
    gulp.watch([config.jsFiles], ['js-lint']);
    gulp.watch([config.layoutFiles, config.templateFiles], ['nunjucks']);
    gulp.watch([config.sassFiles], ['sass']);
});

gulp.task('serve', ['nunjucks', 'js-lint', 'sass', 'watch'], function () {

    browserSync.init({
        server: {
            baseDir: "./app"
        }
    });

});

gulp.task('default', ['serve']);
