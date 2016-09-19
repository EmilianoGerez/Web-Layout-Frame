module.exports = {
    layoutFiles: './src/*.html',
    templateDir: './src/templates',
    templateFiles: './src/templates/**/*.html',
    docslayoutFiles: './docs/*.html',
    docstemplateDir: './docs/templates',
    docstemplateFiles: './docs/templates/**/*.html',
    outputDir: './app',
    sassFiles: './src/assets/sass/**/*.scss',
    sassInput: './src/assets/sass/styles.scss',
    cssDir: './app/assets/css',
    assetsDist: './app/assets/js',
    jsFiles: './src/assets/js/**/*.js',
    cssBuild: [
        './app/assets/components/animate.css/animate.css',
        './app/assets/css/**/*.css'
    ],
    jsBuild: [
        './app/assets/components/jquery/dist/jquery.js',
        './app/assets/components/bootstrap-sass/assets/javascripts/bootstrap.js',
        './app/assets/js/**/*.js'
    ]
};
