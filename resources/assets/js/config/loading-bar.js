/*
 |--------------------------------------------------------------------------
 | Loading Bar Settings
 |--------------------------------------------------------------------------
 |
 | Configurations https://github.com/chieffancypants/angular-loading-bar
 |
 |
 |
 */
app.config(['cfpLoadingBarProvider', function(cfpLoadingBarProvider) {
    cfpLoadingBarProvider.includeSpinner = false;
    cfpLoadingBarProvider.latencyThreshold = 500;
}]);