/*
 |--------------------------------------------------------------------------
 | Angular Routing
 |--------------------------------------------------------------------------
 |
 | AngularJS Routing
 |
 |
 |
 */
app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

    // Using HTML5 Mode for clean URLs
    $locationProvider.html5Mode(true);

    // Routes
    $routeProvider

        // Homepage
        .when('/', {
            templateUrl : '/views/home.html',
            controller : 'TimelineController',
        })

        // 404 - Page not found
        .otherwise({
            templateUrl : '/views/404.html',
            controller : '',
        });

}]);