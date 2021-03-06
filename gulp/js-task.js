module.exports = function (gulp, plugins, path) {
    return function () {
        gulp
            .src(path.jsFiles)
            .pipe(plugins.sourcemaps.init())
            .pipe(plugins.concat('scripts.min.js'))
            .pipe(plugins.uglify())
            .pipe(plugins.sourcemaps.write('.'))
            .pipe(gulp.dest(path.assetsDist));
    };
};