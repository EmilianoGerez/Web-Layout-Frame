module.exports = {
    layoutFiles: './src/*.html',
    templateDir: './src/templates',
    templateFiles: './src/templates/**/*.html',
    outputDir: './app',
    sassFiles: './app/assets/sass/**.scss',
    sassInput: './app/assets/sass/styles.scss',
    cssDir: './app/assets/css',
    assetsDist: './app/assets/dist',
    jsFiles: './app/assets/js/**/*.js',
    cssBuild: [
        './app/assets/components/bootstrap/dist/css/bootstrap.css',
        './app/assets/components/animate.css/animate.css',
        './app/assets/css/**/*.css'
    ],
    jsBuild: [
        './app/assets/components/jquery/dist/jquery.js',
        './app/assets/components/bootstrap/dist/js/bootstrap.js',
        './app/assets/js/**/*.js'
    ]
};
