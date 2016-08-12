module.exports = function (gulp, plugins, path) {
    return function () {
        gulp.src(path.docslayoutFiles)
            .pipe(plugins.data(function () {
                return require('../docs/data.json')
            }))
            .pipe(plugins.nunjucksRender({
                path: path.docstemplateDir
            }))
            .pipe(gulp.dest('./app/docs'))
            .pipe(plugins.browserSync.stream());
    };
};