module.exports = function (gulp, plugins, path) {
    return function () {
        gulp
            .src(path.jsFiles)
            .pipe(plugins.jshint())
            .pipe(plugins.jshint.reporter());
    };
};