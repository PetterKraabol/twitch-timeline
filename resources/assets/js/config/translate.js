/*
 |--------------------------------------------------------------------------
 | Internationalization
 |--------------------------------------------------------------------------
 |
 | Angular Translate makes it easy to translate angular apps into
 | various languages. This application will support English by
 | default and may provide alternative language support.
 | Settings are found at the bottom of this file.
 |
 */
app.config(['$translateProvider', function($translateProvider) {

    // Settings
    $translateProvider.useSanitizeValueStrategy('escape');
    $translateProvider.preferredLanguage('en-US').fallbackLanguage('en-US');
    $translateProvider.useLocalStorage();
    $translateProvider.useMissingTranslationHandlerLog();

    // English - United States
    $translateProvider.translations('en-US', {

        // Footer
        'footer.broadcasts'     : 'Broadcasts',
        'footer.highlights'     : 'Highlights',

    });

}]);