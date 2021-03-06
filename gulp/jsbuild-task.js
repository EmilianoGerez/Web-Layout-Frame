module.exports = function (gulp, plugins, path) {
    return function () {
        gulp
            .src(path.jsBuild)
            .pipe(plugins.sourcemaps.init())
            .pipe(plugins.concat('js-bundle.min.js'))
            .pipe(plugins.uglify())
            .pipe(gulp.dest(path.assetsDist))
            .pipe(plugins.sourcemaps.write('./maps'));
    };
};