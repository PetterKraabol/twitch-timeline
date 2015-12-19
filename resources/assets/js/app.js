/*
|--------------------------------------------------------------------------
| Twitch Timeline Application
|--------------------------------------------------------------------------
|
| Twitch Timeline uses AngularJS to help the website become alive.
| It handles caching, templates, http requests and a ton
| of other fun stuff. More info: https://angularjs.org
|
*/
var app = angular.module('TwitchTimeline', [
    'ngAnimate',
    'ngResource',
    'ngCookies',
    'ngSanitize',
    'ngAnimate',
    'angularMoment',
    'angular-cache',
    'ngRoute',
    'angulartics',
    'angulartics.google.analytics',
    'pascalprecht.translate',
    'angular-loading-bar',
    //'720kb.tooltips',
    'ngDialog',
]);