/*
|--------------------------------------------------------------------------
| Timeline Factory
|--------------------------------------------------------------------------
|
|
|
|
|
*/
app.factory('Timeline', ['$q', '$http', function($q, $http) {

    var self     = {};  // Returned object with functions

    function request(url, cache) {
        var d = $q.defer();
        $http.get(url, {
            cache: true,
        }).

            then(function(response) {
                d.resolve(response.data);
            }, function(reponse){
                console.log('Error loading data from: ' + url);
                d.resolve(response);
            });

        return d.promise;
    }

    self.highlights = function(callback) {

        request('https://api.twitch.tv/kraken/videos/followed?oauth_token=6aihp2olcu6jetyfxcw6mke5n7d04y').then(function(highlights) {
            return callback(highlights);
        })

    };

    return self;

}]);