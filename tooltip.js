/*
 |--------------------------------------------------------------------------
 | Tooltip Settings
 |--------------------------------------------------------------------------
 |
 | https://github.com/720kb/angular-tooltips
 |
 |
 |
 */
app.config(['tooltipsConfigProvider', function(tooltipsConfigProvider) {
    tooltipsConfigProvider.options({
        lazy: false,
        scroll: true,
        size: 'small',
        speed: 'fast',
    });
}]);