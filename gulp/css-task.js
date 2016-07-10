module.exports = function (gulp, plugins, path) {
    return function () {
        gulp
            .src(path.cssBuild)
            //.pipe(plugins.autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9'))
            .pipe(plugins.concat('styles.min.css'))
            .pipe(plugins.minifyCss())
            .pipe(gulp.dest(path.assetsDist));
    };
};