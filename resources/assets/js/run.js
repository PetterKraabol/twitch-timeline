/*
|--------------------------------------------------------------------------
| Twitch Timeline Run Callback
|--------------------------------------------------------------------------
|
| Whenever AngularJS is bootstrapped and runs, this callback
| will run. It's primarily used for global app settings.
|
*/
app.run(['$http', 'CacheFactory', function($http, CacheFactory) {

    /**
     * Angular Cache
     */
    $http.defaults.cache = CacheFactory('TwitchTimelineCache', {
        maxAge: 15 * 60 * 1000,                 // Items added to this cache expire after 15 minutes
        cacheFlushInterval: 60 * 60 * 1000,     // This cache will clear itself every hour
        deleteOnExpire: 'aggressive',           // Items will be deleted from this cache when they expire
        storageMode: 'localStorage',            // Using LocalStorage

        // Recache new values on cache expiration
        onExpire: function (key, value) {
            $http.get(key).success(function (data) {
                $http.defaults.cache.put(key, data);
            });
        }
    });

}]);