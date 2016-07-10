module.exports = function (gulp, plugins, path) {
    return function () {
        gulp
            .src(path.sassInput)
            .pipe(plugins.sourcemaps.init())
            .pipe(plugins.sass({outputStyle: 'compressed'})
                .on('error', plugins.sass.logError))
            .pipe(gulp.dest(path.cssDir))
            .pipe(plugins.browserSync.stream())
            .pipe(plugins.sourcemaps.write(path.cssDir));
    };
};