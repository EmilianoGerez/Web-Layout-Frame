module.exports = function (gulp, plugins, path) {
    return function () {
        gulp
            .src(path.jsFiles)
            .pipe(plugins.sourcemaps.init())
            .pipe(plugins.concat('scripts.min.js'))
            .pipe(plugins.uglify())
            .pipe(gulp.dest(path.assetsDist))
            .pipe(plugins.sourcemaps.write('./maps'));
    };
};