module.exports = function(gulp, plugins, path) {
  var autoprefixerOptions = {
    browsers: ['last 2 versions', '> 1%', 'Firefox ESR']
  };
  return function() {
    gulp
      .src(path.sassInput)
      .pipe(plugins.sourcemaps.init())
      .pipe(plugins.sass({
          outputStyle: 'compressed'
        })
        .on('error', plugins.sass.logError))
      .pipe(plugins.autoprefixer(autoprefixerOptions))
      .pipe(gulp.dest(path.cssDir))
      .pipe(plugins.browserSync.stream())
      .pipe(plugins.sourcemaps.write('.'));
  }
}