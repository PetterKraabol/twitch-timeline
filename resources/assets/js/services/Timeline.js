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

    // Send a GET request
    function request(url, cached) {
        var d = $q.defer();
        $http.get(url, {
            cache: cached,
            headers: { 'Cache-Control' : cached ? 'cache' : 'no-cache' },
        }).

            then(function(response) {
                d.resolve(response.data);
            }, function(reponse){
                console.log('Error loading data from: ' + url);
                d.resolve(response);
            });

        return d.promise;
    }

    /**
     * Split video list into timeline layers.
     * 1. Remove and push first video object from list into sortedList[layer][index].
     * 2. Search list array for the video that starts right after the last video in sortedList ends.
     * 3. Move this video to sortedList, on the same layer, and remove from list array.
     * 4. Repeat from step 2 until no more videos are found.
     * 5. Move on to next layer and repeat from step 1.
     *
     * Visualized
     *
     * list[index] = name_to-from: (sorted by start time)
     * video1_13:00-14:00, video2_13:45-14:30, video3_14:10-15:00, video4_14:30-15:00
     *
     * sortedList[layer][index] = name_to-from:
     * [0] = video1_13:00-14:00, video3_14:10-15:00
     * [1] = video2_13:45-14:30, video4_14:30-15:00
     *
     * (Videos are actually objects, not strings)
     */
    function sort(list) {

        // Sorted list to be returned
        var sortedList = [];

        // Layer index
        var layer = 0;

        while (list.length > 0) {

            // Define two-dimensional array
            sortedList[layer] = [];

            // Move first video to sortedList
            sortedList[layer].push(list.splice(0, 1)[0]);

            // Construct layers by checking if last video in sortedList ends before selected video in list starts.
            for (var index = 0; index < list.length; index++) {

                if(sortedList[layer][sortedList[layer].length - 1].ended_at.getTime() <= list[index].recorded_at.getTime()) {

                    sortedList[layer].push(list.splice(index, 1)[0]);
                    index--;

                }
            }

            // Continue to next layer
            layer++;
        }


        return sortedList;
    }

    self.highlights = function(callback) {

        // Get config
        request('/api/config', false).then(function(config) {

            // Get highlights
            request('https://api.twitch.tv/kraken/videos/followed?oauth_token=' + config.oauth_token + '&limit=100', true).then(function(highlights) {

                // Sort videos by recorded_at
                highlights.videos.sort(function(a, b) {
                    return a.recorded_at.localeCompare(b.recorded_at);
                });

                // Manipulate object properties
                highlights.videos.forEach(function(video) {

                    // Convert recorded_at to date object
                    video.recorded_at = new Date(video.recorded_at);

                    // Add ended_at date
                    video.ended_at = new Date(video.recorded_at);
                    video.ended_at.setSeconds(video.ended_at.getSeconds() + video.length);

                    // Add seconds length (To avoid .length (minutes) from being confused with .length (array length))
                    video.seconds = video.length;
                });

                console.log('Raw list');
                console.table(highlights.videos, ['title', 'recorded_at', 'ended_at']);

                // Return sorted list
                return callback(sort(highlights.videos));
            });
        });

    };

    return self;

}]);