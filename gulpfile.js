var elixir = require('laravel-elixir');

/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Sass
 | file for our application, as well as publishing vendor resources.
 |
 */

var path = {
    'bower' : '/bower_components/',
    'npm'   : '/node_modules/',
    'js'    : 'resources/assets/js/',
    'sass'  : 'resources/assets/sass/',
    'views' : '/resources/views/',
    'public': '/public/',
};

elixir(function(mix){

    // Browser Sync
    mix.browserSync({
        proxy: 'localhost:7575'
    });

    // Sass
    mix.sass('app.scss');

    // Scripts
    mix.scripts([

        // General
        path.bower + 'moment/min/moment-with-locales.js',
        path.bower + 'moment-timezone/builds/moment-timezone-with-data.js',

        // Angular
        path.bower + 'angular/angular.js',
        path.bower + 'angular-animate/angular-animate.js',
        path.bower + 'angular-cache/dist/angular-cache.js',
        path.bower + 'angular-cookies/angular-cookies.js',
        path.bower + 'angular-moment/angular-moment.js',
        path.bower + 'angular-resource/angular-resource.js',
        path.bower + 'angular-route/angular-route.js',
        path.bower + 'angular-sanitize/angular-sanitize.js',
        path.bower + 'angular-translate/angular-translate.js',
        path.bower + 'angular-translate-storage-cookie/angular-translate-storage-cookie.js',
        path.bower + 'angular-translate-storage-local/angular-translate-storage-local.js',
        path.bower + 'angular-translate-handler-log/angular-translate-handler-log.js',
        path.bower + 'angulartics/src/angulartics.js',
        path.bower + 'angulartics-google-analytics/lib/angulartics-google-analytics.js',
        path.bower + 'angular-loading-bar/build/loading-bar.js',
        path.bower + 'angular-tooltips/dist/angular-tooltips.js',
        path.bower + 'ng-dialog/js/ngDialog.js',

        // Twitch Timeline
        path.js    + 'vendor/*.js',
        path.js    + 'vendor/google/*.js',
        path.js    + 'app.js',
        path.js    + 'run.js',
        path.js    + 'config/*.js',
        path.js    + 'services/*.js',
        path.js    + 'directives/*.js',
        path.js    + 'controllers/*.js',

    ],  path.public + 'js/scripts.js', './');

    // Fonts
    mix.copy(path.bower + 'font-awesome/fonts', path.public + 'fonts');

});