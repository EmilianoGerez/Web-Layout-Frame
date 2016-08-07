var gulp = require('gulp')
var browserSync = require('browser-sync').create()
var plugins = require('gulp-load-plugins')()
plugins.minifyCss = require('gulp-minify-css')
plugins.browserSync = browserSync
plugins.nunjucksRender = require('gulp-nunjucks-render')
plugins.sourcemaps = require('gulp-sourcemaps');

var path = require('./gulp/gulp-path')

function getTask(task) {
  return require('./gulp/' + task)(gulp, plugins, path)
}

gulp.task('js-lint', getTask('jslint-task'))
gulp.task('njk', getTask('njk-task'))
gulp.task('sass', getTask('sass-task'))
gulp.task('scripts', getTask('js-task'))
gulp.task('css-build', getTask('css-task'))
gulp.task('js-build', getTask('jsbuild-task'))

gulp.task('watch', function() {
  // gulp.watch([config.jsFiles], ['js-lint'])
  gulp.watch([path.layoutFiles, path.templateFiles], ['njk']);
  gulp.watch([path.sassFiles], ['sass']);
  gulp.watch([path.jsFiles], ['scripts']).on("change", browserSync.reload);
})

gulp.task('serve', ['njk', 'sass', 'js-lint', 'scripts', 'watch'], function() {
  browserSync.init({
    server: {
      baseDir: './app'
    }
  })
})

gulp.task('build', ['css-build', 'js-build'])

gulp.task('default', ['serve'])