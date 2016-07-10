module.exports = function (gulp, plugins, path) {
    return function () {
        gulp.src(path.layoutFiles)
            .pipe(plugins.data(function () {
                return require('../src/data.json')
            }))
            .pipe(plugins.nunjucksRender({
                path: path.templateDir
            }))
            .pipe(gulp.dest('./app'))
            .pipe(plugins.browserSync.stream());
    };
};