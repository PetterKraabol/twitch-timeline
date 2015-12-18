/*
|--------------------------------------------------------------------------
| ngDialog default settings
|--------------------------------------------------------------------------
|
| https://github.com/likeastore/ngDialog
|
|
*/
app.config(['ngDialogProvider', function(ngDialogProvider) {
    ngDialogProvider.setDefaults({
        className: 'popup-theme',
        plain: false,
        showClose: true,
        closeByDocument: true,
        closeByEscape: true,
    });
}]);